import json
from random import *
import sys

numToMake = int(sys.argv[1])
carData = {}
i = 0
left = -95.515066
right = -91.850762
top = 42.521509
bottom = 40.914343
carData['vehicles'] = list()
while (i < numToMake):
    car1 = {}
    car1['longitude'] = uniform(left, right)
    car1['latitude'] = uniform(bottom, top)
    car1['speed'] = randint(0,40)
    car1['gas'] = uniform(0,1)
    car1['id'] = i 
    car1['rpm'] = randint(1000,4000)
    carData['vehicles'].append(car1)
    i = i + 1

with open('data.json', 'w') as outfile:
    json.dump(carData, outfile)