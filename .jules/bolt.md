## 2024-05-27 - Fast Sliding Window Rate Limiting
**Learning:** For sliding-window rate limiters that drop old timestamps, a list comprehension filter re-creates the list in O(N) time on every request. `collections.deque` allows for efficient O(1) removals via `popleft()`.
**Action:** Always prefer `deque` for time-series memory structures where elements are dropped from the beginning.
