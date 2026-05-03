import Header from '../components/Header';
import Footer from '../components/Footer';
import './LandingPage.css';

export default function LandingPage() {
  return (
    <div className="landing-page">
      <Header />
      
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg">
          <img 
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&q=80" 
            alt="Team collaboration" 
            className="hero-image"
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Find Your Dream Job or <span className="highlight">Hire Top Talent</span>
            </h1>
            <p className="hero-subtitle">
              Connect with thousands of opportunities. Whether you're looking for your next career move or seeking skilled professionals, JobMate makes it simple.
            </p>
            
            {/* Search Bar */}
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
              <div className="stat-divider"></div>
              <div className="stat">
                <div className="stat-number">50,000+</div>
                <div className="stat-label">Talented Professionals</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat">
                <div className="stat-number">5,000+</div>
                <div className="stat-label">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="trusted-by">
        <div className="container">
          <p className="trusted-label">Trusted by leading companies worldwide</p>
          <div className="company-logos">
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Microsoft_Logo.svg" alt="Microsoft" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" alt="IBM" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple" />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">How It Works</span>
            <h2 className="section-title">Get Started in Three Simple Steps</h2>
            <p className="section-subtitle">Your path to success starts here</p>
          </div>
          
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-image">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80" alt="Create Profile" />
              </div>
              <div className="step-number">01</div>
              <h3>Create Your Profile</h3>
              <p>Sign up and build your professional profile showcasing your skills, experience, and portfolio.</p>
              <ul className="step-features">
                <li>Free to join</li>
                <li>Quick setup</li>
                <li>Verified badges</li>
              </ul>
            </div>
            <div className="step-card">
              <div className="step-image">
                <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80" alt="Search & Apply" />
              </div>
              <div className="step-number">02</div>
              <h3>Search & Apply</h3>
              <p>Browse thousands of jobs or post your project to find the perfect match using our smart filters.</p>
              <ul className="step-features">
                <li>AI-powered matching</li>
                <li>Advanced filters</li>
                <li>Instant notifications</li>
              </ul>
            </div>
            <div className="step-card">
              <div className="step-image">
                <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80" alt="Get Hired" />
              </div>
              <div className="step-number">03</div>
              <h3>Get Hired</h3>
              <p>Connect with employers or clients, negotiate terms, and start working on exciting projects.</p>
              <ul className="step-features">
                <li>Secure payments</li>
                <li>24/7 support</li>
                <li>Long-term opportunities</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="features-layout">
            <div className="features-content">
              <span className="section-tag">Why Choose Us</span>
              <h2 className="section-title">The Platform That Puts You First</h2>
              <p className="section-subtitle">We've built JobMate with cutting-edge technology and user experience in mind.</p>
              
              <div className="features-list">
                <div className="feature-item">
                  <div className="feature-icon">
                    <svg viewBox="0 0 24 24" width="32" height="32"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                  </div>
                  <div className="feature-text">
                    <h4>Smart Matching</h4>
                    <p>Our AI-powered system connects you with the most relevant opportunities based on your skills and preferences.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">
                    <svg viewBox="0 0 24 24" width="32" height="32"><path fill="currentColor" d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/></svg>
                  </div>
                  <div className="feature-text">
                    <h4>Secure Payments</h4>
                    <p>Protected transactions with escrow protection ensure you get paid on time, every time.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">
                    <svg viewBox="0 0 24 24" width="32" height="32"><path fill="currentColor" d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/></svg>
                  </div>
                  <div className="feature-text">
                    <h4>Fast Hiring</h4>
                    <p>Find your perfect match in days, not weeks with our streamlined hiring process.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="features-image">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" alt="Team working together" />
              <div className="features-stats-card">
                <div className="stats-card-number">98%</div>
                <div className="stats-card-label">Client Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Browse Categories</span>
            <h2 className="section-title">Explore Top Job Categories</h2>
          </div>
          
          <div className="categories-grid">
            <div className="category-card">
              <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&q=80" alt="Development" />
              <div className="category-overlay">
                <h3>Development</h3>
                <p>2,450+ jobs</p>
              </div>
            </div>
            <div className="category-card">
              <img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&q=80" alt="Design" />
              <div className="category-overlay">
                <h3>Design</h3>
                <p>1,890+ jobs</p>
              </div>
            </div>
            <div className="category-card">
              <img src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=400&q=80" alt="Marketing" />
              <div className="category-overlay">
                <h3>Marketing</h3>
                <p>1,320+ jobs</p>
              </div>
            </div>
            <div className="category-card">
              <img src="https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&q=80" alt="Writing" />
              <div className="category-overlay">
                <h3>Writing</h3>
                <p>980+ jobs</p>
              </div>
            </div>
            <div className="category-card">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80" alt="Data Science" />
              <div className="category-overlay">
                <h3>Data Science</h3>
                <p>756+ jobs</p>
              </div>
            </div>
            <div className="category-card">
              <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&q=80" alt="Business" />
              <div className="category-overlay">
                <h3>Business</h3>
                <p>1,240+ jobs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Testimonials</span>
            <h2 className="section-title">What Our Users Say</h2>
          </div>
          
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <div className="testimonial-rating">★★★★★</div>
                <p>"JobMate helped me land my dream job within 2 weeks. The platform is intuitive and the matching system is incredibly accurate."</p>
              </div>
              <div className="testimonial-author">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80" alt="Sarah Johnson" />
                <div className="author-info">
                  <h4>Sarah Johnson</h4>
                  <p>Software Engineer at Google</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <div className="testimonial-rating">★★★★★</div>
                <p>"As a hiring manager, I've found top-tier talent on JobMate. The quality of candidates is exceptional and the process is seamless."</p>
              </div>
              <div className="testimonial-author">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80" alt="Michael Chen" />
                <div className="author-info">
                  <h4>Michael Chen</h4>
                  <p>HR Director at Microsoft</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <div className="testimonial-rating">★★★★★</div>
                <p>"The best platform for freelancers! I've built a successful career through JobMate with consistent high-paying projects."</p>
              </div>
              <div className="testimonial-author">
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80" alt="Emily Rodriguez" />
                <div className="author-info">
                  <h4>Emily Rodriguez</h4>
                  <p>Freelance Designer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="cta-bg">
          <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80" alt="Background" />
          <div className="cta-overlay"></div>
        </div>
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Get Started?</h2>
            <p>Join thousands of professionals and companies already using JobMate to achieve their goals.</p>
            <div className="cta-buttons">
              <button className="cta-btn primary">Find a Job</button>
              <button className="cta-btn secondary">Hire Talent</button>
            </div>
            <div className="cta-trust">
              <div className="trust-item">
                <svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                <span>Free to join</span>
              </div>
              <div className="trust-item">
                <svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                <span>No credit card required</span>
              </div>
              <div className="trust-item">
                <svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}