## 2024-05-20 - [FastAPI Synchronous I/O Block]
**Learning:** Using synchronous network clients (like `Groq()`) inside FastAPI routes blocks the worker threads, exhausting the thread pool and degrading concurrency.
**Action:** Always prefer asynchronous clients (like `AsyncGroq()`) combined with `async def` endpoint definitions when making network calls in FastAPI.
