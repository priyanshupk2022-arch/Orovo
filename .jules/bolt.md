## 2024-05-24 - AsyncGroq Optimization in FastAPI
**Learning:** Using synchronous network I/O clients (like `Groq()`) inside FastAPI routes is an anti-pattern because it blocks worker threads and can quickly exhaust the thread pool, leading to significant performance degradation and request timeouts under load.
**Action:** Always prefer asynchronous clients (like `AsyncGroq()`) combined with `async def` endpoint definitions when building FastAPI endpoints that require external API calls or database operations.
