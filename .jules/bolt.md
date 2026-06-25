## 2024-06-25 - [FastAPI Synchronous Clients Block Worker Threads]
**Learning:** Using synchronous network I/O clients (like `Groq()`) inside `async def` FastAPI routes or regular `def` routes handling many requests blocks the worker threads, potentially exhausting the thread pool under load and significantly hurting throughput.
**Action:** Always prefer asynchronous clients (e.g., `AsyncGroq()`) when making API calls within FastAPI to ensure non-blocking concurrent request handling.
