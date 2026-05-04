import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import './JobCard.css';

export default function JobCard({ job }) {
  return (
    <article className="job-card">
      <div className="job-header">
        <div className="job-avatar">{job.company?.name?.[0] || 'J'}</div>
        <div className="job-info">
          <h3>{job.title}</h3>
          <p className="job-company">{job.company?.name}</p>
          <div className="job-meta">📍 {job.location} • 💰 {job.budgetType === 'fixed' ? `KSH ${job.budget}` : `KSH ${job.budget}/hr`}</div>
        </div>
      </div>
      <p className="job-desc">{job.description?.slice(0, 100)}...</p>
      <div className="job-footer">
        <span className="job-apps">{job.applications} bids</span>
        <Button as={Link} to={`/jobs/${job.id}`} variant="outline" size="sm">View</Button>
      </div>
    </article>
  );
}