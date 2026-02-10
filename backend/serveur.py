from flask import Flask, jsonify, request
from functions import get_hour
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
@app.route("/")
def home():
    return "Serveur Flask en ligne 🟢"

@app.route("/ping")
def ping():
    return jsonify({"status": "ok", "message": "pong"})

@app.route("/echo", methods=["GET"])
def echo():
    return jsonify({
        "received": request.args
    })

@app.route("/clock",methods=["GET"])
def Clock():
    res = get_hour().split(":")
    return jsonify(
        {
            "Hour":res[0],
            "Minutes":res[1]
        }
    )


if __name__ == "__main__":
    app.run(
        host="127.0.0.1",
        port=5000,
        debug=True
    )
