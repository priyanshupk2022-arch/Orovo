## 2024-06-08 - FastAPI Blocking Async Event Loop
**Learning:** Using synchronous network I/O clients (like `Groq()`) inside FastAPI endpoints blocks the main event loop and worker threads, drastically reducing concurrency.
**Action:** Always prefer asynchronous clients (like `AsyncGroq()`) and use `async def` for network-bound FastAPI routes.
