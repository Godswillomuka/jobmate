import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Link } from 'react-router-dom';
import './AboutPage.css';

export default function AboutPage() {
  return (
    <div className="about-page-wrapper">
      <Header />
      
      <main className="about-page">
        {/* Hero */}
        <section className="about-hero">
          <div className="hero-bg">
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&q=80" alt="Team collaboration" className="hero-image" />
            <div className="hero-overlay"></div>
          </div>
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title">Building Kenya's Future,<br />One Gig at a Time</h1>
              <p className="hero-subtitle">
                JobMate was born from a simple belief: every skill deserves opportunity, and every need deserves a solution. We're bridging the gap between talent and opportunity across East Africa.
              </p>
              <div className="hero-actions">
                <Link to="/register" className="btn btn-primary">Join JobMate</Link>
                <Link to="/contact" className="btn btn-secondary">Get in Touch</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="about-story">
          <div className="container">
            <div className="story-grid">
              <div className="story-image">
                <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80" alt="Community meeting" />
              </div>
              <div className="story-content">
                <span className="section-tag">Our Story</span>
                <h2 className="section-title">Why We Started JobMate</h2>
                <p>
                  In 2023, we noticed a growing disconnect: thousands of skilled Kenyans struggling to find consistent work, while households and businesses struggled to find reliable help. Traditional platforms charged high fees, ignored cash-based economies, and overlooked informal gigs.
                </p>
                <p>
                  We built JobMate to change that. A platform that respects the 300 KSH plumber as much as the 150K web developer. One that integrates M-Pesa, verifies users, and ensures fair pay for everyone.
                </p>
                <div className="story-highlights">
                  <div className="highlight-item">
                    <span className="highlight-number">2023</span>
                    <span className="highlight-label">Founded in Nairobi</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-number">50K+</span>
                    <span className="highlight-label">Users Onboarded</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-number">100%</span>
                    <span className="highlight-label">Kenyan-Owned</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="about-mission-vision">
          <div className="container">
            <div className="mission-vision-grid">
              <div className="mv-card mission">
                <div className="mv-icon">
                  <svg viewBox="0 0 24 24" width="32" height="32"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"/></svg>
                </div>
                <h3>Our Mission</h3>
                <p>To democratize work by connecting every skilled individual with meaningful opportunities, while ensuring secure, transparent, and fair transactions for all.</p>
              </div>
              <div className="mv-card vision">
                <div className="mv-icon">
                  <svg viewBox="0 0 24 24" width="32" height="32"><path fill="currentColor" d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
                </div>
                <h3>Our Vision</h3>
                <p>To become East Africa's most trusted gig marketplace, empowering millions to earn, grow, and thrive in the digital economy.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="about-values">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">What Drives Us</span>
              <h2 className="section-title">Our Core Values</h2>
              <p className="section-subtitle">The principles that guide every decision we make</p>
            </div>
            <div className="values-grid">
              <div className="value-card">
                <div className="value-icon">
                  <svg viewBox="0 0 24 24" width="32" height="32"><path fill="currentColor" d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
                </div>
                <h4>Trust & Transparency</h4>
                <p>No hidden fees, clear pricing, and verified profiles. We build relationships on honesty.</p>
              </div>
              <div className="value-card">
                <div className="value-icon">
                  <svg viewBox="0 0 24 24" width="32" height="32"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/></svg>
                </div>
                <h4>Fairness for All</h4>
                <p>From KSH 300 errands to enterprise contracts, every worker deserves respect and timely pay.</p>
              </div>
              <div className="value-card">
                <div className="value-icon">
                  <svg viewBox="0 0 24 24" width="32" height="32"><path fill="currentColor" d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"/></svg>
                </div>
                <h4>Innovation</h4>
                <p>We leverage technology to solve real problems: AI matching, M-Pesa integration, and mobile-first design.</p>
              </div>
              <div className="value-card">
                <div className="value-icon">
                  <svg viewBox="0 0 24 24" width="32" height="32"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
                </div>
                <h4>Community First</h4>
                <p>We're Kenyan-built, Kenyan-run. We invest in local talent, support, and economic growth.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="about-impact">
          <div className="container">
            <div className="impact-grid">
              <div className="impact-stat">
                <span className="impact-number">125K+</span>
                <span className="impact-label">Jobs Completed</span>
              </div>
              <div className="impact-stat">
                <span className="impact-number">KSH 450M</span>
                <span className="impact-label">Paid to Workers</span>
              </div>
              <div className="impact-stat">
                <span className="impact-number">47</span>
                <span className="impact-label">Counties Served</span>
              </div>
              <div className="impact-stat">
                <span className="impact-number">98%</span>
                <span className="impact-label">Satisfaction Rate</span>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="about-team">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">Our Team</span>
              <h2 className="section-title">Meet the People Behind JobMate</h2>
              <p className="section-subtitle">A diverse team passionate about solving Africa's employment challenges</p>
            </div>
            <div className="team-grid">
              <div className="team-card">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80" alt="CEO" />
                <h4>Brian Otieno</h4>
                <p className="team-role">Co-Founder & CEO</p>
                <p className="team-bio">Former fintech product lead. Believes technology should serve the informal economy.</p>
              </div>
              <div className="team-card">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80" alt="COO" />
                <h4>Amina Hassan</h4>
                <p className="team-role">Co-Founder & COO</p>
                <p className="team-bio">Operations expert with 8 years scaling gig platforms across East Africa.</p>
              </div>
              <div className="team-card">
                <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80" alt="CTO" />
                <h4>David Kimani</h4>
                <p className="team-role">Chief Technology Officer</p>
                <p className="team-bio">Full-stack architect. Built secure payment systems for 500K+ users.</p>
              </div>
              <div className="team-card">
                <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80" alt="Head of Trust" />
                <h4>Faith Wambui</h4>
                <p className="team-role">Head of Trust & Safety</p>
                <p className="team-bio">Ensures every transaction is secure, fair, and dispute-free.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="about-cta">
          <div className="cta-bg">
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80" alt="Background" />
            <div className="cta-overlay"></div>
          </div>
          <div className="container">
            <div className="cta-content">
              <h2>Ready to Be Part of the Movement?</h2>
              <p>Whether you're looking for work or looking to hire, JobMate is your bridge to opportunity. Join thousands of Kenyans building a fairer economy.</p>
              <div className="cta-buttons">
                <Link to="/register" className="btn btn-primary btn-large">Create Free Account</Link>
                <Link to="/contact" className="btn btn-secondary btn-large">Contact Our Team</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}