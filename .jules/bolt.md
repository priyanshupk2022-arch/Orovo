## 2024-06-13 - [FastAPI] Asynchronous I/O to Prevent Thread Pool Exhaustion
**Learning:** Using synchronous network I/O clients (like `Groq()`) inside FastAPI routes blocks worker threads. Under high load, this can quickly exhaust the thread pool and reduce application throughput.
**Action:** Always prefer asynchronous clients (like `AsyncGroq()`) combined with `async def` endpoint definitions when building FastAPI endpoints to ensure non-blocking I/O operations.
