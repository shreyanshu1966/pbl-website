import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Icon, Button, Card } from '../components';

const ProductDomainProfilingPage = () => {
  const [selectedDomain, setSelectedDomain] = useState('technology');
  const [selectedSkillLevel, setSelectedSkillLevel] = useState('all');

  const technologyDomains = [
    {
      id: 'ai-ml',
      name: 'Artificial Intelligence & Machine Learning',
      description: 'Deep learning, neural networks, computer vision, NLP, predictive analytics',
      icon: 'brain',
      projects: 45,
      difficulty: 'Advanced',
      skills: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV'],
      industryApplications: ['Healthcare', 'Finance', 'Autonomous Vehicles', 'Smart Cities'],
      careerPaths: ['ML Engineer', 'Data Scientist', 'AI Researcher', 'Computer Vision Engineer']
    },
    {
      id: 'web-dev',
      name: 'Web Development & Full Stack',
      description: 'Modern web technologies, responsive design, cloud deployment, APIs',
      icon: 'code',
      projects: 67,
      difficulty: 'Beginner to Advanced',
      skills: ['React', 'Node.js', 'JavaScript', 'HTML/CSS', 'MongoDB', 'Docker'],
      industryApplications: ['E-commerce', 'SaaS', 'Content Management', 'Social Media'],
      careerPaths: ['Frontend Developer', 'Backend Developer', 'Full Stack Developer', 'DevOps Engineer']
    },
    {
      id: 'iot',
      name: 'Internet of Things (IoT)',
      description: 'Connected devices, sensor networks, edge computing, smart systems',
      icon: 'wifi',
      projects: 38,
      difficulty: 'Intermediate',
      skills: ['Arduino', 'Raspberry Pi', 'C/C++', 'Python', 'MQTT', 'Cloud IoT'],
      industryApplications: ['Smart Homes', 'Industrial IoT', 'Agriculture', 'Healthcare'],
      careerPaths: ['IoT Developer', 'Embedded Systems Engineer', 'Hardware Engineer', 'Systems Architect']
    },
    {
      id: 'blockchain',
      name: 'Blockchain & Cryptocurrency',
      description: 'Distributed ledgers, smart contracts, DeFi, NFTs, web3 technologies',
      icon: 'lock',
      projects: 23,
      difficulty: 'Advanced',
      skills: ['Solidity', 'JavaScript', 'Web3.js', 'Ethereum', 'Smart Contracts'],
      industryApplications: ['Finance', 'Supply Chain', 'Digital Identity', 'Gaming'],
      careerPaths: ['Blockchain Developer', 'Smart Contract Developer', 'DeFi Developer', 'Crypto Analyst']
    },
    {
      id: 'mobile-dev',
      name: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications, UI/UX design',
      icon: 'smartphone',
      projects: 52,
      difficulty: 'Beginner to Advanced',
      skills: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'REST APIs'],
      industryApplications: ['Social Media', 'E-commerce', 'Healthcare', 'Education'],
      careerPaths: ['Mobile Developer', 'iOS Developer', 'Android Developer', 'UI/UX Designer']
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity & Ethical Hacking',
      description: 'Network security, penetration testing, threat analysis, secure coding',
      icon: 'shield',
      projects: 29,
      difficulty: 'Intermediate to Advanced',
      skills: ['Python', 'Kali Linux', 'Wireshark', 'Metasploit', 'OSINT', 'Cryptography'],
      industryApplications: ['Banking', 'Government', 'Healthcare', 'Critical Infrastructure'],
      careerPaths: ['Security Analyst', 'Penetration Tester', 'Security Architect', 'CISO']
    }
  ];

  const productDomains = [
    {
      id: 'fintech',
      name: 'Financial Technology',
      description: 'Digital payments, lending platforms, investment apps, insurance tech',
      icon: 'dollar-sign',
      marketSize: '$132B',
      growthRate: '23.58%',
      keyPlayers: ['Paytm', 'PhonePe', 'Razorpay', 'Zerodha'],
      opportunities: ['Digital Banking', 'Crypto Trading', 'Micro-lending', 'RegTech']
    },
    {
      id: 'healthtech',
      name: 'Healthcare Technology',
      description: 'Telemedicine, health monitoring, medical devices, pharma tech',
      icon: 'heart',
      marketSize: '$87B',
      growthRate: '15.8%',
      keyPlayers: ['Practo', 'Apollo 24/7', 'Tata 1mg', 'Medlife'],
      opportunities: ['AI Diagnostics', 'Remote Monitoring', 'Digital Therapeutics', 'Health Analytics']
    },
    {
      id: 'edtech',
      name: 'Education Technology',
      description: 'Online learning, skill development, assessment tools, virtual classrooms',
      icon: 'book-open',
      marketSize: '$45B',
      growthRate: '19.7%',
      keyPlayers: ['BYJU\'S', 'Unacademy', 'Vedantu', 'Coursera'],
      opportunities: ['Personalized Learning', 'VR/AR Education', 'Skills Assessment', 'Corporate Training']
    },
    {
      id: 'agritech',
      name: 'Agricultural Technology',
      description: 'Precision farming, crop monitoring, supply chain, farm management',
      icon: 'leaf',
      marketSize: '$18B',
      growthRate: '12.4%',
      keyPlayers: ['AgroStar', 'Ninjacart', 'DeHaat', 'Fasal'],
      opportunities: ['Smart Irrigation', 'Crop Analytics', 'Drone Technology', 'Marketplace Platforms']
    }
  ];

  const skillsMatrix = [
    {
      category: 'Programming Languages',
      beginner: ['HTML/CSS', 'JavaScript', 'Python', 'Scratch'],
      intermediate: ['Java', 'C++', 'React', 'Node.js', 'SQL'],
      advanced: ['Machine Learning', 'Blockchain', 'Cloud Computing', 'DevOps']
    },
    {
      category: 'Design & UI/UX',
      beginner: ['Figma Basics', 'Color Theory', 'Typography', 'Wireframing'],
      intermediate: ['Prototyping', 'User Research', 'Responsive Design', 'Design Systems'],
      advanced: ['Design Leadership', 'Product Strategy', 'Advanced Animation', 'Design Ops']
    },
    {
      category: 'Data & Analytics',
      beginner: ['Excel', 'Basic Statistics', 'Data Visualization', 'SQL Basics'],
      intermediate: ['Python Data Science', 'Machine Learning', 'Tableau', 'Power BI'],
      advanced: ['Deep Learning', 'Big Data', 'AI Engineering', 'Data Architecture']
    },
    {
      category: 'Business & Management',
      beginner: ['Project Management', 'Communication', 'Team Work', 'Presentation'],
      intermediate: ['Product Management', 'Agile/Scrum', 'Business Analysis', 'Strategy'],
      advanced: ['Leadership', 'Entrepreneurship', 'Innovation Management', 'Digital Transformation']
    }
  ];

  const domainTabs = [
    { id: 'technology', name: 'Technology Domains', icon: 'code' },
    { id: 'product', name: 'Product Domains', icon: 'box' },
    { id: 'skills', name: 'Skills Matrix', icon: 'target' }
  ];

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
              Product & Domain Profiling
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Explore cutting-edge technology domains, emerging product markets, and 
              comprehensive skills development pathways tailored for the future workforce
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg">
                <Icon name="download" size={20} className="mr-2" />
                Download Skills Guide
              </Button>
              <Button variant="outline" size="lg">
                <Icon name="calendar" size={20} className="mr-2" />
                Book Assessment Session
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Domain Navigation Tabs */}
      <section className="py-8 bg-white border-b">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-4">
            {domainTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedDomain(tab.id)}
                className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all ${
                  selectedDomain === tab.id
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Icon name={tab.icon} size={20} className="mr-2" />
                {tab.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Domains */}
      {selectedDomain === 'technology' && (
        <section className="py-20">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Technology Domains
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Master cutting-edge technologies through hands-on projects and industry partnerships
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {technologyDomains.map((domain, index) => (
                <motion.div
                  key={domain.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <Card className="p-6 h-full hover:shadow-xl transition-shadow">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                        <Icon name={domain.icon} size={24} className="text-purple-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{domain.name}</h3>
                        <span className="text-sm text-purple-600 font-medium">{domain.difficulty}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{domain.description}</p>
                    
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">Active Projects</span>
                        <span className="text-purple-600 font-bold">{domain.projects}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Skills</h4>
                      <div className="flex flex-wrap gap-1">
                        {domain.skills.slice(0, 4).map((skill) => (
                          <span key={skill} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                            {skill}
                          </span>
                        ))}
                        {domain.skills.length > 4 && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                            +{domain.skills.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Career Paths</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {domain.careerPaths.slice(0, 2).map((path) => (
                          <li key={path} className="flex items-center">
                            <Icon name="arrow-right" size={12} className="mr-2 text-purple-600" />
                            {path}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button variant="primary" className="w-full">
                      Explore Domain
                    </Button>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Product Domains */}
      {selectedDomain === 'product' && (
        <section className="py-20">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Product Domains & Market Opportunities
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Understand emerging markets and build products that solve real-world problems
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {productDomains.map((domain, index) => (
                <motion.div
                  key={domain.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <Card className="p-8 h-full">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-orange-500 rounded-xl flex items-center justify-center mr-4">
                        <Icon name={domain.icon} size={28} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{domain.name}</h3>
                        <div className="flex items-center mt-1">
                          <span className="text-green-600 font-bold text-lg">{domain.marketSize}</span>
                          <span className="text-gray-500 mx-2">•</span>
                          <span className="text-purple-600 font-medium">+{domain.growthRate}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6 text-lg">{domain.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Players</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {domain.keyPlayers.map((player) => (
                          <div key={player} className="flex items-center text-gray-700">
                            <Icon name="star" size={14} className="mr-2 text-yellow-500" />
                            {player}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Opportunities</h4>
                      <div className="space-y-2">
                        {domain.opportunities.map((opportunity) => (
                          <div key={opportunity} className="flex items-center text-gray-700">
                            <Icon name="trending-up" size={14} className="mr-2 text-green-500" />
                            {opportunity}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Button variant="primary" className="flex-1">
                        Start Project
                      </Button>
                      <Button variant="outline" className="flex-1">
                        Market Research
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Skills Matrix */}
      {selectedDomain === 'skills' && (
        <section className="py-20">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Skills Development Matrix
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Structured learning paths from beginner to advanced levels across key competencies
              </p>
            </motion.div>

            {/* Skill Level Filter */}
            <div className="flex justify-center mb-12">
              <div className="flex bg-gray-100 rounded-lg p-1">
                {['all', 'beginner', 'intermediate', 'advanced'].map((level) => (
                  <button
                    key={level}
                    onClick={() => setSelectedSkillLevel(level)}
                    className={`px-6 py-2 rounded-md font-medium capitalize transition-all ${
                      selectedSkillLevel === level
                        ? 'bg-white text-purple-600 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {level === 'all' ? 'All Levels' : level}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              {skillsMatrix.map((category, index) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <Card className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">{category.category}</h3>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                      {['beginner', 'intermediate', 'advanced'].map((level) => (
                        <div
                          key={level}
                          className={`${
                            selectedSkillLevel !== 'all' && selectedSkillLevel !== level
                              ? 'opacity-30'
                              : ''
                          } transition-opacity`}
                        >
                          <div className="flex items-center mb-4">
                            <div className={`w-3 h-3 rounded-full mr-3 ${
                              level === 'beginner' ? 'bg-green-500' :
                              level === 'intermediate' ? 'bg-yellow-500' :
                              'bg-red-500'
                            }`}></div>
                            <h4 className="text-lg font-semibold text-gray-900 capitalize">{level}</h4>
                          </div>
                          
                          <div className="space-y-2">
                            {category[level].map((skill) => (
                              <div
                                key={skill}
                                className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                              >
                                <Icon name="check-circle" size={16} className={`mr-3 ${
                                  level === 'beginner' ? 'text-green-500' :
                                  level === 'intermediate' ? 'text-yellow-500' :
                                  'text-red-500'
                                }`} />
                                <span className="text-gray-700">{skill}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
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
              Ready to Build Your Domain Expertise?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get personalized guidance on domain selection, skill development, and career pathways
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="lg">
                <Icon name="user" size={20} className="mr-2" />
                Get Domain Assessment
              </Button>
              <Button variant="outline" size="lg">
                <Icon name="calendar" size={20} className="mr-2" />
                Schedule Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProductDomainProfilingPage;
