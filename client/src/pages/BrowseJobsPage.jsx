// pages/BrowseJobsPage.jsx
import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import JobCard from '../components/JobCard';
import Button from '../components/Button';
import './BrowseJobsPage.css';

export default function BrowseJobsPage() {
  const [searchParams] = useSearchParams();
  const [filters, setFilters] = useState({
    category: searchParams.get('category') || 'all',
    budgetMin: '',
    budgetMax: '',
    location: '',
    sortBy: 'newest'
  });
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(false);

  // Mock data - replace with API call
  useEffect(() => {
    const fetchJobs = async () => {
      setIsLoading(true);
      try {
        // TODO: Connect to your backend API
        // const response = await api.get('/jobs', { params: filters });
        // setJobs(response.data);
        
        // Mock data for demo
        await new Promise(resolve => setTimeout(resolve, 800));
        setJobs([
          {
            id: 1,
            title: 'House Cleaning - Weekly',
            company: { name: 'Private Home', logo: null },
            location: 'Nairobi, Westlands',
            budget: 500,
            budgetType: 'fixed',
            postedDate: new Date().toISOString(),
            category: 'Home & Cleaning',
            description: 'Looking for reliable house help for weekly cleaning of a 3-bedroom apartment.',
            skills: ['Cleaning', 'Punctuality', 'Trustworthy'],
            applications: 12,
            isFeatured: true
          },
          {
            id: 2,
            title: 'React Developer for E-commerce Site',
            company: { name: 'TechStart KE', logo: null },
            location: 'Remote (Kenya)',
            budget: 800,
            budgetType: 'hourly',
            postedDate: new Date(Date.now() - 86400000).toISOString(),
            category: 'Tech & Digital',
            description: 'Need experienced React developer to build frontend for new e-commerce platform.',
            skills: ['React', 'JavaScript', 'CSS', 'Git'],
            applications: 28,
            isFeatured: false
          },
          {
            id: 3,
            title: 'Courier for Same-Day Deliveries',
            company: { name: 'QuickShip Ltd', logo: null },
            location: 'Nairobi CBD',
            budget: 300,
            budgetType: 'fixed',
            postedDate: new Date(Date.now() - 172800000).toISOString(),
            category: 'Courier & Errands',
            description: 'Need reliable courier with motorbike for same-day deliveries within Nairobi.',
            skills: ['Driving', 'Navigation', 'Customer Service'],
            applications: 45,
            isFeatured: false
          }
        ]);
      } catch (error) {
        console.error('Failed to fetch jobs:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchJobs();
  }, [filters]);

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const categories = ['All', 'Home & Cleaning', 'Courier & Errands', 'Skilled Trades', 'Tech & Digital', 'Finance & Admin'];

  return (
    <div className="page-wrapper">
      <Header />
      
      <main className="page-main">
        {/* Hero Search */}
        <section className="browse-hero">
          <div className="container">
            <h1>Find Your Next Opportunity</h1>
            <p>Browse thousands of jobs posted by Kenyan employers</p>
            <SearchBar compact placeholder="Search jobs by title, skill, or company..." />
          </div>
        </section>

        <div className="container">
          <div className="browse-layout">
            {/* Filters Sidebar */}
            <aside className={`filters-sidebar ${showFilters ? 'open' : ''}`}>
              <div className="filters-header">
                <h3>Filters</h3>
                <button className="filters-toggle" onClick={() => setShowFilters(false)}>✕</button>
              </div>
              
              <div className="filter-group">
                <label>Category</label>
                <div className="filter-options">
                  {categories.map(cat => (
                    <label key={cat} className="filter-option">
                      <input
                        type="radio"
                        name="category"
                        value={cat.toLowerCase()}
                        checked={filters.category === cat.toLowerCase()}
                        onChange={(e) => handleFilterChange('category', e.target.value)}
                      />
                      <span>{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="filter-group">
                <label>Budget Range (KSH)</label>
                <div className="filter-row">
                  <input
                    type="number"
                    placeholder="Min"
                    value={filters.budgetMin}
                    onChange={(e) => handleFilterChange('budgetMin', e.target.value)}
                  />
                  <span>to</span>
                  <input
                    type="number"
                    placeholder="Max"
                    value={filters.budgetMax}
                    onChange={(e) => handleFilterChange('budgetMax', e.target.value)}
                  />
                </div>
              </div>

              <div className="filter-group">
                <label>Location</label>
                <input
                  type="text"
                  placeholder="e.g., Nairobi, Remote"
                  value={filters.location}
                  onChange={(e) => handleFilterChange('location', e.target.value)}
                />
              </div>

              <div className="filter-group">
                <label>Sort By</label>
                <select
                  value={filters.sortBy}
                  onChange={(e) => handleFilterChange('sortBy', e.target.value)}
                >
                  <option value="newest">Newest First</option>
                  <option value="budget-high">Highest Budget</option>
                  <option value="budget-low">Lowest Budget</option>
                  <option value="applications">Most Applications</option>
                </select>
              </div>

              <Button 
                variant="outline" 
                fullWidth 
                onClick={() => setFilters({ category: 'all', budgetMin: '', budgetMax: '', location: '', sortBy: 'newest' })}
              >
                Clear Filters
              </Button>
            </aside>

            {/* Jobs List */}
            <div className="jobs-list">
              <div className="jobs-header">
                <div className="jobs-count">
                  <strong>{jobs.length}</strong> jobs found
                </div>
                <button className="mobile-filters-btn" onClick={() => setShowFilters(true)}>
                  ⚙️ Filters
                </button>
              </div>

              {isLoading ? (
                <div className="jobs-loading">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="job-card-skeleton">
                      <div className="skeleton-avatar"></div>
                      <div className="skeleton-content">
                        <div className="skeleton-line skeleton-title"></div>
                        <div className="skeleton-line skeleton-meta"></div>
                        <div className="skeleton-line skeleton-desc"></div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : jobs.length === 0 ? (
                <div className="jobs-empty">
                  <p>No jobs match your filters.</p>
                  <Button variant="outline" onClick={() => setFilters({ category: 'all', budgetMin: '', budgetMax: '', location: '', sortBy: 'newest' })}>
                    Clear Filters
                  </Button>
                </div>
              ) : (
                <div className="jobs-grid">
                  {jobs.map(job => (
                    <JobCard key={job.id} job={job} />
                  ))}
                </div>
              )}

              {/* Pagination */}
              <div className="pagination">
                <Button variant="ghost" disabled>← Previous</Button>
                <div className="page-numbers">
                  <button className="page-btn active">1</button>
                  <button className="page-btn">2</button>
                  <button className="page-btn">3</button>
                  <span>...</span>
                  <button className="page-btn">10</button>
                </div>
                <Button variant="ghost">Next →</Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}