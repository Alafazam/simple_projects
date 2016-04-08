import calendar
import time


year_2016 = calendar.calendar(2016,c=10)
with open('calendar of 2016', 'wb') as f:
	f.write(year_2016)


april_2016 = calendar.month(2016,4,w=2,l=1)
with open('calendar of Arpil 2016', 'wb') as f:
	f.write(april_2016)
