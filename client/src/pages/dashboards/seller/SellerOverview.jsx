import { FolderCheck, Users, CreditCard, TrendingUp } from 'lucide-react';

export default function SellerOverview() {
  const stats = [
    { label: 'Active Jobs', value: '4', icon: FolderCheck },
    { label: 'Pending Bids', value: '12', icon: Users },
    { label: 'Total Spent', value: 'KSH 89,500', icon: CreditCard },
    { label: 'Completion Rate', value: '96%', icon: TrendingUp },
  ];

  return (
    <div className="dashboard-page">
      <h1 className="page-title">Employer Dashboard</h1>
      <div className="stats-grid">
        {stats.map((s, i) => (
          <div key={i} className="stat-card">
            <div className="stat-icon" style={{background: '#fffbeb', color: '#f59e0b'}}><s.icon size={24} /></div>
            <div className="stat-info"><p className="stat-label">{s.label}</p><h3 className="stat-value">{s.value}</h3></div>
          </div>
        ))}
      </div>
      <div className="dashboard-sections">
        <div className="section-card">
          <h3>Jobs Awaiting Review</h3>
          <ul className="activity-list">
            <li><strong>Web Developer</strong> <span>8 bids</span></li>
            <li><strong>Office Cleaning</strong> <span>14 bids</span></li>
          </ul>
        </div>
        <div className="section-card">
          <h3>Recent Activity</h3>
          <ul className="activity-list">
            <li>New bid received for <strong>Logo Design</strong></li>
            <li>Payment released: <strong>KSH 4,500</strong></li>
          </ul>
        </div>
      </div>
    </div>
  );
}