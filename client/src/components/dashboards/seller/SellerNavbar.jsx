import { Search, Bell, Wallet, UserCircle } from 'lucide-react';
export default function SellerNavbar() {
  return (
    <header className="navbar">
      <div className="navbar-search"><Search size={18} /><input type="text" placeholder="Search talent..." /></div>
      <div className="navbar-actions">
        <div className="wallet-balance"><Wallet size={18} /> <span>KSH 45,200</span></div>
        <button className="nav-icon-btn"><Bell size={20} /><span className="badge-dot"></span></button>
        <div className="nav-profile"><UserCircle size={32} /><div><span className="name">TechStart KE</span><span className="role">Verified</span></div></div>
      </div>
    </header>
  );
}