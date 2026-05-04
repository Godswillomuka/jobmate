import { Search, Bell, Wallet, UserCircle } from 'lucide-react';
export default function WorkerNavbar() {
  return (
    <header className="navbar">
      <div className="navbar-search"><Search size={18} /><input type="text" placeholder="Search jobs..." /></div>
      <div className="navbar-actions">
        <div className="wallet-balance"><Wallet size={18} /> <span>KSH 12,450</span></div>
        <button className="nav-icon-btn"><Bell size={20} /><span className="badge-dot"></span></button>
        <div className="nav-profile"><UserCircle size={32} /><div><span className="name">John Doe</span><span className="role">Plumber</span></div></div>
      </div>
    </header>
  );
}