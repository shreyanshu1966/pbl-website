import React from 'react';
import { motion } from 'framer-motion';
import { Icon, Button, Card } from '../components';
import { getImageUrls } from '../utils/imageUtils';

const MultidisciplinaryProjectsPage = () => {

  const multidisciplinaryProjects = [
    // Healthcare & Biotech
    {
      id: 1,
      category: 'healthcare',
      sdg: 'sdg3',
      title: 'AI-Powered Early Cancer Detection System',
      description: 'Deep learning model for analyzing medical images to detect cancer in early stages',
      disciplines: ['Computer Science', 'Biomedical Engineering', 'Medicine', 'Data Science'],
      teamSize: 8,
      duration: '18 months',
      status: 'ongoing',
      progress: 75,
      industryPartner: 'Apollo Hospitals',
      funding: '₹45 Lakhs',
      impact: '10,000+ patients screened',
      technologies: ['TensorFlow', 'OpenCV', 'Medical Imaging', 'Cloud Computing'],
      outcomes: [
        '94% accuracy in early detection',
        'Reduced diagnosis time by 60%',        'Filed 2 patents',
        'Published in Nature Digital Medicine'
      ],
      image: getImageUrls.industry.healthcare,
      lead: 'Dr. Priya Sharma & Team'
    },
    {
      id: 2,
      category: 'healthcare',
      sdg: 'sdg3',
      title: 'Smart Prosthetics with Neural Control',
      description: 'Brain-computer interface for controlling prosthetic limbs using neural signals',
      disciplines: ['Neuroscience', 'Mechanical Engineering', 'Electronics', 'Robotics'],
      teamSize: 12,
      duration: '24 months',
      status: 'completed',
      progress: 100,
      industryPartner: 'Indian Institute of Science',
      funding: '₹80 Lakhs',
      impact: '50+ amputees benefited',
      technologies: ['EEG', 'Machine Learning', 'Robotics', 'Signal Processing'],
      outcomes: [
        'First Indian neural prosthetic',
        'Cost 80% less than imports',        'Won National Innovation Award',
        'Commercialized through startup'
      ],
      image: getImageUrls.technology.ai,
      lead: 'Prof. Rajesh Kumar & Team'
    },

    // Environment & Sustainability
    {
      id: 3,
      category: 'environment',
      sdg: 'sdg13',
      title: 'Carbon Capture Using Algae Bioreactors',
      description: 'Scalable algae-based system for capturing CO2 from industrial emissions',
      disciplines: ['Environmental Engineering', 'Biotechnology', 'Chemical Engineering', 'Process Design'],
      teamSize: 10,
      duration: '20 months',
      status: 'ongoing',
      progress: 60,
      industryPartner: 'Tata Steel',
      funding: '₹60 Lakhs',
      impact: '500 tons CO2 captured annually',
      technologies: ['Bioreactors', 'Process Optimization', 'IoT Sensors', 'Data Analytics'],
      outcomes: [
        '40% reduction in emissions',
        'Produces valuable biomass',        'Pilot plant operational',
        'Licensing discussions ongoing'
      ],
      image: getImageUrls.industry.energy,
      lead: 'Dr. Sunita Mehta & Team'
    },
    {
      id: 4,
      category: 'environment',
      sdg: 'sdg6',
      title: 'Solar-Powered Water Purification System',
      description: 'Decentralized water treatment system using solar energy for rural communities',
      disciplines: ['Environmental Engineering', 'Solar Technology', 'Materials Science', 'Public Health'],
      teamSize: 9,
      duration: '15 months',
      status: 'completed',
      progress: 100,
      industryPartner: 'Water.org',
      funding: '₹35 Lakhs',
      impact: '5,000+ people served daily',
      technologies: ['Solar Panels', 'Filtration', 'UV Sterilization', 'Remote Monitoring'],
      outcomes: [
        '99.9% pathogen removal',
        'Deployed in 50+ villages',        'Won UN Water Prize',
        'Scaling to 10 states'
      ],
      image: getImageUrls.industry.energy,
      lead: 'Prof. Amit Singh & Team'
    },

    // Education & Learning
    {
      id: 5,
      category: 'education',
      sdg: 'sdg4',
      title: 'AR/VR Immersive Learning Platform',
      description: 'Virtual reality platform for experiential learning in STEM subjects',
      disciplines: ['Computer Science', 'Education Technology', 'Cognitive Science', 'Design'],
      teamSize: 15,
      duration: '22 months',
      status: 'ongoing',
      progress: 80,
      industryPartner: 'Microsoft Education',
      funding: '₹70 Lakhs',
      impact: '100+ schools, 10,000+ students',
      technologies: ['Unity 3D', 'VR/AR', 'Cloud Computing', 'Learning Analytics'],
      outcomes: [
        '300% improvement in retention',
        'Used in 15 countries',        'Published 8 research papers',
        'Licensing to EdTech companies'
      ],
      image: getImageUrls.industry.education,
      lead: 'Dr. Kavya Nair & Team'
    },

    // Smart Cities & Infrastructure
    {
      id: 6,
      category: 'smart-cities',
      sdg: 'sdg11',
      title: 'Intelligent Traffic Management System',
      description: 'AI-powered traffic optimization using real-time data and predictive analytics',
      disciplines: ['AI/ML', 'Civil Engineering', 'IoT', 'Urban Planning'],
      teamSize: 11,
      duration: '18 months',
      status: 'completed',
      progress: 100,
      industryPartner: 'Pune Smart City',
      funding: '₹55 Lakhs',
      impact: '30% reduction in traffic congestion',
      technologies: ['Computer Vision', 'IoT Sensors', 'Machine Learning', 'Cloud Infrastructure'],
      outcomes: [
        'Deployed across Pune city',
        '25% fuel savings',        'Reduced pollution by 20%',
        'Adopted by 5 other cities'
      ],
      image: getImageUrls.industry.transportation,
      lead: 'Prof. Arjun Reddy & Team'
    },

    // Agriculture & Food Security
    {
      id: 7,
      category: 'agriculture',
      sdg: 'sdg2',
      title: 'Precision Agriculture IoT Platform',
      description: 'Smart farming system with sensors, drones, and AI for crop optimization',
      disciplines: ['Agricultural Engineering', 'IoT', 'Data Science', 'Drone Technology'],
      teamSize: 13,
      duration: '20 months',
      status: 'ongoing',
      progress: 70,
      industryPartner: 'Mahindra Agri Solutions',
      funding: '₹65 Lakhs',
      impact: '1,000+ farmers, 50,000 acres',
      technologies: ['IoT Sensors', 'Drones', 'Satellite Imagery', 'Machine Learning'],
      outcomes: [
        '35% increase in crop yield',
        '50% reduction in water usage',        'Pest detection accuracy 90%',
        'Marketplace integration'
      ],
      image: getImageUrls.industry.agriculture,
      lead: 'Dr. Vikram Gupta & Team'
    },

    // Social Innovation
    {
      id: 8,
      category: 'social-innovation',
      sdg: 'sdg1',
      title: 'Blockchain-Based Microfinance Platform',
      description: 'Decentralized platform for transparent and accessible microfinance services',
      disciplines: ['Blockchain', 'Fintech', 'Social Work', 'Economics'],
      teamSize: 7,
      duration: '16 months',
      status: 'completed',
      progress: 100,
      industryPartner: 'Grameen Bank India',
      funding: '₹40 Lakhs',
      impact: '25,000+ beneficiaries',
      technologies: ['Ethereum', 'Smart Contracts', 'Mobile Apps', 'Identity Verification'],
      outcomes: [
        '99% loan repayment rate',
        'Reduced processing time by 80%',        'Zero intermediary costs',
        'Scaling to 5 countries'
      ],
      image: getImageUrls.industry.finance,
      lead: 'Prof. Sneha Joshi & Team'
    }
  ];
  const industryPartners = [
    { name: 'Tata Group', logo: 'https://imgs.search.brave.com/r57vfM8qIwru_h8n-vYFAyqkp4uphJnqQCnpcHVWdvE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/YnJhbmRmZXRjaC5p/by9pZHRNbVducTdP/L3cvNDAwL2gvNDAw/L3RoZW1lL2Rhcmsv/aWNvbi5qcGVnP2M9/MWJ4aWQ2NE11cDdh/Y3pld1NBWU1YJnQ9/MTY2ODYxMDQyODM0/MA', projects: 8 },
    { name: 'Microsoft', logo: 'https://imgs.search.brave.com/0pbp3P8htKbbYCb4SPUY8IiI-MAJ2iRnli_G_XpbsQA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZy/ZWVwaWsuY29tLzI1/Ni8xMTM3OS8xMTM3/OTA2Ny5wbmc_c2Vt/dD1haXNfaW5jb21p/bmc', projects: 6 },
    { name: 'Mahindra', logo: 'https://imgs.search.brave.com/Je8PFyE0GumZZteNW8CCuyJdkqCFEyd8reGuDvjacKo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL2ZyZWUv/cG5nLTI1Ni9mcmVl/LW1haGluZHJhLWlj/b24tZG93bmxvYWQt/aW4tc3ZnLXBuZy1n/aWYtZmlsZS1mb3Jt/YXRzLS1jb21wYW55/LWxvZ28tYnJhbmQt/YXV0b21vdGl2ZS1w/YWNrLWxvZ29zLWlj/b25zLTI4NzQzODQu/cG5nP2Y9d2VicCZ3/PTI1Ng', projects: 5 },
    { name: 'Apollo Hospitals', logo: 'https://imgs.search.brave.com/uXjOf7nUMm75sLPXuqXOC0MAhzea600Jxrdsx_VjyBM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pY29u/YXBlLmNvbS93cC1j/b250ZW50L3BuZ19s/b2dvX3ZlY3Rvci9h/cG9sbG8taG9zcGl0/YWxzLWxvZ28ucG5n', projects: 4 },
    { name: 'Infosys', logo: 'https://imgs.search.brave.com/vGfaMoVmE3c6IxUu7OR4ZOpfmDJAVdrHYobJvhe1A6U/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvcHJl/dmlld3MvMDIwLzE5/MC80NzYvbm9uXzJ4/L2luZm9zeXMtbG9n/by1pbmZvc3lzLWlj/b24tZnJlZS1mcmVl/LXZlY3Rvci5qcGc', projects: 7 },
    { name: 'Google', logo: 'https://imgs.search.brave.com/U1NdQaNdiGKZi5Al2Q5E2CZ0XTZ34JdVLB5ef5JZ6Xk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZy/ZWVwaWsuY29tLzI1/Ni8yOTkxLzI5OTEx/NDgucG5nP3NlbXQ9/YWlzX2h5YnJpZA', projects: 3 }
  ];

  const researchAreas = [
    {
      title: 'Healthcare Innovation',
      description: 'AI, biotechnology, and medical devices for improving healthcare outcomes',
      projects: 15,
      icon: 'heart'
    },
    {
      title: 'Sustainable Technology',
      description: 'Clean energy, waste management, and environmental solutions',
      projects: 12,
      icon: 'leaf'
    },
    {
      title: 'Smart Infrastructure',
      description: 'IoT, smart cities, and intelligent transportation systems',
      projects: 18,
      icon: 'building'
    },
    {
      title: 'Digital Transformation',
      description: 'AI/ML, blockchain, and emerging technologies for social impact',
      projects: 20,
      icon: 'code'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'ongoing': return 'text-blue-600 bg-blue-100';
      case 'completed': return 'text-green-600 bg-green-100';
      case 'planning': return 'text-yellow-600 bg-yellow-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gray-50 py-16 border-b-4 border-gray-200">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Multidisciplinary Projects
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Collaborative projects bringing together diverse disciplines to solve 
              complex global challenges and advance UN Sustainable Development Goals
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Statistics */}
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
              <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-gray-600">Active Projects</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-orange-600 mb-2">15</div>
              <div className="text-gray-600">Disciplines Involved</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-green-600 mb-2">1M+</div>
              <div className="text-gray-600">Lives Impacted</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-blue-600 mb-2">25</div>
              <div className="text-gray-600">Industry Partners</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Featured Multidisciplinary Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {multidisciplinaryProjects.length} projects creating real-world impact through collaboration
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {multidisciplinaryProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden h-full hover:shadow-xl transition-shadow">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                      <div className="flex items-center text-sm text-gray-500">
                        <Icon name="users" size={14} className="mr-1" />
                        {project.teamSize} members
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>

                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-700">Progress</span>
                        <span className="text-purple-600 font-medium">{project.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Disciplines */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Disciplines Involved</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.disciplines.map((discipline) => (
                          <span key={discipline} className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded">
                            {discipline}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key Metrics */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <div className="text-sm text-gray-600">Duration</div>
                        <div className="font-medium">{project.duration}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Funding</div>
                        <div className="font-medium text-green-600">{project.funding}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Partner</div>
                        <div className="font-medium">{project.industryPartner}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Impact</div>
                        <div className="font-medium">{project.impact}</div>
                      </div>
                    </div>

                    {/* Key Outcomes */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Outcomes</h4>
                      <div className="space-y-1">
                        {project.outcomes.slice(0, 2).map((outcome, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-600">
                            <Icon name="check-circle" size={12} className="mr-2 text-green-500 flex-shrink-0" />
                            {outcome}
                          </div>
                        ))}
                        {project.outcomes.length > 2 && (
                          <div className="text-sm text-purple-600">
                            +{project.outcomes.length - 2} more outcomes
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Button variant="primary" className="flex-1">
                        <Icon name="external-link" size={16} className="mr-2" />
                        View Details
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {multidisciplinaryProjects.length === 0 && (
            <div className="text-center py-20">
              <Icon name="search" size={64} className="mx-auto text-gray-400 mb-4" />
              <h3 className="text-xl font-medium text-gray-600 mb-2">No projects found</h3>
              <p className="text-gray-500">Try adjusting your filters or check back later</p>
            </div>
          )}
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Research Focus Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our multidisciplinary approach spans across key research domains
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {researchAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 text-center h-full hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={area.icon} size={28} className="text-purple-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{area.title}</h3>
                  <p className="text-gray-600 mb-4">{area.description}</p>
                  <div className="text-2xl font-bold text-purple-600">{area.projects}</div>
                  <div className="text-sm text-gray-500">Active Projects</div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Partners */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Industry Partners
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Collaborating with leading organizations to create real-world impact
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {industryPartners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <Card className="p-4 hover:shadow-lg transition-shadow">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-12 object-contain mb-3"
                  />
                  <div className="text-sm font-medium text-gray-900">{partner.name}</div>
                  <div className="text-xs text-gray-500">{partner.projects} projects</div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MultidisciplinaryProjectsPage;
