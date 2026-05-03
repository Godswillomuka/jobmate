import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, 200);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">job<span>Mate</span></Link>
      </div>

      <nav className="nav">
        <div 
          className="dropdown" 
          ref={dropdownRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button 
            className="dropdown-toggle"
            onClick={() => setOpen(!open)}
            onFocus={() => setOpen(true)}
            aria-expanded={open}
          >
            Explore
          </button>

          {open && (
            <div className="dropdown-menu">
              <Link to="/about" onClick={() => setOpen(false)}>About Us</Link>
              <Link to="/how-it-works" onClick={() => setOpen(false)}>How It Works</Link>
              <Link to="/services" onClick={() => setOpen(false)}>Services</Link>
              <Link to="/blog" onClick={() => setOpen(false)}>Blog</Link>
            </div>
          )}
        </div>

        <Link to="/jobs" className="nav-link">Browse Jobs</Link>
        <Link to="/seller" className="nav-link">Become a Seller</Link>
        <Link to="/contact" className="nav-link">Contact Us</Link>
      </nav>

      <div className="auth-buttons">
        <Link to="/login" className="nav-link">Sign In</Link>
        <Link to="/register" className="signup-btn">Sign Up</Link>
      </div>
    </header>
  );
}