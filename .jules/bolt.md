## 2024-05-24 - Fast API Synchronous Network I/O
**Learning:** Using synchronous network I/O clients (like `Groq()`) inside FastAPI routes blocks worker threads and can quickly exhaust the thread pool, leading to poor concurrency and performance under load.
**Action:** Always prefer asynchronous clients (like `AsyncGroq()`) combined with `async def` endpoint definitions when building FastAPI endpoints to ensure non-blocking I/O operations.
