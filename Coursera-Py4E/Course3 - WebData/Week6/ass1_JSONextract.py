import json
import urllib.request, urllib.parse, urllib.error
import ssl

count=0
# Ignore SSL certificate errors
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

url = input('Enter URL:')

print('Retrieving', url)
connection = urllib.request.urlopen(url, context=ctx)
data = connection.read().decode()
info = json.loads(data)

for item in info['comments']:
    count+= item['count']
    # print('Name', item)

print(count)