import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Icon, Button, Card } from '../components';
import { getImageUrls, getProfileImages } from '../utils/imageUtils';

const FundingOpportunitiesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedFundingType, setSelectedFundingType] = useState('all');

  const fundingCategories = [
    { id: 'all', name: 'All Opportunities', icon: 'dollar-sign' },
    { id: 'government', name: 'Government Schemes', icon: 'landmark' },
    { id: 'private', name: 'Private Foundations', icon: 'building' },
    { id: 'international', name: 'International Grants', icon: 'globe' },
    { id: 'competitions', name: 'Competitions & Contests', icon: 'trophy' },
    { id: 'industry', name: 'Industry Partnerships', icon: 'handshake' }
  ];

  const fundingTypes = [
    { id: 'all', name: 'All Types' },
    { id: 'research', name: 'Research Grants' },
    { id: 'innovation', name: 'Innovation Funds' },
    { id: 'startup', name: 'Startup Capital' },
    { id: 'travel', name: 'Travel Grants' },
    { id: 'equipment', name: 'Equipment Funding' }
  ];

  const fundingOpportunities = [
    // Government Schemes
    {
      id: 1,
      category: 'government',
      type: 'innovation',
      title: 'AICTE Student Startup Policy',
      agency: 'All India Council for Technical Education',
      amount: '₹20 Lakhs',
      deadline: '2025-03-15',
      status: 'open',
      description: 'Funding support for student-led startups with innovative technology solutions',
      eligibility: ['UG/PG Students', 'Indian Nationals', 'Age < 30 years'],
      documents: ['Business Plan', 'Academic Transcripts', 'Prototype Demo'],
      applicationProcess: 'Online application through AICTE portal',
      successRate: '12%',
      previousWinners: 45,
      tags: ['Startup', 'Innovation', 'Technology']
    },
    {
      id: 2,
      category: 'government',
      type: 'research',
      title: 'DST INSPIRE Fellowship',
      agency: 'Department of Science & Technology',
      amount: '₹80,000/year',
      deadline: '2025-02-28',
      status: 'open',
      description: 'Fellowship program for pursuing doctoral research in science and technology',
      eligibility: ['MSc/MTech graduates', 'CGPA > 7.5', 'Age < 27 years'],
      documents: ['Research Proposal', 'Academic Records', 'Supervisor Letter'],
      applicationProcess: 'Online portal with mentor recommendation',
      successRate: '8%',
      previousWinners: 1200,
      tags: ['Research', 'Fellowship', 'PhD']
    },
    {
      id: 3,
      category: 'government',
      type: 'innovation',
      title: 'Smart India Hackathon',
      agency: 'Ministry of Education',
      amount: '₹1 Lakh',
      deadline: '2025-01-20',
      status: 'closing-soon',
      description: 'National hackathon for solving real-world problems using technology',
      eligibility: ['Student teams', 'Indian institutions', 'Age < 25 years'],
      documents: ['Team Registration', 'Problem Statement', 'Solution Prototype'],
      applicationProcess: 'Team registration and idea submission online',
      successRate: '2%',
      previousWinners: 100,
      tags: ['Hackathon', 'Problem Solving', 'Team Competition']
    },

    // Private Foundations
    {
      id: 4,
      category: 'private',
      type: 'research',
      title: 'Tata Trusts Research Grant',
      agency: 'Tata Trusts',
      amount: '₹50 Lakhs',
      deadline: '2025-04-10',
      status: 'open',
      description: 'Research funding for projects addressing social challenges in India',
      eligibility: ['PhD students', 'Faculty researchers', 'Social impact focus'],
      documents: ['Detailed Proposal', 'Budget Plan', 'Impact Assessment'],
      applicationProcess: 'Two-stage application with peer review',
      successRate: '15%',
      previousWinners: 85,
      tags: ['Social Impact', 'Research', 'India-focused']
    },
    {
      id: 5,
      category: 'private',
      type: 'startup',
      title: 'Nasscom Foundation Grant',
      agency: 'Nasscom Foundation',
      amount: '₹25 Lakhs',
      deadline: '2025-03-30',
      status: 'open',
      description: 'Seed funding for technology startups addressing societal problems',
      eligibility: ['Early-stage startups', 'Technology focus', 'Social impact'],
      documents: ['Business Model', 'Financial Projections', 'Team Details'],
      applicationProcess: 'Online application with pitch presentation',
      successRate: '10%',
      previousWinners: 60,
      tags: ['Startup', 'Technology', 'Social Good']
    },

    // International Grants
    {
      id: 6,
      category: 'international',
      type: 'research',
      title: 'Google AI for Social Good',
      agency: 'Google.org',
      amount: '$100,000',
      deadline: '2025-02-15',
      status: 'open',
      description: 'Global grant program for AI projects addressing social challenges',
      eligibility: ['Graduate students', 'AI/ML projects', 'Global applicants'],
      documents: ['Technical Proposal', 'Dataset Description', 'Impact Plan'],
      applicationProcess: 'Online submission with technical review',
      successRate: '5%',
      previousWinners: 150,
      tags: ['AI/ML', 'Global', 'Social Impact']
    },
    {
      id: 7,
      category: 'international',
      type: 'travel',
      title: 'MIT Global Startup Workshop',
      agency: 'MIT Sloan School',
      amount: '$5,000',
      deadline: '2025-01-31',
      status: 'open',
      description: 'Travel and participation grant for international entrepreneurship program',
      eligibility: ['Engineering students', 'Startup interest', 'English proficiency'],
      documents: ['Application Essay', 'Startup Idea', 'Academic Records'],
      applicationProcess: 'Online application with video pitch',
      successRate: '20%',
      previousWinners: 200,
      tags: ['Travel', 'Entrepreneurship', 'International']
    },

    // Industry Partnerships
    {
      id: 8,
      category: 'industry',
      type: 'innovation',
      title: 'Microsoft Imagine Cup',
      agency: 'Microsoft Corporation',
      amount: '$50,000',
      deadline: '2025-03-01',
      status: 'open',
      description: 'Global student technology competition with mentorship and funding',
      eligibility: ['Student teams', 'Technology solution', 'Global competition'],
      documents: ['Project Demo', 'Business Plan', 'Team Profile'],
      applicationProcess: 'Multi-stage competition with regional rounds',
      successRate: '3%',
      previousWinners: 75,
      tags: ['Technology', 'Global Competition', 'Microsoft']
    }
  ];

  const applicationTips = [
    {
      title: 'Start Early',
      description: 'Begin your application process at least 2-3 months before the deadline',
      icon: 'clock'
    },
    {
      title: 'Read Guidelines Carefully',
      description: 'Thoroughly understand eligibility criteria and submission requirements',
      icon: 'book-open'
    },
    {
      title: 'Prepare Strong Documentation',
      description: 'Ensure all documents are complete, accurate, and professionally formatted',
      icon: 'file-text'
    },
    {
      title: 'Get Feedback',
      description: 'Have mentors and peers review your application before submission',
      icon: 'users'
    },
    {
      title: 'Follow Up',
      description: 'Track your application status and respond promptly to any queries',
      icon: 'check-circle'
    }
  ];
  const successStories = [
    {
      name: 'Priya Sharma & Team',
      project: 'Smart Water Quality Monitor',
      funding: 'DST INSPIRE Fellowship',
      amount: '₹80,000',
      outcome: 'Deployed in 50+ villages, now a startup with ₹2Cr funding',
      image: getProfileImages.student1
    },
    {
      name: 'Rahul Kumar',
      project: 'AI-Powered Crop Disease Detection',
      funding: 'Google AI for Social Good',
      amount: '$75,000',
      outcome: 'Published in top journals, licensed to AgriTech company',
      image: getProfileImages.student2
    },
    {
      name: 'Anita Desai & Co.',
      project: 'Blockchain Supply Chain',
      funding: 'Microsoft Imagine Cup',
      amount: '$50,000',
      outcome: 'Won global competition, secured Series A funding',
      image: getProfileImages.student3
    }
  ];

  const filteredOpportunities = fundingOpportunities.filter(opportunity => {
    const categoryMatch = selectedCategory === 'all' || opportunity.category === selectedCategory;
    const typeMatch = selectedFundingType === 'all' || opportunity.type === selectedFundingType;
    return categoryMatch && typeMatch;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'open': return 'text-green-600 bg-green-100';
      case 'closing-soon': return 'text-yellow-600 bg-yellow-100';
      case 'closed': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'open': return 'Open';
      case 'closing-soon': return 'Closing Soon';
      case 'closed': return 'Closed';
      default: return 'Unknown';
    }
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
              Funding Opportunities
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Discover grants, scholarships, and funding programs to support your 
              innovative projects and research endeavors
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg">
                <Icon name="search" size={20} className="mr-2" />
                Find My Funding
              </Button>
              <Button variant="outline" size="lg">
                <Icon name="download" size={20} className="mr-2" />
                Application Guide
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Statistics */}
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
              <div className="text-3xl font-bold text-green-600 mb-2">₹15+ Cr</div>
              <div className="text-gray-600">Total Funding Secured</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-purple-600 mb-2">150+</div>
              <div className="text-gray-600">Successful Applications</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-orange-600 mb-2">25+</div>
              <div className="text-gray-600">Active Opportunities</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-blue-600 mb-2">85%</div>
              <div className="text-gray-600">Success Rate</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-gray-100">
        <div className="container">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Filter by Category</h3>
            <div className="flex flex-wrap gap-3">
              {fundingCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all text-sm ${
                    selectedCategory === category.id
                      ? 'bg-purple-600 text-white shadow-md'
                      : 'bg-white text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <Icon name={category.icon} size={16} className="mr-2" />
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Filter by Type</h3>
            <div className="flex flex-wrap gap-3">
              {fundingTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setSelectedFundingType(type.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all text-sm ${
                    selectedFundingType === type.id
                      ? 'bg-orange-500 text-white shadow-md'
                      : 'bg-white text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {type.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Funding Opportunities */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Available Funding Opportunities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {filteredOpportunities.length} opportunities match your criteria
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {filteredOpportunities.map((opportunity, index) => (
              <motion.div
                key={opportunity.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-xl transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(opportunity.status)}`}>
                          {getStatusText(opportunity.status)}
                        </span>
                        <span className="text-sm text-gray-500 capitalize">
                          {opportunity.category} • {opportunity.type}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{opportunity.title}</h3>
                      <p className="text-purple-600 font-medium">{opportunity.agency}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-600">{opportunity.amount}</div>
                      <div className="text-sm text-gray-500">Funding</div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">{opportunity.description}</p>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Deadline</h4>
                      <div className="flex items-center text-gray-700">
                        <Icon name="calendar" size={14} className="mr-2 text-red-500" />
                        {opportunity.deadline}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Success Rate</h4>
                      <div className="flex items-center text-gray-700">
                        <Icon name="trending-up" size={14} className="mr-2 text-green-500" />
                        {opportunity.successRate}
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Eligibility</h4>
                    <div className="space-y-1">
                      {opportunity.eligibility.slice(0, 2).map((criteria, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <Icon name="check-circle" size={12} className="mr-2 text-green-500" />
                          {criteria}
                        </div>
                      ))}
                      {opportunity.eligibility.length > 2 && (
                        <div className="text-sm text-purple-600">
                          +{opportunity.eligibility.length - 2} more criteria
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex flex-wrap gap-1">
                      {opportunity.tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button variant="primary" className="flex-1">
                      <Icon name="external-link" size={16} className="mr-2" />
                      Apply Now
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Icon name="info" size={16} className="mr-2" />
                      Details
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredOpportunities.length === 0 && (
            <div className="text-center py-20">
              <Icon name="search" size={64} className="mx-auto text-gray-400 mb-4" />
              <h3 className="text-xl font-medium text-gray-600 mb-2">No opportunities found</h3>
              <p className="text-gray-500">Try adjusting your filters or check back later</p>
            </div>
          )}
        </div>
      </section>

      {/* Application Tips */}
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
              Application Success Tips
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert advice to maximize your chances of securing funding
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applicationTips.map((tip, index) => (
              <motion.div
                key={tip.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 text-center h-full">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={tip.icon} size={28} className="text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{tip.title}</h3>
                  <p className="text-gray-600">{tip.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
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
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn from students who successfully secured funding for their projects
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={story.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 text-center h-full">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{story.name}</h3>
                  <p className="text-purple-600 font-medium mb-2">{story.project}</p>
                  <div className="text-sm text-gray-600 mb-3">
                    <div className="font-medium">{story.funding}</div>
                    <div className="text-green-600 font-bold">{story.amount}</div>
                  </div>
                  <p className="text-gray-600 text-sm">{story.outcome}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
              Ready to Secure Your Funding?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get personalized guidance from our funding experts and boost your application success rate
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="lg">
                <Icon name="calendar" size={20} className="mr-2" />
                Book Consultation
              </Button>
              <Button variant="outline" size="lg">
                <Icon name="download" size={20} className="mr-2" />
                Application Toolkit
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FundingOpportunitiesPage;
