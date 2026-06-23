## 2024-11-20 - Fast API Concurrency Issue
**Learning:** Using synchronous network I/O clients (like `Groq()`) inside FastAPI routes blocks the worker threads, which can quickly exhaust the thread pool under load.
**Action:** Always prefer asynchronous clients (like `AsyncGroq()`) and `async def` endpoints when building FastAPI applications.
