import Header from '../components/Header';
import './LandingPage.css';

export default function LandingPage() {
  return (
    <div className="landing-page">
      <Header />
      
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-pattern"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Find Your Dream Job or <span className="highlight">Hire Top Talent</span>
            </h1>
            <p className="hero-subtitle">
              Connect with thousands of opportunities. Whether you're looking for your next career move or seeking skilled professionals, JobMate makes it simple.
            </p>
            
            {/* Search Bar - Hero Section */}
            <div className="hero-search">
              <div className="search-wrapper">
                <select className="search-category">
                  <option value="jobs">Find Jobs</option>
                  <option value="talent">Find Talent</option>
                </select>
                <input 
                  type="text" 
                  placeholder="Search by job title, skills, or company..."
                  className="search-input"
                />
                <button className="search-btn">
                  <svg viewBox="0 0 24 24" width="22" height="22">
                    <path fill="currentColor" d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                  </svg>
                  Search
                </button>
              </div>
              <div className="search-tags">
                <span>Popular:</span>
                <button className="tag">Web Development</button>
                <button className="tag">Design</button>
                <button className="tag">Marketing</button>
                <button className="tag">Writing</button>
              </div>
            </div>

            <div className="hero-stats">
              <div className="stat">
                <div className="stat-number">10,000+</div>
                <div className="stat-label">Active Jobs</div>
              </div>
              <div className="stat">
                <div className="stat-number">50,000+</div>
                <div className="stat-label">Talented Professionals</div>
              </div>
              <div className="stat">
                <div className="stat-number">5,000+</div>
                <div className="stat-label">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">How JobMate Works</h2>
            <p className="section-subtitle">Get started in three simple steps</p>
          </div>
          
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-icon">1</div>
              <h3>Create Your Profile</h3>
              <p>Sign up and build your professional profile showcasing your skills and experience.</p>
            </div>
            <div className="step-card">
              <div className="step-icon">2</div>
              <h3>Search & Apply</h3>
              <p>Browse thousands of jobs or post your project to find the perfect match.</p>
            </div>
            <div className="step-card">
              <div className="step-icon">3</div>
              <h3>Get Hired</h3>
              <p>Connect with employers or clients and start working on exciting projects.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Choose JobMate</h2>
            <p className="section-subtitle">The platform that puts you first</p>
          </div>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Smart Matching</h3>
              <p>Our AI-powered system connects you with the most relevant opportunities.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Secure Payments</h3>
              <p>Protected transactions ensure you get paid on time, every time.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Fast Hiring</h3>
              <p>Find your perfect match in days, not weeks with our streamlined process.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌟</div>
              <h3>Verified Talent</h3>
              <p>All professionals are vetted to ensure quality and reliability.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💬</div>
              <h3>24/7 Support</h3>
              <p>Our dedicated team is always here to help you succeed.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Track Progress</h3>
              <p>Monitor your applications and projects with detailed analytics.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Get Started?</h2>
            <p>Join thousands of professionals and companies already using JobMate</p>
            <div className="cta-buttons">
              <button className="cta-btn primary">Find a Job</button>
              <button className="cta-btn secondary">Hire Talent</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <h4>For Job Seekers</h4>
              <ul>
                <li><a href="/jobs">Browse Jobs</a></li>
                <li><a href="/how-it-works">How It Works</a></li>
                <li><a href="/career-advice">Career Advice</a></li>
                <li><a href="/resume-builder">Resume Builder</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>For Employers</h4>
              <ul>
                <li><a href="/post-job">Post a Job</a></li>
                <li><a href="/browse-talent">Browse Talent</a></li>
                <li><a href="/pricing">Pricing</a></li>
                <li><a href="/recruiting-solutions">Recruiting Solutions</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Company</h4>
              <ul>
                <li><a href="/about">About Us</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/press">Press</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Support</h4>
              <ul>
                <li><a href="/help">Help Center</a></li>
                <li><a href="/safety">Safety</a></li>
                <li><a href="/terms">Terms of Service</a></li>
                <li><a href="/privacy">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 JobMate. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}