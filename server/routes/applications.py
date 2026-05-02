from flask import Blueprint, request, jsonify
from extensions import db
from models import Application, Job, User

applications = Blueprint("applications", __name__)


# APPLY TO A JOB
@applications.route("/apply", methods=["POST"])
def apply_job():
    data = request.json

    job_id = data.get("job_id")
    user_id = data.get("user_id")

    if not job_id or not user_id:
        return jsonify({"error": "job_id and user_id required"}), 400

    # check job exists
    job = Job.query.get(job_id)
    if not job:
        return jsonify({"error": "Job not found"}), 404

    # check user exists
    user = User.query.get(user_id)
    if not user:
        return jsonify({"error": "User not found"}), 404

    # prevent duplicate application
    existing = Application.query.filter_by(job_id=job_id, user_id=user_id).first()
    if existing:
        return jsonify({"error": "Already applied"}), 400

    application = Application(
        job_id=job_id,
        user_id=user_id,
        status="pending"
    )

    db.session.add(application)
    db.session.commit()

    return jsonify({"message": "Applied successfully"}), 201


# GET ALL APPLICATIONS FOR A JOB
@applications.route("/job/<int:job_id>", methods=["GET"])
def get_job_applications(job_id):
    applications_list = Application.query.filter_by(job_id=job_id).all()

    return jsonify([
        {
            "id": a.id,
            "job_id": a.job_id,
            "user_id": a.user_id,
            "status": a.status
        }
        for a in applications_list
    ]), 200


# GET USER APPLICATIONS
@applications.route("/user/<int:user_id>", methods=["GET"])
def get_user_applications(user_id):
    applications_list = Application.query.filter_by(user_id=user_id).all()

    return jsonify([
        {
            "id": a.id,
            "job_id": a.job_id,
            "status": a.status
        }
        for a in applications_list
    ]), 200


# UPDATE APPLICATION STATUS (CLIENT SIDE)
@applications.route("/<int:id>/status", methods=["PUT"])
def update_status(id):
    data = request.json
    status = data.get("status")

    application = Application.query.get(id)

    if not application:
        return jsonify({"error": "Application not found"}), 404

    application.status = status
    db.session.commit()

    return jsonify({"message": "Status updated"}), 200