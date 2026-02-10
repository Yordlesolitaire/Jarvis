import time
from datetime import datetime,timedelta
from dateutil.relativedelta import relativedelta
import subprocess

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


def Launch_game(game_name=input("Game : ")):
    pass