from flask import Flask, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import os
import models

from extensions import db, migrate

load_dotenv()

app = Flask(__name__)
CORS(app)

app.config["SQLALCHEMY_DATABASE_URI"] = os.getenv("DATABASE_URL")
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

# INIT EXTENSIONS
db.init_app(app)
migrate.init_app(app, db)

@app.route("/")
def home():
    return jsonify({"message": "JobMate API running 🚀"})

if __name__ == "__main__":
    app.run(debug=True)