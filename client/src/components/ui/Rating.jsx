import './Rating.css';
export default function Rating({ value, max=5, showCount=false, count=0 }) {
  return (
    <div className="rating">
      <div className="stars">
        {Array.from({length: max}).map((_, i) => (
          <span key={i} className={i < value ? 'star filled' : 'star'}>★</span>
        ))}
      </div>
      {showCount && <span className="rating-count">({count})</span>}
    </div>
  );
}