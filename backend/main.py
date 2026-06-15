import os
from fastapi import FastAPI, HTTPException, Response
from pydantic import BaseModel
from groq import AsyncGroq

app = FastAPI()

# ⚡ Bolt optimization: Use AsyncGroq to prevent blocking the main FastAPI thread
# Synchronous clients (like Groq()) block worker threads and exhaust the thread pool
# Make sure GROQ_API_KEY is set in your environment
client = AsyncGroq()

class PayloadRequest(BaseModel):
    ip: str
    payload: str

@app.post("/scan")
async def scan_payload(request: PayloadRequest):
    prompt = f"Analyze this payload. Is it an injection or malicious intent? Reply ONLY with TRUE or FALSE.\n\nPayload: {request.payload}"

    try:
        # ⚡ Bolt optimization: await the async call to allow processing of other requests concurrently
        chat_completion = await client.chat.completions.create(
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
            raise HTTPException(status_code=403, detail="Malicious payload detected.")
        else:
            return {"status": "ok", "message": "Payload is clean."}

    except Exception as e:
        print(f"Error during Groq API call: {e}")
        # Default to safe or handle error appropriately. Here we'll return 500.
        raise HTTPException(status_code=500, detail="Error analyzing payload")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
