#!/usr/bin/python

import requests
import logging
import json

lat = "38.899020";
lng = "-77.003519";
url = 'https://api.lyft.com/v1/eta'
client_id = 'xtBYCGpchyqQ'
client_secret = '5y0wfqrFsTTk1-ok_71LT6H6s5K984h4'

def generate_token(client_id,client_secret): 
	url = 'https://api.lyft.com/oauth/token' 
	payload = {"Content-Type": "application/json","grant_type": "client_credentials", "scope": "public"} 
	res = requests.post(url, data=payload,auth=(client_id, client_secret)) 
	json_output = json.loads(res.text) 
	token = json_output['access_token'] 
	return(token)

def get_eta(token): 
	global url
	global lat
	global lng
	
	token_val = 'Bearer ' + token 
	headers = {'Authorization': token_val}
	parameters = {
		'lat': lat,
		'lng': lng,
	}
	
	response = requests.get(url, headers=headers, params=parameters).json()
	data = json.dumps(response, indent=4)
	return data

token = generate_token(client_id, client_secret)
result = get_eta(token)
dict = json.loads(result)

product = []
time = []

for i in range(0, len(dict['eta_estimates'])):
	if (dict['eta_estimates'][i]['is_valid_estimate'] == True):
		product.append(dict['eta_estimates'][i]['display_name'])
		time.append(dict['eta_estimates'][i]['eta_seconds'])

for i in range(0, len(product)):
	print "%s    \t %s min" % (product[i], time[i]/60)
