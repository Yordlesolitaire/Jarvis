from flask import Flask, jsonify, request
from flask_cors import CORS
import sqlite3
import os
from pathlib import *


PATH = Path(__file__).parent
DATAPATH = os.path.join(PATH.parent,"data")
DBPATH = os.path.join(DATAPATH,"database")
DBfilePATH = os.path.join(DBPATH,"DATA.db")



app = Flask(__name__)
CORS(app)  # Permet à React/Electron d'accéder à l'API

# Route test
@app.route("/")
def index():
    return jsonify(str(PATH),str(DATAPATH),str(DBfilePATH))

@app.route("/login",methods=["POST"])
def login():
    Connection = sqlite3.connect(DBfilePATH)
    cursor = Connection.cursor()
    data = request.json
    print(data["username"])
    print(data["password"])
    
    return(data)



if __name__ == "__main__":
    app.run(host="localhost", debug=True)
