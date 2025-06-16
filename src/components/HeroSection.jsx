import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const fadeInUpDelay = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay: 0.2 }
  };

  const fadeInUpDelayMore = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay: 0.4 }
  };

  const stats = [
    { number: '500+', label: 'Students Enrolled' },
    { number: '50+', label: 'Projects Completed' },
    { number: '15+', label: 'Industry Partners' },
    { number: '95%', label: 'Success Rate' }
  ];

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-50"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-100 rounded-full opacity-50"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-200 to-green-200 rounded-full opacity-20"></div>
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
          {/* Content */}
          <div className="space-y-8">
            <motion.div {...fadeInUp}>
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
                🚀 Welcome to MIT ADT PBL
              </span>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Learn by{' '}
                <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  Building
                </span>{' '}
                Real Projects
              </h1>
            </motion.div>

            <motion.p 
              {...fadeInUpDelay}
              className="text-xl text-gray-600 leading-relaxed max-w-lg"
            >
              Experience hands-on learning through innovative Project-Based Learning methodology. 
              Develop practical skills, work on real-world challenges, and build a portfolio 
              that sets you apart.
            </motion.p>

            <motion.div {...fadeInUpDelayMore} className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/projects" 
                className="btn btn-primary text-lg px-8 py-4 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Explore Projects
              </Link>
              <Link 
                to="/about" 
                className="btn btn-outline text-lg px-8 py-4 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                Learn More
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl lg:text-3xl font-bold text-blue-600 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative z-10">
              {/* Main illustration container */}
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                <div className="space-y-6">
                  {/* Code editor mockup */}
                  <div className="bg-gray-900 rounded-lg p-4">
                    <div className="flex space-x-2 mb-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 bg-blue-400 rounded w-3/4"></div>
                      <div className="h-2 bg-green-400 rounded w-1/2"></div>
                      <div className="h-2 bg-purple-400 rounded w-2/3"></div>
                      <div className="h-2 bg-yellow-400 rounded w-1/3"></div>
                    </div>
                  </div>

                  {/* Project cards */}
                  <div className="grid grid-cols-2 gap-4">
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg"
                    >
                      <div className="w-8 h-8 bg-blue-500 rounded-lg mb-2"></div>
                      <div className="h-2 bg-blue-300 rounded mb-1"></div>
                      <div className="h-2 bg-blue-200 rounded w-2/3"></div>
                    </motion.div>
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg"
                    >
                      <div className="w-8 h-8 bg-green-500 rounded-lg mb-2"></div>
                      <div className="h-2 bg-green-300 rounded mb-1"></div>
                      <div className="h-2 bg-green-200 rounded w-2/3"></div>
                    </motion.div>
                  </div>

                  {/* Progress indicators */}
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-600">Project Progress</div>
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg"
              >
                ⚡
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg"
              >
                🎯
              </motion.div>
            </div>

            {/* Background decoration */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-200 to-green-200 rounded-2xl opacity-20 blur-lg"></div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="w-full h-12 fill-current text-white"
        >
          <path d="M0,0 C150,120 350,0 600,30 C850,60 1050,120 1200,0 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
