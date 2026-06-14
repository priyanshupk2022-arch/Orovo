## 2024-06-14 - FastAPI Synchronous I/O Blocking
**Learning:** Using synchronous network I/O clients (like `Groq()`) inside FastAPI routes blocks worker threads and can exhaust the thread pool, leading to significant performance degradation under load.
**Action:** Always prefer asynchronous clients (like `AsyncGroq()`) combined with `async def` endpoint definitions when building FastAPI endpoints that perform network I/O.
