import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import Rating from '../ui/Rating';
import './TalentCard.css';

export default function TalentCard({ talent }) {
  return (
    <article className="talent-card">
      <div className="talent-header">
        <img src={talent.avatar || `https://ui-avatars.com/api/?name=${talent.name}`} alt={talent.name} className="talent-avatar" />
        <div className="talent-info">
          <h3>{talent.name}</h3>
          <p className="talent-title">{talent.title}</p>
          <Rating value={talent.rating} count={talent.reviews} showCount />
        </div>
      </div>
      <div className="talent-skills">
        {talent.skills?.map(s => <span key={s} className="skill-tag">{s}</span>)}
      </div>
      <div className="talent-stats">
        <div><strong>{talent.completed}</strong><br/>Jobs</div>
        <div><strong>KSH {talent.rate}/hr</strong><br/>Rate</div>
      </div>
      <div className="talent-actions">
        <Button as={Link} to={`/talent/${talent.id}`} variant="outline" size="sm">Profile</Button>
        <Button as={Link} to={`/hire/${talent.id}`} variant="primary" size="sm">Hire</Button>
      </div>
    </article>
  );
}