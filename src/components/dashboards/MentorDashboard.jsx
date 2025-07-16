import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../../contexts/AuthContext';
import { Icon, Button, Card } from '../index';

const MentorDashboard = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedGroup, setSelectedGroup] = useState('G001');

  // Mock data for mentor's assigned groups
  const assignedGroups = [
    {
      groupId: 'G001',
      projectTitle: 'Smart Campus IoT System',
      domain: 'Internet of Things',
      students: [
        { name: 'Rahul Sharma', rollNo: 'CS2021001' },
        { name: 'Priya Singh', rollNo: 'CS2021002' },
        { name: 'Amit Kumar', rollNo: 'CS2021003' },
        { name: 'Neha Patil', rollNo: 'CS2021004' }
      ],
      completion: 65,
      lastUpdate: '2025-01-12',
      status: 'In Progress',
      reviews: {
        r1: { completed: true, marks: 85, date: '2025-01-15' },
        r2: { completed: false, marks: null, date: null },
        r3: { completed: false, marks: null, date: null }
      },
      submissions: {
        ppt: 'submitted',
        report: 'pending',
        code: 'submitted',
        video: 'pending'
      },
      github: 'https://github.com/team/smart-campus-iot'
    },
    {
      groupId: 'G002',
      projectTitle: 'AI-Powered Learning Assistant',
      domain: 'Artificial Intelligence',
      students: [
        { name: 'Sneha Reddy', rollNo: 'CS2021005' },
        { name: 'Vikash Yadav', rollNo: 'CS2021006' },
        { name: 'Ananya Das', rollNo: 'CS2021007' }
      ],
      completion: 78,
      lastUpdate: '2025-01-14',
      status: 'In Progress',
      reviews: {
        r1: { completed: true, marks: 92, date: '2025-01-10' },
        r2: { completed: false, marks: null, date: null },
        r3: { completed: false, marks: null, date: null }
      },
      submissions: {
        ppt: 'submitted',
        report: 'submitted',
        code: 'submitted',
        video: 'pending'
      },
      github: 'https://github.com/team/ai-learning-assistant'
    },
    {
      groupId: 'G003',
      projectTitle: 'Blockchain Voting System',
      domain: 'Blockchain',
      students: [
        { name: 'Arjun Mehta', rollNo: 'CS2021008' },
        { name: 'Kavya Sharma', rollNo: 'CS2021009' },
        { name: 'Rohit Gupta', rollNo: 'CS2021010' },
        { name: 'Divya Nair', rollNo: 'CS2021011' }
      ],
      completion: 52,
      lastUpdate: '2025-01-08',
      status: 'Needs Attention',
      reviews: {
        r1: { completed: true, marks: 72, date: '2025-01-05' },
        r2: { completed: false, marks: null, date: null },
        r3: { completed: false, marks: null, date: null }
      },
      submissions: {
        ppt: 'submitted',
        report: 'pending',
        code: 'pending',
        video: 'pending'
      },
      github: 'https://github.com/team/blockchain-voting'
    }
  ];

  const selectedGroupData = assignedGroups.find(group => group.groupId === selectedGroup);

  const tabs = [
    { id: 'overview', name: 'Overview', icon: 'home' },
    { id: 'groups', name: 'My Groups', icon: 'users' },
    { id: 'feedback', name: 'Feedback', icon: 'message-circle' },
    { id: 'monitoring', name: 'Progress Monitoring', icon: 'trending-up' },
    { id: 'resources', name: 'Resources', icon: 'book' }
  ];

  const GroupCard = ({ group, isSelected, onClick }) => (
    <Card 
      className={`p-4 cursor-pointer transition-all hover:shadow-md ${
        isSelected ? 'ring-2 ring-purple-500 bg-purple-50' : ''
      }`}
      onClick={onClick}
    >
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-gray-900">{group.groupId}</h3>
        <div className={`px-2 py-1 rounded text-xs font-medium ${
          group.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
          group.status === 'Needs Attention' ? 'bg-red-100 text-red-800' :
          'bg-green-100 text-green-800'
        }`}>
          {group.status}
        </div>
      </div>
      <h4 className="text-sm font-medium text-gray-900 mb-2">{group.projectTitle}</h4>
      <p className="text-xs text-gray-600 mb-3">{group.domain}</p>
      
      <div className="flex items-center justify-between text-sm">
        <span className="text-gray-600">Progress</span>
        <span className="font-medium">{group.completion}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
        <div
          className="bg-purple-600 h-2 rounded-full"
          style={{ width: `${group.completion}%` }}
        ></div>
      </div>
      
      <div className="mt-3 text-xs text-gray-500">
        Last update: {group.lastUpdate}
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
              <h1 className="text-2xl font-bold text-gray-900">Mentor Dashboard</h1>
              <p className="text-gray-600">Welcome back, {user.name}</p>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Icon name="calendar" size={16} className="mr-2" />
                Schedule Review
              </Button>
              <Button variant="outline" size="sm">
                <Icon name="settings" size={16} className="mr-2" />
                Settings
              </Button>
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 font-medium">
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
                    ? 'border-green-500 text-green-600'
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
                    <Icon name="users" size={24} className="text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Total Groups</p>
                    <p className="text-2xl font-bold text-gray-900">{assignedGroups.length}</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Icon name="trending-up" size={24} className="text-green-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Avg Progress</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {Math.round(assignedGroups.reduce((sum, group) => sum + group.completion, 0) / assignedGroups.length)}%
                    </p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <Icon name="alert-triangle" size={24} className="text-yellow-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Need Attention</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {assignedGroups.filter(group => group.status === 'Needs Attention').length}
                    </p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Icon name="clipboard-check" size={24} className="text-purple-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">R1 Completed</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {assignedGroups.filter(group => group.reviews.r1.completed).length}/{assignedGroups.length}
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card className="p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Activity</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                  <Icon name="upload" size={20} className="text-blue-600" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">G002 submitted project report</p>
                    <p className="text-xs text-gray-600">2 hours ago</p>
                  </div>
                  <Button variant="outline" size="sm">Review</Button>
                </div>
                
                <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                  <Icon name="git-commit" size={20} className="text-green-600" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">G001 pushed 5 commits to GitHub</p>
                    <p className="text-xs text-gray-600">1 day ago</p>
                  </div>
                  <Button variant="outline" size="sm">View Code</Button>
                </div>
                
                <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
                  <Icon name="calendar" size={20} className="text-yellow-600" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">G003 deadline approaching (Report due in 3 days)</p>
                    <p className="text-xs text-gray-600">Reminder set</p>
                  </div>
                  <Button variant="outline" size="sm">Notify</Button>
                </div>
              </div>
            </Card>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 text-center">
                <Icon name="message-circle" size={32} className="text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Send Feedback</h3>
                <p className="text-sm text-gray-600 mb-4">Provide feedback to your groups</p>
                <Button className="w-full">
                  <Icon name="edit" size={16} className="mr-2" />
                  Write Feedback
                </Button>
              </Card>

              <Card className="p-6 text-center">
                <Icon name="calendar" size={32} className="text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Schedule Review</h3>
                <p className="text-sm text-gray-600 mb-4">Set up review sessions</p>
                <Button variant="secondary" className="w-full">
                  <Icon name="calendar-plus" size={16} className="mr-2" />
                  Schedule
                </Button>
              </Card>

              <Card className="p-6 text-center">
                <Icon name="download" size={32} className="text-purple-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Export Reports</h3>
                <p className="text-sm text-gray-600 mb-4">Download progress reports</p>
                <Button variant="outline" className="w-full">
                  <Icon name="file-text" size={16} className="mr-2" />
                  Export
                </Button>
              </Card>
            </div>
          </div>
        )}

        {/* Groups Tab */}
        {activeTab === 'groups' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">My Groups</h2>
              <Button>
                <Icon name="plus" size={16} className="mr-2" />
                Add Group
              </Button>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Groups List */}
              <div className="space-y-4">
                {assignedGroups.map((group) => (
                  <GroupCard
                    key={group.groupId}
                    group={group}
                    isSelected={selectedGroup === group.groupId}
                    onClick={() => setSelectedGroup(group.groupId)}
                  />
                ))}
              </div>

              {/* Selected Group Details */}
              <div className="lg:col-span-2">
                {selectedGroupData && (
                  <Card className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{selectedGroupData.projectTitle}</h3>
                        <p className="text-gray-600">{selectedGroupData.groupId} • {selectedGroupData.domain}</p>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Icon name="message-circle" size={16} className="mr-2" />
                          Message
                        </Button>
                        <Button size="sm">
                          <Icon name="edit" size={16} className="mr-2" />
                          Give Feedback
                        </Button>
                      </div>
                    </div>

                    {/* Team Members */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Team Members</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {selectedGroupData.students.map((student, index) => (
                          <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                            <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                              <span className="text-purple-600 font-medium text-sm">
                                {student.name.split(' ').map(n => n[0]).join('')}
                              </span>
                            </div>
                            <div>
                              <p className="text-sm font-medium text-gray-900">{student.name}</p>
                              <p className="text-xs text-gray-600">{student.rollNo}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Progress Overview */}
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-gray-900">Project Progress</h4>
                        <span className="text-lg font-bold text-purple-600">{selectedGroupData.completion}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-purple-600 h-3 rounded-full"
                          style={{ width: `${selectedGroupData.completion}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Submissions Status */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Submissions Status</h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {Object.entries(selectedGroupData.submissions).map(([key, status]) => (
                          <div key={key} className="text-center p-3 bg-gray-50 rounded-lg">
                            <p className="text-xs font-medium text-gray-600 uppercase">{key}</p>
                            <div className={`mt-1 px-2 py-1 rounded text-xs font-medium ${
                              status === 'submitted' ? 'bg-green-100 text-green-800' :
                              status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-red-100 text-red-800'
                            }`}>
                              {status}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Reviews */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Reviews</h4>
                      <div className="space-y-3">
                        {Object.entries(selectedGroupData.reviews).map(([review, data]) => (
                          <div key={review} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div>
                              <span className="font-medium text-gray-900">{review.toUpperCase()}</span>
                              {data.completed && (
                                <span className="ml-2 text-sm text-gray-600">
                                  Completed on {data.date}
                                </span>
                              )}
                            </div>
                            <div className="flex items-center space-x-2">
                              {data.completed ? (
                                <>
                                  <span className="font-bold text-green-600">{data.marks}/100</span>
                                  <Button variant="outline" size="sm">
                                    <Icon name="edit" size={14} className="mr-1" />
                                    Edit
                                  </Button>
                                </>
                              ) : (
                                <Button size="sm">
                                  <Icon name="plus" size={14} className="mr-1" />
                                  Add Marks
                                </Button>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="flex space-x-3">
                      <Button>
                        <Icon name="external-link" size={16} className="mr-2" />
                        View GitHub
                      </Button>
                      <Button variant="secondary">
                        <Icon name="download" size={16} className="mr-2" />
                        Download Reports
                      </Button>
                      <Button variant="outline">
                        <Icon name="calendar" size={16} className="mr-2" />
                        Schedule Meeting
                      </Button>
                    </div>
                  </Card>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Feedback Tab */}
        {activeTab === 'feedback' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Provide Feedback</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Feedback</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Select Group
                    </label>
                    <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-purple-500">
                      {assignedGroups.map(group => (
                        <option key={group.groupId} value={group.groupId}>
                          {group.groupId} - {group.projectTitle}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Feedback Type
                    </label>
                    <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-purple-500">
                      <option>General Feedback</option>
                      <option>Review 1 (R1)</option>
                      <option>Review 2 (R2)</option>
                      <option>Review 3 (R3)</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Marks (if applicable)
                    </label>
                    <input
                      type="number"
                      min="0"
                      max="100"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-purple-500"
                      placeholder="Enter marks out of 100"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Feedback Message
                    </label>
                    <textarea
                      rows={4}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-purple-500"
                      placeholder="Enter your feedback..."
                    ></textarea>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Recommendations
                    </label>
                    <textarea
                      rows={3}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-purple-500"
                      placeholder="Any recommendations for improvement..."
                    ></textarea>
                  </div>
                  
                  <Button className="w-full">
                    <Icon name="send" size={16} className="mr-2" />
                    Send Feedback
                  </Button>
                </form>
              </Card>

              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Feedback</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-l-green-500 pl-4 py-2">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-gray-900">G002 - R1 Review</span>
                        <span className="text-sm text-gray-500">Jan 15</span>
                      </div>
                      <p className="text-sm text-gray-600">
                        Excellent implementation of AI algorithms. Consider optimizing for better performance.
                      </p>
                      <span className="text-sm font-medium text-green-600">Marks: 92/100</span>
                    </div>
                    
                    <div className="border-l-4 border-l-blue-500 pl-4 py-2">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-gray-900">G001 - R1 Review</span>
                        <span className="text-sm text-gray-500">Jan 15</span>
                      </div>
                      <p className="text-sm text-gray-600">
                        Good progress on IoT implementation. Improve documentation and add test cases.
                      </p>
                      <span className="text-sm font-medium text-blue-600">Marks: 85/100</span>
                    </div>
                    
                    <div className="border-l-4 border-l-yellow-500 pl-4 py-2">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-gray-900">G003 - R1 Review</span>
                        <span className="text-sm text-gray-500">Jan 5</span>
                      </div>
                      <p className="text-sm text-gray-600">
                        Blockchain implementation needs improvement. Focus on security aspects.
                      </p>
                      <span className="text-sm font-medium text-yellow-600">Marks: 72/100</span>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Feedback Templates</h3>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start">
                      <Icon name="copy" size={16} className="mr-2" />
                      Code Quality Template
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Icon name="copy" size={16} className="mr-2" />
                      Documentation Template
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Icon name="copy" size={16} className="mr-2" />
                      Presentation Template
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Icon name="copy" size={16} className="mr-2" />
                      General Improvement
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        )}

        {/* Monitoring Tab */}
        {activeTab === 'monitoring' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Progress Monitoring</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* GitHub Activity */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">GitHub Activity</h3>
                <div className="space-y-4">
                  {assignedGroups.map((group) => (
                    <div key={group.groupId} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-gray-900">{group.groupId}</span>
                        <Button variant="outline" size="sm">
                          <Icon name="external-link" size={14} className="mr-1" />
                          View Repo
                        </Button>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{group.projectTitle}</p>
                      <div className="flex items-center space-x-4 text-xs text-gray-500">
                        <span>Last commit: {group.lastUpdate}</span>
                        <span>•</span>
                        <span className="flex items-center">
                          <Icon name="git-commit" size={12} className="mr-1" />
                          Active
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Submission Timeline */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Deadlines</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-red-50 rounded-lg">
                    <Icon name="alert-circle" size={20} className="text-red-600" />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">G003 - Project Report Due</p>
                      <p className="text-xs text-gray-600">Due in 3 days (Jan 25)</p>
                    </div>
                    <Button variant="outline" size="sm">Remind</Button>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
                    <Icon name="clock" size={20} className="text-yellow-600" />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">All Groups - Demo Video</p>
                      <p className="text-xs text-gray-600">Due in 1 week (Jan 28)</p>
                    </div>
                    <Button variant="outline" size="sm">Remind</Button>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                    <Icon name="calendar" size={20} className="text-blue-600" />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">R2 Reviews Scheduled</p>
                      <p className="text-xs text-gray-600">Starting Jan 30</p>
                    </div>
                    <Button variant="outline" size="sm">View</Button>
                  </div>
                </div>
              </Card>
            </div>

            {/* Detailed Progress Chart */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Group Progress Comparison</h3>
              <div className="space-y-4">
                {assignedGroups.map((group) => (
                  <div key={group.groupId} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-900">
                        {group.groupId} - {group.projectTitle}
                      </span>
                      <span className="text-sm font-bold text-gray-900">{group.completion}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${
                          group.completion >= 75 ? 'bg-green-500' :
                          group.completion >= 50 ? 'bg-yellow-500' :
                          'bg-red-500'
                        }`}
                        style={{ width: `${group.completion}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        )}

        {/* Resources Tab */}
        {activeTab === 'resources' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Mentor Resources</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="p-6">
                <Icon name="book" size={24} className="text-blue-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Evaluation Guidelines</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Standard criteria and rubrics for project evaluation
                </p>
                <Button variant="outline" size="sm">
                  <Icon name="download" size={16} className="mr-2" />
                  Download
                </Button>
              </Card>

              <Card className="p-6">
                <Icon name="message-circle" size={24} className="text-green-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Feedback Templates</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Pre-written templates for common feedback scenarios
                </p>
                <Button variant="outline" size="sm">
                  <Icon name="eye" size={16} className="mr-2" />
                  View Templates
                </Button>
              </Card>

              <Card className="p-6">
                <Icon name="video" size={24} className="text-purple-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Training Videos</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Best practices for mentoring and evaluation
                </p>
                <Button variant="outline" size="sm">
                  <Icon name="play" size={16} className="mr-2" />
                  Watch
                </Button>
              </Card>

              <Card className="p-6">
                <Icon name="users" size={24} className="text-orange-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Mentor Community</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Connect with other mentors and share experiences
                </p>
                <Button variant="outline" size="sm">
                  <Icon name="external-link" size={16} className="mr-2" />
                  Join Forum
                </Button>
              </Card>

              <Card className="p-6">
                <Icon name="file-text" size={24} className="text-red-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Report Templates</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Generate comprehensive progress reports
                </p>
                <Button variant="outline" size="sm">
                  <Icon name="download" size={16} className="mr-2" />
                  Download
                </Button>
              </Card>

              <Card className="p-6">
                <Icon name="help-circle" size={24} className="text-gray-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Help & Support</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Get help with platform features and troubleshooting
                </p>
                <Button variant="outline" size="sm">
                  <Icon name="message-circle" size={16} className="mr-2" />
                  Contact Support
                </Button>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MentorDashboard;
