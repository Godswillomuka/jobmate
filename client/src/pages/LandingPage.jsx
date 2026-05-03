import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import './LandingPage.css';

// Small reusable component for the scrollable feed
const JobCard = ({ title, company, location, salary, isNew }) => (
  <div className="job-card">
    {isNew && <span className="badge">New</span>}
    <h3>{title}</h3>
    <p className="company">{company}</p>
    <div className="job-footer">
      <span>📍 {location}</span>
      <span className="salary">{salary}</span>
    </div>
  </div>
);

const LandingPage = () => {
  // Reveal animation logic
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
    <div className="landing-wrapper">
      <nav className="navbar">
        <div className="logo">JobMate<span>🚀</span></div>
        <div className="nav-actions">
          <a href="#jobs">Browse</a>
          <button className="btn-secondary">Login</button>
          <button className="btn-primary">Sign Up</button>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content reveal">
          <h1>Find your next <br /><span>Great Gig.</span></h1>
          <p>Instant connections between local businesses and top-tier workers.</p>
          <div className="hero-search">
            <input type="text" placeholder="What are you looking for?" />
            <button>Find Jobs</button>
          </div>
        </div>
      </section>

      <section className="scroll-container" id="jobs">
        <div className="scroll-header reveal">
          <h2>Trending Jobs</h2>
          <p>Slide to explore open shifts in your area</p>
        </div>
        
        <div className="horizontal-feed">
          <JobCard title="Head Chef" company="Blue Bistro" location="London" salary="$35/hr" isNew={true} />
          <JobCard title="Warehouse Lead" company="LogiStore" location="Manchester" salary="$22/hr" />
          <JobCard title="Brand Ambassdor" company="Spark Events" location="Bristol" salary="$20/hr" isNew={true} />
          <JobCard title="Delivery Driver" company="QuickShip" location="Leeds" salary="$19/hr" />
          <JobCard title="Night Security" company="SafeWatch" location="Liverpool" salary="$24/hr" />
        </div>
      </section>

      <section className="features reveal">
        <div className="feat-card">
          <div className="feat-icon">⚡</div>
          <h3>One-Tap Apply</h3>
          <p>No lengthy resumes. Your profile is your application.</p>
        </div>
        <div className="feat-card">
          <div className="feat-icon">💳</div>
          <h3>Fast Payouts</h3>
          <p>Funds delivered to your account within 24 hours of shift completion.</p>
        </div>
      </section>

      <footer className="main-footer">
        <p>© 2026 JobMate Platform. All rights reserved.</p>
      </footer>
    </div>
    </>
  );
};

export default LandingPage;