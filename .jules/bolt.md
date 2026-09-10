## 2024-07-07 - Synchronous Network I/O in FastAPI async routes blocks event loop
**Learning:** Using synchronous clients (like `stripe.checkout.Session.create` or `Groq()`) inside `async def` endpoints in FastAPI blocks the main thread, negating the benefits of asynchronous handling and leading to poor performance/exhausted thread pools.
**Action:** Always prefer asynchronous clients (like `stripe.checkout.Session.create_async` or `AsyncGroq()`) combined with `async def` endpoint definitions to prevent blocking the event loop.

## 2024-07-07 - O(N) list comprehension in sliding-window rate limit
**Learning:** Using an O(N) list comprehension to filter items (like timestamps) in a high-frequency middleware is a performance anti-pattern. It increases time complexity and garbage collection overhead.
**Action:** Always prefer O(1) structures like `collections.deque` and `.popleft()` to efficiently remove expired timestamps from sliding windows in amortized O(1) time.
