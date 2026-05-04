import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Link } from 'react-router-dom';
import './LandingPage.css';

export default function LandingPage() {
  return (
    <div className="landing-page-wrapper">
      <Header />
      
      <main className="landing-page">
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
              {/* Hero Title */}
              <h1 className="hero-title">
                Find Jobs.<br />
                <span className="highlight">Hire Talent. Get Things Done</span>
              </h1>
              
              {/* Hero Subtitle */}
              <p className="hero-subtitle">
                "Your go-to workforce for every task. Whether it's daily errands, heavy manual labor, or professional tech contracts—get competitive bids in minutes and pay securely once satisfied."
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
                    placeholder="house help, web developer, courier, accountant..." 
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
                  <button className="tag">House Help</button>
                  <button className="tag">Courier</button>
                  <button className="tag">Web Dev</button>
                  <button className="tag">Plumbing</button>
                </div>
              </div>

              {/* Stats Row */}
              <div className="hero-stats">
                <div className="stat-item">
                  <span className="stat-value">100+</span>
                  <span className="stat-text">Active Talents</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <span className="stat-value">1000+</span>
                  <span className="stat-text">Jobs Posted Weekly</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <span className="stat-value">300 KSH</span>
                  <span className="stat-text">Minimum Gig Value</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="hero-cta">
                <Link to="/register-worker" className="btn btn-primary">Find Work & Bid</Link>
                <Link to="/register-seller" className="btn btn-secondary">Post a Job — It's Free</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Trusted By */}
        <section className="trusted-by">
          <div className="container">
            <p className="trusted-label">Trusted by individuals & businesses</p>
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
              <h2 className="section-title">Post. Bid. Hire. Get Paid.</h2>
              <p className="section-subtitle">Simple, transparent, and built for everyone</p>
            </div>
            <div className="steps-grid">
              <div className="step-card">
                <div className="step-image">
                  <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80" alt="Post Job" />
                </div>
                <div className="step-number">01</div>
                <h3>Post Your Job</h3>
                <p>Describe what you need, set your budget (even 300 KSH), and choose your timeline. Takes less than 2 minutes.</p>
                <ul className="step-features">
                  <li>Free to post</li>
                  <li>Flexible budgets</li>
                  <li>Instant visibility</li>
                </ul>
              </div>
              <div className="step-card">
                <div className="step-image">
                  <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80" alt="Get Bids" />
                </div>
                <div className="step-number">02</div>
                <h3>Talent Bids & Chats</h3>
                <p>Skilled workers apply with their rates and portfolio. Chat directly, negotiate terms, and pick your perfect match.</p>
                <ul className="step-features">
                  <li>Compare bids side-by-side</li>
                  <li>Chat before hiring</li>
                  <li>Verified profiles</li>
                </ul>
              </div>
              <div className="step-card">
                <div className="step-image">
                  <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80" alt="Secure Payment" />
                </div>
                <div className="step-number">03</div>
                <h3>Secure & Get Paid</h3>
                <p>Pay securely via M-Pesa, card, or bank transfer. Funds are held in escrow until you're satisfied. Everyone wins.</p>
                <ul className="step-features">
                  <li>Escrow protection</li>
                  <li>Multiple payment options</li>
                  <li>Dispute resolution</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="features">
          <div className="container">
            <div className="features-layout">
              <div className="features-content">
                <h2 className="section-title">Built for Trust, Speed & Fair Pay</h2>
                <p className="section-subtitle">We removed the middlemen, fixed payment delays, and made hiring accessible to everyone — from homeowners to startups.</p>
                <div className="features-list">
                  <div className="feature-item">
                    <div className="feature-icon">
                      <svg viewBox="0 0 24 24" width="32" height="32"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                    </div>
                    <div className="feature-text">
                      <h4>Open Bidding System</h4>
                      <p>Talent competes fairly. You compare rates, reviews, and portfolios before hiring — no guesswork.</p>
                    </div>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">
                      <svg viewBox="0 0 24 24" width="32" height="32"><path fill="currentColor" d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/></svg>
                    </div>
                    <div className="feature-text">
                      <h4>Secure Payments</h4>
                      <p>Funds held in escrow until job completion. Pay via M-Pesa, card, or bank — no more "I'll pay later".</p>
                    </div>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">
                      <svg viewBox="0 0 24 24" width="32" height="32"><path fill="currentColor" d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/></svg>
                    </div>
                    <div className="feature-text">
                      <h4>24/7 Local Support</h4>
                      <p>Real humans ready to help via WhatsApp, call, or chat. We're here when you need us.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="features-image">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" alt="Team working" />
                <div className="features-stats-card">
                  <div className="stats-card-number">96%</div>
                  <div className="stats-card-label">Jobs Completed On Time</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="categories">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Find Exactly What You Need</h2>
            </div>
            <div className="categories-grid">
              <div className="category-card">
                <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&q=80" alt="Home & Cleaning" />
                <div className="category-overlay">
                  <h3>Home & Cleaning</h3>
                  <p>House help, laundry, deep cleaning</p>
                </div>
              </div>
              <div className="category-card">
                <img src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400&q=80" alt="Courier & Errands" />
                <div className="category-overlay">
                  <h3>Courier & Errands</h3>
                  <p>Delivery, pickup, shopping, queuing</p>
                </div>
              </div>
              <div className="category-card">
                <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&q=80" alt="Skilled Trades" />
                <div className="category-overlay">
                  <h3>Skilled Trades</h3>
                  <p>Plumbing, electrical, carpentry</p>
                </div>
              </div>
              <div className="category-card">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80" alt="Tech & Digital" />
                <div className="category-overlay">
                  <h3>Tech & Digital</h3>
                  <p>Web dev, design, social media</p>
                </div>
              </div>
              <div className="category-card">
                <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&q=80" alt="Finance & Admin" />
                <div className="category-overlay">
                  <h3>Finance & Admin</h3>
                  <p>Bookkeeping, tax, virtual assistant</p>
                </div>
              </div>
              <div className="category-card">
                <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&q=80" alt="Events & Hospitality" />
                <div className="category-overlay">
                  <h3>Events & Hospitality</h3>
                  <p>Catering, ushers, MC, setup</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="testimonials">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Hear From People Like You</h2>
            </div>
            <div className="testimonials-grid">
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <div className="testimonial-rating">★★★★★</div>
                  <p>"I post cleaning jobs every week. I set my budget at 500 KSH, get 3 bids in minutes, and always get reliable help. JobMate is a lifesaver."</p>
                </div>
                <div className="testimonial-author">
                  <img src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&q=80" alt="Wanjiku M." />
                  <div className="author-info">
                    <h4>Wanjiku M.</h4>
                    <p>Homeowner, Nairobi</p>
                  </div>
                </div>
              </div>
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <div className="testimonial-rating">★★★★★</div>
                  <p>"As a plumber, I used to wait days for work. Now I bid on jobs daily. Made 45K last month just from weekend gigs. Highly recommend."</p>
                </div>
                <div className="testimonial-author">
                  <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80" alt="Kevin O." />
                  <div className="author-info">
                    <h4>Kevin O.</h4>
                    <p>Plumber, Kisumu</p>
                  </div>
                </div>
              </div>
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <div className="testimonial-rating">★★★★★</div>
                  <p>"Hired a web developer for 120K. The escrow system gave me peace of mind. He delivered on time, and I released payment instantly."</p>
                </div>
                <div className="testimonial-author">
                  <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&q=80" alt="Amina K." />
                  <div className="author-info">
                    <h4>Amina K.</h4>
                    <p>Startup Founder, Mombasa</p>
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
              <h2>Stop Searching. Start Earning or Getting Help.</h2>
              <p>Join thousands of people already posting jobs, bidding fairly, and getting paid securely. No hidden fees. No waiting.</p>
              <div className="cta-trust">
                <div className="trust-item">
                  <svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                  <span>Free to join</span>
                </div>
                <div className="trust-item">
                  <svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                  <span>M-Pesa ready</span>
                </div>
                <div className="trust-item">
                  <svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                  <span>Verified talent</span>
                </div>
                <div className="trust-item">
                  <svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}