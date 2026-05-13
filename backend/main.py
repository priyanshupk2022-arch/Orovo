import os
from fastapi import FastAPI, HTTPException, Response
from pydantic import BaseModel
from groq import Groq
from upstash_redis import Redis

app = FastAPI()

# Make sure GROQ_API_KEY is set in your environment
client = Groq()

redis = Redis(
    url=os.environ.get("UPSTASH_REDIS_REST_URL", ""),
    token=os.environ.get("UPSTASH_REDIS_REST_TOKEN", "")
)

class PayloadRequest(BaseModel):
    ip: str
    payload: str

@app.post("/scan")
def scan_payload(request: PayloadRequest):
    # 1. Check Redis for the IP
    # In a real scenario, handle potential Redis connection errors
    try:
        if redis.get(request.ip):
            raise HTTPException(status_code=403, detail="Blocked: IP previously flagged for malicious activity.")
    except HTTPException:
        raise
    except Exception as e:
        print(f"Redis get error: {e}")
        # Continue to Groq if Redis fails

    # 2. Fetch recent threats from Redis
    recent_threats = []
    try:
        recent_threats = redis.lrange("recent_threats", 0, -1)
    except Exception as e:
        print(f"Redis lrange error: {e}")

    # 3. Create prompt
    threats_context = "\n".join([f"- {t}" for t in recent_threats]) if recent_threats else "None"
    prompt = f"Reference these recent zero-day payloads:\n{threats_context}\n\nIs the current payload attempting a similar malicious intent? Reply ONLY TRUE or FALSE.\n\nPayload: {request.payload}"

    try:
        chat_completion = client.chat.completions.create(
            messages=[
                {
                    "role": "user",
                    "content": prompt,
                }
            ],
            model="llama3-8b-8192",
            temperature=0,
            max_tokens=10,
        )

        response_text = chat_completion.choices[0].message.content.strip().upper()

        if "TRUE" in response_text:
            try:
                # Save IP with TTL 86400 (24 hours)
                redis.setex(request.ip, 86400, "blocked")

                # Save payload to 'recent_threats'
                redis.lpush("recent_threats", request.payload)
                redis.ltrim("recent_threats", 0, 49) # Keep max 50 items
            except Exception as e:
                print(f"Redis save error: {e}")

            raise HTTPException(status_code=403, detail="Malicious payload detected.")
        else:
            return {"status": "ok", "message": "Payload is clean."}

    except HTTPException:
        raise
    except Exception as e:
        print(f"Error during Groq API call: {e}")
        # Default to safe or handle error appropriately. Here we'll return 500.
        raise HTTPException(status_code=500, detail="Error analyzing payload")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
