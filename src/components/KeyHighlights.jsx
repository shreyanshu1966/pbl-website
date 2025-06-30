import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Icon from './Icon';

const KeyHighlights = () => {
  const [countdownTime, setCountdownTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const upcomingEvents = [
    {
      title: "Project Showcase 2025",
      date: "July 20, 2025",
      time: "10:00 AM",
      location: "MIT-ADT Auditorium",
      description: "Annual showcase of student projects and innovations",
      status: "upcoming",
      image: "/images/showcase-event.jpg"
    },
    {
      title: "Industry Connect Workshop",
      date: "July 5, 2025", 
      time: "2:00 PM",
      location: "Virtual Event",
      description: "Networking session with industry professionals",
      status: "upcoming"
    }
  ];

  // Countdown timer for next major event
  useEffect(() => {
    const targetDate = new Date('2025-07-20T10:00:00').getTime();
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      
      if (distance > 0) {
        setCountdownTime({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900"
          >
            Key Highlights
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl max-w-2xl mx-auto text-gray-600"
          >
            Stay updated with the latest events, resources, and achievements
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upcoming Events Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-purple-50 border-l-4 border-purple-600"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-purple-800">
                Upcoming Events
              </h3>
              <Icon name="calendar" size={32} className="text-purple-600" />
            </div>
            
            {/* Countdown Timer */}
            <div className="mb-6 p-4 rounded-lg bg-purple-100">
              <div className="text-sm font-medium mb-2 text-purple-700">
                Next Event: Project Showcase 2025
              </div>
              <div className="grid grid-cols-4 gap-2 text-center">
                {Object.entries(countdownTime).map(([unit, value]) => (
                  <div key={unit} className="p-2 rounded bg-purple-200">
                    <div className="text-lg font-bold text-purple-800">{value}</div>
                    <div className="text-xs text-purple-600">{unit}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3 mb-4">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="p-3 rounded-lg border border-purple-200 hover:bg-purple-50 transition-colors">
                  <div className="font-semibold text-purple-800">{event.title}</div>
                  <div className="text-sm text-purple-600">{event.date} • {event.location}</div>
                </div>
              ))}
            </div>
            
            <Link to="/events" className="inline-flex items-center font-medium text-purple-600 hover:text-purple-700">
              View All Events <Icon name="arrow-right" size={16} className="ml-2" />
            </Link>
          </motion.div>

          {/* Latest Downloads Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-blue-50 border-l-4 border-blue-600"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-blue-800">
                Latest Downloads
              </h3>
              <Icon name="download" size={32} className="text-blue-600" />
            </div>
            
            <div className="space-y-4 mb-6">
              {[
                { name: 'PBL Project Template 2025', size: '2.5 MB', downloads: '1.2k' },
                { name: 'Industry Guidelines PDF', size: '1.8 MB', downloads: '892' },
                { name: 'Assessment Rubric', size: '0.9 MB', downloads: '654' }
              ].map((file, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg border border-blue-200 hover:bg-blue-50 transition-colors cursor-pointer">
                  <div>
                    <div className="font-semibold text-blue-800">{file.name}</div>
                    <div className="text-sm text-blue-600">{file.size} • {file.downloads} downloads</div>
                  </div>
                  <Icon name="download" size={20} className="text-blue-600" />
                </div>
              ))}
            </div>
            
            <Link to="/downloads" className="inline-flex items-center font-medium text-blue-600 hover:text-blue-700">
              View All Downloads <Icon name="arrow-right" size={16} className="ml-2" />
            </Link>
          </motion.div>

          {/* Tech Pool Directory Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-yellow-50 border-l-4 border-yellow-600"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-800">
                Tech Pool Directory
              </h3>
              <Icon name="database" size={32} className="text-yellow-600" />
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              {[
                { category: 'AI/ML Projects', count: '42' },
                { category: 'Web Development', count: '38' },
                { category: 'IoT Solutions', count: '29' },
                { category: 'Mobile Apps', count: '31' }
              ].map((tech, index) => (
                <div key={index} className="p-3 rounded-lg text-center border border-yellow-200 hover:bg-yellow-50 transition-colors">
                  <div className="text-2xl font-bold text-yellow-600">{tech.count}</div>
                  <div className="text-sm font-medium text-gray-600">{tech.category}</div>
                </div>
              ))}
            </div>
            
            <Link to="/tech-pool" className="inline-flex items-center font-medium text-yellow-600 hover:text-yellow-700">
              Explore Tech Pool <Icon name="arrow-right" size={16} className="ml-2" />
            </Link>
          </motion.div>

          {/* Recent Achievements Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-green-600 to-green-700"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-white">
                Recent Achievements
              </h3>
              <Icon name="trophy" size={32} className="text-white" />
            </div>
            
            <div className="space-y-4 mb-6">
              {[
                { title: 'National Innovation Award', subtitle: 'Water Purification Project' },
                { title: 'Industry Recognition', subtitle: 'Best Student Startup' },
                { title: 'Research Publication', subtitle: 'IEEE Conference 2025' }
              ].map((achievement, index) => (
                <div key={index} className="p-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30">
                  <div className="font-semibold text-yellow-200">{achievement.title}</div>
                  <div className="text-sm text-green-200">{achievement.subtitle}</div>
                </div>
              ))}
            </div>
            
            <Link to="/achievements" className="inline-flex items-center font-medium text-white">
              View All Achievements <Icon name="arrow-right" size={16} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default KeyHighlights;
