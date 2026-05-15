## 2024-05-15 - FastAPI Rate Limiting Optimization
**Learning:** Using list comprehensions inside high-traffic middleware hooks for time-window operations (like `rate_limit_data[ip] = [ts for ts in ... if now - ts < X]`) creates a new list in memory on every request. In a sliding-window rate limit, this causes $O(N)$ operations where $N$ is the limit threshold or current list size.
**Action:** Use `collections.deque` with a `while` loop that pops elements from the left using `popleft()` instead. This achieves $O(1)$ removal of old timestamps without generating new intermediate lists.
