import time
from datetime import datetime,timedelta
from dateutil.relativedelta import relativedelta
import requests





def get_hour(hour_recoil=0, minute_recoil=0, second_recoil=0, seconds=False):
    now = datetime.now()
    
    delta = timedelta(
        hours=hour_recoil,
        minutes=minute_recoil,
        seconds=second_recoil
    )
    
    result = now + delta

    if seconds:
        return result.strftime("%H:%M:%S")
    return result.strftime("%H:%M")


def get_date(day_recoil=0, month_recoil=0, year_recoil=0):
    return (datetime.now() + relativedelta(
        days=day_recoil,
        months=month_recoil,
        years=year_recoil
    )).strftime("%d-%m-%Y")



def get_city():
    res = requests.get("https://ipinfo.io/json")
    data = res.json()
    return data

print(get_city())


API_KEY = "4c07c32fd727b3e2d173f9e45f315517"
CITY = "Paris"
URL = "https://api.openweathermap.org/data/2.5/weather"

def get_weather(city):
    params = {
        "q": city,
        "appid": API_KEY,
        "units": "metric",
        "lang": "fr"
    }

    res = requests.get(URL, params=params)
    data = res.json()

    return data

#print(get_weather("Paris"))



def get_weather(lat, lon):
    url = "https://api.open-meteo.com/v1/forecast"
    params = {
        "latitude": lat,
        "longitude": lon,
        "current_weather": True
    }
    print(requests.get(url, params=params).url)
    return requests.get(url, params=params).json()
a = get_city()
print(a["loc"].split(",")[0])
print(a["loc"].split(",")[1])
print(get_weather(a["loc"].split(",")[0],a["loc"].split(",")[1]))  # Paris