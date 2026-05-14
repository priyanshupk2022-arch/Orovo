## 2024-05-14 - Replace List Comprehension with Deque for Rate Limiting Sliding Window
**Learning:** For continuous timestamp sliding windows, list comprehensions recreate the entire list on every iteration. This forces an O(N) cost on every request (even valid ones), while `collections.deque` and popping from the left allows amortized O(1) removals.
**Action:** Always prefer `deque` for sliding window rate limiters or sliding time metrics tracking in Python to avoid memory allocation churn and linear scanning overheads.
