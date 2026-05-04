import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import Button from '../../components/ui/Button';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import './LoginPage.css';

export default function LoginPage() {
  const [form, setForm] = useState({ email: '', password: '', role: 'worker' });
  const [err, setErr] = useState('');
  const [load, setLoad] = useState(false);
  const { login } = useAuth();
  const nav = useNavigate();

  const submit = async (e) => {
    e.preventDefault(); 
    setErr(''); 
    setLoad(true);
    try {
      // TODO: Replace with API call
      await new Promise(r => setTimeout(r, 800));
      
      // Map roles to their dashboard routes
      const roleRoutes = { admin: '/admin', worker: '/worker', seller: '/seller' };
      
      login({ id: 1, name: 'Demo User', email: form.email, role: form.role });
      nav(roleRoutes[form.role]);
    } catch { 
      setErr('Invalid credentials'); 
    } finally { 
      setLoad(false); 
    }
  };

  return (
    <div className="auth-page">
      <Header />
      <main className="auth-main">
        <div className="auth-card">
          <div className="auth-header">
            <Link to="/" className="auth-logo">job<span>Mate</span></Link>
            <h1>Welcome back zilla</h1>
            <p>Sign in to continue</p>
          </div>
          <form onSubmit={submit} className="auth-form">
            {err && <div className="form-error">{err}</div>}
            <div className="form-group">
              <label>Email</label>
              <input type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} required placeholder="you@example.com" />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" value={form.password} onChange={e => setForm({...form, password: e.target.value})} required placeholder="••••••" />
            </div>
            <div className="form-group">
              <label>Login As (Dev/Test)</label>
              <select value={form.role} onChange={e => setForm({...form, role: e.target.value})} className="role-select">
                <option value="worker">Worker</option>
                <option value="seller">Seller/Employer</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            <Button type="submit" variant="primary" size="lg" fullWidth disabled={load}>{load ? 'Signing in...' : 'Sign In'}</Button>
          </form>
          <p className="auth-footer">Don't have an account? <Link to="/register">Sign up</Link></p>
        </div>
      </main>
      <Footer />
    </div>
  );
}