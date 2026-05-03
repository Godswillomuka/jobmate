// pages/PostJobPage.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import Modal from '../components/Modal';
import './PostJobPage.css';

export default function PostJobPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    budget: '',
    budgetType: 'fixed',
    location: '',
    deadline: '',
    skills: []
  });
  const [showPreview, setShowPreview] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const categories = [
    'Home & Cleaning', 'Courier & Errands', 'Skilled Trades', 
    'Tech & Digital', 'Finance & Admin', 'Events & Hospitality'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSkillsChange = (skill) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter(s => s !== skill)
        : [...prev.skills, skill]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // TODO: Connect to your backend API
      // await api.post('/jobs', formData);
      
      await new Promise(resolve => setTimeout(resolve, 1500));
      navigate('/dashboard/jobs');
    } catch (error) {
      console.error('Failed to post job:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="form-section">
            <h3>Job Details</h3>
            <div className="form-group">
              <label htmlFor="title">Job Title *</label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="e.g., House Cleaning, Web Developer"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="category">Category *</label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              >
                <option value="">Select a category</option>
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="description">Description *</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Describe the job, requirements, and expectations..."
                rows={5}
                required
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="form-section">
            <h3>Budget & Location</h3>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="budget">Budget Amount *</label>
                <input
                  type="number"
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  placeholder="e.g., 500"
                  min="100"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="budgetType">Budget Type *</label>
                <select
                  id="budgetType"
                  name="budgetType"
                  value={formData.budgetType}
                  onChange={handleChange}
                >
                  <option value="fixed">Fixed Price</option>
                  <option value="hourly">Hourly Rate</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="location">Location *</label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="e.g., Nairobi, Remote, Mombasa"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="deadline">Deadline (Optional)</label>
              <input
                type="date"
                id="deadline"
                name="deadline"
                value={formData.deadline}
                onChange={handleChange}
              />
            </div>
          </div>
        );
      case 3:
        return (
          <div className="form-section">
            <h3>Required Skills</h3>
            <p className="form-hint">Select skills needed for this job (optional)</p>
            <div className="skills-grid">
              {['Communication', 'Punctuality', 'Reliability', 'Problem Solving', 'Team Work', 'Attention to Detail'].map(skill => (
                <label key={skill} className="skill-checkbox">
                  <input
                    type="checkbox"
                    checked={formData.skills.includes(skill)}
                    onChange={() => handleSkillsChange(skill)}
                  />
                  <span>{skill}</span>
                </label>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="page-wrapper">
      <Header />
      
      <main className="page-main">
        <div className="container">
          <div className="post-job-header">
            <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>
            <h1>Post a New Job</h1>
            <p>It's free to post. You only pay when you hire.</p>
          </div>

          {/* Progress Steps */}
          <div className="progress-steps">
            {[1, 2, 3].map(num => (
              <div key={num} className={`step ${step >= num ? 'active' : ''} ${step === num ? 'current' : ''}`}>
                <span className="step-number">{num}</span>
                <span className="step-label">
                  {num === 1 && 'Details'}
                  {num === 2 && 'Budget'}
                  {num === 3 && 'Skills'}
                </span>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="post-job-form">
            {renderStep()}
            
            <div className="form-actions">
              {step > 1 && (
                <Button type="button" variant="ghost" onClick={() => setStep(step - 1)}>
                  Previous
                </Button>
              )}
              {step < 3 ? (
                <Button type="button" variant="primary" onClick={() => setStep(step + 1)}>
                  Next Step
                </Button>
              ) : (
                <>
                  <Button type="button" variant="outline" onClick={() => setShowPreview(true)}>
                    Preview
                  </Button>
                  <Button type="submit" variant="primary" disabled={isSubmitting}>
                    {isSubmitting ? 'Posting...' : 'Post Job'}
                  </Button>
                </>
              )}
            </div>
          </form>
        </div>
      </main>

      {/* Preview Modal */}
      <Modal isOpen={showPreview} onClose={() => setShowPreview(false)} title="Preview Your Job" size="lg">
        <div className="job-preview">
          <h3>{formData.title || 'Job Title'}</h3>
          <p className="job-category">{formData.category}</p>
          <p className="job-description">{formData.description || 'Job description will appear here...'}</p>
          <div className="job-meta">
            <span>📍 {formData.location || 'Location'}</span>
            <span>💰 KSH {formData.budget || '0'} {formData.budgetType === 'fixed' ? '(Fixed)' : '/hr'}</span>
          </div>
          {formData.skills.length > 0 && (
            <div className="job-skills">
              <strong>Skills:</strong> {formData.skills.join(', ')}
            </div>
          )}
        </div>
        <div className="modal-actions">
          <Button variant="ghost" onClick={() => setShowPreview(false)}>Edit</Button>
          <Button variant="primary" onClick={() => { setShowPreview(false); handleSubmit({ preventDefault: () => {} }); }}>
            Confirm & Post
          </Button>
        </div>
      </Modal>
      
      <Footer />
    </div>
  );
}