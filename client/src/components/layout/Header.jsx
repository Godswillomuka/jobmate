import { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 200);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
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
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-inner">
          {/* Logo - Text Based */}
          <div className="logo">
            <Link to="/">
              <span className="logo-text">job<span className="logo-highlight">Mate</span></span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="nav-desktop">
            <div
              className="dropdown"
              ref={dropdownRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="dropdown-toggle"
                onClick={() => setOpen(!open)}
                aria-expanded={open}
                aria-haspopup="true"
              >
                Explore
                <svg className="dropdown-arrow" viewBox="0 0 24 24" width="16" height="16">
                  <path fill="currentColor" d="M7 10l5 5 5-5H7z" />
                </svg>
              </button>

              <div className={`dropdown-menu ${open ? 'open' : ''}`}>
                <Link to="/about" className="dropdown-item" onClick={() => setOpen(false)}>
                  <div className="dropdown-item-icon">
                    <svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                  </div>
                  <div className="dropdown-item-content">
                    <div className="dropdown-item-title">About Us</div>
                    <div className="dropdown-item-desc">Learn more about our mission</div>
                  </div>
                </Link>
                <Link to="/how-it-works" className="dropdown-item" onClick={() => setOpen(false)}>
                  <div className="dropdown-item-icon">
                    <svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                  </div>
                  <div className="dropdown-item-content">
                    <div className="dropdown-item-title">How It Works</div>
                    <div className="dropdown-item-desc">Discover how JobMate works</div>
                  </div>
                </Link>
                <Link to="/services" className="dropdown-item" onClick={() => setOpen(false)}>
                  <div className="dropdown-item-icon">
                    <svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/></svg>
                  </div>
                  <div className="dropdown-item-content">
                    <div className="dropdown-item-title">Services</div>
                    <div className="dropdown-item-desc">Explore our solutions</div>
                  </div>
                </Link>
                <Link to="/blog" className="dropdown-item" onClick={() => setOpen(false)}>
                  <div className="dropdown-item-icon">
                    <svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 19V5h14v14H5zm7-9h2v2h-2v-2zm0 4h2v2h-2v-2z"/></svg>
                  </div>
                  <div className="dropdown-item-content">
                    <div className="dropdown-item-title">Blog</div>
                    <div className="dropdown-item-desc">Read insights & updates</div>
                  </div>
                </Link>
              </div>
            </div>

            <Link to="/jobs" className="nav-link">Browse Jobs</Link>
            <Link to="/seller" className="nav-link">Become a Seller</Link>
            <Link to="/prices" className="nav-link">Pricing</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </nav>

          {/* Auth Buttons */}
          <div className="auth-buttons">
            <NavLink to="/login" className={({ isActive }) => `sign-in-link ${isActive ? 'active' : ''}`}>
              Sign In
            </NavLink>
            <Link to="/register" className="signup-btn">Sign Up</Link>
            
            <button 
              className="mobile-menu-btn" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              aria-label="Toggle menu"
            >
              <svg viewBox="0 0 24 24" width="24" height="24">
                <path fill="currentColor" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-menu-content">
            <Link to="/about" className="mobile-nav-item" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
            <Link to="/how-it-works" className="mobile-nav-item" onClick={() => setMobileMenuOpen(false)}>How It Works</Link>
            <Link to="/services" className="mobile-nav-item" onClick={() => setMobileMenuOpen(false)}>Services</Link>
            <Link to="/blog" className="mobile-nav-item" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
            <Link to="/jobs" className="mobile-nav-item" onClick={() => setMobileMenuOpen(false)}>Browse Jobs</Link>
            <Link to="/seller" className="mobile-nav-item" onClick={() => setMobileMenuOpen(false)}>Become a Seller</Link>
            <Link to="/contact" className="mobile-nav-item" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
            <div className="mobile-auth">
              <Link to="/login" className="mobile-sign-in">Sign In</Link>
              <Link to="/register" className="mobile-signup-btn">Sign Up</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}