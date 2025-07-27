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
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            PBL Dashboard Login
          </h2>
          <p className="text-gray-600">
            Access your Project-Based Learning dashboard
          </p>
        </motion.div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Card className="py-8 px-6 shadow-lg">
            <form className="space-y-6" onSubmit={handleSubmit}>
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
                  {error}
                </div>
              )}

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <div className="mt-1 relative">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                    placeholder="Enter your email"
                  />
                  <Icon name="email" size={20} className="absolute right-3 top-2.5 text-gray-400" />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="mt-1 relative">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                    placeholder="Enter your password"
                  />
                  <Icon name="lock" size={20} className="absolute right-3 top-2.5 text-gray-400" />
                </div>
              </div>

              <div>
                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Icon name="loader" size={20} className="mr-2 animate-spin" />
                      Signing in...
                    </>
                  ) : (
                    <>
                      <Icon name="log-in" size={20} className="mr-2" />
                      Sign in
                    </>
                  )}
                </Button>
              </div>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Demo Accounts</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {demoCredentials.map((demo) => (
                  <button
                    key={demo.role}
                    type="button"
                    onClick={() => handleDemoLogin(demo.email)}
                    className={`group relative flex flex-col items-center justify-center p-3 border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${demo.color}-500 transition-colors`}
                  >
                    <Icon 
                      name={demo.icon} 
                      size={20} 
                      className={`text-${demo.color}-600 mb-1`} 
                    />
                    <span className="text-gray-900">{demo.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Demo Password: <code className="bg-gray-100 px-2 py-1 rounded">password123</code>
              </p>
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Role Descriptions */}
      <div className="mt-12 max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Dashboard Roles</h3>
          <p className="text-gray-600">Explore different role capabilities in our PBL system</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {demoCredentials.map((demo, index) => (
            <motion.div
              key={demo.role}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                <div className={`w-12 h-12 bg-${demo.color}-100 rounded-lg flex items-center justify-center mb-4`}>
                  <Icon name={demo.icon} size={24} className={`text-${demo.color}-600`} />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{demo.name}</h4>
                <p className="text-gray-600 text-sm">{demo.description}</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-4 w-full"
                  onClick={() => handleDemoLogin(demo.email)}
                >
                  Try {demo.role}
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
