import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import StudentDashboard from '../components/dashboards/StudentDashboard';
import MentorDashboard from '../components/dashboards/MentorDashboard';
import AdminDashboard from '../components/dashboards/AdminDashboard';
import EvaluatorDashboard from '../components/dashboards/EvaluatorDashboard';

const DashboardPage = () => {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  const renderDashboard = () => {
    switch (user.role) {
      case 'student':
        return <StudentDashboard />;
      case 'mentor':
        return <MentorDashboard />;
      case 'admin':
        return <AdminDashboard />;
      case 'evaluator':
        return <EvaluatorDashboard />;
      default:
        return (
          <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Invalid Role
              </h2>
              <p className="text-gray-600">
                Your account role is not recognized. Please contact support.
              </p>
            </div>
          </div>
        );
    }
  };

  return renderDashboard();
};

export default DashboardPage;
