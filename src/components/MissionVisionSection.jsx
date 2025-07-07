import React from 'react';
import { motion } from 'framer-motion';
import { StatCard } from './Card';
import Button from './Button';
import Icon from './Icon';

const MissionVisionSection = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-purple-900">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800 to-green-800 opacity-90"></div>
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-8" style={{ color: 'white' }}>Our Mission & Vision</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 flex items-center" style={{ color: 'white' }}>
                  <Icon name="target" size={24} className="mr-3 text-w" />
                  Mission
                </h3>
                <p className="text-lg text-blue-100 leading-relaxed">
                  To revolutionize education through innovative Project-Based Learning methodology, 
                  empowering students to solve real-world challenges while developing critical 
                  thinking, collaboration, and technical skills essential for the future workforce.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-4 flex items-center" style={{ color: 'white' }}>
                  <Icon name="eye" size={24} className="mr-3" />
                  Vision
                </h3>
                <p className="text-lg text-blue-100 leading-relaxed">
                  To be the leading institution that bridges academia and industry through 
                  transformative project-based education, creating innovators and leaders 
                  who drive positive change in society.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-blue-900">
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
            {/* Infographic Placeholder */}
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20">
              <div className="grid grid-cols-2 gap-6">
                <StatCard
                  number="500+"
                  label="Active Students"
                  icon="graduation-cap"
                  className="bg-white bg-opacity-20 text-white border-none"
                  style={{ color: '#000000' }}
                />
                <StatCard
                  number="50+"
                  label="Projects Completed"
                  icon="project"
                  className="bg-white bg-opacity-20 text-white border-none"
                  style={{ color: '#000000' }}
                />
                <StatCard
                  number="15+"
                  label="Industry Partners"
                  icon="handshake"
                  className="bg-white bg-opacity-20 text-white border-none"
                  style={{ color: '#000000' }}
                />
                <StatCard
                  number="95%"
                  label="Success Rate"
                  icon="chart-bar"
                  className="bg-white bg-opacity-20 text-white border-none"
                  style={{ color: '#000000' }}
                />
              </div>
              
              <div className="mt-6 p-4 bg-white bg-opacity-10 rounded-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2" style={{ color: '#000000' }}>Transform Your Future</div>
                  <div className="text-blue-200" style={{ color: '#000000' }}>Through Project-Based Learning</div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-2xl shadow-lg"
            >
              💡
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-xl shadow-lg"
            >
              🚀
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
