# importing the requests library
import requests
import json
from threading import Timer


def askData():
  Timer(1.0, askData).start()

  API_ENDPOINT = "https://hook.swit.io/chat/200328231505006C9sA/FihS4PXQOpHrBcc5lWm7"

  data = {'text':"I want data"}

  r = requests.post(url = API_ENDPOINT, json=data)

  print(r)

askData()