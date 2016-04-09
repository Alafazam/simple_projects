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
    total_length = int(r.headers.get('content-length'))/1024
    if total_length is None: # no content length header
      f.write(r.content)
    else:
      for chunk in tqdm(r.iter_content(chunk_size=1024),total=total_length, leave=True, unit='KB'):
        f.write(chunk)
  return localFilename

filename = download_file(args.url,args.filename)
print "Download complete..."
print "" + filename + " saved"