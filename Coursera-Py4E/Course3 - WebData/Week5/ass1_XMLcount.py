import urllib.request, urllib.parse, urllib.error
import xml.etree.ElementTree as ET

summ=0

url = input('Enter: ')

print('Retrieving', url)
uh = urllib.request.urlopen(url)
data = uh.read()
tree = ET.fromstring(data)

results = tree.findall('comments/comment')

for item in results:
    summ += int(item.find('count').text)

print(summ)