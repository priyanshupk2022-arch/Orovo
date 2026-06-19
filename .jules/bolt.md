## 2024-05-18 - Replacing synchronous network requests with AsyncGroq in FastAPI routes
**Learning:** Using synchronous network I/O clients (like `Groq()`) inside FastAPI routes blocks the worker thread and exhausts the thread pool under load, creating a severe performance bottleneck.
**Action:** When building FastAPI endpoints that call external APIs, strictly prefer asynchronous clients (like `AsyncGroq()`) combined with `async def` endpoint definitions and `await` to prevent blocking the ASGI event loop and to ensure high throughput.
