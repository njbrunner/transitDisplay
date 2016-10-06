#!/usr/bin/python

import requests
import logging
import json

logging.info("This is a test from python")

lat = "38.899020";
lng = "-77.003519";
token = "03Dg2jKKnyUNkxl43W2DVk0STqWl_rid6qA5MsX-";
url = 'https://api.uber.com/v1/estimates/time'

parameters = {
    'server_token': token,
    'start_latitude': lat,
    'start_longitude': lng,
}

response = requests.get(url, params=parameters).json()

data2 = json.dumps(response, indent=4)

dict = json.loads(data2)

product = []
time = []

for i in range(0, len(dict['times'])):
	product.append(dict['times'][i]['localized_display_name'])
	time.append(dict['times'][i]['estimate'])
	#print dict['times'][i]['localized_display_name'], dict['times'][i]['estimate']
	#print(dict.get('localized_display_name'), dict.get('estimate'))
	#print dict['times'][0]['estimate']

for i in range(0, len(product)):
	if (product[i] == "POOL" or product[i] == "uberX" or product[i] == "uberXL" or product[i] == "UberBLACK"):
		print "%s    \t %s min" % (product[i], time[i]/60)