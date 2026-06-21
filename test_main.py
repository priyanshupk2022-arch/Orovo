import asyncio
from httpx import AsyncClient
from backend.main import app

async def main():
    async with AsyncClient(app=app, base_url="http://test") as ac:
        response = await ac.post("/scan", json={"ip": "127.0.0.1", "payload": "test"})
        print(response.status_code, response.json())

if __name__ == "__main__":
    asyncio.run(main())
