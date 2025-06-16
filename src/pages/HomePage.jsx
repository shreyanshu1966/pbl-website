import React from 'react';
import HeroSection from '../components/HeroSection';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      
      {/* Additional sections can be added here */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Project-Based Learning?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              PBL methodology transforms traditional education by engaging students in real-world challenges, 
              fostering critical thinking, collaboration, and practical skills.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🎯',
                title: 'Real-World Applications',
                description: 'Work on projects that mirror industry challenges and requirements.'
              },
              {
                icon: '🤝',
                title: 'Collaborative Learning',
                description: 'Develop teamwork and communication skills through group projects.'
              },
              {
                icon: '🚀',
                title: 'Innovation Focus',
                description: 'Encourage creative problem-solving and innovative thinking.'
              }
            ].map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
