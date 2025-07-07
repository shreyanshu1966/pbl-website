import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
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
import LoginPage from './pages/LoginPage';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
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
        <Route path="/login" element={<LoginPage />} />
      
      </Routes>
    </Layout>
  );
};

export default App;