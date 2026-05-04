import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import './NotFoundPage.css';

export default function NotFoundPage() {
  return (
    <div className="not-found">
      <div className="not-found-content">
        <h1>404</h1>
        <p>Page not found. Let's get you back on track.</p>
        <div className="not-found-actions">
          <Button as={Link} to="/" variant="primary">Go Home</Button>
          <Button as={Link} to="/jobs" variant="outline">Browse Jobs</Button>
        </div>
      </div>
    </div>
  );
}