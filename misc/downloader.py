import argparse
import requests
import sys
import time

parser = argparse.ArgumentParser(description='Download Large files using python.')
parser.add_argument('url', help='url for dowloading')
parser.add_argument('-l', '--filename', default='', help='Local filename')
args = parser.parse_args()

# url = "https://raw.githubusercontent.com/Alafazam/lecture_notes/master/Cormen%20.pdf"

def download_file(url, local_filename) :
  if local_filename == '':
      local_filename = url.split('/')[-1]
  localFilename = url.split('/')[-1]
  with open(localFilename, 'wb') as f:
    start = time.clock()
    r = requests.get(url, stream=True)
    total_length = int(r.headers.get('content-length'))
    dl = 0
    if total_length is None: # no content length header
      f.write(r.content)
    else:
      for chunk in r.iter_content(chunk_size=1024):
        dl += len(chunk)
        f.write(chunk)
        done = int(50 * dl / total_length)
        sys.stdout.write("\r[%s%s]" % ('=' * done, ' ' * (50-done)))
        # print ''
  return (time.clock() - start)



time_elapsed = download_file(args.url,args.filename)
print "Download complete..."
print "Time Elapsed: " + str(time_elapsed)
