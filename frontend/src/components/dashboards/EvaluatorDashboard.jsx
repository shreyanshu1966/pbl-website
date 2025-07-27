import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../../contexts/AuthContext';
import { Icon, Button, Card } from '../index';

const EvaluatorDashboard = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedReview, setSelectedReview] = useState('R1');
  const [selectedGroup, setSelectedGroup] = useState(null);

  // Mock data for evaluator's assigned reviews
  const reviewAssignments = {
    R1: [
      {
        groupId: 'G001',
        projectTitle: 'Smart Campus IoT System',
        domain: 'Internet of Things',
        mentor: 'Dr. Priya Patel',
        students: 4,
        submissionDate: '2025-01-15',
        status: 'completed',
        marks: 85,
        evaluatedDate: '2025-01-16',
        synopsis: 'Developing an IoT-based system to monitor campus resources including lighting, temperature, and occupancy. Uses Arduino sensors and cloud analytics.',
        technicalAspects: ['IoT Sensors', 'Cloud Computing', 'Data Analytics', 'Mobile App'],
        strengths: ['Good technical implementation', 'Clear problem definition', 'Practical application'],
        improvements: ['Better documentation needed', 'Add more test cases', 'Improve UI design']
      },
      {
        groupId: 'G002',
        projectTitle: 'AI-Powered Learning Assistant',
        domain: 'Artificial Intelligence',
        mentor: 'Dr. Priya Patel',
        students: 3,
        submissionDate: '2025-01-14',
        status: 'completed',
        marks: 92,
        evaluatedDate: '2025-01-15',
        synopsis: 'An AI assistant that helps students with personalized learning recommendations using machine learning algorithms and natural language processing.',
        technicalAspects: ['Machine Learning', 'NLP', 'Python', 'Web Framework'],
        strengths: ['Excellent AI implementation', 'User-friendly interface', 'Good algorithm selection'],
        improvements: ['Add more training data', 'Improve response time', 'Better error handling']
      },
      {
        groupId: 'G003',
        projectTitle: 'Blockchain Voting System',
        domain: 'Blockchain',
        mentor: 'Dr. Anjali Singh',
        students: 4,
        submissionDate: '2025-01-10',
        status: 'completed',
        marks: 72,
        evaluatedDate: '2025-01-12',
        synopsis: 'A secure voting system using blockchain technology to ensure transparency and prevent tampering in elections.',
        technicalAspects: ['Blockchain', 'Smart Contracts', 'Web3', 'Security'],
        strengths: ['Good security concept', 'Blockchain implementation', 'Clear use case'],
        improvements: ['Improve scalability', 'Better user interface', 'Add more security features']
      }
    ],
    R2: [
      {
        groupId: 'G002',
        projectTitle: 'AI-Powered Learning Assistant',
        domain: 'Artificial Intelligence',
        mentor: 'Dr. Priya Patel',
        students: 3,
        submissionDate: '2025-01-20',
        status: 'pending',
        marks: null,
        evaluatedDate: null,
        synopsis: 'Enhanced version with improved ML models and additional features for personalized learning paths.',
        technicalAspects: ['Advanced ML', 'Deep Learning', 'API Integration', 'Database Optimization'],
        strengths: [],
        improvements: []
      },
      {
        groupId: 'G005',
        projectTitle: 'Smart Traffic Management',
        domain: 'Computer Vision',
        mentor: 'Prof. Rahul Kumar',
        students: 4,
        submissionDate: '2025-01-22',
        status: 'pending',
        marks: null,
        evaluatedDate: null,
        synopsis: 'AI-based traffic management system using computer vision to optimize traffic flow and reduce congestion.',
        technicalAspects: ['Computer Vision', 'OpenCV', 'Real-time Processing', 'Traffic Algorithms'],
        strengths: [],
        improvements: []
      }
    ],
    R3: [
      {
        groupId: 'G010',
        projectTitle: 'Healthcare Management System',
        domain: 'Web Development',
        mentor: 'Dr. Meera Shah',
        students: 3,
        submissionDate: '2025-01-25',
        status: 'scheduled',
        marks: null,
        evaluatedDate: null,
        synopsis: 'Comprehensive healthcare management system with patient records, appointment scheduling, and telemedicine features.',
        technicalAspects: ['Full Stack Development', 'Database Design', 'Security', 'API Development'],
        strengths: [],
        improvements: []
      }
    ]
  };

  const tabs = [
    { id: 'overview', name: 'Overview', icon: 'home' },
    { id: 'reviews', name: 'Reviews', icon: 'clipboard-check' },
    { id: 'evaluation', name: 'Evaluation', icon: 'edit' },
    { id: 'completed', name: 'Completed', icon: 'check-circle' },
    { id: 'guidelines', name: 'Guidelines', icon: 'book' }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'scheduled': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const ReviewCard = ({ project, onClick, isSelected }) => (
    <Card 
      className={`p-4 cursor-pointer transition-all hover:shadow-md ${
        isSelected ? 'ring-2 ring-orange-500 bg-orange-50' : ''
      }`}
      onClick={onClick}
    >
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-gray-900">{project.groupId}</h3>
        <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(project.status)}`}>
          {project.status}
        </span>
      </div>
      <h4 className="text-sm font-medium text-gray-900 mb-2">{project.projectTitle}</h4>
      <p className="text-xs text-gray-600 mb-3">{project.domain}</p>
      
      <div className="flex items-center justify-between text-sm">
        <span className="text-gray-600">Due: {project.submissionDate}</span>
        {project.marks && (
          <span className="font-bold text-green-600">{project.marks}/100</span>
        )}
      </div>
      
      <div className="mt-2 text-xs text-gray-500">
        Mentor: {project.mentor}
      </div>
    </Card>
  );

  const EvaluationForm = ({ project }) => (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold text-gray-900">{project.projectTitle}</h3>
          <p className="text-gray-600">{project.groupId} • {project.domain}</p>
        </div>
        <div className="text-right">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
            {project.status}
          </span>
        </div>
      </div>

      {/* Project Synopsis */}
      <div className="mb-6">
        <h4 className="font-semibold text-gray-900 mb-2">Project Synopsis</h4>
        <p className="text-gray-700 bg-gray-50 p-4 rounded-lg">{project.synopsis}</p>
      </div>

      {/* Technical Aspects */}
      <div className="mb-6">
        <h4 className="font-semibold text-gray-900 mb-2">Technical Aspects</h4>
        <div className="flex flex-wrap gap-2">
          {project.technicalAspects.map((aspect, index) => (
            <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
              {aspect}
            </span>
          ))}
        </div>
      </div>

      {/* Evaluation Form */}
      {project.status === 'pending' && (
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Technical Implementation */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Technical Implementation (25 marks)
              </label>
              <input
                type="number"
                min="0"
                max="25"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-orange-500"
                placeholder="Enter marks"
              />
            </div>

            {/* Innovation & Creativity */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Innovation & Creativity (20 marks)
              </label>
              <input
                type="number"
                min="0"
                max="20"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-orange-500"
                placeholder="Enter marks"
              />
            </div>

            {/* Problem Solving */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Problem Solving (20 marks)
              </label>
              <input
                type="number"
                min="0"
                max="20"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-orange-500"
                placeholder="Enter marks"
              />
            </div>

            {/* Documentation */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Documentation (15 marks)
              </label>
              <input
                type="number"
                min="0"
                max="15"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-orange-500"
                placeholder="Enter marks"
              />
            </div>

            {/* Presentation */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Presentation (10 marks)
              </label>
              <input
                type="number"
                min="0"
                max="10"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-orange-500"
                placeholder="Enter marks"
              />
            </div>

            {/* Team Collaboration */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Team Collaboration (10 marks)
              </label>
              <input
                type="number"
                min="0"
                max="10"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-orange-500"
                placeholder="Enter marks"
              />
            </div>
          </div>

          {/* Strengths */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Project Strengths
            </label>
            <textarea
              rows={3}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-orange-500"
              placeholder="Highlight the strong points of this project..."
            ></textarea>
          </div>

          {/* Areas for Improvement */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Areas for Improvement
            </label>
            <textarea
              rows={3}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-orange-500"
              placeholder="Suggest improvements and recommendations..."
            ></textarea>
          </div>

          {/* Overall Comments */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Overall Comments
            </label>
            <textarea
              rows={4}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-orange-500"
              placeholder="Provide detailed feedback and suggestions..."
            ></textarea>
          </div>

          {/* Recommendation */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Recommendation
            </label>
            <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-orange-500">
              <option>Select recommendation</option>
              <option>Excellent - Ready for next phase</option>
              <option>Good - Minor improvements needed</option>
              <option>Satisfactory - Moderate improvements needed</option>
              <option>Needs Work - Major improvements required</option>
            </select>
          </div>

          <div className="flex space-x-3">
            <Button variant="outline" className="flex-1">
              <Icon name="save" size={16} className="mr-2" />
              Save Draft
            </Button>
            <Button className="flex-1">
              <Icon name="check" size={16} className="mr-2" />
              Submit Evaluation
            </Button>
          </div>
        </form>
      )}

      {/* Completed Evaluation Display */}
      {project.status === 'completed' && (
        <div className="space-y-6">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold text-green-800">Evaluation Completed</span>
              <span className="text-2xl font-bold text-green-600">{project.marks}/100</span>
            </div>
            <p className="text-sm text-green-700">
              Evaluated on {project.evaluatedDate}
            </p>
          </div>

          {project.strengths.length > 0 && (
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Project Strengths</h4>
              <ul className="space-y-1">
                {project.strengths.map((strength, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <Icon name="check-circle" size={16} className="text-green-500 mr-2" />
                    {strength}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.improvements.length > 0 && (
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Areas for Improvement</h4>
              <ul className="space-y-1">
                {project.improvements.map((improvement, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <Icon name="alert-circle" size={16} className="text-yellow-500 mr-2" />
                    {improvement}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex space-x-3">
            <Button variant="outline">
              <Icon name="edit" size={16} className="mr-2" />
              Edit Evaluation
            </Button>
            <Button variant="outline">
              <Icon name="download" size={16} className="mr-2" />
              Download Report
            </Button>
          </div>
        </div>
      )}
    </Card>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Evaluator Dashboard</h1>
              <p className="text-gray-600">Welcome back, {user.name}</p>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Icon name="download" size={16} className="mr-2" />
                Export Evaluations
              </Button>
              <Button variant="outline" size="sm">
                <Icon name="settings" size={16} className="mr-2" />
                Settings
              </Button>
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-orange-600 font-medium">
                  {user.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b">
        <div className="container">
          <div className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-orange-500 text-orange-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <Icon name={tab.icon} size={16} className="inline mr-2" />
                {tab.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container py-8">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="p-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Icon name="clipboard-list" size={24} className="text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Total Assignments</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {Object.values(reviewAssignments).flat().length}
                    </p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Icon name="check-circle" size={24} className="text-green-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Completed</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {Object.values(reviewAssignments).flat().filter(p => p.status === 'completed').length}
                    </p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <Icon name="clock" size={24} className="text-yellow-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Pending</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {Object.values(reviewAssignments).flat().filter(p => p.status === 'pending').length}
                    </p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Icon name="star" size={24} className="text-purple-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Avg Score</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {Math.round(
                        Object.values(reviewAssignments)
                          .flat()
                          .filter(p => p.marks)
                          .reduce((sum, p) => sum + p.marks, 0) /
                        Object.values(reviewAssignments)
                          .flat()
                          .filter(p => p.marks).length
                      ) || 0}
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Review Stage Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {Object.entries(reviewAssignments).map(([stage, projects]) => (
                <Card key={stage} className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">{stage} Reviews</h3>
                    <span className="text-2xl font-bold text-purple-600">{projects.length}</span>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Completed</span>
                      <span className="font-medium text-green-600">
                        {projects.filter(p => p.status === 'completed').length}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Pending</span>
                      <span className="font-medium text-yellow-600">
                        {projects.filter(p => p.status === 'pending').length}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Scheduled</span>
                      <span className="font-medium text-blue-600">
                        {projects.filter(p => p.status === 'scheduled').length}
                      </span>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-green-500 h-2 rounded-full"
                        style={{ 
                          width: `${(projects.filter(p => p.status === 'completed').length / projects.length) * 100}%` 
                        }}
                      ></div>
                    </div>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full mt-4"
                    onClick={() => {
                      setActiveTab('reviews');
                      setSelectedReview(stage);
                    }}
                  >
                    View {stage} Reviews
                  </Button>
                </Card>
              ))}
            </div>

            {/* Upcoming Deadlines */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Deadlines</h3>
              <div className="space-y-3">
                {Object.values(reviewAssignments)
                  .flat()
                  .filter(p => p.status === 'pending')
                  .sort((a, b) => new Date(a.submissionDate) - new Date(b.submissionDate))
                  .slice(0, 5)
                  .map((project, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3">
                          <span className="font-medium text-gray-900">{project.groupId}</span>
                          <span className="text-gray-600">{project.projectTitle}</span>
                        </div>
                        <p className="text-sm text-gray-600">Due: {project.submissionDate}</p>
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => {
                          setActiveTab('evaluation');
                          setSelectedGroup(project);
                        }}
                      >
                        <Icon name="edit" size={14} className="mr-1" />
                        Evaluate
                      </Button>
                    </div>
                  ))}
              </div>
            </Card>
          </div>
        )}

        {/* Reviews Tab */}
        {activeTab === 'reviews' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Review Assignments</h2>
              <div className="flex space-x-2">
                {Object.keys(reviewAssignments).map((stage) => (
                  <button
                    key={stage}
                    onClick={() => setSelectedReview(stage)}
                    className={`px-4 py-2 rounded-md font-medium text-sm transition-colors ${
                      selectedReview === stage
                        ? 'bg-orange-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {stage} ({reviewAssignments[stage].length})
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviewAssignments[selectedReview].map((project, index) => (
                <ReviewCard
                  key={index}
                  project={project}
                  isSelected={selectedGroup?.groupId === project.groupId}
                  onClick={() => {
                    setSelectedGroup(project);
                    setActiveTab('evaluation');
                  }}
                />
              ))}
            </div>

            {reviewAssignments[selectedReview].length === 0 && (
              <Card className="p-12 text-center">
                <Icon name="calendar" size={48} className="mx-auto text-gray-400 mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  No {selectedReview} Reviews Assigned
                </h3>
                <p className="text-gray-600">
                  You don't have any {selectedReview} reviews assigned at the moment.
                </p>
              </Card>
            )}
          </div>
        )}

        {/* Evaluation Tab */}
        {activeTab === 'evaluation' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Project Evaluation</h2>
            
            {selectedGroup ? (
              <EvaluationForm project={selectedGroup} />
            ) : (
              <Card className="p-12 text-center">
                <Icon name="clipboard-check" size={48} className="mx-auto text-gray-400 mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Select a Project to Evaluate
                </h3>
                <p className="text-gray-600 mb-4">
                  Choose a project from the Reviews tab to start evaluation.
                </p>
                <Button onClick={() => setActiveTab('reviews')}>
                  <Icon name="list" size={16} className="mr-2" />
                  View Reviews
                </Button>
              </Card>
            )}
          </div>
        )}

        {/* Completed Tab */}
        {activeTab === 'completed' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Completed Evaluations</h2>
            
            <div className="grid grid-cols-1 gap-6">
              {Object.values(reviewAssignments)
                .flat()
                .filter(project => project.status === 'completed')
                .map((project, index) => (
                  <Card key={index} className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{project.projectTitle}</h3>
                        <p className="text-gray-600">{project.groupId} • {project.domain}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-2xl font-bold text-green-600">{project.marks}/100</span>
                        <p className="text-sm text-gray-500">Evaluated on {project.evaluatedDate}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Strengths</h4>
                        <ul className="space-y-1">
                          {project.strengths.map((strength, i) => (
                            <li key={i} className="flex items-center text-sm text-gray-700">
                              <Icon name="check-circle" size={14} className="text-green-500 mr-2" />
                              {strength}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Improvements</h4>
                        <ul className="space-y-1">
                          {project.improvements.map((improvement, i) => (
                            <li key={i} className="flex items-center text-sm text-gray-700">
                              <Icon name="alert-circle" size={14} className="text-yellow-500 mr-2" />
                              {improvement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex space-x-3 mt-6">
                      <Button variant="outline" size="sm">
                        <Icon name="eye" size={14} className="mr-1" />
                        View Details
                      </Button>
                      <Button variant="outline" size="sm">
                        <Icon name="edit" size={14} className="mr-1" />
                        Edit Evaluation
                      </Button>
                      <Button variant="outline" size="sm">
                        <Icon name="download" size={14} className="mr-1" />
                        Download Report
                      </Button>
                    </div>
                  </Card>
                ))}
            </div>
          </div>
        )}

        {/* Guidelines Tab */}
        {activeTab === 'guidelines' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Evaluation Guidelines</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Evaluation Criteria</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-l-blue-500 pl-4">
                    <h4 className="font-medium text-gray-900">Technical Implementation (25 marks)</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Code quality, functionality, use of appropriate technologies, system architecture
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-l-green-500 pl-4">
                    <h4 className="font-medium text-gray-900">Innovation & Creativity (20 marks)</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Novelty of approach, creative problem solving, unique features
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-l-purple-500 pl-4">
                    <h4 className="font-medium text-gray-900">Problem Solving (20 marks)</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Problem understanding, solution effectiveness, real-world applicability
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-l-yellow-500 pl-4">
                    <h4 className="font-medium text-gray-900">Documentation (15 marks)</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Code documentation, project report, user manual, technical specifications
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-l-red-500 pl-4">
                    <h4 className="font-medium text-gray-900">Presentation (10 marks)</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Clarity of explanation, demonstration, Q&A handling, visual aids
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-l-gray-500 pl-4">
                    <h4 className="font-medium text-gray-900">Team Collaboration (10 marks)</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Team coordination, individual contributions, project management
                    </p>
                  </div>
                </div>
              </Card>

              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Evaluation Process</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-medium text-sm">1</span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Review Project Synopsis</p>
                        <p className="text-sm text-gray-600">Understand the project objectives and scope</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-green-600 font-medium text-sm">2</span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Evaluate Technical Aspects</p>
                        <p className="text-sm text-gray-600">Assess implementation quality and innovation</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                        <span className="text-purple-600 font-medium text-sm">3</span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Assign Marks</p>
                        <p className="text-sm text-gray-600">Score each criterion based on guidelines</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                        <span className="text-orange-600 font-medium text-sm">4</span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Provide Feedback</p>
                        <p className="text-sm text-gray-600">Give constructive feedback and suggestions</p>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Resources</h3>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      <Icon name="download" size={16} className="mr-2" />
                      Download Evaluation Rubric
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Icon name="book" size={16} className="mr-2" />
                      Evaluation Best Practices
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Icon name="video" size={16} className="mr-2" />
                      Training Videos
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Icon name="help-circle" size={16} className="mr-2" />
                      Contact Support
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EvaluatorDashboard;
