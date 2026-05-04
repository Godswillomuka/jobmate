import { Briefcase, Send, Wallet, Clock } from 'lucide-react';

export default function WorkerOverview() {
  const stats = [
    { label: 'Active Jobs', value: '3', icon: Briefcase },
    { label: 'Pending Bids', value: '8', icon: Send },
    { label: 'Total Earnings', value: 'KSH 45,200', icon: Wallet },
    { label: 'Hours This Week', value: '24', icon: Clock },
  ];

  return (
    <div className="dashboard-page">
      <h1 className="page-title">Welcome back, John 👋</h1>
      <div className="stats-grid">
        {stats.map((s, i) => (
          <div key={i} className="stat-card">
            <div className="stat-icon" style={{background: '#f0fdf4', color: '#10b981'}}><s.icon size={24} /></div>
            <div className="stat-info"><p className="stat-label">{s.label}</p><h3 className="stat-value">{s.value}</h3></div>
          </div>
        ))}
      </div>
      <div className="dashboard-sections">
        <div className="section-card">
          <h3>Recommended Jobs</h3>
          <ul className="activity-list">
            <li><strong>Plumbing Fix - Karen</strong> <span>KSH 1,500</span></li>
            <li><strong>Bathroom Renovation</strong> <span>KSH 12,000</span></li>
          </ul>
        </div>
        <div className="section-card">
          <h3>Recent Activity</h3>
          <ul className="activity-list">
            <li>Bid accepted: <strong>House Cleaning</strong></li>
            <li>Payment received: <strong>KSH 3,200</strong></li>
          </ul>
        </div>
      </div>
    </div>
  );
}