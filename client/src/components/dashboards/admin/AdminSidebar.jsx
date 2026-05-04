import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Users, Briefcase, CreditCard, BarChart3, Settings, LogOut } from 'lucide-react';

export default function AdminSidebar() {
  const links = [
    { to: '/admin', icon: LayoutDashboard, label: 'Dashboard' },
    { to: '/admin/users', icon: Users, label: 'Users' },
    { to: '/admin/jobs', icon: Briefcase, label: 'Jobs' },
    { to: '/admin/transactions', icon: CreditCard, label: 'Transactions' },
    { to: '/admin/analytics', icon: BarChart3, label: 'Analytics' },
    { to: '/admin/settings', icon: Settings, label: 'Settings' },
  ];
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <NavLink to="/" className="sidebar-logo">job<span>Mate</span></NavLink>
        <span className="role-badge admin">Admin</span>
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