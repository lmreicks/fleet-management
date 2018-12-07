import json
from random import *
import sys

baseURL = ""
args = sys.argv
car1 = {}
car2 = {}
car3 = {}
car4 = {}
out = {}
baseLong = -93.651619
baseLat = 42.022683
increment = .01
lng = baseLong + increment * int(args[1])
car1['longitude'] = lng
car1['latitude'] = baseLat
car1['speed'] = randint(0,40)
car1['gas'] = 1 - (.01 * int(args[1]))
car1['id'] = 1
car1['rpm'] = randint(1000,4000)

car2['longitude'] = lng - .001
car2['latitude'] = baseLat
car2['speed'] = randint(0,40)
car2['gas'] = .45 - (.01 * int(args[1]))
car2['id'] = 2
car2['rpm'] = randint(1000,4000)

car3['longitude'] = lng - .001
car3['latitude'] = baseLat - .03
car3['speed'] = randint(0,40)
car3['gas'] = .57 - (.01 * int(args[1]))
car3['id'] = 3
car3['rpm'] = randint(1000,4000)

car4['longitude'] = lng - .001
car4['latitude'] = baseLat + .0014
car4['speed'] = randint(0,40)
car4['gas'] = .8 - (.01 * int(args[1]))
car4['id'] = 4
car4['rpm'] = randint(1000,4000)

out['vehicles'] = list()
out['vehicles'].append(car1)
out['vehicles'].append(car2)
out['vehicles'].append(car3)
out['vehicles'].append(car4)

with open('data.json', 'w') as outfile:
    json.dump(out, outfile)

