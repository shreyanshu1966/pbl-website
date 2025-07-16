import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../../contexts/AuthContext';
import { Icon, Button, Card } from '../index';

const StudentDashboard = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data - In production, this would come from your backend
  const groupData = {
    groupId: 'G001',
    projectTitle: 'Smart Campus IoT System',
    domain: 'Internet of Things',
    problemStatement: 'Develop an IoT-based system to monitor and manage campus resources efficiently',
    mentor: 'Dr. Priya Patel',
    teamMembers: [
      { name: 'Rahul Sharma', rollNo: 'CS2021001', expertise: ['React', 'Node.js'] },
      { name: 'Priya Singh', rollNo: 'CS2021002', expertise: ['Python', 'ML'] },
      { name: 'Amit Kumar', rollNo: 'CS2021003', expertise: ['IoT', 'Arduino'] },
      { name: 'Neha Patil', rollNo: 'CS2021004', expertise: ['UI/UX', 'Flutter'] }
    ],
    submissions: {
      ppt: { status: 'submitted', date: '2025-01-10', file: 'project_presentation.pptx' },
      report: { status: 'pending', date: null, file: null },
      code: { status: 'submitted', date: '2025-01-12', link: 'https://github.com/team/project' },
      video: { status: 'pending', date: null, file: null }
    },
    reviews: {
      r1: { marks: 85, feedback: 'Good progress on IoT implementation. Improve documentation.', date: '2025-01-15' },
      r2: { marks: null, feedback: null, date: null },
      r3: { marks: null, feedback: null, date: null }
    },
    completionPercentage: 65,
    sdgMapping: ['Quality Education', 'Sustainable Cities', 'Innovation'],
    github: 'https://github.com/team/smart-campus-iot'
  };

  const tabs = [
    { id: 'overview', name: 'Overview', icon: 'home' },
    { id: 'submissions', name: 'Submissions', icon: 'upload' },
    { id: 'feedback', name: 'Feedback', icon: 'message-circle' },
    { id: 'team', name: 'Team', icon: 'users' },
    { id: 'resources', name: 'Resources', icon: 'book' }
  ];

  const TaskCard = ({ title, description, status, dueDate }) => (
    <Card className="p-4 border-l-4 border-l-blue-500">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h4 className="font-semibold text-gray-900">{title}</h4>
          <p className="text-sm text-gray-600 mt-1">{description}</p>
          {dueDate && (
            <p className="text-xs text-gray-500 mt-2">Due: {dueDate}</p>
          )}
        </div>
        <div className={`px-2 py-1 rounded text-xs font-medium ${
          status === 'completed' ? 'bg-green-100 text-green-800' :
          status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
          'bg-red-100 text-red-800'
        }`}>
          {status}
        </div>
      </div>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Student Dashboard</h1>
              <p className="text-gray-600">Welcome back, {user.name}</p>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Icon name="settings" size={16} className="mr-2" />
                Settings
              </Button>
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600 font-medium">
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
                    ? 'border-purple-500 text-purple-600'
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
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="p-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Icon name="clipboard-check" size={24} className="text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Completion</p>
                    <p className="text-2xl font-bold text-gray-900">{groupData.completionPercentage}%</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Icon name="star" size={24} className="text-green-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">R1 Score</p>
                    <p className="text-2xl font-bold text-gray-900">{groupData.reviews.r1.marks || 'N/A'}</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <Icon name="upload" size={24} className="text-yellow-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Submissions</p>
                    <p className="text-2xl font-bold text-gray-900">2/4</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Icon name="users" size={24} className="text-purple-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Team Size</p>
                    <p className="text-2xl font-bold text-gray-900">{groupData.teamMembers.length}</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Project Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Project Details</h3>
                <div className="space-y-3">
                  <div>
                    <span className="text-sm font-medium text-gray-600">Group ID:</span>
                    <span className="ml-2 text-gray-900">{groupData.groupId}</span>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-600">Title:</span>
                    <span className="ml-2 text-gray-900">{groupData.projectTitle}</span>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-600">Domain:</span>
                    <span className="ml-2 text-gray-900">{groupData.domain}</span>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-600">Mentor:</span>
                    <span className="ml-2 text-gray-900">{groupData.mentor}</span>
                  </div>
                </div>
                <div className="mt-4">
                  <span className="text-sm font-medium text-gray-600">Problem Statement:</span>
                  <p className="mt-1 text-gray-900 text-sm">{groupData.problemStatement}</p>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Upcoming Tasks</h3>
                <div className="space-y-3">
                  <TaskCard
                    title="Submit Project Report"
                    description="Final project documentation and analysis"
                    status="pending"
                    dueDate="Jan 25, 2025"
                  />
                  <TaskCard
                    title="Record Demo Video"
                    description="3-5 minute project demonstration"
                    status="pending"
                    dueDate="Jan 28, 2025"
                  />
                  <TaskCard
                    title="Prepare R2 Presentation"
                    description="Second review presentation"
                    status="in-progress"
                    dueDate="Jan 30, 2025"
                  />
                </div>
              </Card>
            </div>
          </div>
        )}

        {/* Submissions Tab */}
        {activeTab === 'submissions' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Project Submissions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Presentation */}
              <Card className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Presentation (PPT)</h3>
                  <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                    groupData.submissions.ppt.status === 'submitted' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {groupData.submissions.ppt.status}
                  </div>
                </div>
                {groupData.submissions.ppt.status === 'submitted' ? (
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600">
                      Submitted: {groupData.submissions.ppt.date}
                    </p>
                    <p className="text-sm text-gray-600">
                      File: {groupData.submissions.ppt.file}
                    </p>
                    <Button variant="outline" size="sm">
                      <Icon name="download" size={16} className="mr-2" />
                      Download
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                      <Icon name="upload" size={24} className="mx-auto text-gray-400 mb-2" />
                      <p className="text-sm text-gray-600">Click to upload presentation</p>
                    </div>
                    <Button className="w-full">
                      <Icon name="upload" size={16} className="mr-2" />
                      Upload PPT
                    </Button>
                  </div>
                )}
              </Card>

              {/* Report */}
              <Card className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Project Report</h3>
                  <div className="px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                    pending
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                    <Icon name="file-text" size={24} className="mx-auto text-gray-400 mb-2" />
                    <p className="text-sm text-gray-600">Upload project report (PDF)</p>
                  </div>
                  <Button className="w-full">
                    <Icon name="upload" size={16} className="mr-2" />
                    Upload Report
                  </Button>
                </div>
              </Card>

              {/* Code Repository */}
              <Card className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Source Code</h3>
                  <div className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                    submitted
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">
                    Repository: GitHub
                  </p>
                  <p className="text-sm text-gray-600">
                    Updated: {groupData.submissions.code.date}
                  </p>
                  <Button variant="outline" size="sm">
                    <Icon name="external-link" size={16} className="mr-2" />
                    View Repository
                  </Button>
                </div>
              </Card>

              {/* Demo Video */}
              <Card className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Demo Video</h3>
                  <div className="px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                    pending
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                    <Icon name="video" size={24} className="mx-auto text-gray-400 mb-2" />
                    <p className="text-sm text-gray-600">Upload demo video (MP4, max 100MB)</p>
                  </div>
                  <Button className="w-full">
                    <Icon name="upload" size={16} className="mr-2" />
                    Upload Video
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        )}

        {/* Feedback Tab */}
        {activeTab === 'feedback' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Feedback & Reviews</h2>
            
            <div className="space-y-6">
              {/* Review 1 */}
              <Card className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Review 1 (R1)</h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-green-600">{groupData.reviews.r1.marks}/100</span>
                    <div className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                      Completed
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-gray-700">{groupData.reviews.r1.feedback}</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Reviewed on: {groupData.reviews.r1.date}
                  </p>
                </div>
              </Card>

              {/* Review 2 */}
              <Card className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Review 2 (R2)</h3>
                  <div className="px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                    Upcoming
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <Icon name="clock" size={24} className="mx-auto text-gray-400 mb-2" />
                  <p className="text-gray-600">Review scheduled for January 30, 2025</p>
                </div>
              </Card>

              {/* Review 3 */}
              <Card className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Review 3 (R3)</h3>
                  <div className="px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                    Not Scheduled
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <Icon name="calendar" size={24} className="mx-auto text-gray-400 mb-2" />
                  <p className="text-gray-600">Final review will be scheduled after R2</p>
                </div>
              </Card>
            </div>
          </div>
        )}

        {/* Team Tab */}
        {activeTab === 'team' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Team Members</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {groupData.teamMembers.map((member, index) => (
                <Card key={index} className="p-6 text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-purple-600 font-bold text-lg">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{member.rollNo}</p>
                  <div className="space-y-1">
                    <p className="text-xs font-medium text-gray-700">Tech Skills:</p>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {member.expertise.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Team Communication</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="github" size={20} className="text-gray-600" />
                  <span className="text-gray-700">GitHub Repository:</span>
                  <a href={groupData.github} className="text-blue-600 hover:underline">
                    {groupData.github}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="message-circle" size={20} className="text-gray-600" />
                  <span className="text-gray-700">Team Chat:</span>
                  <Button variant="outline" size="sm">
                    <Icon name="external-link" size={16} className="mr-2" />
                    Open WhatsApp Group
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Resources Tab */}
        {activeTab === 'resources' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Learning Resources</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="p-6">
                <Icon name="book" size={24} className="text-blue-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Documentation Templates</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Standard templates for project reports and presentations
                </p>
                <Button variant="outline" size="sm">
                  <Icon name="download" size={16} className="mr-2" />
                  Download
                </Button>
              </Card>

              <Card className="p-6">
                <Icon name="video" size={24} className="text-green-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Video Tutorials</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Step-by-step guides for project development
                </p>
                <Button variant="outline" size="sm">
                  <Icon name="play" size={16} className="mr-2" />
                  Watch
                </Button>
              </Card>

              <Card className="p-6">
                <Icon name="code" size={24} className="text-purple-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Code Examples</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Sample implementations and best practices
                </p>
                <Button variant="outline" size="sm">
                  <Icon name="external-link" size={16} className="mr-2" />
                  View Code
                </Button>
              </Card>

              <Card className="p-6">
                <Icon name="help-circle" size={24} className="text-orange-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">FAQ & Help</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Common questions and troubleshooting guides
                </p>
                <Button variant="outline" size="sm">
                  <Icon name="external-link" size={16} className="mr-2" />
                  View FAQ
                </Button>
              </Card>

              <Card className="p-6">
                <Icon name="phone" size={24} className="text-red-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Contact Support</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Get help from mentors and technical support
                </p>
                <Button variant="outline" size="sm">
                  <Icon name="message-circle" size={16} className="mr-2" />
                  Contact
                </Button>
              </Card>

              <Card className="p-6">
                <Icon name="calendar" size={24} className="text-yellow-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Schedule Meeting</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Book one-on-one session with your mentor
                </p>
                <Button variant="outline" size="sm">
                  <Icon name="calendar" size={16} className="mr-2" />
                  Schedule
                </Button>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentDashboard;
