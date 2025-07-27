import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Icon, Button, Card } from '../components';
import styles from './EventsPage.module.css';

const EventsPage = () => {
  const [activeTab, setActiveTab] = useState('ongoing');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Events' },
    { id: 'hackathon', name: 'Hackathons' },
    { id: 'workshop', name: 'Workshops' },
    { id: 'competition', name: 'Competitions' },
    { id: 'seminar', name: 'Seminars' },
    { id: 'expo', name: 'Exhibitions' }
  ];

  const ongoingEvents = [
    {
      id: 1,
      title: 'MIT ADT Innovation Challenge 2025',
      category: 'competition',
      date: 'June 15-25, 2025',
      endDate: new Date('2025-06-25'),
      location: 'MIT ADT Campus, Pune',
      description: 'Annual innovation challenge focusing on sustainable technology solutions.',
      registrationOpen: true,
      participantCount: 450,
      maxParticipants: 500,
      tags: ['Innovation', 'Sustainability', 'Technology'],
      prize: '₹5,00,000'
    },
    {
      id: 2,
      title: 'AI/ML Workshop Series',
      category: 'workshop',
      date: 'June 20-22, 2025',
      endDate: new Date('2025-06-22'),
      location: 'Computer Lab A',
      description: 'Intensive 3-day workshop on Artificial Intelligence and Machine Learning.',
      registrationOpen: true,
      participantCount: 85,
      maxParticipants: 100,
      tags: ['AI', 'Machine Learning', 'Python'],
      instructor: 'Dr. Sarah Chen'
    }
  ];

  const upcomingEvents = [
    {
      id: 3,
      title: 'Smart Cities Hackathon',
      category: 'hackathon',
      date: 'July 5-7, 2025',
      startDate: new Date('2025-07-05'),
      location: 'Innovation Hub',
      description: '48-hour hackathon to develop smart city solutions.',
      registrationOpen: true,
      tags: ['Smart Cities', 'IoT', 'Urban Planning'],
      prize: '₹3,00,000'
    },
    {
      id: 4,
      title: 'Blockchain Technology Expo',
      category: 'expo',
      date: 'July 15-16, 2025',
      startDate: new Date('2025-07-15'),
      location: 'Convention Center',
      description: 'Exhibition showcasing blockchain innovations and applications.',
      registrationOpen: true,
      tags: ['Blockchain', 'Cryptocurrency', 'DeFi'],
      expectedAttendees: 1000
    },
    {
      id: 5,
      title: 'Sustainable Energy Symposium',
      category: 'seminar',
      date: 'August 2-3, 2025',
      startDate: new Date('2025-08-02'),
      location: 'Auditorium',
      description: 'International symposium on renewable energy technologies.',
      registrationOpen: false,
      registrationOpenDate: new Date('2025-06-30'),
      tags: ['Renewable Energy', 'Sustainability', 'Research']
    }
  ];

  const pastEvents = [
    {
      id: 6,
      title: 'TechFest 2024',
      category: 'expo',
      date: 'December 10-12, 2024',
      location: 'MIT ADT Campus',
      description: 'Annual technology festival with exhibitions, competitions, and workshops.',
      participants: 2500,
      projects: 150,
      tags: ['Technology', 'Innovation', 'Student Projects'],
      gallery: '/gallery/techfest-2024',
      report: '/reports/techfest-2024.pdf'
    }
  ];

  const getCountdown = (endDate) => {
    const now = new Date();
    const diff = endDate - now;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    return { days, hours };
  };

  const EventCard = ({ event, type = 'upcoming' }) => {
    const countdown = type === 'ongoing' ? getCountdown(event.endDate) : null;
    
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className={styles.eventCard}>
          {event.image && (
            <div className={styles.eventImageContainer}>
              <img 
                src={event.image} 
                alt={event.title}
                className={styles.eventImage}
              />
              <div className={styles.eventStatus + ' ' + styles[type]}>
                {type === 'ongoing' ? 'Live' : type === 'upcoming' ? 'Upcoming' : 'Completed'}
              </div>
              {countdown && (
                <div className={styles.eventCountdown}>
                  {countdown.days}d {countdown.hours}h left
                </div>
              )}
            </div>
          )}
          
          {!event.image && (
            <div className={styles.eventHeaderNoImage}>
              <div className={styles.eventStatus + ' ' + styles[type]}>
                {type === 'ongoing' ? 'Live' : type === 'upcoming' ? 'Upcoming' : 'Completed'}
              </div>
              {countdown && (
                <div className={styles.eventCountdown}>
                  {countdown.days}d {countdown.hours}h left
                </div>
              )}
            </div>
          )}
          
          <div className={styles.eventContent}>
            <div className={styles.eventMeta}>
              <span className={styles.eventCategory}>
                {event.category.replace('-', ' ')}
              </span>
              <div className={styles.eventDate}>
                <Icon name="calendar" size={16} />
                {event.date}
              </div>
            </div>
            
            <h3 className={styles.eventTitle}>
              {event.title}
            </h3>
            
            <p className={styles.eventDescription}>
              {event.description}
            </p>
            
            <div className={styles.eventLocation}>
              <Icon name="map-pin" size={16} />
              {event.location}
            </div>
            
            {event.tags && (
              <div className={styles.eventTags}>
                {event.tags.slice(0, 3).map((tag, index) => (
                  <span key={index} className={styles.eventTag}>
                    {tag}
                  </span>
                ))}
              </div>
            )}
            
            {type === 'ongoing' && event.participantCount && (
              <div className={styles.participantProgress}>
                <div className={styles.participantText}>
                  <span>Participants</span>
                  <span>{event.participantCount}/{event.maxParticipants}</span>
                </div>
                <div className={styles.participantBar}>
                  <div 
                    className={styles.participantFill}
                    style={{ width: `${(event.participantCount / event.maxParticipants) * 100}%` }}
                  ></div>
                </div>
              </div>
            )}
            
            <div className={styles.eventActions}>
              {event.prize && (
                <span className={styles.eventPrize}>
                  Prize: {event.prize}
                </span>
              )}
              
              {type === 'ongoing' && event.registrationOpen && (
                <button className={`${styles.eventButton} ${styles.primary}`}>
                  Register Now
                </button>
              )}
              
              {type === 'upcoming' && (
                <button 
                  className={`${styles.eventButton} ${event.registrationOpen ? styles.primary : styles.outline}`}
                  disabled={!event.registrationOpen}
                >
                  {event.registrationOpen ? 'Register' : 'Registration Soon'}
                </button>
              )}
              
              {type === 'past' && (
                <div className={styles.eventActions}>
                  {event.gallery && (
                    <button className={`${styles.eventButton} ${styles.outline}`}>
                      <Icon name="image" size={16} />
                      Gallery
                    </button>
                  )}
                  {event.report && (
                    <button className={`${styles.eventButton} ${styles.outline}`}>
                      <Icon name="download" size={16} />
                      Report
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  const getCurrentEvents = () => {
    let events = [];
    if (activeTab === 'ongoing') events = ongoingEvents;
    else if (activeTab === 'upcoming') events = upcomingEvents;
    else events = pastEvents;

    // Filter by search term
    if (searchTerm) {
      events = events.filter(event => 
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      events = events.filter(event => event.category === selectedCategory);
    }

    return events;
  };

  return (
    <div className={styles.eventsPageContainer}>
      {/* Page Header */}
      <section className={styles.eventsHeader}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.eventsHeaderContent}
          >
            <h1 className={styles.eventsTitle}>
              Events & Activities
            </h1>
            <p className={styles.eventsSubtitle}>
              Discover upcoming hackathons, workshops, competitions, and conferences at MIT ADT University
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className={styles.searchFilterSection}>
        <div className={styles.container}>
          <div className={styles.searchFilterContainer}>
            {/* Search Bar */}
            <div className={styles.searchInputContainer}>
              <Icon name="search" size={20} className={styles.searchIcon} />
              <input
                type="text"
                placeholder="Search events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={styles.searchInput}
              />
            </div>

            {/* Category Filter */}
            <div className={styles.categoryFilters}>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`${styles.categoryFilter} ${
                    selectedCategory === category.id ? styles.active : styles.inactive
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Event Tabs */}
      <section className={styles.tabsSection}>
        <div className={styles.container}>
          <div className={styles.tabsContainer}>
            <div className={styles.tabsWrapper}>
              {[
                { id: 'ongoing', label: 'Ongoing Events', count: ongoingEvents.length },
                { id: 'upcoming', label: 'Upcoming Events', count: upcomingEvents.length },
                { id: 'past', label: 'Past Events', count: pastEvents.length }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`${styles.tab} ${
                    activeTab === tab.id ? styles.active : styles.inactive
                  }`}
                >
                  {tab.label} ({tab.count})
                </button>
              ))}
            </div>
          </div>

          {/* Events Grid */}
          <div className={styles.eventsGrid}>
            {getCurrentEvents().map((event) => (
              <EventCard key={event.id} event={event} type={activeTab} />
            ))}
          </div>

          {getCurrentEvents().length === 0 && (
            <div className={styles.emptyState}>
              <Icon name="calendar" size={64} className={styles.emptyStateIcon} />
              <h3 className={styles.emptyStateTitle}>No events found</h3>
              <p className={styles.emptyStateText}>
                {searchTerm || selectedCategory !== 'all' 
                  ? 'Try adjusting your search or filter criteria'
                  : 'Check back soon for new events!'
                }
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={styles.ctaContent}
          >
            <h2 className={styles.ctaTitle}>
              Want to Organize an Event?
            </h2>
            <p className={styles.ctaText}>
              Have an innovative idea for a workshop, hackathon, or seminar? We'd love to help you bring it to life.
            </p>
            <div className={styles.ctaButtons}>
              <button className={`${styles.ctaButton} ${styles.secondary}`}>
                <Icon name="plus" size={20} />
                Propose Event
              </button>
              <button className={`${styles.ctaButton} ${styles.outline}`}>
                <Icon name="message-circle" size={20} />
                Get Support
              </button>
              <button 
                className={`${styles.ctaButton} ${styles.outline}`}
                onClick={() => window.open('https://mituniversity.ac.in/', '_blank')}
              >
                <Icon name="external-link" size={20} />
                Visit Main Website
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;
