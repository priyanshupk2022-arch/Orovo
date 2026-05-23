## 2026-05-23 - Fast Sliding Window Rate Limiting
**Learning:** Using list comprehensions to filter out expired timestamps in a sliding window rate limiter creates a new list every request, causing O(N) allocation and copying. This is a common performance bottleneck in middleware.
**Action:** Use `collections.deque` instead, which allows O(1) removals from both ends (`popleft()`), preventing unnecessary allocations and speeding up high-traffic endpoints.
