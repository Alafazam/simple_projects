from time import sleep
from tqdm import tqdm
import requests

url = "http://raw.githubusercontent.com/Alafazam/lecture_notes/master/Cormen%20.pdf"
response = requests.get(url, stream=True)


with open("10MB", "wb") as handle:
	total_length = int(response.headers.get('content-length'))/1024
	for data in tqdm(response.iter_content(chunk_size=1024),total=total_length, leave=True, unit='KB'):
		handle.write(data)


# with open("10MB", 'wb') as f:
# 	r = requests.get(url, stream=True)
# 	for chunk in tqdm(r.iter_content()):
# 		f.write(chunk)


# from tqdm import tqdm
# for i in tqdm(range(10000)):
# 	sleep(0.01)