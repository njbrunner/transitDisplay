#!/usr/bin/python

import requests
import logging
import json

key = "465dead7ab7b4380a7d8a819d59bef25";
url = 'https://api.wmata.com/StationPrediction.svc/json/GetPrediction/B03'

parameters = {
    'api_key': key,
}

response = requests.get(url, params=parameters).json()

data = json.dumps(response, indent=4)

dict = json.loads(data)

destination = []
time = []

for i in range(0, len(dict['Trains'])):
	destination.append(str(dict['Trains'][i]['DestinationName']))
	time.append(str(dict['Trains'][i]['Min']))

for i in range(0, len(destination)):
	if (destination[i] != 'Train'):
		print "%s \t %s min" % (destination[i], time[i])