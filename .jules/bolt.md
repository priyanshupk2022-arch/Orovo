## 2024-07-07 - Synchronous Network I/O in FastAPI async routes blocks event loop
**Learning:** Using synchronous clients (like `stripe.checkout.Session.create` or `Groq()`) inside `async def` endpoints in FastAPI blocks the main thread, negating the benefits of asynchronous handling and leading to poor performance/exhausted thread pools.
**Action:** Always prefer asynchronous clients (like `stripe.checkout.Session.create_async` or `AsyncGroq()`) combined with `async def` endpoint definitions to prevent blocking the event loop.
## 2024-07-28 - Fast sliding window rate limiting
**Learning:** Using a list comprehension `[ts for ts in data if now - ts < 10]` for a high-frequency sliding window is an O(N) operation that creates excessive garbage collection overhead.
**Action:** Use `collections.deque` and a `while` loop that pops from the left (`popleft()`) for O(1) removals of expired items in sliding window rate limiters.
