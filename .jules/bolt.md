## 2026-06-07 - FastAPI Sync Thread Pool Exhaustion
**Learning:** Using a synchronous network client (`Groq()`) inside a FastAPI endpoint blocks worker threads, leading to thread pool exhaustion under heavy load. The codebase previously suffered from this pattern in `backend/main.py`.
**Action:** Always verify network I/O bounds in FastAPI endpoints and migrate to `async` (e.g., `AsyncGroq()`) where available to allow the event loop to yield.
