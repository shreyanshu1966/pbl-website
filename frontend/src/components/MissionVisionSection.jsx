import React from 'react';
import { motion } from 'framer-motion';
import { StatCard } from './Card';
import Button from './Button';
import Icon from './Icon';

const MissionVisionSection = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-gray-50 border-b-4 border-gray-200">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-gray-900"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-gray-900">Our Mission & Vision</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 flex items-center text-gray-800">
                  <Icon name="target" size={24} className="mr-3" style={{color: '#761b89'}} />
                  Mission
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To revolutionize education through innovative Project-Based Learning methodology, 
                  empowering students to solve real-world challenges while developing critical 
                  thinking, collaboration, and technical skills essential for the future workforce.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-4 flex items-center text-gray-800">
                  <Icon name="eye" size={24} className="mr-3" style={{color: '#761b89'}} />
                  Vision
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To be the leading institution that bridges academia and industry through 
                  transformative project-based education, creating innovators and leaders 
                  who drive positive change in society.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <Button variant="outline" size="lg" className="text-gray-800 border-gray-800 hover:bg-gray-800 hover:text-white">
                Learn More About Us
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Clean Stats Card */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
              <div className="grid grid-cols-2 gap-6">
                <StatCard
                  number="500+"
                  label="Active Students"
                  icon="graduation-cap"
                  className="bg-gray-50 text-gray-900 border border-gray-200"
                />
                <StatCard
                  number="50+"
                  label="Projects Completed"
                  icon="project"
                  className="bg-gray-50 text-gray-900 border border-gray-200"
                />
                <StatCard
                  number="15+"
                  label="Industry Partners"
                  icon="handshake"
                  className="bg-gray-50 text-gray-900 border border-gray-200"
                />
                <StatCard
                  number="95%"
                  label="Success Rate"
                  icon="chart-bar"
                  className="bg-gray-50 text-gray-900 border border-gray-200"
                />
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2 text-gray-900">Transform Your Future</div>
                  <div className="text-gray-600">Through Project-Based Learning</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
