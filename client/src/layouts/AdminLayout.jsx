import { Outlet, useLocation } from 'react-router-dom';
import AdminSidebar from '../components/dashboards/admin/AdminSidebar';
import AdminNavbar from '../components/dashboards/admin/AdminNavbar';
import '../styles/Dashboard.css';

export default function AdminLayout() {
  const { pathname } = useLocation();
  return (
    <div className="dashboard-layout">
      <AdminSidebar currentPath={pathname} />
      <div className="dashboard-main">
        <AdminNavbar />
        <main className="dashboard-content"><Outlet /></main>
      </div>
    </div>
  );
}