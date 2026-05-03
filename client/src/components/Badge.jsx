// components/Badge.jsx
import './Badge.css';

export default function Badge({ 
  children, 
  variant = 'default',
  size = 'md',
  icon,
  className = ''
}) {
  return (
    <span className={`badge badge--${variant} badge--${size} ${className}`.trim()}>
      {icon && <span className="badge-icon">{icon}</span>}
      {children}
    </span>
  );
}