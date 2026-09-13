## 2024-07-07 - Synchronous Network I/O in FastAPI async routes blocks event loop
**Learning:** Using synchronous clients (like `stripe.checkout.Session.create` or `Groq()`) inside `async def` endpoints in FastAPI blocks the main thread, negating the benefits of asynchronous handling and leading to poor performance/exhausted thread pools.
**Action:** Always prefer asynchronous clients (like `stripe.checkout.Session.create_async` or `AsyncGroq()`) combined with `async def` endpoint definitions to prevent blocking the event loop.

## 2024-08-01 - O(N) List Comprehension in Sliding Window Rate Limiting
**Learning:** Using an O(N) list comprehension (e.g., `[ts for ts in queue if now - ts < 10]`) to filter a sliding window in high-frequency middleware is a performance anti-pattern. It creates new lists on every request, increasing garbage collection overhead and time complexity.
**Action:** Prefer amortized O(1) data structures like `collections.deque()` with a `while queue and ...: queue.popleft()` loop to efficiently remove expired timestamps.
