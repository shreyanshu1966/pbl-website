import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Additional routes can be added here */}
        <Route path="/about" element={<div className="container py-20"><h1 className="text-3xl font-bold">About Page</h1><p>Coming soon...</p></div>} />
        <Route path="/projects" element={<div className="container py-20"><h1 className="text-3xl font-bold">Projects Page</h1><p>Coming soon...</p></div>} />
        <Route path="/contact" element={<div className="container py-20"><h1 className="text-3xl font-bold">Contact Page</h1><p>Coming soon...</p></div>} />
      </Routes>
    </Layout>
  );
};

export default App;