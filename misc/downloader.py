import argparse
import requests
import sys
import time
from tqdm import tqdm


parser = argparse.ArgumentParser(description='Download Large files using python.')
parser.add_argument('url', help='url for dowloading')
parser.add_argument('-l', '--filename', default='', help='Local filename')
args = parser.parse_args()


def download_file(url, local_filename) :
  if local_filename == '':
      local_filename = url.split('/')[-1]
  localFilename = url.split('/')[-1]
  with open(localFilename, 'wb') as f:
    dl = 0
    start = time.time()
    r = requests.get(url, stream=True)
    total_length = int(r.headers.get('content-length'))
    if total_length is None: # no content length header
      f.write(r.content)
    else:
      for chunk in tqdm(r.iter_content(chunk_size=1024)):
        f.write(chunk)
        dl += len(chunk)
        done = int(50 * dl / total_length)
        output_time = (time.time() - start)
        speed = str(dl/output_time/1024)
        sys.stdout.write("\r[%s%s] %s KiloByte/s" % ('=' * done, ' ' * (50-done), speed))
  return (time.time() - start),speed


time_elapsed,avg_speed = download_file(args.url,args.filename)
print "Download complete..."
print "Time Elapsed: " + str(time_elapsed)
print "Average Speed: " + str(avg_speed) + " KiloByte/s"
