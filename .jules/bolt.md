## 2026-05-31 - Rate Limiting Middleware Optimization
**Learning:** The root-level FastAPI app.py security middleware was using O(N) list comprehensions to filter timestamps on *every single request* before this change. This is a severe anti-pattern in high-throughput middleware as it forces constant list reallocation and garbage collection pressure.
**Action:** Replaced with O(1) amortized `collections.deque` operations. Always check middleware for O(N) operations on collections that could scale linearly with throughput.
