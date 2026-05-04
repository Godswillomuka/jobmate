import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import SearchBar from '../../components/ui/SearchBar';
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
        <div className="container">
          <h1>Find Your Next Opportunity</h1>
          <SearchBar compact />
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