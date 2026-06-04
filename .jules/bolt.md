## YYYY-MM-DD - Async FastAPI Endpoints
**Learning:** Using synchronous clients (like `Groq`) inside FastAPI endpoints blocks worker threads, potentially exhausting the thread pool and degrading concurrency.
**Action:** Always prefer asynchronous clients (like `AsyncGroq`) combined with `async def` endpoint definitions when building FastAPI endpoints that perform network I/O.
