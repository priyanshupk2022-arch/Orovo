## 2024-07-07 - Synchronous Network I/O in FastAPI async routes blocks event loop
**Learning:** Using synchronous clients (like `stripe.checkout.Session.create` or `Groq()`) inside `async def` endpoints in FastAPI blocks the main thread, negating the benefits of asynchronous handling and leading to poor performance/exhausted thread pools.
**Action:** Always prefer asynchronous clients (like `stripe.checkout.Session.create_async` or `AsyncGroq()`) combined with `async def` endpoint definitions to prevent blocking the event loop.
## 2025-01-14 - Optimized High-Frequency Sliding Window Rate Limiting
**Learning:** Using a list comprehension to filter out expired timestamps in a sliding window rate limiter results in O(N) memory reallocations on every request. In a high-throughput middleware, this constant array reconstruction creates unnecessary overhead and GC pressure.
**Action:** Replace lists with `collections.deque` for sliding window queues. This changes the expensive O(N) list comprehension into an efficient `while deque and now - deque[0] >= window: deque.popleft()` operation, ensuring O(1) removals from the left side and O(1) appends.
