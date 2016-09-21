#!/usr/bin/python

import requests
import logging

logging.info("This is a test from python")

lat = "38.899020";
lng = "-77.003519";
token = "03Dg2jKKnyUNkxl43W2DVk0STqWl_rid6qA5MsX-";

url = 'https://api.uber.com/v1/products'

parameters = {
    'server_token': token,
    'latitude': lat,
    'longitude': lng,
}

response = requests.get(url, params=parameters)



#data = response.json()

data = response.string()
return data