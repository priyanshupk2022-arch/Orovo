
## 2024-06-16 - Prevent FastAPI thread exhaustion with Async clients
**Learning:** Using synchronous network I/O clients (like `Groq()`) inside FastAPI routes blocks the worker threads, potentially exhausting the thread pool under load.
**Action:** Always prefer asynchronous clients (e.g., `AsyncGroq()`) combined with `async def` endpoint definitions when building FastAPI endpoints that perform network requests.
