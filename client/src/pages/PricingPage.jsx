import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import './PricingPage.css';

export default function PricingPage() {
  return (
    <div className="pricing-wrapper">
      <Header />
      
      <main className="pricing-container">
        {/* Header Section */}
        <section className="pricing-header">
          <div className="container">
            <span className="section-tag">Pricing</span>
            <h1 className="pricing-title">Flexible pricing that scales with your needs</h1>
            <p className="pricing-subtitle">
              Access skilled experts for one-time errands or complex, ongoing industrial work. 
              It’s free to get started—pay only when you hire.
            </p>
            <div className="worker-cta">
              Looking to work? <a href="/signup">Join as a freelancer</a>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="pricing-cards container">
          <div className="card basic-card">
            <div className="card-top">
              <h3>Basic</h3>
              <p>Hire for occasional, project-based work</p>
              <button className="btn-outline-dark">Get started for free</button>
            </div>
            <div className="card-body">
              <h4>Basic includes:</h4>
              <ul>
                <li><strong>Marketplace access</strong>—skilled talent across all sectors</li>
                <li><strong>Talent profiles</strong>—portfolios, ratings, and history</li>
                <li><strong>Hiring tools</strong>—proposals and terms in one place</li>
                <li><strong>Project workspace</strong>—messages, files, and status</li>
                <li><strong>Protected payments</strong>—escrow protection</li>
              </ul>
            </div>
            <div className="card-footer">
              <div className="fee-circle">5%</div>
              <p className="fee-text">service fee</p>
              <p className="fee-example">For example, a 1,000 KSH contract would cost 1,050 KSH total</p>
            </div>
          </div>

          <div className="card premium-card featured">
            <div className="popular-badge">Popular</div>
            <div className="card-top">
              <h3>Business Plus</h3>
              <p>Hire for complex, ongoing work at scale</p>
              <button className="btn-primary">Get started for free</button>
            </div>
            <div className="card-body">
              <h4>Everything in Basic, plus:</h4>
              <ul>
                <li><strong>Curated shortlists</strong>—AI-powered talent matching</li>
                <li><strong>Expert-Vetted talent</strong>—access to top 1% pros</li>
                <li><strong>Centralized billing</strong>—keep team spend in one place</li>
                <li><strong>Team workspace</strong>—shared hiring & permissions</li>
                <li><strong>Premium Support</strong>—24/7 priority assistance</li>
              </ul>
            </div>
            <div className="card-footer">
              <div className="fee-circle">10%</div>
              <p className="fee-text">service fee</p>
              <p className="fee-example">For example, a 1,000 KSH contract would cost 1,100 KSH total</p>
            </div>
          </div>
        </section>

        {/* Detailed Comparison Table */}
        <section className="comparison-section container">
          <h2 className="table-title">Compare Key Features</h2>
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Key Features</th>
                <th>Basic</th>
                <th>Business Plus</th>
              </tr>
            </thead>
            <tbody>
              <tr className="table-category">
                <td colSpan="3">Discover trusted talent</td>
              </tr>
              <tr>
                <td>Access to global marketplace</td>
                <td>✓</td>
                <td>✓</td>
              </tr>
              <tr>
                <td>ID-verified talent only</td>
                <td>✓</td>
                <td>✓</td>
              </tr>
              <tr>
                <td>Expert-Vetted talent</td>
                <td>—</td>
                <td>✓</td>
              </tr>
              
              <tr className="table-category">
                <td colSpan="3">Collaborate and hire</td>
              </tr>
              <tr>
                <td>Direct messages</td>
                <td>5 per day</td>
                <td>Unlimited</td>
              </tr>
              <tr>
                <td>Team management tools</td>
                <td>—</td>
                <td>✓</td>
              </tr>
              <tr>
                <td>24/7 Customer support</td>
                <td>Standard</td>
                <td>Premium</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Social Proof Section */}
        <section className="pricing-testimonial container">
          <div className="testimonial-box">
            <div className="quote-icon">“</div>
            <div className="testimonial-text">
              <h3>How JobMate helped us scale</h3>
              <p>"Business Plus scales what headcount can't. We brought in specialized 3D technicians and branding experts across departments instantly."</p>
              <button className="btn-text">Try Business Plus →</button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}