## 2024-06-06 - FastAPI Sync Client Blocking
**Learning:** Using synchronous network I/O clients (like `Groq()`) inside FastAPI routes blocks worker threads and can exhaust the thread pool, creating a significant performance bottleneck.
**Action:** Always prefer asynchronous clients (like `AsyncGroq()`) combined with `async def` endpoint definitions when building FastAPI endpoints that make external network calls.
