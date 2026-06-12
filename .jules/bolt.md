## 2024-06-12 - FastAPI Thread Pool Exhaustion Risk
**Learning:** Using synchronous I/O clients (like `Groq()`) inside FastAPI routes blocks worker threads. If many requests come in concurrently, this can exhaust the server's thread pool and degrade performance severely.
**Action:** Always prefer asynchronous I/O clients (e.g., `AsyncGroq()`) combined with `async def` for FastAPI endpoints to prevent blocking the main thread and allow high concurrency.
