import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

const CallToActionSection = () => {
  return (
    <section className="py-20 relative overflow-hidden" style={{background: 'linear-gradient(135deg, var(--color-primary-600), var(--color-secondary-600))'}}>
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
          className="text-xl mb-8 max-w-3xl mx-auto opacity-90"
        >
          Join thousands of students who are transforming their education through hands-on, 
          project-based learning experiences that prepare them for real-world success.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button 
            variant="secondary" 
            size="xl" 
            className="bg-white text-blue-600 hover:bg-gray-100 shadow-lg hover:shadow-xl"
          >
            Apply Now
          </Button>
          <Button 
            variant="outline" 
            size="xl" 
            className="text-white border-white hover:bg-white hover:text-blue-600"
          >
            Schedule Campus Visit
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToActionSection;
