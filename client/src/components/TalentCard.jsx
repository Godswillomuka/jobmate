// components/TalentCard.jsx
import { Link } from 'react-router-dom';
import Button from './Button';
import './TalentCard.css';

export default function TalentCard({ talent }) {
  const {
    id,
    name,
    avatar,
    title,
    location,
    hourlyRate,
    rating,
    reviewCount,
    skills,
    completedJobs,
    successRate,
    isOnline = false,
    isVerified = false
  } = talent;

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= rating ? 'star filled' : 'star'}>
          {i <= rating ? '★' : '☆'}
        </span>
      );
    }
    return stars;
  };

  return (
    <article className={`talent-card ${isOnline ? 'talent-card--online' : ''}`}>
      {isVerified && <span className="talent-badge talent-badge--verified">✓ Verified</span>}
      
      <div className="talent-card-header">
        <div className="talent-avatar-wrapper">
          <img 
            src={avatar || `https://ui-avatars.com/api/?name=${name}&background=e63946&color=fff`} 
            alt={name}
            className="talent-avatar"
          />
          {isOnline && <span className="online-indicator"></span>}
        </div>
        <div className="talent-info">
          <h3 className="talent-name">{name}</h3>
          <p className="talent-title">{title}</p>
          <div className="talent-meta">
            <span className="talent-location">📍 {location}</span>
          </div>
        </div>
      </div>

      <div className="talent-rating">
        <div className="stars">{renderStars(rating)}</div>
        <span className="rating-value">{rating}</span>
        <span className="rating-count">({reviewCount} reviews)</span>
      </div>

      <div className="talent-skills">
        {skills?.slice(0, 5).map((skill, idx) => (
          <span key={idx} className="skill-tag">{skill}</span>
        ))}
      </div>

      <div className="talent-stats">
        <div className="stat">
          <span className="stat-value">{completedJobs}</span>
          <span className="stat-label">Jobs Done</span>
        </div>
        <div className="stat-divider"></div>
        <div className="stat">
          <span className="stat-value">{successRate}%</span>
          <span className="stat-label">Success Rate</span>
        </div>
        <div className="stat-divider"></div>
        <div className="stat">
          <span className="stat-value">KSH {hourlyRate}/hr</span>
          <span className="stat-label">Hourly Rate</span>
        </div>
      </div>

      <div className="talent-actions">
        <Button as={Link} to={`/talent/${id}`} variant="outline" size="sm">
          View Profile
        </Button>
        <Button as={Link} to={`/hire/${id}`} variant="primary" size="sm">
          Hire Now
        </Button>
      </div>
    </article>
  );
}