// components/SearchBar.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchBar.css';

export default function SearchBar({ 
  placeholder = 'Search jobs, talent, or skills...',
  categoryOptions = [
    { value: 'all', label: 'All' },
    { value: 'jobs', label: 'Jobs' },
    { value: 'talent', label: 'Talent' }
  ],
  initialCategory = 'all',
  compact = false
}) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState(initialCategory);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}&category=${category}`);
    }
  };

  const handleTagClick = (tag) => {
    setQuery(tag);
    navigate(`/search?q=${encodeURIComponent(tag)}&category=${category}`);
  };

  const popularTags = ['Web Development', 'House Help', 'Courier', 'Plumbing', 'Design'];

  return (
    <form onSubmit={handleSubmit} className={`search-bar ${compact ? 'search-bar--compact' : ''}`}>
      <div className="search-bar-wrapper">
        <select 
          value={category} 
          onChange={(e) => setCategory(e.target.value)}
          className="search-category"
        >
          {categoryOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
        
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="search-input"
          aria-label="Search"
        />
        
        <button type="submit" className="search-btn" aria-label="Search">
          <svg viewBox="0 0 24 24" width="20" height="20">
            <path fill="currentColor" d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
          </svg>
        </button>
      </div>
      
      {!compact && (
        <div className="search-tags">
          <span>Popular:</span>
          {popularTags.map((tag) => (
            <button
              key={tag}
              type="button"
              className="search-tag"
              onClick={() => handleTagClick(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      )}
    </form>
  );
}