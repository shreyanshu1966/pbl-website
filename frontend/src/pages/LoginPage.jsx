import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';
import { Icon, Button, Card } from '../components';

const LoginPage = () => {
  const { login, isAuthenticated } = useAuth();
  const location = useLocation();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'student'
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Redirect if already authenticated
  if (isAuthenticated) {
    const from = location.state?.from?.pathname || '/dashboard';
    return <Navigate to={from} replace />;
  }

  const demoCredentials = [
    {
      role: 'student',
      email: 'student@mitadt.edu.in',
      name: 'Student Demo',
      description: 'Access student dashboard to submit projects and view feedback',
      icon: 'user',
      color: 'blue'
    },
    {
      role: 'mentor',
      email: 'mentor@mitadt.edu.in',
      name: 'Mentor Demo',
      description: 'Guide students and provide feedback on their projects',
      icon: 'users',
      color: 'green'
    },
    {
      role: 'admin',
      email: 'admin@mitadt.edu.in',
      name: 'Admin Demo',
      description: 'Manage users, groups, and export comprehensive reports',
      icon: 'shield',
      color: 'purple'
    },
    {
      role: 'evaluator',
      email: 'evaluator@mitadt.edu.in',
      name: 'Evaluator Demo',
      description: 'Review and evaluate projects during assessment phases',
      icon: 'clipboard-check',
      color: 'orange'
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const result = await login(formData.email, formData.password);
    
    if (result.success) {
      // Redirect will happen automatically due to isAuthenticated check
    } else {
      setError(result.error);
    }
    
    setLoading(false);
  };

  const handleDemoLogin = (email) => {
    setFormData(prev => ({ ...prev, email }));
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    
    if (!validateForm()) {
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Handle successful login here
      console.log('Login successful:', formData);
      // Redirect to dashboard or home page
      window.location.href = '/';
      
    } catch (error) {
      console.error('Login error:', error);
      setErrors({
        submit: 'Login failed. Please check your credentials and try again.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-md w-full space-y-8"
      >
        {/* Header */}
        <div className="text-center">
          <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 p-1 shadow-lg">
            <img 
              src="/icon.png" 
              alt="MIT-ADT University Icon" 
              className="w-16 h-16 object-contain rounded-full"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="w-16 h-16 hidden items-center justify-center rounded-full">
              <Icon name="GraduationCap" size={32} className="text-white" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome Back
          </h2>
          <p className="text-gray-600">
            Sign in to your MIT ADT PBL account
          </p>
        </div>

        {/* Login Form */}
        <Card className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Enrollment Number Field */}
            <div>
              <label htmlFor="enrollmentNumber" className="block text-sm font-medium text-gray-700 mb-2">
                Enrollment Number
              </label>
              <div className="relative">
                <input
                  id="enrollmentNumber"
                  name="enrollmentNumber"
                  type="text"
                  autoComplete="username"
                  value={formData.enrollmentNumber}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-800 focus:border-transparent transition-all duration-200 ${
                    errors.enrollmentNumber ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter your enrollment number"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <Icon name="User" size={20} className="text-gray-400" />
                </div>
              </div>
              {errors.enrollmentNumber && (
                <p className="mt-2 text-sm text-red-600 flex items-center">
                  <Icon name="AlertCircle" size={16} className="mr-1" />
                  {errors.enrollmentNumber}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-800 focus:border-transparent transition-all duration-200 ${
                    errors.password ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter your password"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <Icon name="Lock" size={20} className="text-gray-400" />
                </div>
              </div>
              {errors.password && (
                <p className="mt-2 text-sm text-red-600 flex items-center">
                  <Icon name="AlertCircle" size={16} className="mr-1" />
                  {errors.password}
                </p>
              )}
            </div>

            {/* Submit Error */}
            {errors.submit && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-sm text-red-600 flex items-center">
                  <Icon name="AlertCircle" size={16} className="mr-2" />
                  {errors.submit}
                </p>
              </div>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              size="lg"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-purple-800 to-blue-800 hover:from-blue-800 hover:to-purple-800 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Signing in...
                </div>
              ) : (
                <div className="flex items-center justify-center">
                  <Icon name="LogIn" size={20} className="mr-2" />
                  Sign In
                </div>
              )}
            </Button>
          </form>
        </Card>

        {/* Help Section */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            Need help with enrollment or login? <a href="/contact" className="font-medium text-purple-800 hover:text-blue-800 transition-colors">Contact us</a>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;
