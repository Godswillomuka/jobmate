import { Outlet, useLocation } from 'react-router-dom';
import SellerSidebar from '../components/dashboards/seller/SellerSidebar';
import SellerNavbar from '../components/dashboards/seller/SellerNavbar';
import '../styles/Dashboard.css';

export default function SellerLayout() {
  const { pathname } = useLocation();
  return (
    <div className="dashboard-layout">
      <SellerSidebar currentPath={pathname} />
      <div className="dashboard-main">
        <SellerNavbar />
        <main className="dashboard-content"><Outlet /></main>
      </div>
    </div>
  );
}