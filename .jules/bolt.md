## 2024-06-03 - FastAPI Synchronous Network Calls
**Learning:** Using a synchronous network client (like the default Groq client) in a FastAPI route (`def`) blocks the underlying worker thread for the duration of the network request. Under load, this exhausts the thread pool, drastically degrading performance and causing timeouts, even if the application is otherwise "async".
**Action:** Always prefer asynchronous clients (like `AsyncGroq`) within async functions in FastAPI to prevent blocking the event loop and thread pool.
