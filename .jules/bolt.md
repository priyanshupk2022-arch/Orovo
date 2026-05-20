## 2023-11-16 - O(1) Sliding Window Rate Limiting
**Learning:** The sliding window rate limit implementation in FastAPI middleware originally used an O(N) list comprehension (`[ts for ts in lst if now - ts < 10]`) which reconstructs the list of timestamps on *every single request*. In a high-traffic security middleware, this creates significant garbage collection overhead and latency.
**Action:** Always prefer `collections.deque` for sliding windows since chronological data inherently allows O(1) removal of old records from the front using `.popleft()`.
