import { useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Link } from 'react-router-dom';
import { 
  UserPlus, Briefcase, Search, CheckCircle, 
  Shield, Clock, MessageSquare, CreditCard 
} from 'lucide-react';
import './HowItWorksPage.css';

export default function HowItWorksPage() {
  const [activePath, setActivePath] = useState('worker');

  return (
    <div className="howitworks-page-wrapper">
      <Header />
      
      <main className="howitworks-page">
        {/* Hero */}
        <section className="hiw-hero">
          <div className="hero-bg">
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80" alt="Professionals collaborating" className="hero-image" />
            <div className="hero-overlay"></div>
          </div>
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title">How JobMate Works</h1>
              <p className="hero-subtitle">
                A transparent, secure process built for real work. Choose your role to see exactly how the platform operates.
              </p>
              <div className="hero-path-selector">
                <button 
                  className={`path-btn ${activePath === 'worker' ? 'active' : ''}`} 
                  onClick={() => setActivePath('worker')}
                >
                  <UserPlus size={18} />
                  <span>I Need Work</span>
                </button>
                <button 
                  className={`path-btn ${activePath === 'employer' ? 'active' : ''}`} 
                  onClick={() => setActivePath('employer')}
                >
                  <Briefcase size={18} />
                  <span>I Need Talent</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Worker Path */}
        {activePath === 'worker' && (
          <section className="hiw-path-section" id="worker-path">
            <div className="container">
              <div className="path-header">
                <span className="section-tag">For Job Seekers</span>
                <h2 className="section-title">From Signup to Payment in 3 Steps</h2>
                <p className="section-subtitle">No gatekeeping. No hidden fees. Just clear steps to start earning.</p>
              </div>
              
              <div className="steps-flow">
                <div className="step-block">
                  <div className="step-badge">01</div>
                  <div className="step-details">
                    <h3>Build Your Profile</h3>
                    <p>Add your skills, upload past work, and set your availability. Verified profiles get 3x more job invitations.</p>
                    <ul className="step-checklist">
                      <li>Free account creation</li>
                      <li>Skill tags & portfolio upload</li>
                      <li>Optional ID verification badge</li>
                    </ul>
                  </div>
                  <div className="step-image">
                    <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80" alt="Profile setup" />
                  </div>
                </div>

                <div className="step-block">
                  <div className="step-badge">02</div>
                  <div className="step-details">
                    <h3>Browse & Submit Bids</h3>
                    <p>Filter jobs by location, budget, or skill. Send a custom proposal with your rate and timeline. Clients see your bid instantly.</p>
                    <ul className="step-checklist">
                      <li>Smart job recommendations</li>
                      <li>Save & track active bids</li>
                      <li>Direct in-app chat with clients</li>
                    </ul>
                  </div>
                  <div className="step-image">
                    <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80" alt="Browsing jobs" />
                  </div>
                </div>

                <div className="step-block">
                  <div className="step-badge">03</div>
                  <div className="step-details">
                    <h3>Complete Work & Get Paid</h3>
                    <p>Deliver the job, submit proof of completion, and receive payment directly to M-Pesa or your bank. Funds are released within 24 hours of approval.</p>
                    <ul className="step-checklist">
                      <li>Milestone or fixed-price payouts</li>
                      <li>Instant M-Pesa withdrawal</li>
                      <li>Earn reputation through reviews</li>
                    </ul>
                  </div>
                  <div className="step-image">
                    <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80" alt="Payment received" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Employer Path */}
        {activePath === 'employer' && (
          <section className="hiw-path-section" id="employer-path">
            <div className="container">
              <div className="path-header">
                <span className="section-tag">For Employers</span>
                <h2 className="section-title">Hire Trusted Talent in 3 Steps</h2>
                <p className="section-subtitle">Post once, compare bids, and pay securely only when satisfied.</p>
              </div>
              
              <div className="steps-flow">
                <div className="step-block">
                  <div className="step-badge">01</div>
                  <div className="step-details">
                    <h3>Post Your Requirement</h3>
                    <p>Describe the task, set a budget (starting at 300 KSH), and choose a deadline. Your job goes live instantly to matched professionals.</p>
                    <ul className="step-checklist">
                      <li>Free job posting</li>
                      <li>Flexible pricing models</li>
                      <li>Auto-match with top-rated workers</li>
                    </ul>
                  </div>
                  <div className="step-image">
                    <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80" alt="Posting a job" />
                  </div>
                </div>

                <div className="step-block">
                  <div className="step-badge">02</div>
                  <div className="step-details">
                    <h3>Review Proposals & Hire</h3>
                    <p>Compare rates, portfolios, and past reviews. Chat with candidates before committing. Hire the best fit with one click.</p>
                    <ul className="step-checklist">
                      <li>Side-by-side bid comparison</li>
                      <li>Verified worker badges</li>
                      <li>Secure contract generation</li>
                    </ul>
                  </div>
                  <div className="step-image">
                    <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80" alt="Reviewing bids" />
                  </div>
                </div>

                <div className="step-block">
                  <div className="step-badge">03</div>
                  <div className="step-details">
                    <h3>Track & Release Payment</h3>
                    <p>Monitor progress via milestones. Approve completed work and release escrowed funds. Dispute resolution is available if needed.</p>
                    <ul className="step-checklist">
                      <li>Real-time progress tracking</li>
                      <li>Escrow payment protection</li>
                      <li>Mediation support included</li>
                    </ul>
                  </div>
                  <div className="step-image">
                    <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80" alt="Tracking progress" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Trust & Safety Section */}
        <section className="hiw-trust">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">How We Protect You</span>
              <h2 className="section-title">Built for Trust, Not Just Transactions</h2>
              <p className="section-subtitle">Every feature is designed to keep payments secure, identities verified, and disputes resolved fairly.</p>
            </div>
            
            <div className="trust-grid">
              <div className="trust-card">
                <div className="trust-icon"><Shield size={28} /></div>
                <h4>Escrow Payment System</h4>
                <p>Employers fund jobs upfront. Money stays protected until work is approved. No more chasing payments or unfinished work.</p>
              </div>
              <div className="trust-card">
                <div className="trust-icon"><CheckCircle size={28} /></div>
                <h4>Identity & Skill Verification</h4>
                <p>Workers can verify their ID and complete skill assessments. Verified badges increase hire rates and client confidence.</p>
              </div>
              <div className="trust-card">
                <div className="trust-icon"><MessageSquare size={28} /></div>
                <h4>In-App Communication</h4>
                <p>Keep all negotiations, files, and agreements inside JobMate. Protects privacy and creates an audit trail for disputes.</p>
              </div>
              <div className="trust-card">
                <div className="trust-icon"><CreditCard size={28} /></div>
                <h4>Transparent Fee Structure</h4>
                <p>5% platform fee only on completed jobs. No subscription costs, no hidden charges, no surprise deductions.</p>
              </div>
              <div className="trust-card">
                <div className="trust-icon"><Clock size={28} /></div>
                <h4>24/7 Dispute Resolution</h4>
                <p>Our local support team mediates conflicts within 48 hours. Fair outcomes for workers and employers, guaranteed.</p>
              </div>
              <div className="trust-card">
                <div className="trust-icon"><UserPlus size={28} /></div>
                <h4>Reputation System</h4>
                <p>Two-way reviews build long-term trust. High-rated workers get priority placement. Reliable employers get faster hires.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Single Clean CTA */}
        <section className="hiw-cta">
          <div className="container">
            <div className="cta-box">
              <h2>Start Your Journey Today</h2>
              <p>Whether you're looking for your next gig or need reliable help, JobMate connects you securely in minutes.</p>
              <div className="cta-actions">
                <Link to="/register?role=worker" className="btn btn-primary">Create Worker Account</Link>
                <Link to="/register?role=employer" className="btn btn-outline">Create Employer Account</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}