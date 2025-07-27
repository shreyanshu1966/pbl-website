import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import AboutPBLPage from './pages/AboutPBLPage';
import EventsPage from './pages/EventsPage';
import ManagementTeamPage from './pages/ManagementTeamPage';
import ProjectResourcesPage from './pages/ProjectResourcesPage';
import ProductDomainProfilingPage from './pages/ProductDomainProfilingPage';
import GalleryPage from './pages/GalleryPage';
import MultidisciplinaryProjectsPage from './pages/MultidisciplinaryProjectsPage';
import FundingOpportunitiesPage from './pages/FundingOpportunitiesPage';
import DocumentationPage from './pages/DocumentationPage';
import FAQsPage from './pages/FAQsPage';
import SupportPage from './pages/SupportPage';
import RoleBasedLoginPage from './pages/RoleBasedLoginPage';
import DashboardPage from './pages/DashboardPage';
import ProtectedRoute from './components/ProtectedRoute';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <AuthProvider>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPBLPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/resources" element={<ProjectResourcesPage />} />
          <Route path="/project-resources" element={<ProjectResourcesPage />} />
          <Route path="/documentation" element={<DocumentationPage />} />
          <Route path="/faqs" element={<FAQsPage />} />
          <Route path="/contact" element={<ManagementTeamPage />} />
          <Route path="/domains" element={<ProductDomainProfilingPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/projects" element={<MultidisciplinaryProjectsPage />} />
          <Route path="/funding" element={<FundingOpportunitiesPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/login" element={<RoleBasedLoginPage />} />
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </Layout>
    </AuthProvider>
  );
};

export default App;