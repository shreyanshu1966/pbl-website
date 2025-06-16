import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Icon from './Icon';

const AnnouncementTicker = () => {
  const [currentAnnouncement, setCurrentAnnouncement] = useState(0);

  const announcements = [
    { id: 1, text: "New PBL Project: AI-Powered Smart Campus Initiative - Applications Open!", date: "2025-06-15" },
    { id: 2, text: "Industry Partnership with TechCorp announced for Summer Internships", date: "2025-06-14" },
    { id: 3, text: "MIT-ADT PBL Showcase Event scheduled for July 20, 2025", date: "2025-06-13" },
    { id: 4, text: "Student Innovation Competition results announced - Congratulations to all winners!", date: "2025-06-12" }
  ];

  // Auto-scroll announcements
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentAnnouncement((prev) => (prev + 1) % announcements.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [announcements.length]);

  return (
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
  );
};

export default AnnouncementTicker;
