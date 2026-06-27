## 2024-05-14 - Prevent FastAPI Event Loop Blocking
**Learning:** Found a critical performance bottleneck in `app.py` where a synchronous network call (`stripe.checkout.Session.create`) was used inside an `async def` FastAPI route (`/checkout`). This blocks the main event loop, preventing the server from handling other requests concurrently.
**Action:** Always prefer asynchronous network I/O clients and methods (e.g., `await stripe.checkout.Session.create_async`) when building FastAPI endpoints using `async def`.
