import { Search, Bell, UserCircle } from 'lucide-react';
export default function AdminNavbar() {
  return (
    <header className="navbar">
      <div className="navbar-search"><Search size={18} /><input type="text" placeholder="Search platform..." /></div>
      <div className="navbar-actions">
        <button className="nav-icon-btn"><Bell size={20} /><span className="badge-dot"></span></button>
        <div className="nav-profile"><UserCircle size={32} /><div><span className="name">Admin</span><span className="role">Manager</span></div></div>
      </div>
    </header>
  );
}