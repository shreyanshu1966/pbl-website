import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Icon, Button, Card } from '../components';
import { getImageUrls, getGalleryImages } from '../utils/imageUtils';

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const galleryCategories = [
    { id: 'all', name: 'All Media', icon: 'grid' },
    { id: 'projects', name: 'Student Projects', icon: 'folder' },
    { id: 'events', name: 'Events & Workshops', icon: 'calendar' },
    { id: 'labs', name: 'Labs & Facilities', icon: 'settings' },
    { id: 'awards', name: 'Awards & Recognition', icon: 'award' },
    { id: 'videos', name: 'Videos', icon: 'play' }
  ];

  const galleryItems = [    // Student Projects
    {
      id: 1,
      category: 'projects',
      type: 'image',
      title: 'AI-Powered Healthcare Diagnosis System',
      description: 'Final year project implementing machine learning for medical image analysis',
      thumbnail: getImageUrls.studentProjects.aiHealthcare.replace('w=800&h=600', 'w=400&h=300'),
      fullImage: getImageUrls.studentProjects.aiHealthcare.replace('w=800&h=600', 'w=1200&h=800'),
      date: '2024-12-15',
      tags: ['AI/ML', 'Healthcare', 'Python', 'TensorFlow'],
      students: ['Priya Sharma', 'Rahul Kumar', 'Anita Desai'],
      professor: 'Dr. Rajesh Patel'
    },
    {
      id: 2,
      category: 'projects',
      type: 'image',
      title: 'Smart Campus IoT Network',
      description: 'Comprehensive IoT solution for campus automation and monitoring',
      thumbnail: getImageUrls.studentProjects.iotCampus.replace('w=800&h=600', 'w=400&h=300'),
      fullImage: getImageUrls.studentProjects.iotCampus.replace('w=800&h=600', 'w=1200&h=800'),
      date: '2024-11-28',
      tags: ['IoT', 'Smart Campus', 'Arduino', 'Sensors'],
      students: ['Amit Singh', 'Kavya Nair'],
      professor: 'Prof. Sunita Mehta'
    },
    {
      id: 3,
      category: 'projects',      type: 'video',
      title: 'Blockchain-Based Supply Chain Demo',
      description: 'Live demonstration of transparent supply chain tracking system',
      thumbnail: getImageUrls.studentProjects.blockchain.replace('w=800&h=600', 'w=400&h=300'),
      videoUrl: 'https://player.vimeo.com/video/placeholder',
      date: '2024-10-20',
      tags: ['Blockchain', 'Supply Chain', 'Ethereum', 'Smart Contracts'],
      students: ['Vikram Gupta', 'Sneha Joshi', 'Arjun Reddy'],
      professor: 'Dr. Manoj Kumar'
    },
    
    // Events & Workshops
    {
      id: 4,
      category: 'events',
      type: 'image',
      title: 'PBL Innovation Summit 2024',
      description: 'Annual showcase of student innovations and industry partnerships',
      thumbnail: getImageUrls.events.conference.replace('w=800&h=600', 'w=400&h=300'),
      fullImage: getImageUrls.events.conference.replace('w=800&h=600', 'w=1200&h=800'),
      date: '2024-03-15',
      tags: ['Innovation', 'Showcase', 'Industry Partnership'],
      attendees: 500,
      speakers: ['Dr. A.P.J. Abdul Kalam Memorial Lecture', 'Industry Leaders Panel']
    },
    {
      id: 5,
      category: 'events',
      type: 'image',
      title: 'International Hackathon 2024',
      description: '48-hour coding marathon with participants from 15 countries',
      thumbnail: getImageUrls.events.hackathon.replace('w=800&h=600', 'w=400&h=300'),
      fullImage: getImageUrls.events.hackathon.replace('w=800&h=600', 'w=1200&h=800'),
      date: '2024-02-10',
      tags: ['Hackathon', 'International', 'Competition'],
      attendees: 200,
      prizes: '$50,000 in prizes'
    },
    {
      id: 6,
      category: 'events',
      type: 'video',
      title: 'Workshop: Introduction to Machine Learning',
      description: 'Hands-on ML workshop for beginners with practical implementations',
      thumbnail: getImageUrls.events.workshop.replace('w=800&h=600', 'w=400&h=300'),
      videoUrl: 'https://player.vimeo.com/video/placeholder',
      date: '2024-01-25',
      tags: ['Workshop', 'Machine Learning', 'Tutorial'],
      attendees: 150,
      instructor: 'Dr. Priya Agarwal'
    },

    // Labs & Facilities
    {
      id: 7,
      category: 'labs',
      type: 'image',
      title: 'Advanced AI Research Lab',
      description: 'State-of-the-art facility with GPU clusters and specialized hardware',
      thumbnail: getImageUrls.labs.researchLab.replace('w=800&h=600', 'w=400&h=300'),
      fullImage: getImageUrls.labs.researchLab.replace('w=800&h=600', 'w=1200&h=800'),
      date: '2024-01-10',
      tags: ['Research Lab', 'AI', 'GPU Cluster', 'Hardware'],
      equipment: ['NVIDIA A100 GPUs', 'High-Performance Workstations', 'Deep Learning Servers']
    },
    {
      id: 8,
      category: 'labs',
      type: 'image',
      title: 'IoT & Embedded Systems Lab',
      description: 'Comprehensive facility for prototyping and testing IoT solutions',
      thumbnail: getImageUrls.labs.electronicsLab.replace('w=800&h=600', 'w=400&h=300'),
      fullImage: getImageUrls.labs.electronicsLab.replace('w=800&h=600', 'w=1200&h=800'),
      date: '2024-01-05',
      tags: ['IoT Lab', 'Embedded Systems', 'Prototyping'],
      equipment: ['Arduino Kits', 'Raspberry Pi', 'Sensor Arrays', '3D Printers']
    },
    {
      id: 9,
      category: 'labs',
      type: 'virtual-tour',
      title: 'Virtual Tour: Innovation Center',
      description: '360° virtual tour of our modern innovation and collaboration spaces',
      thumbnail: getImageUrls.labs.engineeringLab.replace('w=800&h=600', 'w=400&h=300'),
      tourUrl: '/virtual-tour/innovation-center',
      date: '2024-01-01',
      tags: ['Virtual Tour', 'Innovation Center', '360°']
    },

    // Awards & Recognition
    {
      id: 10,
      category: 'awards',
      type: 'image',
      title: 'National Innovation Award 2024',
      description: 'MIT ADTU PBL Program recognized for excellence in project-based learning',
      thumbnail: getImageUrls.awards.trophy.replace('w=800&h=600', 'w=400&h=300'),
      fullImage: getImageUrls.awards.trophy.replace('w=800&h=600', 'w=1200&h=800'),
      date: '2024-05-20',
      tags: ['Award', 'National Recognition', 'Excellence'],
      awardedBy: 'Ministry of Education, Government of India',
      significance: 'Top 10 Engineering Institutions for Innovation'
    },    {
      id: 11,
      category: 'awards',
      type: 'image',
      title: 'Best Student Project - Smart City Solutions',
      description: 'Team wins international competition for sustainable urban development project',
      thumbnail: getImageUrls.awards.certificate.replace('w=800&h=600', 'w=400&h=300'),
      fullImage: getImageUrls.awards.certificate.replace('w=800&h=600', 'w=1200&h=800'),
      date: '2024-04-15',
      tags: ['Student Award', 'Smart City', 'International'],
      competition: 'Global Smart Cities Challenge 2024',
      prize: '$25,000 and Incubation Support'
    },

    // Videos
    {
      id: 12,
      category: 'videos',
      type: 'video',
      title: 'MIT ADTU PBL Program Overview',
      description: 'Comprehensive introduction to our project-based learning methodology',
      thumbnail: getImageUrls.campus.building.replace('w=800&h=600', 'w=400&h=300'),
      videoUrl: 'https://player.vimeo.com/video/placeholder',
      date: '2024-06-01',
      tags: ['Overview', 'PBL Methodology', 'Introduction'],
      duration: '5:30',
      views: '10,000+'
    },
    {
      id: 13,
      category: 'videos',
      type: 'video',
      title: 'Student Success Stories',
      description: 'Alumni sharing their PBL experiences and career achievements',
      thumbnail: getImageUrls.people.students.replace('w=800&h=600', 'w=400&h=300'),
      videoUrl: 'https://player.vimeo.com/video/placeholder',
      date: '2024-05-15',
      tags: ['Success Stories', 'Alumni', 'Career'],
      duration: '8:45',
      views: '15,000+'
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const openLightbox = (item) => {
    setSelectedMedia(item);
    setIsLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setSelectedMedia(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="mit-adt-gradient py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Gallery & Showcase
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Explore our vibrant PBL community through student projects, events, facilities, 
              and achievements that define our innovation ecosystem
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg">
                <Icon name="download" size={20} className="mr-2" />
                Download Media Kit
              </Button>
              <Button variant="outline" size="lg">
                <Icon name="external-link" size={20} className="mr-2" />
                Virtual Campus Tour
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Statistics */}
      <section className="py-12 bg-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
              <div className="text-gray-600">Project Photos</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-orange-600 mb-2">50+</div>
              <div className="text-gray-600">Event Videos</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-green-600 mb-2">25+</div>
              <div className="text-gray-600">Virtual Tours</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
              <div className="text-gray-600">Awards & Achievements</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-100">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-4">
            {galleryCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Icon name={category.icon} size={18} className="mr-2" />
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="gallery-grid"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => openLightbox(item)}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative overflow-hidden">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    
                    {/* Media Type Indicator */}
                    <div className="absolute top-4 left-4">
                      {item.type === 'video' && (
                        <div className="flex items-center bg-black/70 text-white px-2 py-1 rounded text-sm">
                          <Icon name="play" size={14} className="mr-1" />
                          Video
                        </div>
                      )}
                      {item.type === 'virtual-tour' && (
                        <div className="flex items-center bg-purple-600 text-white px-2 py-1 rounded text-sm">
                          <Icon name="globe" size={14} className="mr-1" />
                          360° Tour
                        </div>
                      )}
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="text-white text-center">
                        <Icon name="expand" size={32} className="mx-auto mb-2" />
                        <div className="font-medium">View Details</div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-purple-600 font-medium capitalize">
                        {item.category.replace('-', ' ')}
                      </span>
                      <span className="text-sm text-gray-500">{item.date}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-2">{item.description}</p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {item.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                          {tag}
                        </span>
                      ))}
                      {item.tags.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                          +{item.tags.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Additional Info */}
                    {item.students && (
                      <div className="text-sm text-gray-600">
                        <Icon name="users" size={14} className="inline mr-1" />
                        {item.students.length} student{item.students.length > 1 ? 's' : ''}
                      </div>
                    )}
                    {item.attendees && (
                      <div className="text-sm text-gray-600">
                        <Icon name="users" size={14} className="inline mr-1" />
                        {item.attendees} attendees
                      </div>
                    )}
                    {item.views && (
                      <div className="text-sm text-gray-600">
                        <Icon name="eye" size={14} className="inline mr-1" />
                        {item.views} views
                      </div>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <Icon name="image" size={64} className="mx-auto text-gray-400 mb-4" />
              <h3 className="text-xl font-medium text-gray-600 mb-2">No media found</h3>
              <p className="text-gray-500">Try selecting a different category</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {isLightboxOpen && selectedMedia && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative max-w-6xl max-h-full overflow-auto bg-white rounded-lg">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
            >
              <Icon name="close" size={20} />
            </button>

            <div className="grid lg:grid-cols-2 gap-6 p-6">
              {/* Media Content */}
              <div className="space-y-4">
                {selectedMedia.type === 'image' && (
                  <img
                    src={selectedMedia.fullImage || selectedMedia.thumbnail}
                    alt={selectedMedia.title}
                    className="w-full h-auto rounded-lg"
                  />
                )}
                
                {selectedMedia.type === 'video' && (
                  <div className="aspect-video">
                    <iframe
                      src={selectedMedia.videoUrl}
                      className="w-full h-full rounded-lg"
                      allowFullScreen
                    ></iframe>
                  </div>
                )}

                {selectedMedia.type === 'virtual-tour' && (
                  <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Icon name="globe" size={48} className="mx-auto text-gray-400 mb-4" />
                      <Button variant="primary">
                        <Icon name="external-link" size={16} className="mr-2" />
                        Launch Virtual Tour
                      </Button>
                    </div>
                  </div>
                )}
              </div>

              {/* Details */}
              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-purple-600 font-medium capitalize">
                      {selectedMedia.category.replace('-', ' ')}
                    </span>
                    <span className="text-sm text-gray-500">{selectedMedia.date}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{selectedMedia.title}</h2>
                  <p className="text-gray-600 leading-relaxed">{selectedMedia.description}</p>
                </div>

                {/* Tags */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedMedia.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Additional Details */}
                {selectedMedia.students && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Team Members</h3>
                    <div className="space-y-2">
                      {selectedMedia.students.map((student) => (
                        <div key={student} className="flex items-center text-gray-700">
                          <Icon name="user" size={16} className="mr-2 text-purple-600" />
                          {student}
                        </div>
                      ))}
                      {selectedMedia.professor && (
                        <div className="flex items-center text-gray-700 pt-2 border-t">
                          <Icon name="award" size={16} className="mr-2 text-orange-600" />
                          <span className="font-medium">Supervisor: {selectedMedia.professor}</span>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {selectedMedia.equipment && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Equipment & Tools</h3>
                    <div className="space-y-2">
                      {selectedMedia.equipment.map((item) => (
                        <div key={item} className="flex items-center text-gray-700">
                          <Icon name="settings" size={16} className="mr-2 text-purple-600" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {selectedMedia.awardedBy && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Award Details</h3>
                    <div className="space-y-2">
                      <div className="flex items-center text-gray-700">
                        <Icon name="award" size={16} className="mr-2 text-yellow-600" />
                        <span className="font-medium">Awarded by: {selectedMedia.awardedBy}</span>
                      </div>
                      {selectedMedia.significance && (
                        <div className="flex items-center text-gray-700">
                          <Icon name="star" size={16} className="mr-2 text-yellow-600" />
                          {selectedMedia.significance}
                        </div>
                      )}
                    </div>
                  </div>
                )}

                <div className="flex gap-3">
                  <Button variant="primary" className="flex-1">
                    <Icon name="share" size={16} className="mr-2" />
                    Share
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Icon name="download" size={16} className="mr-2" />
                    Download
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Want to Feature Your Project?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Share your PBL journey and inspire the next generation of innovators
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="lg">
                <Icon name="upload" size={20} className="mr-2" />
                Submit Your Project
              </Button>
              <Button variant="outline" size="lg">
                <Icon name="camera" size={20} className="mr-2" />
                Media Guidelines
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
