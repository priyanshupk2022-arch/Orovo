## 2026-05-25 - Sliding Window Rate Limit Optimization
**Learning:** Using list comprehensions for sliding window rate limiters in FastAPI middleware allocates new list objects on every request, increasing garbage collection pressure.
**Action:** Use collections.deque to remove old timestamps in O(1) time and avoid continuous memory allocation.
