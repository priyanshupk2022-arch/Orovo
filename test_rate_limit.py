import time
import asyncio
from fastapi import Request
from starlette.datastructures import Headers, MutableHeaders
from starlette.types import Scope, Receive, Send
from app import security_middleware

async def test_rate_limit():
    # Mocking request scope
    scope: Scope = {
        "type": "http",
        "method": "GET",
        "headers": [],
        "client": ("127.0.0.1", 1234),
    }

    async def receive() -> Receive:
        return {"type": "http.request", "body": b""}

    request = Request(scope, receive)

    async def call_next(req: Request):
        from fastapi.responses import JSONResponse
        return JSONResponse(status_code=200, content={"status": "ok"})

    successes = 0
    failures = 0

    for i in range(15):
        response = await security_middleware(request, call_next)
        if response.status_code == 200:
            successes += 1
        elif response.status_code == 429:
            failures += 1

    print(f"Successes: {successes}, Failures: {failures}")
    assert successes == 10
    assert failures == 5
    print("Rate limit test passed!")

if __name__ == "__main__":
    asyncio.run(test_rate_limit())
