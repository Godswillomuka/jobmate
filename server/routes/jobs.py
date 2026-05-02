from flask import Blueprint, request, jsonify
from extensions import db
from models import Job

jobs = Blueprint("jobs", __name__)

# CREATE JOB
@jobs.route("/create", methods=["POST"])
def create_job():
    data = request.json

    job = Job(
        title=data.get("title"),
        description=data.get("description"),
        location=data.get("location"),
        salary=data.get("salary"),
        company_name=data.get("company_name"),
        created_by=data.get("created_by")
    )

    db.session.add(job)
    db.session.commit()

    return jsonify({"message": "Job created"}), 201


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
            "company_name": j.company_name,
            "created_by": j.created_by
        }
        for j in jobs
    ]), 200


# GET SINGLE JOB
@jobs.route("/<int:id>", methods=["GET"])
def get_job(id):
    job = Job.query.get(id)

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


# UPDATE JOB
@jobs.route("/<int:id>", methods=["PUT"])
def update_job(id):
    job = Job.query.get(id)

    if not job:
        return jsonify({"error": "Job not found"}), 404

    data = request.json

    job.title = data.get("title", job.title)
    job.description = data.get("description", job.description)
    job.location = data.get("location", job.location)
    job.salary = data.get("salary", job.salary)
    job.company_name = data.get("company_name", job.company_name)

    db.session.commit()

    return jsonify({"message": "Job updated"}), 200


# DELETE JOB
@jobs.route("/<int:id>", methods=["DELETE"])
def delete_job(id):
    job = Job.query.get(id)

    if not job:
        return jsonify({"error": "Job not found"}), 404

    db.session.delete(job)
    db.session.commit()

    return jsonify({"message": "Job deleted"}), 200


# FILTER JOBS BY LOCATION
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