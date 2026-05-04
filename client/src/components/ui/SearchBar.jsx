import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchBar.css';

export default function SearchBar({ compact=false }) {
  const [q, setQ] = useState('');
  const [cat, setCat] = useState('all');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if(q.trim()) navigate(`/jobs?q=${encodeURIComponent(q)}&category=${cat}`);
  };

  return (
    <form onSubmit={handleSearch} className={`search-bar ${compact ? 'compact' : ''}`}>
      <div className="search-wrapper">
        <select value={cat} onChange={e => setCat(e.target.value)} className="search-cat">
          <option value="all">All</option>
          <option value="jobs">Jobs</option>
          <option value="talent">Talent</option>
        </select>
        <input type="text" value={q} onChange={e => setQ(e.target.value)} placeholder="Search jobs, skills, or companies..." className="search-input" />
        <button type="submit" className="search-btn">🔍</button>
      </div>
    </form>
  );
}