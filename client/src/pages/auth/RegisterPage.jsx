import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import Button from '../../components/ui/Button';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import './RegisterPage.css';

export default function RegisterPage() {
  const [type, setType] = useState('worker');
  const [form, setForm] = useState({ name: '', email: '', password: '', phone: '' });
  const [err, setErr] = useState('');
  const [load, setLoad] = useState(false);
  const { login } = useAuth();
  const nav = useNavigate();

  const submit = async (e) => {
    e.preventDefault(); setErr(''); setLoad(true);
    try {
      await new Promise(r => setTimeout(r, 800));
      login({ id: 1, name: form.name, email: form.email, role: type });
      nav(`/${type === 'worker' ? 'worker' : 'seller'}`);
    } catch { setErr('Registration failed'); } finally { setLoad(false); }
  };

  return (
    <div className="auth-page">
      <Header />
      <main className="auth-main">
        <div className="auth-card">
          <div className="auth-header">
            <Link to="/" className="auth-logo">job<span>Mate</span></Link>
            <h1>Create account zilla</h1>
            <p>Join Kenya's fastest growing gig platform</p>
          </div>
          <div className="type-toggle">
            <button className={type === 'worker' ? 'active' : ''} onClick={() => setType('worker')}>Find Work</button>
            <button className={type === 'seller' ? 'active' : ''} onClick={() => setType('seller')}>Hire Talent</button>
          </div>
          <form onSubmit={submit} className="auth-form">
            {err && <div className="form-error">{err}</div>}
            <div className="form-group"><label>Full Name</label><input value={form.name} onChange={e => setForm({...form, name: e.target.value})} required /></div>
            <div className="form-group"><label>Email</label><input type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} required /></div>
            <div className="form-group"><label>Phone (Optional)</label><input value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} placeholder="+254..." /></div>
            <div className="form-group"><label>Password</label><input type="password" value={form.password} onChange={e => setForm({...form, password: e.target.value})} required /></div>
            <Button type="submit" variant="primary" size="lg" fullWidth disabled={load}>{load ? 'Creating...' : `Create ${type === 'worker' ? 'Worker' : 'Employer'} Account`}</Button>
          </form>
          <p className="auth-footer">Already have an account? <Link to="/login">Sign in</Link></p>
        </div>
      </main>
      <Footer />
    </div>
  );
}