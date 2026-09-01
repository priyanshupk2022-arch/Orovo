## 2024-07-07 - Synchronous Network I/O in FastAPI async routes blocks event loop
**Learning:** Using synchronous clients (like `stripe.checkout.Session.create` or `Groq()`) inside `async def` endpoints in FastAPI blocks the main thread, negating the benefits of asynchronous handling and leading to poor performance/exhausted thread pools.
**Action:** Always prefer asynchronous clients (like `stripe.checkout.Session.create_async` or `AsyncGroq()`) combined with `async def` endpoint definitions to prevent blocking the event loop.
## 2025-02-17 - Amortized O(1) Sliding Window Rate Limiting
**Learning:** Sliding window rate limiters often naively rebuild arrays via list comprehensions on every request (e.g., `[ts for ts in arr if now - ts < threshold]`). Since timestamps strictly increase, this is an O(N) operation and allocates unnecessary memory.
**Action:** Use a `collections.deque` instead. Because items are appended in order, you can simply use a `while` loop to `popleft()` outdated items. This transforms the cleanup into an amortized O(1) operation and avoids intermediate array allocations.
