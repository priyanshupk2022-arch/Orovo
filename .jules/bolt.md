## 2024-06-11 - FastAPI Synchronous I/O Blocking
**Learning:** Using synchronous clients (like `Groq()`) within a FastAPI route blocks the underlying worker thread pool. During network I/O operations (like LLM API calls), this prevents the server from handling other incoming requests, drastically reducing concurrency.
**Action:** Always prefer asynchronous clients (like `AsyncGroq()`) combined with `async def` endpoint definitions when making network calls in FastAPI or other asynchronous frameworks to avoid starving the thread pool.
