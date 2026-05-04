import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Briefcase, Send, Wallet, MessageSquare, User, LogOut } from 'lucide-react';

export default function WorkerSidebar() {
  const links = [
    { to: '/worker', icon: LayoutDashboard, label: 'Overview' },
    { to: '/worker/jobs', icon: Briefcase, label: 'My Jobs' },
    { to: '/worker/bids', icon: Send, label: 'My Bids' },
    { to: '/worker/earnings', icon: Wallet, label: 'Earnings' },
    { to: '/worker/messages', icon: MessageSquare, label: 'Messages' },
    { to: '/worker/profile', icon: User, label: 'Profile' },
  ];
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <NavLink to="/" className="sidebar-logo">job<span>Mate</span></NavLink>
        <span className="role-badge worker">Worker</span>
      </div>
      <nav className="sidebar-nav">
        {links.map(({to, icon: Icon, label}) => (
          <NavLink key={to} to={to} className={({isActive}) => `sidebar-link ${isActive ? 'active' : ''}`}>
            <Icon size={20} /> <span>{label}</span>
          </NavLink>
        ))}
      </nav>
      <div className="sidebar-footer">
        <button className="sidebar-link logout"><LogOut size={20} /> <span>Sign Out</span></button>
      </div>
    </aside>
  );
}