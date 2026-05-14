from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import os
from groq import Groq

app = FastAPI(title="Orovo AI Swarm")

# Make sure GROQ_API_KEY is set in environment variables
client = Groq()

class ScanRequest(BaseModel):
    ip: str
    payload: str

@app.post("/scan")
async def scan_payload(request: ScanRequest):
    prompt = f"Analyze this payload. Is it an injection or malicious intent? Reply ONLY with TRUE or FALSE.\nPayload: {request.payload}"

    try:
        completion = client.chat.completions.create(
            model="llama3-8b-8192", # Using Llama-3 model as requested
            messages=[
                {"role": "user", "content": prompt}
            ],
            temperature=0.1,
            max_tokens=10,
        )

        result = completion.choices[0].message.content.strip().upper()

        if "TRUE" in result:
            raise HTTPException(status_code=403, detail="Malicious payload detected")
        else:
            return {"status": "ok", "message": "Payload is clean"}

    except Exception as e:
        if isinstance(e, HTTPException):
            raise e
        # Log error in real production, returning 500 here
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
