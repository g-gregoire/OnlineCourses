import re
filename = 'regex_sum_147603.txt'
file = open(filename, 'r')
allstr = []
total=0
for line in file:
	y = re.findall('[0-9]+', line)
	if y != []:
		allstr.append(y)

# print(allstr)

for num in allstr:
	for val in num:
		# print(val)	
		total += int(val)

print(total)
# x = 'this is the 1st time that i had 2 tries'
# print(x)
# y = re.findall('.*', x)
# print(y)