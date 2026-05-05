import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Suspense, lazy, useEffect } from 'react';
import { useAuth } from './contexts/AuthContext';

// Layouts
import AdminLayout from './layouts/AdminLayout';
import WorkerLayout from './layouts/WorkerLayout';
import SellerLayout from './layouts/SellerLayout';

// Pages
import LandingPage from './pages/LandingPage';
import NotFoundPage from './pages/NotFoundPage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import HowItWorksPage from './pages/HowItWorksPage';
import ServicesPage from './pages/ServicesPage';
import PricingPage from './pages/PricingPage';
import AdminOverview from './pages/dashboards/admin/AdminOverview';
import WorkerOverview from './pages/dashboards/worker/WorkerOverview';
import SellerOverview from './pages/dashboards/seller/SellerOverview';

const LoginPage = lazy(() => import('./pages/auth/LoginPage'));
const RegisterPage = lazy(() => import('./pages/auth/RegisterPage'));
const BrowseJobsPage = lazy(() => import('./pages/jobs/BrowseJobsPage'));
const PostJobPage = lazy(() => import('./pages/jobs/PostJobPage'));

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo({ top: 0, behavior: 'smooth' }), [pathname]);
  return null;
};

const ProtectedRoute = ({ children, role }) => {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" replace />;
  if (role && user.role !== role) return <Navigate to="/" replace />;
  return children;
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<div className="page-loader">Loading...</div>}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/prices" element={<PricingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/jobs" element={<BrowseJobsPage />} />
          <Route path="/post-job" element={<ProtectedRoute role="seller"><PostJobPage /></ProtectedRoute>} />

          <Route path="/admin" element={<ProtectedRoute role="admin"><AdminLayout /></ProtectedRoute>}>
            <Route index element={<AdminOverview />} />
          </Route>

          <Route path="/worker" element={<ProtectedRoute role="worker"><WorkerLayout /></ProtectedRoute>}>
            <Route index element={<WorkerOverview />} />
          </Route>

          <Route path="/seller" element={<ProtectedRoute role="seller"><SellerLayout /></ProtectedRoute>}>
            <Route index element={<SellerOverview />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;