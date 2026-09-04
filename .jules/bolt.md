## 2024-07-07 - Synchronous Network I/O in FastAPI async routes blocks event loop
**Learning:** Using synchronous clients (like `stripe.checkout.Session.create` or `Groq()`) inside `async def` endpoints in FastAPI blocks the main thread, negating the benefits of asynchronous handling and leading to poor performance/exhausted thread pools.
**Action:** Always prefer asynchronous clients (like `stripe.checkout.Session.create_async` or `AsyncGroq()`) combined with `async def` endpoint definitions to prevent blocking the event loop.
## 2024-09-04 - O(1) Sliding-Window Rate Limiter
**Learning:** Using list comprehensions (`[ts for ts in data if now - ts < 10]`) for a sliding-window rate limiter results in O(N) time complexity and unnecessary memory allocations. A `collections.deque` allows removing expired timestamps from the left side in amortized O(1) time using `popleft()`.
**Action:** Use `collections.deque` with a `while` loop to efficiently evict old entries in sliding-window algorithms.
