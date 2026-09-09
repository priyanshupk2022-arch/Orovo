## 2024-07-07 - Synchronous Network I/O in FastAPI async routes blocks event loop
**Learning:** Using synchronous clients (like `stripe.checkout.Session.create` or `Groq()`) inside `async def` endpoints in FastAPI blocks the main thread, negating the benefits of asynchronous handling and leading to poor performance/exhausted thread pools.
**Action:** Always prefer asynchronous clients (like `stripe.checkout.Session.create_async` or `AsyncGroq()`) combined with `async def` endpoint definitions to prevent blocking the event loop.

## 2024-09-09 - O(N) list comprehensions in high-frequency middleware
**Learning:** Using O(N) list comprehensions to filter items (e.g., for sliding windows in rate limiters) on every request generates significant garbage collection overhead and high time complexity.
**Action:** Prefer O(1) structures like `collections.deque` and `.popleft()` to reduce time complexity and overhead in such scenarios.
