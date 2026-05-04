import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import Button from '../../components/ui/Button';
import './PostJobPage.css';

export default function PostJobPage() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ title: '', category: '', budget: '', location: '', desc: '' });
  const nav = useNavigate();

  const next = () => step < 3 ? setStep(s => s + 1) : nav('/seller');
  const prev = () => setStep(s => s - 1);

  return (
    <div className="page-wrap">
      <Header />
      <main className="post-job">
        <div className="container">
          <h1>Post a New Job</h1>
          <div className="steps">
            {[1,2,3].map(s => <div key={s} className={`step ${step >= s ? 'active' : ''}`}>{s}</div>)}
          </div>
          <div className="form-card">
            {step === 1 && (
              <>
                <div className="form-group"><label>Title</label><input value={form.title} onChange={e => setForm({...form, title: e.target.value})} placeholder="e.g. House Cleaning" /></div>
                <div className="form-group"><label>Category</label><select value={form.category} onChange={e => setForm({...form, category: e.target.value})}><option>Select</option><option>Home</option><option>Tech</option></select></div>
                <div className="form-group"><label>Description</label><textarea rows={4} value={form.desc} onChange={e => setForm({...form, desc: e.target.value})} /></div>
              </>
            )}
            {step === 2 && (
              <>
                <div className="form-row">
                  <div className="form-group"><label>Budget (KSH)</label><input type="number" value={form.budget} onChange={e => setForm({...form, budget: e.target.value})} /></div>
                  <div className="form-group"><label>Location</label><input value={form.location} onChange={e => setForm({...form, location: e.target.value})} placeholder="Nairobi" /></div>
                </div>
              </>
            )}
            {step === 3 && <p className="review">Review your details and click Post Job.</p>}
            <div className="form-actions">
              {step > 1 && <Button variant="ghost" onClick={prev}>Back</Button>}
              <Button variant="primary" onClick={next}>{step === 3 ? 'Post Job' : 'Next'}</Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}