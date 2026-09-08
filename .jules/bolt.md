## 2024-07-07 - Synchronous Network I/O in FastAPI async routes blocks event loop
**Learning:** Using synchronous clients (like `stripe.checkout.Session.create` or `Groq()`) inside `async def` endpoints in FastAPI blocks the main thread, negating the benefits of asynchronous handling and leading to poor performance/exhausted thread pools.
**Action:** Always prefer asynchronous clients (like `stripe.checkout.Session.create_async` or `AsyncGroq()`) combined with `async def` endpoint definitions to prevent blocking the event loop.

## 2024-07-07 - O(N) List Comprehensions in High-Frequency Middleware
**Learning:** Using list comprehensions to filter items (like sliding windows for rate limiters) results in O(N) time complexity and heavy garbage collection overhead on every request. This is particularly problematic in high-frequency paths like middleware.
**Action:** Replace O(N) list operations with O(1) structures like `collections.deque` and use `.popleft()` to discard expired items, vastly improving performance under load.
