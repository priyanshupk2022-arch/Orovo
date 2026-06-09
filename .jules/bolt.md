## 2024-06-09 - Async FastAPI Routes
**Learning:** When building FastAPI endpoints, avoid using synchronous network I/O clients (like Groq()) inside routes as they block worker threads.
**Action:** Prefer AsyncGroq() combined with async def endpoint definitions to improve concurrency.