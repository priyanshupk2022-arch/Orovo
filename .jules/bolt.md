## 2024-06-10 - Synchronous Network I/O in FastAPI
**Learning:** Using synchronous network I/O clients (like `Groq()`) inside FastAPI routes blocks worker threads and can exhaust the thread pool, leading to poor performance and application hangs under load.
**Action:** Always prefer asynchronous clients (like `AsyncGroq()`) combined with `async def` endpoint definitions when building FastAPI endpoints that make external network requests.
