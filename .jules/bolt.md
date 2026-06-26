## 2024-05-14 - Middleware Memory Bottleneck
**Learning:** Reading the entire request body into memory `await request.body()` within middleware for large payloads can become a memory bottleneck. FastAPI provides an underlying ASGI `receive` function that streams chunks.
**Action:** When inspecting request bodies in ASGI middleware (like for security scanning or prompt guards), stream the chunks using `request.receive()` (or `request._receive()` in some cases) to process only the necessary bytes (e.g., first 4KB) and push them onto a queue or mock the receive method so the downstream consumer can read them efficiently without buffering the whole body.
## 2024-05-14 - FastAPI Sync vs Async Calls
**Learning:** Using synchronous network clients (like ) inside a FastAPI  route blocks the underlying event loop, starving concurrency under load.
**Action:** Always prefer asynchronous SDK methods (like ) when inside async routes to ensure high performance and non-blocking I/O operations.
## 2024-05-14 - FastAPI Sync vs Async Calls
**Learning:** Using synchronous network clients (like stripe.checkout.Session.create) inside a FastAPI async def route blocks the underlying event loop, starving concurrency under load.
**Action:** Always prefer asynchronous SDK methods (like create_async) when inside async routes to ensure high performance and non-blocking I/O operations.
