import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Icon, Button, Card, Form } from '../components';
import { useForm, FormProvider } from 'react-hook-form';
import { validateFile } from '../utils/formUtils';
import { useLocation } from 'react-router-dom';
import { getAvatarPlaceholder } from '../utils/imageUtils';

const ProjectResourcesPage = () => {
  const [activeTab, setActiveTab] = useState('downloads');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showExpertiseForm, setShowExpertiseForm] = useState(false);
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [expertSearchTerm, setExpertSearchTerm] = useState('');
  const [expertAvailability, setExpertAvailability] = useState('all');
  const [expertSkill, setExpertSkill] = useState('all');
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();
  
  // Detect screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);
  
  // Parse tab from URL query parameters
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tabParam = params.get('tab');
    if (tabParam && ['downloads', 'experts', 'guidelines'].includes(tabParam)) {
      setActiveTab(tabParam);
    }
  }, [location]);
  const methods = useForm({
    mode: 'onBlur',
    defaultValues: {
      name: '',
      email: '',
      department: '',
      experience: '',
      skills: '',
      domains: '',
      portfolio: '',      bio: '',
      title: '',
      category: '',
      description: '',
      author: '',
      keywords: '',
      comments: '',
      agreement: false
    }  });
  
  const { formState: { errors }, handleSubmit, reset } = methods;

  const downloadCategories = [
    { id: 'all', name: 'All Resources' },
    { id: 'templates', name: 'Templates' },
    { id: 'evaluation', name: 'Evaluation Forms' },
    { id: 'guidelines', name: 'Guidelines' },
    { id: 'presentations', name: 'Presentations' }
  ];

  const downloadResources = [
    {
      id: 1,
      title: 'Project Synopsis Template',
      category: 'templates',
      type: 'docx',
      size: '245 KB',
      downloads: 1250,
      lastUpdated: '2025-06-10',
      description: 'Standard template for project synopsis submission including all required sections.',
      tags: ['Synopsis', 'Template', 'Documentation']
    },
    {
      id: 2,
      title: 'Final Report Template',
      category: 'templates',
      type: 'docx',
      size: '380 KB',
      downloads: 980,
      lastUpdated: '2025-06-08',
      description: 'Comprehensive template for final project report with IEEE formatting.',
      tags: ['Report', 'Template', 'IEEE']
    },
    {
      id: 3,
      title: 'Presentation Template',
      category: 'presentations',
      type: 'pptx',
      size: '2.1 MB',
      downloads: 2100,
      lastUpdated: '2025-06-12',
      description: 'Professional PowerPoint template for project presentations.',
      tags: ['Presentation', 'PowerPoint', 'Template']
    },
    {
      id: 4,
      title: 'Project Evaluation Rubric',
      category: 'evaluation',
      type: 'pdf',
      size: '156 KB',
      downloads: 750,
      lastUpdated: '2025-06-05',
      description: 'Detailed evaluation criteria and scoring rubric for PBL projects.',
      tags: ['Evaluation', 'Rubric', 'Assessment']
    },
    {
      id: 5,
      title: 'PBL Implementation Guidelines',
      category: 'guidelines',
      type: 'pdf',
      size: '1.8 MB',
      downloads: 1500,
      lastUpdated: '2025-06-15',
      description: 'Complete guide for implementing Project-Based Learning methodology.',
      tags: ['Guidelines', 'PBL', 'Implementation']
    },
    {
      id: 6,
      title: 'Industry Collaboration SOP',
      category: 'guidelines',
      type: 'pdf',
      size: '420 KB',
      downloads: 680,
      lastUpdated: '2025-06-07',
      description: 'Standard Operating Procedure for industry collaboration in PBL projects.',
      tags: ['Industry', 'Collaboration', 'SOP']
    }
  ];
  const technologyExperts = [
    {
      id: 1,
      name: 'Dr. Arjun Patel',
      avatar: getAvatarPlaceholder(100, 1),
      skills: ['Machine Learning', 'Deep Learning', 'Python', 'TensorFlow'],
      experience: '8 years',
      projects: 25,
      rating: 4.9,
      availability: 'Available',
      contact: 'arjun.patel@mitadt.edu.in',
      portfolio: 'https://portfolio.arjun.com'
    },
    {
      id: 2,
      name: 'Prof. Sneha Sharma',
      avatar: getAvatarPlaceholder(100, 2),
      skills: ['Web Development', 'React', 'Node.js', 'Cloud Computing'],
      experience: '6 years',
      projects: 18,
      rating: 4.8,
      availability: 'Available',
      contact: 'sneha.sharma@mitadt.edu.in',
      portfolio: 'https://github.com/snehasharma'
    },
    {
      id: 3,
      name: 'Dr. Rajesh Kumar',
      avatar: getAvatarPlaceholder(100, 3),
      skills: ['IoT', 'Embedded Systems', 'Arduino', 'Raspberry Pi'],
      experience: '10 years',
      projects: 32,
      rating: 4.9,
      availability: 'Busy',
      contact: 'rajesh.kumar@mitadt.edu.in',
      portfolio: 'https://iot-projects.rajesh.com'
    },
    {
      id: 4,
      name: 'Ms. Priya Desai',
      avatar: getAvatarPlaceholder(100, 4),
      skills: ['Blockchain', 'Smart Contracts', 'Solidity', 'Web3'],
      experience: '4 years',
      projects: 12,
      rating: 4.7,
      availability: 'Available',
      contact: 'priya.desai@mitadt.edu.in',
      portfolio: 'https://blockchain.priya.dev'
    }
  ];

  const getFileIcon = (type) => {
    switch (type) {
      case 'pdf': return 'file-text';
      case 'docx': return 'file';
      case 'pptx': return 'presentation';
      case 'xlsx': return 'sheet';
      default: return 'download';
    }
  };

  const getFilteredResources = () => {
    let filtered = downloadResources;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(resource => resource.category === selectedCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(resource =>
        resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    return filtered;
  };
  
  const handleExpertiseSubmit = async (data) => {
    console.log('Expertise form submitted:', data);
    
    // In a real implementation, you would use FormData to send files to the server
    const formData = new FormData();
    
    // Add all text fields
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });
    
    // Add resume file if it exists
    if (data.resume && data.resume.length > 0) {
      formData.append('resume', data.resume[0]);
    }
    
    // Add project samples if they exist
    if (data.projectSamples && data.projectSamples.length > 0) {
      data.projectSamples.forEach((file, index) => {
        formData.append(`projectSample_${index}`, file);
      });
    }
    
    // Log the FormData (for demonstration)
    console.log('Form data prepared for submission');
    
    // Here you would typically send the formData to your backend API
    // await axios.post('/api/expertise', formData);
    
    alert('Thank you for submitting your expertise! We will review and add you to our directory.');
    reset();
    setShowExpertiseForm(false);
  };
  
  const handleProjectSubmit = async (data) => {
    console.log('Project form submitted:', data);
    
    // In a real implementation, you would use FormData to send files to the server
    const formData = new FormData();
    
    // Add all text fields
    Object.entries(data).forEach(([key, value]) => {
      if (key !== 'projectFiles' && key !== 'projectImage') {
        formData.append(key, value);
      }
    });
    
    // Add project image if it exists
    if (data.projectImage && data.projectImage.length > 0) {
      formData.append('projectImage', data.projectImage[0]);
    }
    
    // Add project files if they exist
    if (data.projectFiles && data.projectFiles.length > 0) {
      data.projectFiles.forEach((file, index) => {
        formData.append(`projectFile_${index}`, file);
      });
    }
    
    // Log the FormData (for demonstration)
    console.log('Project form data prepared for submission');
    
    // Here you would typically send the formData to your backend API
    // await axios.post('/api/projects', formData);
    
    alert('Thank you for submitting your project! It will be reviewed and added to our resources.');
    reset();
    setShowProjectForm(false);
  };

  // Track downloads
  const handleDownload = (resourceId) => {
    // In a real app, this would make an API call to track the download
    console.log(`Resource ${resourceId} downloaded`);
    
    // Find the resource
    const resource = downloadResources.find(r => r.id === resourceId);
    if (resource) {
      // Create a link element and trigger download
      const link = document.createElement('a');
      link.href = `/api/download/${resourceId}`;
      link.download = resource.title;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  // Get unique skills from all experts
  const allSkills = Array.from(
    new Set(
      technologyExperts.flatMap(expert => expert.skills)
    )
  ).sort();

  // Filter experts based on search and filters
  const getFilteredExperts = () => {
    let filtered = technologyExperts;

    // Filter by availability
    if (expertAvailability !== 'all') {
      filtered = filtered.filter(expert => expert.availability === expertAvailability);
    }

    // Filter by skill
    if (expertSkill !== 'all') {
      filtered = filtered.filter(expert => expert.skills.includes(expertSkill));
    }

    // Filter by search term
    if (expertSearchTerm) {
      filtered = filtered.filter(expert =>
        expert.name.toLowerCase().includes(expertSearchTerm.toLowerCase()) ||
        expert.skills.some(skill => skill.toLowerCase().includes(expertSearchTerm.toLowerCase()))
      );
    }

    return filtered;
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
            <div className="flex items-center justify-center space-x-2 text-sm mb-4">
              <span className="text-blue-200">Home</span>
              <Icon name="chevron-right" size={14} />
              <span className="text-yellow-200 font-semibold">Project Resources</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-yellow-100">
              Project Resources
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed text-blue-100">
              Access templates, guidelines, and connect with experts to support your PBL journey
            </p>
          </motion.div>
        </div>
      </section>      {/* Navigation Tabs */}
      <section className="py-4 md:py-8 bg-white shadow-sm sticky top-0 z-10">
        <div className="container">
          <div className="flex justify-center overflow-x-auto py-2">
            <div className="bg-gray-100 rounded-lg p-1 flex flex-nowrap">
              {[
                { id: 'downloads', label: 'Downloads', icon: 'download' },
                { id: 'experts', label: 'Technology Pool', icon: 'users' },
                { id: 'guidelines', label: 'Guidelines', icon: 'book-open' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 md:px-6 py-2 md:py-3 rounded-md text-sm font-medium transition-colors flex items-center whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'bg-white text-purple-600 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <Icon name={tab.icon} size={18} className="mr-2" />
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>{/* Downloads Section */}
      {activeTab === 'downloads' && (
        <section className="py-12">
          <div className="container">
            {/* Search and Filter */}
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-8">
              <div className="flex items-center gap-4 w-full">
                <div className="relative flex-1 max-w-md">
                  <Icon name="search" size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search resources..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
               
              </div>

              <div className="flex flex-wrap gap-2 w-full justify-center lg:justify-end">
                {downloadCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-3 py-1 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium transition-colors ${
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

            {/* Resources Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getFilteredResources().map((resource, index) => (
                <motion.div
                  key={resource.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 hover:shadow-lg transition-shadow duration-300 h-full">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                          <Icon name={getFileIcon(resource.type)} size={24} className="text-purple-600" />
                        </div>
                        <div>
                          <div className="text-xs text-gray-500 uppercase">{resource.type}</div>
                          <div className="text-xs text-gray-500">{resource.size}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-500">{resource.downloads} downloads</div>
                        <div className="text-xs text-gray-500">{resource.lastUpdated}</div>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-2">{resource.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{resource.description}</p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {resource.tags.slice(0, 3).map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-2">                      <Button size="sm" className="flex-1" onClick={() => handleDownload(resource.id)}>
                        <Icon name="download" size={16} className="mr-2" />
                        Download
                      </Button>
                      
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {getFilteredResources().length === 0 && (
              <div className="text-center py-16">
                <Icon name="search" size={64} className="mx-auto text-gray-300 mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No resources found</h3>
                <p className="text-gray-500">
                  Try adjusting your search terms or category filter
                </p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Technology Pool Section */}
      {activeTab === 'experts' && (
        <section className="py-12">
          <div className="container">            <div className="flex flex-col lg:flex-row justify-between items-center mb-8">
              <div className="text-center flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Technology Experts Directory</h2>
                <p className="text-gray-600">Connect with faculty and industry experts for project guidance</p>
              </div>
              <Button onClick={() => setShowExpertiseForm(true)}>
                <Icon name="plus" size={18} className="mr-2" />
                Submit Expertise
              </Button>
            </div>

            {/* Expert Filters */}
            <div className="bg-white shadow rounded-lg p-4 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Search Experts</label>
                  <div className="relative">
                    <Icon name="search" size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search by name or skill..."
                      value={expertSearchTerm}
                      onChange={(e) => setExpertSearchTerm(e.target.value)}
                      className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Availability</label>
                  <select
                    value={expertAvailability}
                    onChange={(e) => setExpertAvailability(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="all">All Availability</option>
                    <option value="Available">Available Now</option>
                    <option value="Busy">Currently Busy</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Technical Skill</label>
                  <select
                    value={expertSkill}
                    onChange={(e) => setExpertSkill(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="all">All Skills</option>
                    {allSkills.map((skill) => (
                      <option key={skill} value={skill}>{skill}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Experts Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {getFilteredExperts().map((expert, index) => (
                <motion.div
                  key={expert.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
                    <img
                      src={expert.avatar}
                      alt={expert.name}
                      className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{expert.name}</h3>
                    
                    <div className="flex items-center justify-center mb-3">
                      <Icon name="star" size={16} className="text-yellow-500 mr-1" />
                      <span className="text-sm font-medium text-gray-700">{expert.rating}</span>
                      <span className="text-xs text-gray-500 ml-2 hidden sm:inline">({expert.projects} projects)</span>
                    </div>

                    <div className={`inline-block px-2 py-1 rounded-full text-xs font-medium mb-4 ${
                      expert.availability === 'Available' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {expert.availability}
                    </div>                    <div className="flex flex-wrap gap-1 mb-4 min-h-[40px] md:min-h-[60px] justify-center">
                      {expert.skills.slice(0, isMobile ? 2 : 4).map((skill, index) => (
                        <span key={index} className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded">
                          {skill}
                        </span>
                      ))}
                      {expert.skills.length > (isMobile ? 2 : 4) && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                          +{expert.skills.length - (isMobile ? 2 : 4)}
                        </span>
                      )}
                    </div>

                    <div className="text-xs text-gray-500 mb-4">{expert.experience} experience</div>

                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        <Icon name="message-circle" size={14} className="mr-1" />
                        Contact
                      </Button>
                      <Button size="sm" variant="outline">
                        <Icon name="external-link" size={14} />
                      </Button>
                    </div>                  </Card>
                </motion.div>
              ))}
            </div>

            {getFilteredExperts().length === 0 && (
              <div className="text-center py-16">
                <Icon name="users" size={64} className="mx-auto text-gray-300 mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No experts found</h3>
                <p className="text-gray-500">
                  Try adjusting your search filters or skill requirements
                </p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Guidelines Section */}
      {activeTab === 'guidelines' && (
        <section className="py-12">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Project Guidelines</h2>
                <p className="text-xl text-gray-600">
                  Comprehensive guidelines to ensure project success and quality standards
                </p>
              </motion.div>

              <div className="space-y-8">
                {[
                  {
                    title: 'Project Planning & Scope Definition',
                    content: 'Learn how to define clear project objectives, scope boundaries, and deliverables. Includes templates for project charter and scope statement.',
                    icon: 'target',
                    color: 'purple'
                  },
                  {
                    title: 'Team Formation & Collaboration',
                    content: 'Guidelines for forming effective multidisciplinary teams, role assignments, and collaboration best practices.',
                    icon: 'users',
                    color: 'blue'
                  },
                  {
                    title: 'Research & Literature Review',
                    content: 'Standards for conducting thorough research, citing sources, and building upon existing knowledge in your domain.',
                    icon: 'book-open',
                    color: 'green'
                  },
                  {
                    title: 'Development & Implementation',
                    content: 'Best practices for project development including coding standards, documentation requirements, and version control.',
                    icon: 'users',
                    color: 'orange'
                  },
                  {
                    title: 'Testing & Quality Assurance',
                    content: 'Comprehensive testing strategies, quality metrics, and validation procedures to ensure project reliability.',
                    icon: 'check-circle',
                    color: 'teal'
                  },
                  {
                    title: 'Documentation & Reporting',
                    content: 'Standards for project documentation, report writing, and presentation preparation with IEEE formatting guidelines.',
                    icon: 'file-text',
                    color: 'indigo'
                  }
                ].map((guideline, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                      <div className="flex items-start">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 ${
                          guideline.color === 'purple' ? 'bg-purple-100 text-purple-600' :
                          guideline.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                          guideline.color === 'green' ? 'bg-green-100 text-green-600' :
                          guideline.color === 'orange' ? 'bg-orange-100 text-orange-600' :
                          guideline.color === 'teal' ? 'bg-teal-100 text-teal-600' :
                          guideline.color === 'indigo' ? 'bg-indigo-100 text-indigo-600' :
                          'bg-gray-100 text-gray-600'
                        }`}>
                          <Icon name={guideline.icon} size={24} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{guideline.title}</h3>
                          <p className="text-gray-600 mb-4">{guideline.content}</p>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline">
                              <Icon name="eye" size={16} className="mr-2" />
                              View Details
                            </Button>
                            <Button size="sm" variant="outline">
                              <Icon name="download" size={16} className="mr-2" />
                              Download PDF
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}      {/* Expertise Submission Modal */}
      {showExpertiseForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Submit Your Expertise</h2>
                <button
                  onClick={() => setShowExpertiseForm(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <Icon name="x" size={24} />
                </button>
              </div>

              <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(handleExpertiseSubmit)} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Form.Field>
                      <Form.Label>Full Name *</Form.Label>
                      <Form.Input
                        {...methods.register('name', { 
                          required: 'Name is required',
                          minLength: { value: 3, message: 'Name must be at least 3 characters' }
                        })}
                        error={errors.name?.message}
                        placeholder="Your full name"
                      />
                      {errors.name && <span className="text-red-500 text-xs">{errors.name.message}</span>}
                    </Form.Field>

                    <Form.Field>
                      <Form.Label>Email Address *</Form.Label>
                      <Form.Input
                        type="email"
                        {...methods.register('email', { 
                          required: 'Email is required',
                          pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: 'Please enter a valid email address'
                          }
                        })}
                        error={errors.email?.message}
                        placeholder="your.email@mitadt.edu.in"
                      />
                      {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
                    </Form.Field>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <Form.Field>
                      <Form.Label>Department/Organization</Form.Label>
                      <Form.Input
                        {...methods.register('department')}
                        placeholder="Computer Engineering"
                      />
                    </Form.Field>

                    <Form.Field>
                      <Form.Label>Years of Experience</Form.Label>
                      <Form.Select {...methods.register('experience')}>
                        <option value="">Select experience</option>
                        <option value="1-2">1-2 years</option>
                        <option value="3-5">3-5 years</option>
                        <option value="6-10">6-10 years</option>
                        <option value="10+">10+ years</option>
                      </Form.Select>
                    </Form.Field>
                  </div>

                  <Form.Field>
                    <Form.Label>Technical Skills (comma-separated) *</Form.Label>
                    <Form.Textarea
                      {...methods.register('skills', { 
                        required: 'Skills are required',
                        minLength: { value: 5, message: 'Please provide more detailed skills' }
                      })}
                      error={errors.skills?.message}
                      rows={3}
                      placeholder="React, Node.js, Python, Machine Learning, etc."
                    />
                    {errors.skills && <span className="text-red-500 text-xs">{errors.skills.message}</span>}
                  </Form.Field>

                  <Form.Field>
                    <Form.Label>Domain Expertise</Form.Label>
                    <Form.Textarea
                      {...methods.register('domains')}
                      rows={2}
                      placeholder="Web Development, AI/ML, IoT, Blockchain, etc."
                    />
                  </Form.Field>

                  <Form.Field>
                    <Form.Label>Resume/CV Upload</Form.Label>
                    <Form.EnhancedFileUpload
                      {...methods.register('resume', {
                        validate: value => {
                          if (value && value.length > 0) {
                            const fileCheck = validateFile(value[0], {
                              maxSize: 5 * 1024 * 1024,
                              allowedTypes: ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
                            });
                            return fileCheck.isValid || fileCheck.errors[0];
                          }
                          return true;
                        }
                      })}
                      accept=".pdf,.doc,.docx"
                      multiple={false}
                      maxSize={5 * 1024 * 1024}
                      error={errors.resume?.message}
                    />
                    {errors.resume && <span className="text-red-500 text-xs">{errors.resume.message}</span>}
                  </Form.Field>

                  <Form.Field>
                    <Form.Label>Project Samples (Optional)</Form.Label>
                    <Form.EnhancedFileUpload
                      {...methods.register('projectSamples', {
                        validate: value => {
                          if (value && value.length > 0) {
                            const fileCheck = validateFile(value[0], {
                              maxSize: 10 * 1024 * 1024,
                              allowedTypes: ['application/pdf', 'application/zip', 'application/x-zip-compressed', 'image/jpeg', 'image/png']
                            });
                            return fileCheck.isValid || fileCheck.errors[0];
                          }
                          return true;
                        }
                      })}
                      accept=".pdf,.zip,.jpg,.jpeg,.png"
                      multiple={true}
                      maxFiles={3}
                      maxSize={10 * 1024 * 1024}
                      error={errors.projectSamples?.message}
                    />
                    {errors.projectSamples && <span className="text-red-500 text-xs">{errors.projectSamples.message}</span>}
                    <span className="text-xs text-gray-500 mt-1">Upload up to 3 files (PDF, ZIP, or images) max 10MB each</span>
                  </Form.Field>

                  <Form.Field>
                    <Form.Label>Portfolio/LinkedIn URL</Form.Label>
                    <Form.Input
                      {...methods.register('portfolio', {
                        pattern: {
                          value: /^(https?:\/\/)?(www\.)?[a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/,
                          message: 'Please enter a valid URL'
                        }
                      })}
                      placeholder="https://your-portfolio.com"
                      error={errors.portfolio?.message}
                    />
                    {errors.portfolio && <span className="text-red-500 text-xs">{errors.portfolio.message}</span>}
                  </Form.Field>

                  <Form.Field>
                    <Form.Label>Brief Bio</Form.Label>
                    <Form.Textarea
                      {...methods.register('bio')}
                      rows={3}
                      placeholder="Tell us about your background and expertise..."
                    />
                  </Form.Field>

                  <div className="flex gap-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setShowExpertiseForm(false)}
                      className="flex-1"
                    >
                      Cancel
                    </Button>
                    <Button type="submit" className="flex-1">
                      <Icon name="Send" size={18} className="mr-2" />
                      Submit Expertise
                    </Button>
                  </div>
                </form>
              </FormProvider>
            </div>
          </div>        </div>
      )}

      {/* Project Submission Modal */}
      {showProjectForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Submit Your Project</h2>
                <button
                  onClick={() => setShowProjectForm(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <Icon name="X" size={24} />
                </button>
              </div>

              <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(handleProjectSubmit)} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Form.Field>
                      <Form.Label>Project Title *</Form.Label>
                      <Form.Input
                        {...methods.register('title', { 
                          required: 'Project title is required',
                          minLength: { value: 5, message: 'Title must be at least 5 characters' }
                        })}
                        placeholder="Your project title"
                      />
                      {errors.title && <span className="text-red-500 text-xs">{errors.title.message}</span>}
                    </Form.Field>

                    <Form.Field>
                      <Form.Label>Project Category *</Form.Label>
                      <Form.Select 
                        {...methods.register('category', { required: 'Category is required' })}
                      >
                        <option value="">Select category</option>
                        <option value="templates">Templates</option>
                        <option value="evaluation">Evaluation Forms</option>
                        <option value="guidelines">Guidelines</option>
                        <option value="presentations">Presentations</option>
                        <option value="code">Code Samples</option>
                        <option value="research">Research Papers</option>
                      </Form.Select>
                      {errors.category && <span className="text-red-500 text-xs">{errors.category.message}</span>}
                    </Form.Field>
                  </div>

                  <Form.Field>
                    <Form.Label>Brief Description *</Form.Label>
                    <Form.Textarea
                      {...methods.register('description', { 
                        required: 'Description is required',
                        minLength: { value: 30, message: 'Description must be at least 30 characters' }
                      })}
                      rows={3}
                      placeholder="Describe your project briefly..."
                    />
                    {errors.description && <span className="text-red-500 text-xs">{errors.description.message}</span>}
                  </Form.Field>

                  <div className="grid md:grid-cols-2 gap-4">
                    <Form.Field>
                      <Form.Label>Your Name *</Form.Label>
                      <Form.Input
                        {...methods.register('author', { required: 'Author name is required' })}
                        placeholder="Your full name"
                      />
                      {errors.author && <span className="text-red-500 text-xs">{errors.author.message}</span>}
                    </Form.Field>

                    <Form.Field>
                      <Form.Label>Email Address *</Form.Label>
                      <Form.Input
                        type="email"
                        {...methods.register('email', { 
                          required: 'Email is required',
                          pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: 'Please enter a valid email address'
                          }
                        })}
                        placeholder="your.email@mitadt.edu.in"
                      />
                      {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
                    </Form.Field>
                  </div>

                  <Form.Field>
                    <Form.Label>Project Keywords (comma-separated) *</Form.Label>
                    <Form.Input
                      {...methods.register('keywords', { required: 'Keywords are required' })}
                      placeholder="e.g., PBL, Machine Learning, Template, etc."
                    />
                    {errors.keywords && <span className="text-red-500 text-xs">{errors.keywords.message}</span>}
                  </Form.Field>

                  <Form.Field>
                    <Form.Label>Project Files *</Form.Label>
                    <Form.EnhancedFileUpload
                      {...methods.register('projectFiles', {
                        required: 'At least one project file is required',
                        validate: value => {
                          if (!value || value.length === 0) {
                            return 'At least one project file is required';
                          }
                          if (value && value.length > 0) {
                            const fileCheck = validateFile(value[0], {
                              maxSize: 20 * 1024 * 1024,
                              allowedTypes: [
                                'application/pdf', 
                                'application/msword', 
                                'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                                'application/vnd.ms-powerpoint',
                                'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                                'application/zip',
                                'application/x-zip-compressed',
                                'text/plain',
                                'application/x-javascript',
                                'text/javascript',
                                'text/html',
                                'text/css'
                              ]
                            });
                            return fileCheck.isValid || fileCheck.errors[0];
                          }
                          return true;
                        }
                      })}
                      accept=".pdf,.doc,.docx,.ppt,.pptx,.zip,.txt,.js,.html,.css"
                      multiple={true}
                      maxFiles={5}
                      maxSize={20 * 1024 * 1024}
                    />
                    {errors.projectFiles && <span className="text-red-500 text-xs">{errors.projectFiles.message}</span>}
                    <span className="text-xs text-gray-500 mt-1">Upload up to 5 files (max 20MB each) - PDF, Office docs, code, zip archives</span>
                  </Form.Field>

                  <Form.Field>
                    <Form.Label>Project Image (Optional)</Form.Label>
                    <Form.EnhancedFileUpload
                      {...methods.register('projectImage', {
                        validate: value => {
                          if (value && value.length > 0) {
                            const fileCheck = validateFile(value[0], {
                              maxSize: 5 * 1024 * 1024,
                              allowedTypes: ['image/jpeg', 'image/png', 'image/gif']
                            });
                            return fileCheck.isValid || fileCheck.errors[0];
                          }
                          return true;
                        }
                      })}
                      accept="image/*"
                      multiple={false}
                      maxSize={5 * 1024 * 1024}
                    />
                    {errors.projectImage && <span className="text-red-500 text-xs">{errors.projectImage.message}</span>}
                    <span className="text-xs text-gray-500 mt-1">Add a thumbnail or preview image for your project (max 5MB)</span>
                  </Form.Field>

                  <Form.Field>
                    <Form.Label>Additional Comments</Form.Label>
                    <Form.Textarea
                      {...methods.register('comments')}
                      rows={3}
                      placeholder="Any additional information about your project..."
                    />
                  </Form.Field>

                  <Form.Field>
                    <Form.Checkbox
                      {...methods.register('agreement', { required: 'You must agree to the terms' })}
                      label="I confirm this is my original work and I have permission to share it"
                    />
                    {errors.agreement && <span className="text-red-500 text-xs">{errors.agreement.message}</span>}
                  </Form.Field>

                  <div className="flex gap-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setShowProjectForm(false)}
                      className="flex-1"
                    >
                      Cancel
                    </Button>
                    <Button type="submit" className="flex-1">
                      <Icon name="Upload" size={18} className="mr-2" />
                      Submit Project
                    </Button>
                  </div>
                </form>
              </FormProvider>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectResourcesPage;
