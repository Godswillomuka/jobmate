from flask import Blueprint, request, jsonify
from extensions import db
from models import Job
from decorators import client_required, job_owner_required
from flask_jwt_extended import get_jwt_identity

jobs = Blueprint("jobs", __name__)


# CREATE JOB (CLIENT ONLY)
@jobs.route("/create", methods=["POST"])
@client_required
def create_job():
    data = request.get_json() or {}
    user_id = get_jwt_identity()

    job = Job(
        title=data.get("title"),
        description=data.get("description"),
        location=data.get("location"),
        salary=data.get("salary"),
        company_name=data.get("company_name"),
        created_by=user_id
    )

    db.session.add(job)
    db.session.commit()

    return jsonify({"message": "Job created", "id": job.id}), 201


# GET ALL JOBS
@jobs.route("/", methods=["GET"])
def get_jobs():
    jobs = Job.query.all()

    return jsonify([
        {
            "id": j.id,
            "title": j.title,
            "description": j.description,
            "location": j.location,
            "salary": j.salary,
            "company_name": j.company_name
        }
        for j in jobs
    ]), 200


# GET SINGLE JOB
@jobs.route("/<int:job_id>", methods=["GET"])
def get_job(job_id):
    job = Job.query.get(job_id)

    if not job:
        return jsonify({"error": "Job not found"}), 404

    return jsonify({
        "id": job.id,
        "title": job.title,
        "description": job.description,
        "location": job.location,
        "salary": job.salary,
        "company_name": job.company_name,
        "created_by": job.created_by
    }), 200


# UPDATE JOB (OWNER ONLY)
@jobs.route("/<int:job_id>", methods=["PUT"])
@job_owner_required
def update_job(job_id):
    data = request.get_json() or {}

    job = Job.query.get(job_id)

    job.title = data.get("title", job.title)
    job.description = data.get("description", job.description)
    job.location = data.get("location", job.location)
    job.salary = data.get("salary", job.salary)
    job.company_name = data.get("company_name", job.company_name)

    db.session.commit()

    return jsonify({"message": "Job updated"}), 200


# DELETE JOB (OWNER ONLY)
@jobs.route("/<int:job_id>", methods=["DELETE"])
@job_owner_required
def delete_job(job_id):
    job = Job.query.get(job_id)

    db.session.delete(job)
    db.session.commit()

    return jsonify({"message": "Job deleted"}), 200


# FILTER JOBS
@jobs.route("/filter", methods=["GET"])
def filter_jobs():
    location = request.args.get("location")

    if not location:
        return jsonify({"error": "Location required"}), 400

    jobs = Job.query.filter_by(location=location).all()

    return jsonify([
        {
            "id": j.id,
            "title": j.title,
            "location": j.location,
            "salary": j.salary,
            "company_name": j.company_name
        }
        for j in jobs
    ]), 200