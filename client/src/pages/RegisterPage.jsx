// pages/RegisterPage.jsx
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import './RegisterPage.css';

export default function RegisterPage() {
  const [accountType, setAccountType] = useState('seeker'); // 'seeker' or 'employer'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    agreeTerms: false
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Full name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 8) newErrors.password = 'Password must be at least 8 characters';
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    if (!formData.agreeTerms) newErrors.agreeTerms = 'You must agree to the Terms of Service';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsLoading(true);
    
    try {
      // TODO: Connect to your backend API
      // const response = await api.post('/auth/register', { ...formData, accountType });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      navigate('/onboarding');
    } catch (error) {
      setErrors({ submit: 'Registration failed. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <Header />
      
      <main className="auth-main">
        <div className="auth-container">
          <div className="auth-card auth-card--register">
            <div className="auth-header">
              <Link to="/" className="auth-logo">
                <span className="logo-text">job<span className="logo-accent">Mate</span></span>
              </Link>
              <h1>Create your account</h1>
              <p>Join thousands of Kenyans finding work and hiring talent</p>
            </div>

            {/* Account Type Toggle */}
            <div className="account-type-toggle">
              <button
                type="button"
                className={`toggle-btn ${accountType === 'seeker' ? 'active' : ''}`}
                onClick={() => setAccountType('seeker')}
              >
                I want to find work
              </button>
              <button
                type="button"
                className={`toggle-btn ${accountType === 'employer' ? 'active' : ''}`}
                onClick={() => setAccountType('employer')}
              >
                I want to hire talent
              </button>
            </div>

            <form onSubmit={handleSubmit} className="auth-form" noValidate>
              {errors.submit && (
                <div className="form-error form-error--global">{errors.submit}</div>
              )}
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? 'input-error' : ''}
                    placeholder="John Doe"
                    required
                  />
                  {errors.name && <span className="field-error">{errors.name}</span>}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'input-error' : ''}
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                />
                {errors.email && <span className="field-error">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number (Optional)</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+254 7XX XXX XXX"
                  autoComplete="tel"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className={errors.password ? 'input-error' : ''}
                    placeholder="••••••••"
                    required
                  />
                  {errors.password && <span className="field-error">{errors.password}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className={errors.confirmPassword ? 'input-error' : ''}
                    placeholder="••••••••"
                    required
                  />
                  {errors.confirmPassword && <span className="field-error">{errors.confirmPassword}</span>}
                </div>
              </div>

              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                />
                <span>
                  I agree to the <Link to="/terms">Terms of Service</Link> and <Link to="/privacy">Privacy Policy</Link>
                </span>
              </label>
              {errors.agreeTerms && <span className="field-error">{errors.agreeTerms}</span>}

              <Button type="submit" variant="primary" size="lg" fullWidth disabled={isLoading}>
                {isLoading ? 'Creating account...' : `Create ${accountType === 'seeker' ? 'Job Seeker' : 'Employer'} Account`}
              </Button>
            </form>

            <p className="auth-footer">
              Already have an account? <Link to="/login">Sign in</Link>
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}