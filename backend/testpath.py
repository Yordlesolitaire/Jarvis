import sqlite3
import os
from pathlib import *

PATH = Path(__file__).parent
DATAPATH = os.path.join(PATH.parent,"data")
DBPATH = os.path.join(DATAPATH,"database")
DBfilePATH = os.path.join(DBPATH,"DATA.db")

print(DBfilePATH)
Connection = sqlite3.connect(DBfilePATH)
cursor = Connection.cursor()

username = "damien123"
password = "motdepasse"


cursor.execute("SELECT username,password FROM users")
rows = cursor.fetchall()
for row in rows:
    print(row)

Connection.commit()
Connection.close()