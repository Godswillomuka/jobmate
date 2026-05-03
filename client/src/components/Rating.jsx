// components/Rating.jsx
import './Rating.css';

export default function Rating({ value, max = 5, size = 'md', showValue = true, reviewCount }) {
  const stars = [];
  
  for (let i = 1; i <= max; i++) {
    const filled = i <= value;
    const half = !filled && i - 0.5 <= value;
    
    stars.push(
      <span 
        key={i} 
        className={`star ${size} ${filled ? 'filled' : ''} ${half ? 'half' : ''}`}
        aria-hidden="true"
      >
        {filled || half ? '★' : '☆'}
      </span>
    );
  }

  return (
    <div className="rating">
      <div className="stars" role="img" aria-label={`Rating: ${value} out of ${max} stars`}>
        {stars}
      </div>
      {showValue && (
        <span className="rating-value">
          {value.toFixed(1)}
          {reviewCount && <span className="rating-count"> ({reviewCount})</span>}
        </span>
      )}
    </div>
  );
}