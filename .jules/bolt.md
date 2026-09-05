## 2024-07-07 - Synchronous Network I/O in FastAPI async routes blocks event loop
**Learning:** Using synchronous clients (like `stripe.checkout.Session.create` or `Groq()`) inside `async def` endpoints in FastAPI blocks the main thread, negating the benefits of asynchronous handling and leading to poor performance/exhausted thread pools.
**Action:** Always prefer asynchronous clients (like `stripe.checkout.Session.create_async` or `AsyncGroq()`) combined with `async def` endpoint definitions to prevent blocking the event loop.

## 2026-09-05 - O(N) list comprehension in high-frequency rate-limiting middleware
**Learning:** Using a list comprehension to filter out expired timestamps (e.g., `[ts for ts in data if now - ts < 10]`) in a high-frequency middleware creates a new list on every request, resulting in O(N) time complexity and unnecessary memory allocations/garbage collection pressure.
**Action:** Use `collections.deque` for timestamp storage. It allows removing expired timestamps from the beginning of the queue with `.popleft()` in amortized O(1) time.
