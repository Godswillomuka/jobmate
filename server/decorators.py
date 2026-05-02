from functools import wraps
from flask import jsonify
from flask_jwt_extended import verify_jwt_in_request, get_jwt_identity
from models import User, Job


# =========================
# GET CURRENT USER
# =========================
def current_user():
    user_id = get_jwt_identity()
    return User.query.get(user_id)


# =========================
# REQUIRE LOGIN
# =========================
def login_required(fn):
    @wraps(fn)
    def wrapper(*args, **kwargs):
        verify_jwt_in_request()
        return fn(*args, **kwargs)
    return wrapper


# =========================
# REQUIRE CLIENT ROLE
# =========================
def client_required(fn):
    @wraps(fn)
    def wrapper(*args, **kwargs):
        verify_jwt_in_request()

        user = current_user()
        if user.role != "client":
            return jsonify({"error": "Clients only"}), 403

        return fn(*args, **kwargs)
    return wrapper


# =========================
# REQUIRE WORKER ROLE
# =========================
def worker_required(fn):
    @wraps(fn)
    def wrapper(*args, **kwargs):
        verify_jwt_in_request()

        user = current_user()
        if user.role != "worker":
            return jsonify({"error": "Workers only"}), 403

        return fn(*args, **kwargs)
    return wrapper


# =========================
# JOB OWNER CHECK
# =========================
def job_owner_required(fn):
    @wraps(fn)
    def wrapper(job_id, *args, **kwargs):
        verify_jwt_in_request()

        user = current_user()
        job = Job.query.get(job_id)

        if not job:
            return jsonify({"error": "Job not found"}), 404

        if job.created_by != user.id:
            return jsonify({"error": "Not your job"}), 403

        return fn(job_id, *args, **kwargs)

    return wrapper