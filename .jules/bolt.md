## 2024-06-24 - Async Groq Client
**Learning:** Using the synchronous Groq client (`Groq()`) inside FastAPI endpoints blocks worker threads and can exhaust the thread pool under heavy load.
**Action:** Always prefer asynchronous clients (`AsyncGroq()`) combined with `async def` endpoint definitions when building FastAPI endpoints that perform network I/O.
