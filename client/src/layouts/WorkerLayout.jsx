import { Outlet, useLocation } from 'react-router-dom';
import WorkerSidebar from '../components/dashboards/worker/WorkerSidebar';
import WorkerNavbar from '../components/dashboards/worker/WorkerNavbar';
import '../styles/Dashboard.css';

export default function WorkerLayout() {
  const { pathname } = useLocation();
  return (
    <div className="dashboard-layout">
      <WorkerSidebar currentPath={pathname} />
      <div className="dashboard-main">
        <WorkerNavbar />
        <main className="dashboard-content"><Outlet /></main>
      </div>
    </div>
  );
}