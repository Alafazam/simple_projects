import time
def s():
  time.sleep(2.5)

t1 = time.clock()
t11 = time.time()
s()
t2 = time.clock()
t22 = time.time()
print t2-t1
print t22-t11
