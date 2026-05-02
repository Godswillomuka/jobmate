from flask import Blueprint, request, jsonify
from flask_jwt_extended import create_access_token
from extensions import db
from models import User
import bcrypt

auth = Blueprint("auth", __name__)


@auth.route("/register", methods=["POST"])
def register():
    data = request.get_json() or {}

    name = data.get("name")
    email = data.get("email")
    password = data.get("password")
    confirm_password = data.get("confirmPassword")
    phone = data.get("phone")
    role = data.get("role")

    if not all([name, email, password, confirm_password, phone, role]):
        return jsonify({"error": "All fields required"}), 400

    if role not in ["worker", "client"]:
        return jsonify({"error": "Invalid role"}), 400

    if password != confirm_password:
        return jsonify({"error": "Passwords do not match"}), 400

    if User.query.filter_by(email=email).first():
        return jsonify({"error": "Email already exists"}), 400

    hashed = bcrypt.hashpw(password.encode(), bcrypt.gensalt())

    user = User(
        name=name,
        email=email,
        password=hashed.decode(),
        phone=phone,
        role=role
    )

    db.session.add(user)
    db.session.commit()

    return jsonify({"message": "User created"}), 201


@auth.route("/login", methods=["POST"])
def login():
    data = request.get_json() or {}

    email = data.get("email")
    password = data.get("password")

    user = User.query.filter_by(email=email).first()

    if not user:
        return jsonify({"error": "Invalid credentials"}), 401

    if not bcrypt.checkpw(password.encode(), user.password.encode()):
        return jsonify({"error": "Invalid credentials"}), 401

    token = create_access_token(identity=user.id)

    return jsonify({
        "access_token": token,
        "user": {
            "id": user.id,
            "role": user.role,
            "name": user.name,
            "phone": user.phone,
            "email": user.email
        }
    }), 200