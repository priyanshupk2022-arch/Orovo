import time
from collections import deque
import timeit

def using_list(n_requests):
    rate_limit_data = {'ip': []}
    for _ in range(n_requests):
        now = time.time()
        rate_limit_data['ip'] = [ts for ts in rate_limit_data['ip'] if now - ts < 10]
        if len(rate_limit_data['ip']) < 10:
            rate_limit_data['ip'].append(now)

def using_deque(n_requests):
    rate_limit_data = {'ip': deque()}
    for _ in range(n_requests):
        now = time.time()
        dq = rate_limit_data['ip']
        while dq and now - dq[0] >= 10:
            dq.popleft()
        if len(dq) < 10:
            dq.append(now)

n = 100000
t_list = timeit.timeit(lambda: using_list(n), number=10)
t_deque = timeit.timeit(lambda: using_deque(n), number=10)

print(f"List: {t_list:.4f}s")
print(f"Deque: {t_deque:.4f}s")
print(f"Speedup: {t_list/t_deque:.2f}x")
