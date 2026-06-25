import asyncio
from httpx import AsyncClient, ASGITransport
from backend.main import app

async def test_scan():
    async with AsyncClient(transport=ASGITransport(app=app), base_url="http://test") as ac:
        response = await ac.post("/scan", json={"ip": "127.0.0.1", "payload": "hello world"})
        print("Response status:", response.status_code)
        print("Response body:", response.json())

if __name__ == "__main__":
    asyncio.run(test_scan())
