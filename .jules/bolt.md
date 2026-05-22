## 2026-05-22 - Rate Limiter Window Optimization
**Learning:** The sliding window rate limit array operations O(N) list comprehension inside middleware can cause significant per-request CPU and memory overhead during high traffic.
**Action:** Replaced O(N) list filter with O(1) `collections.deque` `popleft()` in  for more performant requests.
## 2026-05-22 - Rate Limiter Window Optimization
**Learning:** The sliding window rate limit array operations O(N) list comprehension inside middleware can cause significant per-request CPU and memory overhead during high traffic.
**Action:** Replaced O(N) list filter with O(1) collections.deque popleft() in app.py for more performant requests.
