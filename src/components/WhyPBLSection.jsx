import React from 'react';
import { motion } from 'framer-motion';
import { FeatureCard } from './Card';

const WhyPBLSection = () => {
  const features = [
    {
      icon: 'target',
      title: 'Real-World Applications',
      description: 'Work on projects that mirror industry challenges and requirements.',
      color: 'primary'
    },
    {
      icon: 'team',
      title: 'Collaborative Learning',
      description: 'Develop teamwork and communication skills through group projects.',
      color: 'secondary'
    },
    {
      icon: 'lightbulb',
      title: 'Innovation Focus',
      description: 'Encourage creative problem-solving and innovative thinking.',
      color: 'warning'
    }
  ];

  return (
    <section className="py-20" style={{backgroundColor: 'var(--color-neutral-50)'}}>
      <div className="container">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl lg:text-4xl font-bold mb-4"
            style={{color: 'var(--color-neutral-900)'}}
          >
            Why Choose Project-Based Learning?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto"
            style={{color: 'var(--color-neutral-600)'}}
          >
            PBL methodology transforms traditional education by engaging students in real-world challenges, 
            fostering critical thinking, collaboration, and practical skills.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                className="h-full"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyPBLSection;
