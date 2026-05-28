## 2024-05-28 - Optimizing Rate Limiter Array Filtering
**Learning:** The rate limiter in `app.py` used list comprehension to filter old timestamps for every request (`[ts for ts in arr if now - ts < 10]`). For high-traffic middleware, this O(n) operation with memory reallocation on every request can be a performance bottleneck.
**Action:** Replaced the list array with `collections.deque` to pop outdated timestamps from the left in O(1) time without creating a new list. This pattern should be applied for any sliding-window rate limiters.
