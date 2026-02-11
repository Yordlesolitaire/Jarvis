import subprocess
import pyautogui
import keyboard
import time
import requests
from pathlib import Path
import os
import json
PATH = Path(__file__).parent
print()
APPPATH = os.path.join(PATH, "Apps.json")

def ouvrir_application(nom:str):
    """Lance une application via subprocess"""
    try:
        subprocess.Popen(nom)
    except:
        print("pas trouvé")

class Lecteur:
    def skip(self):
        keyboard.send("next track")
    def previous(self):
        keyboard.send("previous track")
    def playpause(self):
        keyboard.send("play/pause media")



class Steam:
    def __init__(self):
        pass
    