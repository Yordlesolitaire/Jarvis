import sqlite3
import os
from pathlib import *

PATH = Path(__file__).parent
DATAPATH = os.path.join(PATH.parent,"data")
DBPATH = os.path.join(DATAPATH,"database\\DATABASE.db")
print(DBPATH)
Connection = sqlite3.connect(DBPATH)
cursor = Connection.cursor()