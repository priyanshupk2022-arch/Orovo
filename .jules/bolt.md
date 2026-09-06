## 2024-07-07 - Synchronous Network I/O in FastAPI async routes blocks event loop
**Learning:** Using synchronous clients (like `stripe.checkout.Session.create` or `Groq()`) inside `async def` endpoints in FastAPI blocks the main thread, negating the benefits of asynchronous handling and leading to poor performance/exhausted thread pools.
**Action:** Always prefer asynchronous clients (like `stripe.checkout.Session.create_async` or `AsyncGroq()`) combined with `async def` endpoint definitions to prevent blocking the event loop.

## 2024-09-06 - Amortized O(1) structures over O(N) comprehensions for high-frequency loops
**Learning:** Using an O(N) list comprehension inside high-frequency middleware (like sliding-window rate limiters) creates significant performance bottlenecks and GC overhead.
**Action:** Prefer O(1) data structures like `collections.deque` and amortized O(1) approaches (like popping expired elements from the front of the deque) when dealing with sliding windows or continuously updating queues.
