// pages/NotFoundPage.jsx
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import './NotFoundPage.css';

export default function NotFoundPage() {
  return (
    <div className="page-wrapper">
      <Header />
      
      <main className="not-found-main">
        <div className="container">
          <div className="not-found-content">
            <div className="not-found-icon">404</div>
            <h1>Page Not Found</h1>
            <p>The page you're looking for doesn't exist or has been moved.</p>
            <div className="not-found-actions">
              <Button as={Link} to="/" variant="primary">Go Home</Button>
              <Button as={Link} to="/jobs" variant="outline">Browse Jobs</Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}