import { NavLink } from 'react-router-dom';
import { LayoutDashboard, PlusCircle, FolderCheck, Users, CreditCard, MessageSquare, LogOut } from 'lucide-react';

export default function SellerSidebar() {
  const links = [
    { to: '/seller', icon: LayoutDashboard, label: 'Overview' },
    { to: '/seller/post-job', icon: PlusCircle, label: 'Post Job' },
    { to: '/seller/jobs', icon: FolderCheck, label: 'My Jobs' },
    { to: '/seller/bids', icon: Users, label: 'Review Bids' },
    { to: '/seller/payments', icon: CreditCard, label: 'Payments' },
    { to: '/seller/messages', icon: MessageSquare, label: 'Messages' },
  ];
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <NavLink to="/" className="sidebar-logo">job<span>Mate</span></NavLink>
        <span className="role-badge seller">Employer</span>
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