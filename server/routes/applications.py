from flask import Blueprint, request, jsonify
from flask_jwt_extended import get_jwt_identity
from extensions import db
from models import Application, Job
from decorators import worker_required, client_required, job_owner_required

applications = Blueprint("applications", __name__)


# APPLY TO JOB (WORKER ONLY)
@applications.route("/apply", methods=["POST"])
@worker_required
def apply():
    data = request.get_json() or {}
    user_id = get_jwt_identity()
    job_id = data.get("job_id")

    job = Job.query.get(job_id)
    if not job:
        return jsonify({"error": "Job not found"}), 404

    exists = Application.query.filter_by(job_id=job_id, user_id=user_id).first()
    if exists:
        return jsonify({"error": "Already applied"}), 400

    app = Application(job_id=job_id, user_id=user_id)

    db.session.add(app)
    db.session.commit()

    return jsonify({"message": "Applied successfully"}), 201


# MY APPLICATIONS (WORKER)
@applications.route("/my", methods=["GET"])
@worker_required
def my_apps():
    user_id = get_jwt_identity()

    apps = Application.query.filter_by(user_id=user_id).all()

    return jsonify([
        {
            "id": a.id,
            "job_id": a.job_id,
            "status": a.status
        }
        for a in apps
    ]), 200


# JOB APPLICATIONS (CLIENT + OWNER ONLY)
@applications.route("/job/<int:job_id>", methods=["GET"])
@job_owner_required
def job_apps(job_id):
    apps = Application.query.filter_by(job_id=job_id).all()

    return jsonify([
        {
            "id": a.id,
            "user_id": a.user_id,
            "status": a.status
        }
        for a in apps
    ]), 200


# UPDATE STATUS (CLIENT ONLY + OWNER ONLY)
@applications.route("/<int:app_id>/status", methods=["PUT"])
@client_required
def update_status(app_id):
    data = request.get_json() or {}
    new_status = data.get("status")

    valid = ["pending", "accepted", "rejected", "interviewing"]

    if new_status not in valid:
        return jsonify({"error": "Invalid status"}), 400

    app = Application.query.get(app_id)

    job = Job.query.get(app.job_id)

    user_id = get_jwt_identity()

    if job.created_by != user_id:
        return jsonify({"error": "Not your job"}), 403

    app.status = new_status
    db.session.commit()

    return jsonify({"message": "Updated"}), 200