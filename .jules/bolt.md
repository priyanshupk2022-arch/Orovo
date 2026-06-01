## 2026-06-01 - FastAPI Synchronous Blocking
**Learning:** In FastAPI, using synchronous blocking calls (like a synchronous Groq client) can block the thread pool, leading to performance bottlenecks under load.
**Action:** Use asynchronous clients (like AsyncGroq) and async def for endpoints that perform I/O operations (e.g., external API calls) to ensure the server remains responsive.
