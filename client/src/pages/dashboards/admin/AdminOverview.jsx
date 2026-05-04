import { Users, Briefcase, CreditCard, TrendingUp } from 'lucide-react';

export default function AdminOverview() {
  const stats = [
    { label: 'Total Users', value: '12,450', icon: Users, change: '+12%' },
    { label: 'Active Jobs', value: '3,240', icon: Briefcase, change: '+8%' },
    { label: 'Transactions', value: 'KSH 4.2M', icon: CreditCard, change: '+24%' },
    { label: 'Growth', value: '18.5%', icon: TrendingUp, change: '+3.2%' },
  ];

  return (
    <div className="dashboard-page">
      <h1 className="page-title">Admin Dashboard</h1>
      <div className="stats-grid">
        {stats.map((s, i) => (
          <div key={i} className="stat-card">
            <div className="stat-icon"><s.icon size={24} /></div>
            <div className="stat-info"><p className="stat-label">{s.label}</p><h3 className="stat-value">{s.value}</h3></div>
          </div>
        ))}
      </div>
      <div className="dashboard-sections">
        <div className="section-card">
          <h3>Recent Activity</h3>
          <ul className="activity-list">
            <li>New user registered: <strong>Wanjiku M.</strong></li>
            <li>Job posted: <strong>House Cleaning</strong></li>
            <li>Payment processed: <strong>KSH 2,500</strong></li>
          </ul>
        </div>
        <div className="section-card">
          <h3>Platform Health</h3>
          <p>Uptime: 99.9% • Avg Response: 120ms</p>
        </div>
      </div>
    </div>
  );
}