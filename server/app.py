from flask import Flask, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import os

from extensions import db, migrate, jwt

from routes.auth import auth
from routes.jobs import jobs
from routes.applications import applications


# =========================
# LOAD ENV FIRST
# =========================
load_dotenv()


# =========================
# APPLICATION FACTORY
# =========================
def create_app():
    app = Flask(__name__)

    # -------------------------
    # CONFIGURATION
    # -------------------------
    database_url = os.getenv("DATABASE_URL")
    jwt_secret = os.getenv("JWT_SECRET_KEY")

    if not database_url:
        raise Exception("DATABASE_URL is missing in environment variables")

    if not jwt_secret:
        raise Exception("JWT_SECRET_KEY is missing in environment variables")

    app.config["SQLALCHEMY_DATABASE_URI"] = database_url
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
    app.config["JWT_SECRET_KEY"] = os.getenv("JWT_SECRET_KEY")


    # -------------------------
    # INIT EXTENSIONS
    # -------------------------
    CORS(app)

    db.init_app(app)
    migrate.init_app(app, db)
    jwt.init_app(app)

    # -------------------------
    # REGISTER BLUEPRINTS
    # -------------------------
    app.register_blueprint(auth, url_prefix="/auth")
    app.register_blueprint(jobs, url_prefix="/jobs")
    app.register_blueprint(applications, url_prefix="/applications")

    # -------------------------
    # HOME ROUTE
    # -------------------------
    @app.route("/")
    def home():
        return jsonify({
            "status": "online",
            "message": "JobMate API running 🚀",
            "version": "1.0.0"
        })

    # -------------------------
    # GLOBAL ERROR HANDLER (OPTIONAL BUT GOOD)
    # -------------------------
    @app.errorhandler(404)
    def not_found(e):
        return jsonify({"error": "Route not found"}), 404

    @app.errorhandler(500)
    def server_error(e):
        return jsonify({"error": "Internal server error"}), 500

    return app


# =========================
# RUN APP
# =========================
if __name__ == "__main__":
    app = create_app()
    app.run(debug=True, port=5000)