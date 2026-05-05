import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import JobCard from '../../components/cards/JobCard';
import './BrowseJobsPage.css';

export default function BrowseJobsPage() {
  const [params] = useSearchParams();

  const [jobs, setJobs] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setJobs([
        {
          id: 1,
          title: 'House Cleaning - Weekly',
          company: { name: 'Private Home' },
          location: 'Nairobi',
          budget: 500,
          budgetType: 'fixed',
          description: 'Reliable cleaner needed.',
          applications: 12
        },
        {
          id: 2,
          title: 'React Developer',
          company: { name: 'TechStart' },
          location: 'Remote',
          budget: 800,
          budgetType: 'hourly',
          description: 'Frontend expert needed.',
          applications: 28
        },
      ]);

      setLoad(false);
    }, 600);

    return () => clearTimeout(timer);
  }, [params]);

  return (
    <div className="page-wrap">
      <Header />

      <section className="browse-hero">
         <div className="hero-search">
                <div className="search-wrapper">
                  <select className="search-category">
                    <option value="jobs">Find Jobs</option>
                    <option value="talent">Find Talent</option>
                  </select>
                  <input 
                    type="text" 
                    placeholder="house help, web developer, courier, accountant..." 
                    className="search-input" 
                  />
                  <button className="search-btn">
                    <svg viewBox="0 0 24 24" width="22" height="22">
                      <path fill="currentColor" d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                    </svg>
                    Search
                  </button>
                </div>
                <div className="search-tags">
                  <span>Popular:</span>
                  <button className="tag">House Help</button>
                  <button className="tag">Courier</button>
                  <button className="tag">Web Dev</button>
                  <button className="tag">Plumbing</button>
                </div>
              </div>
      </section>

      <main className="container browse-main">
        <div className="browse-layout">
          <aside className="filters">
            <h3>Filters</h3>

            <div className="filter-group">
              <label>Category</label>
              <select>
                <option>All</option>
                <option>Tech</option>
                <option>Home</option>
              </select>
            </div>

            <div className="filter-group">
              <label>Budget</label>
              <div className="filter-row">
                <input placeholder="Min" />
                <span>to</span>
                <input placeholder="Max" />
              </div>
            </div>
          </aside>

          <div className="jobs-list">
            <p className="jobs-count">{jobs.length} jobs found</p>

            {load ? (
              <div className="skeleton">Loading...</div>
            ) : (
              <div className="jobs-grid">
                {jobs.map(j => (
                  <JobCard key={j.id} job={j} />
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}