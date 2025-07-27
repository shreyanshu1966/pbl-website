import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

const CallToActionSection = () => {
  return (
    <section 
      className="py-20 relative overflow-hidden mit-adt-gradient"
    >
      <div className="absolute inset-0 bg-black bg-opacity-10"></div>
      <div className="container relative z-10 text-center text-white">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl lg:text-5xl font-bold mb-6"
        >
          Ready to Start Your PBL Journey?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed text-purple-fade"
        >
          Join thousands of students who are transforming their education through hands-on, 
          project-based learning experiences that prepare them for real-world success.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >          <Button 
            size="xl" 
            className="btn-cta-white font-semibold shadow-lg transition-all duration-300"
            onClick={() => window.location.href = '/contact'}
            style={{
              backgroundColor: 'white',
              color: 'var(--color-primary-purple)',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            Apply Now
          </Button>
          <Button 
            variant="outline" 
            size="xl" 
            onClick={() => window.location.href = '/contact'}
            className="btn-outline-white font-semibold transition-all duration-300"
            style={{
              backgroundColor: 'transparent',
              color: 'white',
              border: '2px solid white'
            }}
          >
            Schedule Campus Visit
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToActionSection;
