## 2024-07-07 - Synchronous Network I/O in FastAPI async routes blocks event loop
**Learning:** Using synchronous clients (like `stripe.checkout.Session.create` or `Groq()`) inside `async def` endpoints in FastAPI blocks the main thread, negating the benefits of asynchronous handling and leading to poor performance/exhausted thread pools.
**Action:** Always prefer asynchronous clients (like `stripe.checkout.Session.create_async` or `AsyncGroq()`) combined with `async def` endpoint definitions to prevent blocking the event loop.

## 2024-09-07 - O(N) list comprehensions in high-frequency middleware
**Learning:** Using an O(N) list comprehension `[ts for ts in lst if now - ts < 10]` to maintain a sliding window of timestamps in a high-frequency middleware creates unnecessary overhead and garbage collection.
**Action:** Avoid using O(N) list comprehensions to filter items (e.g., sliding windows) in high-frequency middleware. Prefer O(1) structures like `collections.deque` and `.popleft()` to reduce time complexity and garbage collection overhead.
