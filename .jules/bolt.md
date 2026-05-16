## 2024-05-24 - Rate Limit Optimization
**Learning:** Using list comprehension for sliding window rate limits creates a new list object on every request, causing unnecessary garbage collection overhead in high-throughput middleware.
**Action:** Use `collections.deque` to allow O(1) removals from the left side of the window without reallocating arrays.
