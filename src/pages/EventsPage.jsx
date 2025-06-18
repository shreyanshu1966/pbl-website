import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Icon, Button, Card } from '../components';

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
      image: '/api/placeholder/600/300',
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
      image: '/api/placeholder/600/300',
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
      image: '/api/placeholder/600/300',
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
      image: '/api/placeholder/600/300',
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
      image: '/api/placeholder/600/300',
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
      image: '/api/placeholder/600/300',
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
        <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
          <div className="relative">
            <img 
              src={event.image} 
              alt={event.title}
              className="w-full h-48 object-cover"
            />
            <div className="absolute top-4 left-4">
              <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                type === 'ongoing' ? 'bg-green-500 text-white' :
                type === 'upcoming' ? 'bg-blue-500 text-white' :
                'bg-gray-500 text-white'
              }`}>
                {type === 'ongoing' ? 'Live' : type === 'upcoming' ? 'Upcoming' : 'Completed'}
              </span>
            </div>
            {countdown && (
              <div className="absolute top-4 right-4 bg-black bg-opacity-75 text-white px-3 py-1 rounded text-sm">
                {countdown.days}d {countdown.hours}h left
              </div>
            )}
          </div>
          
          <div className="p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-purple-600 capitalize">
                {event.category.replace('-', ' ')}
              </span>
              <div className="flex items-center text-sm text-gray-500">
                <Icon name="Calendar" size={16} className="mr-1" />
                {event.date}
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
              {event.title}
            </h3>
            
            <p className="text-gray-600 mb-4 line-clamp-3">
              {event.description}
            </p>
            
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <Icon name="MapPin" size={16} className="mr-1" />
              {event.location}
            </div>
            
            {event.tags && (
              <div className="flex flex-wrap gap-2 mb-4">
                {event.tags.slice(0, 3).map((tag, index) => (
                  <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                    {tag}
                  </span>
                ))}
              </div>
            )}
            
            {type === 'ongoing' && event.participantCount && (
              <div className="mb-4">
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Participants</span>
                  <span>{event.participantCount}/{event.maxParticipants}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-purple-600 to-orange-600 h-2 rounded-full"
                    style={{ width: `${(event.participantCount / event.maxParticipants) * 100}%` }}
                  ></div>
                </div>
              </div>
            )}
            
            <div className="flex justify-between items-center">
              {event.prize && (
                <span className="text-sm font-semibold text-green-600">
                  Prize: {event.prize}
                </span>
              )}
              
              {type === 'ongoing' && event.registrationOpen && (
                <Button size="sm" className="ml-auto">
                  Register Now
                </Button>
              )}
              
              {type === 'upcoming' && (
                <Button 
                  size="sm" 
                  variant={event.registrationOpen ? 'primary' : 'outline'}
                  disabled={!event.registrationOpen}
                  className="ml-auto"
                >
                  {event.registrationOpen ? 'Register' : 'Registration Soon'}
                </Button>
              )}
              
              {type === 'past' && (
                <div className="flex gap-2 ml-auto">
                  {event.gallery && (
                    <Button size="sm" variant="outline">
                      <Icon name="Image" size={16} className="mr-1" />
                      Gallery
                    </Button>
                  )}
                  {event.report && (
                    <Button size="sm" variant="outline">
                      <Icon name="Download" size={16} className="mr-1" />
                      Report
                    </Button>
                  )}
                </div>
              )}
            </div>
          </div>
        </Card>
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
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <section className="mit-adt-gradient text-white py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Events & Activities
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 leading-relaxed">
              Discover upcoming hackathons, workshops, competitions, and conferences at MIT ADT University
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white shadow-sm">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Icon name="Search" size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
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
      <section className="py-8">
        <div className="container">
          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 rounded-lg p-1 flex">
              {[
                { id: 'ongoing', label: 'Ongoing Events', count: ongoingEvents.length },
                { id: 'upcoming', label: 'Upcoming Events', count: upcomingEvents.length },
                { id: 'past', label: 'Past Events', count: pastEvents.length }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-md text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'bg-white text-purple-600 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab.label} ({tab.count})
                </button>
              ))}
            </div>
          </div>

          {/* Events Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getCurrentEvents().map((event) => (
              <EventCard key={event.id} event={event} type={activeTab} />
            ))}
          </div>

          {getCurrentEvents().length === 0 && (
            <div className="text-center py-16">
              <Icon name="Calendar" size={64} className="mx-auto text-gray-300 mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No events found</h3>
              <p className="text-gray-500">
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
      <section className="py-20 mit-adt-gradient text-white">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Want to Organize an Event?
            </h2>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Have an innovative idea for a workshop, hackathon, or seminar? We'd love to help you bring it to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-purple-900 hover:bg-gray-100">
                <Icon name="Plus" size={20} className="mr-2" />
                Propose Event
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-900">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Get Support
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;
