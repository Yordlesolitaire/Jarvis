from flask import Flask, jsonify, request
from flask_cors import CORS
import sqlite3
import os
from pathlib import *


PATH = Path(__file__).parent
DATAPATH = os.path.join(PATH.parent,"data")
DBPATH = os.path.join(DATAPATH,"database\\DATABASE.db")



app = Flask(__name__)
CORS(app)  # Permet à React/Electron d'accéder à l'API

# Route test
@app.route("/")
def index():
    return jsonify(str(PATH),str(DATAPATH))

@app.route("/login",methods=["POST"])
def login():
    Connection = sqlite3.connect(DBPATH)
    cursor = Connection.cursor()
    data = request.json
    print(data["username"])
    print(data["password"])
    return jsonify(data)



if __name__ == "__main__":
    app.run(host="192.168.1.32", debug=True)
