// components/JobCard.jsx
import { Link } from 'react-router-dom';
import Button from './Button';
import './JobCard.css';

export default function JobCard({ job }) {
  const {
    id,
    title,
    company,
    location,
    budget,
    budgetType,
    postedDate,
    category,
    description,
    skills,
    applications,
    isFeatured = false
  } = job;

  const formatBudget = (amount, type) => {
    if (type === 'fixed') return `KSH ${amount.toLocaleString()} fixed`;
    if (type === 'hourly') return `KSH ${amount.toLocaleString()}/hr`;
    return `KSH ${amount.toLocaleString()}`;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffDays = Math.floor((now - date) / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'Posted today';
    if (diffDays === 1) return 'Posted yesterday';
    if (diffDays < 7) return `Posted ${diffDays} days ago`;
    return date.toLocaleDateString('en-KE', { month: 'short', day: 'numeric' });
  };

  return (
    <article className={`job-card ${isFeatured ? 'job-card--featured' : ''}`}>
      {isFeatured && <span className="job-badge">Featured</span>}
      
      <div className="job-card-header">
        <div className="job-company-logo">
          {company?.logo ? (
            <img src={company.logo} alt={company.name} />
          ) : (
            <div className="logo-placeholder">{company?.name?.[0]?.toUpperCase() || 'J'}</div>
          )}
        </div>
        <div className="job-company-info">
          <h3 className="job-title">{title}</h3>
          <p className="job-company-name">{company?.name}</p>
          <div className="job-meta">
            <span className="job-location">📍 {location}</span>
            <span className="job-date">{formatDate(postedDate)}</span>
          </div>
        </div>
      </div>

      <p className="job-description">{description?.substring(0, 120)}...</p>

      <div className="job-skills">
        {skills?.slice(0, 4).map((skill, idx) => (
          <span key={idx} className="skill-tag">{skill}</span>
        ))}
        {skills?.length > 4 && (
          <span className="skill-tag skill-tag-more">+{skills.length - 4}</span>
        )}
      </div>

      <div className="job-card-footer">
        <div className="job-budget">
          <span className="budget-amount">{formatBudget(budget, budgetType)}</span>
          <span className="budget-type">{budgetType === 'fixed' ? 'Fixed Price' : 'Hourly'}</span>
        </div>
        <div className="job-actions">
          <span className="job-applications">{applications} bids</span>
          <Button as={Link} to={`/jobs/${id}`} variant="outline" size="sm">
            View Details
          </Button>
        </div>
      </div>
    </article>
  );
}