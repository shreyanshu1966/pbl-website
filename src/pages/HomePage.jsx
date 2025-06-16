import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import { FeatureCard, EventCard, NewsCard, StatCard } from '../components/Card';
import Button from '../components/Button';
import Icon from '../components/Icon';

const HomePage = () => {
  const [currentAnnouncement, setCurrentAnnouncement] = useState(0);
  const [countdownTime, setCountdownTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const announcements = [
    { id: 1, text: "New PBL Project: AI-Powered Smart Campus Initiative - Applications Open!", date: "2025-06-15" },
    { id: 2, text: "Industry Partnership with TechCorp announced for Summer Internships", date: "2025-06-14" },
    { id: 3, text: "MIT-ADT PBL Showcase Event scheduled for July 20, 2025", date: "2025-06-13" },
    { id: 4, text: "Student Innovation Competition results announced - Congratulations to all winners!", date: "2025-06-12" }
  ];

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
    },
    {
      title: "Hackathon 2025",
      date: "August 15, 2025",
      time: "9:00 AM",
      location: "Innovation Lab",
      description: "48-hour coding challenge for innovative solutions",
      status: "upcoming"
    }
  ];

  const newsItems = [
    {
      title: "MIT-ADT PBL Students Win National Innovation Award",
      summary: "Team develops sustainable water purification system for rural communities",
      date: "June 10, 2025",
      author: "Dr. Sarah Johnson",
      category: "Achievement",
      image: "/images/award-news.jpg"
    },
    {
      title: "New Partnership with Global Tech Leaders",
      summary: "Collaboration opens doors for international project opportunities",
      date: "June 8, 2025",
      author: "Prof. Michael Chen",
      category: "Partnership"
    },
    {
      title: "Student Startup Secures Funding",
      summary: "EdTech solution developed through PBL receives $500K investment",
      date: "June 5, 2025",
      author: "Innovation Team",
      category: "Success Story"
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

  // Auto-scroll announcements
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentAnnouncement((prev) => (prev + 1) % announcements.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [announcements.length]);

  return (
    <div className="min-h-screen">
      <HeroSection />
      
      {/* News & Announcements Ticker */}
      <section style={{backgroundColor: 'var(--color-primary-600)'}} className="py-3 overflow-hidden">
        <div className="container">
          <div className="flex items-center">
            <div className="flex items-center text-white font-semibold mr-6 whitespace-nowrap">
              <Icon name="megaphone" size={20} className="mr-2" />
              Latest News:
            </div>
            <div className="flex-1 overflow-hidden">
              <motion.div
                key={currentAnnouncement}
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                className="text-white whitespace-nowrap"
              >
                {announcements[currentAnnouncement].text}
              </motion.div>
            </div>
            <Link to="/news" className="text-white hover:text-blue-200 ml-4 whitespace-nowrap">
              View All News →
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose PBL Section */}
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
            {[
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
            ].map((feature, index) => (
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

      {/* Key Highlights Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl lg:text-4xl font-bold mb-4"
              style={{color: 'var(--color-neutral-900)'}}
            >
              Key Highlights
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl max-w-2xl mx-auto"
              style={{color: 'var(--color-neutral-600)'}}
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
              className="p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              style={{backgroundColor: 'var(--color-primary-50)', borderLeft: '4px solid var(--color-primary-600)'}}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold" style={{color: 'var(--color-primary-800)'}}>
                  Upcoming Events
                </h3>
                <Icon name="calendar" size={32} style={{color: 'var(--color-primary-600)'}} />
              </div>
              
              {/* Countdown Timer */}
              <div className="mb-6 p-4 rounded-lg" style={{backgroundColor: 'var(--color-primary-100)'}}>
                <div className="text-sm font-medium mb-2" style={{color: 'var(--color-primary-700)'}}>
                  Next Event: Project Showcase 2025
                </div>
                <div className="grid grid-cols-4 gap-2 text-center">
                  {Object.entries(countdownTime).map(([unit, value]) => (
                    <div key={unit} className="p-2 rounded" style={{backgroundColor: 'var(--color-primary-200)'}}>
                      <div className="text-lg font-bold" style={{color: 'var(--color-primary-800)'}}>{value}</div>
                      <div className="text-xs" style={{color: 'var(--color-primary-600)'}}>{unit}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3 mb-4">
                {upcomingEvents.slice(0, 2).map((event, index) => (
                  <div key={index} className="p-3 rounded-lg border border-blue-200 hover:bg-blue-50 transition-colors">
                    <div className="font-semibold" style={{color: 'var(--color-primary-800)'}}>{event.title}</div>
                    <div className="text-sm" style={{color: 'var(--color-primary-600)'}}>{event.date} • {event.location}</div>
                  </div>
                ))}
              </div>
              
              <Link to="/events" className="inline-flex items-center font-medium" style={{color: 'var(--color-primary-600)'}}>
                View All Events <Icon name="arrow-right" size={16} className="ml-2" />
              </Link>
            </motion.div>

            {/* Latest Downloads Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              style={{backgroundColor: 'var(--color-secondary-50)', borderLeft: '4px solid var(--color-secondary-600)'}}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold" style={{color: 'var(--color-secondary-800)'}}>
                  Latest Downloads
                </h3>
                <Icon name="download" size={32} style={{color: 'var(--color-secondary-600)'}} />
              </div>
              
              <div className="space-y-4 mb-6">
                {[
                  { name: 'PBL Project Template 2025', size: '2.5 MB', downloads: '1.2k' },
                  { name: 'Industry Guidelines PDF', size: '1.8 MB', downloads: '892' },
                  { name: 'Assessment Rubric', size: '0.9 MB', downloads: '654' }
                ].map((file, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg border border-green-200 hover:bg-green-50 transition-colors cursor-pointer">
                    <div>
                      <div className="font-semibold" style={{color: 'var(--color-secondary-800)'}}>{file.name}</div>
                      <div className="text-sm" style={{color: 'var(--color-secondary-600)'}}>{file.size} • {file.downloads} downloads</div>
                    </div>
                    <Icon name="download" size={20} style={{color: 'var(--color-secondary-600)'}} />
                  </div>
                ))}
              </div>
              
              <Link to="/downloads" className="inline-flex items-center font-medium" style={{color: 'var(--color-secondary-600)'}}>
                View All Downloads <Icon name="arrow-right" size={16} className="ml-2" />
              </Link>
            </motion.div>

            {/* Tech Pool Directory Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              style={{backgroundColor: 'var(--color-neutral-50)', borderLeft: '4px solid var(--color-warning)'}}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold" style={{color: 'var(--color-neutral-800)'}}>
                  Tech Pool Directory
                </h3>
                <Icon name="database" size={32} style={{color: 'var(--color-warning)'}} />
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { category: 'AI/ML Projects', count: '42' },
                  { category: 'Web Development', count: '38' },
                  { category: 'IoT Solutions', count: '29' },
                  { category: 'Mobile Apps', count: '31' }
                ].map((tech, index) => (
                  <div key={index} className="p-3 rounded-lg text-center border border-yellow-200 hover:bg-yellow-50 transition-colors">
                    <div className="text-2xl font-bold" style={{color: 'var(--color-warning)'}}>{tech.count}</div>
                    <div className="text-sm font-medium" style={{color: 'var(--color-neutral-600)'}}>{tech.category}</div>
                  </div>
                ))}
              </div>
              
              <Link to="/tech-pool" className="inline-flex items-center font-medium" style={{color: 'var(--color-warning)'}}>
                Explore Tech Pool <Icon name="arrow-right" size={16} className="ml-2" />
              </Link>
            </motion.div>

            {/* Recent Achievements Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              style={{backgroundColor: 'var(--color-success)', background: 'linear-gradient(135deg, var(--color-success), var(--color-secondary-600))'}}
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
                  <div key={index} className="p-3 rounded-lg bg-white bg-opacity-20 text-white">
                    <div className="font-semibold">{achievement.title}</div>
                    <div className="text-sm opacity-90">{achievement.subtitle}</div>
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

      {/* Mission & Vision Section */}
      <section className="py-20 relative overflow-hidden" style={{backgroundColor: 'var(--color-primary-900)'}}>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800 to-green-800 opacity-90"></div>
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-8">Our Mission & Vision</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 flex items-center">
                    <Icon name="target" size={24} className="mr-3" />
                    Mission
                  </h3>
                  <p className="text-lg text-blue-100 leading-relaxed">
                    To revolutionize education through innovative Project-Based Learning methodology, 
                    empowering students to solve real-world challenges while developing critical 
                    thinking, collaboration, and technical skills essential for the future workforce.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold mb-4 flex items-center">
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
                  />
                  <StatCard
                    number="50+"
                    label="Projects Completed"
                    icon="project"
                    className="bg-white bg-opacity-20 text-white border-none"
                  />
                  <StatCard
                    number="15+"
                    label="Industry Partners"
                    icon="handshake"
                    className="bg-white bg-opacity-20 text-white border-none"
                  />
                  <StatCard
                    number="95%"
                    label="Success Rate"
                    icon="chart-bar"
                    className="bg-white bg-opacity-20 text-white border-none"
                  />
                </div>
                
                <div className="mt-6 p-4 bg-white bg-opacity-10 rounded-lg">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">Transform Your Future</div>
                    <div className="text-blue-200">Through Project-Based Learning</div>
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

      {/* News & Updates Section */}
      <section className="py-20" style={{backgroundColor: 'var(--color-neutral-100)'}}>
        <div className="container">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl lg:text-4xl font-bold mb-4"
              style={{color: 'var(--color-neutral-900)'}}
            >
              Latest News & Updates
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl max-w-2xl mx-auto"
              style={{color: 'var(--color-neutral-600)'}}
            >
              Stay informed about the latest developments, achievements, and opportunities
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((news, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <NewsCard
                  title={news.title}
                  summary={news.summary}
                  date={news.date}
                  author={news.author}
                  category={news.category}
                  image={news.image}
                  href={`/news/${news.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="h-full"
                />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="primary" size="lg" href="/news">
              View All News & Updates
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
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
    </div>
  );
};

export default HomePage;
