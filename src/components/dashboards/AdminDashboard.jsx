import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../../contexts/AuthContext';
import { Icon, Button, Card } from '../index';

const AdminDashboard = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedView, setSelectedView] = useState('table');

  // Mock data for admin overview
  const systemStats = {
    totalGroups: 45,
    totalStudents: 180,
    totalMentors: 15,
    totalEvaluators: 8,
    completedR1: 42,
    completedR2: 18,
    completedR3: 5,
    averageProgress: 68,
    groupsNeedingAttention: 8
  };

  // Mock groups data
  const allGroups = [
    {
      groupId: 'G001',
      projectTitle: 'Smart Campus IoT System',
      domain: 'Internet of Things',
      mentor: 'Dr. Priya Patel',
      students: ['Rahul Sharma', 'Priya Singh', 'Amit Kumar', 'Neha Patil'],
      class: 'TE-CS-A',
      completion: 65,
      r1Marks: 85,
      r2Marks: null,
      r3Marks: null,
      finalMarks: null,
      status: 'In Progress',
      lastUpdate: '2025-01-12',
      submissionsStatus: {
        ppt: 'submitted',
        report: 'pending',
        code: 'submitted',
        video: 'pending'
      }
    },
    {
      groupId: 'G002',
      projectTitle: 'AI-Powered Learning Assistant',
      domain: 'Artificial Intelligence',
      mentor: 'Dr. Priya Patel',
      students: ['Sneha Reddy', 'Vikash Yadav', 'Ananya Das'],
      class: 'TE-CS-B',
      completion: 78,
      r1Marks: 92,
      r2Marks: 88,
      r3Marks: null,
      finalMarks: null,
      status: 'In Progress',
      lastUpdate: '2025-01-14',
      submissionsStatus: {
        ppt: 'submitted',
        report: 'submitted',
        code: 'submitted',
        video: 'pending'
      }
    },
    {
      groupId: 'G003',
      projectTitle: 'Blockchain Voting System',
      domain: 'Blockchain',
      mentor: 'Dr. Anjali Singh',
      students: ['Arjun Mehta', 'Kavya Sharma', 'Rohit Gupta', 'Divya Nair'],
      class: 'TE-CS-A',
      completion: 52,
      r1Marks: 72,
      r2Marks: null,
      r3Marks: null,
      finalMarks: null,
      status: 'Needs Attention',
      lastUpdate: '2025-01-08',
      submissionsStatus: {
        ppt: 'submitted',
        report: 'pending',
        code: 'pending',
        video: 'pending'
      }
    }
  ];

  const tabs = [
    { id: 'overview', name: 'Overview', icon: 'home' },
    { id: 'groups', name: 'Groups Management', icon: 'users' },
    { id: 'users', name: 'User Management', icon: 'user-plus' },
    { id: 'reports', name: 'Reports & Analytics', icon: 'bar-chart' },
    { id: 'settings', name: 'System Settings', icon: 'settings' }
  ];

  const StatCard = ({ title, value, icon, color, trend }) => (
    <Card className="p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-3xl font-bold text-gray-900">{value}</p>
          {trend && (
            <div className={`flex items-center mt-1 text-sm ${
              trend.type === 'up' ? 'text-green-600' : 'text-red-600'
            }`}>
              <Icon name={trend.type === 'up' ? 'trending-up' : 'trending-down'} size={16} className="mr-1" />
              {trend.value}
            </div>
          )}
        </div>
        <div className={`w-12 h-12 bg-${color}-100 rounded-lg flex items-center justify-center`}>
          <Icon name={icon} size={24} className={`text-${color}-600`} />
        </div>
      </div>
    </Card>
  );

  const GroupTable = () => (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Group
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Project Title
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Mentor
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Progress
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              R1
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              R2
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              R3
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Final
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {allGroups.map((group) => (
            <tr key={group.groupId} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap">
                <div>
                  <div className="text-sm font-medium text-gray-900">{group.groupId}</div>
                  <div className="text-sm text-gray-500">{group.class}</div>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="text-sm font-medium text-gray-900">{group.projectTitle}</div>
                <div className="text-sm text-gray-500">{group.domain}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{group.mentor}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex-1 mr-2">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-purple-600 h-2 rounded-full"
                        style={{ width: `${group.completion}%` }}
                      ></div>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-gray-900">{group.completion}%</span>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`text-sm font-medium ${
                  group.r1Marks ? 'text-green-600' : 'text-gray-400'
                }`}>
                  {group.r1Marks || 'N/A'}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`text-sm font-medium ${
                  group.r2Marks ? 'text-green-600' : 'text-gray-400'
                }`}>
                  {group.r2Marks || 'N/A'}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`text-sm font-medium ${
                  group.r3Marks ? 'text-green-600' : 'text-gray-400'
                }`}>
                  {group.r3Marks || 'N/A'}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`text-sm font-medium ${
                  group.finalMarks ? 'text-green-600' : 'text-gray-400'
                }`}>
                  {group.finalMarks || 'N/A'}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                  group.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                  group.status === 'Needs Attention' ? 'bg-red-100 text-red-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {group.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <Icon name="eye" size={14} />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Icon name="edit" size={14} />
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-gray-600">Welcome back, {user.name}</p>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Icon name="download" size={16} className="mr-2" />
                Export All Data
              </Button>
              <Button size="sm">
                <Icon name="plus" size={16} className="mr-2" />
                Add New Group
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
            {/* System Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard
                title="Total Groups"
                value={systemStats.totalGroups}
                icon="users"
                color="blue"
                trend={{ type: 'up', value: '+5 this month' }}
              />
              <StatCard
                title="Total Students"
                value={systemStats.totalStudents}
                icon="user"
                color="green"
                trend={{ type: 'up', value: '+12 this month' }}
              />
              <StatCard
                title="Average Progress"
                value={`${systemStats.averageProgress}%`}
                icon="trending-up"
                color="purple"
                trend={{ type: 'up', value: '+3% this week' }}
              />
              <StatCard
                title="Need Attention"
                value={systemStats.groupsNeedingAttention}
                icon="alert-triangle"
                color="red"
                trend={{ type: 'down', value: '-2 this week' }}
              />
            </div>

            {/* Review Progress */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Review Progress</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">Review 1 (R1)</span>
                    <span className="text-sm font-bold text-green-600">
                      {systemStats.completedR1}/{systemStats.totalGroups}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: `${(systemStats.completedR1 / systemStats.totalGroups) * 100}%` }}
                    ></div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">Review 2 (R2)</span>
                    <span className="text-sm font-bold text-yellow-600">
                      {systemStats.completedR2}/{systemStats.totalGroups}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-yellow-500 h-2 rounded-full"
                      style={{ width: `${(systemStats.completedR2 / systemStats.totalGroups) * 100}%` }}
                    ></div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">Review 3 (R3)</span>
                    <span className="text-sm font-bold text-blue-600">
                      {systemStats.completedR3}/{systemStats.totalGroups}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: `${(systemStats.completedR3 / systemStats.totalGroups) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Icon name="user-plus" size={16} className="text-green-600" />
                    <div className="text-sm">
                      <p className="text-gray-900">5 new students registered</p>
                      <p className="text-gray-500">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="upload" size={16} className="text-blue-600" />
                    <div className="text-sm">
                      <p className="text-gray-900">G025 submitted final report</p>
                      <p className="text-gray-500">4 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="star" size={16} className="text-yellow-600" />
                    <div className="text-sm">
                      <p className="text-gray-900">R2 evaluations completed for 3 groups</p>
                      <p className="text-gray-500">6 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="alert-triangle" size={16} className="text-red-600" />
                    <div className="text-sm">
                      <p className="text-gray-900">2 groups missed submission deadline</p>
                      <p className="text-gray-500">1 day ago</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Button className="w-full justify-start">
                    <Icon name="plus" size={16} className="mr-2" />
                    Create New Group
                  </Button>
                  <Button variant="secondary" className="w-full justify-start">
                    <Icon name="user-plus" size={16} className="mr-2" />
                    Add Mentor
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Icon name="calendar" size={16} className="mr-2" />
                    Schedule Reviews
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Icon name="download" size={16} className="mr-2" />
                    Export Reports
                  </Button>
                </div>
              </Card>
            </div>

            {/* Groups Needing Attention */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Groups Needing Attention</h3>
                <Button variant="outline" size="sm">
                  <Icon name="filter" size={16} className="mr-2" />
                  Filter
                </Button>
              </div>
              <div className="space-y-3">
                {allGroups.filter(group => group.status === 'Needs Attention').map((group) => (
                  <div key={group.groupId} className="flex items-center justify-between p-4 bg-red-50 rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4">
                        <span className="font-medium text-gray-900">{group.groupId}</span>
                        <span className="text-gray-600">{group.projectTitle}</span>
                        <span className="text-sm text-gray-500">Progress: {group.completion}%</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        Mentor: {group.mentor} • Last update: {group.lastUpdate}
                      </p>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Icon name="message-circle" size={14} className="mr-1" />
                        Contact
                      </Button>
                      <Button size="sm">
                        <Icon name="eye" size={14} className="mr-1" />
                        Review
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        )}

        {/* Groups Management Tab */}
        {activeTab === 'groups' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Groups Management</h2>
              <div className="flex items-center space-x-4">
                <div className="flex rounded-lg border border-gray-300">
                  <button
                    onClick={() => setSelectedView('table')}
                    className={`px-4 py-2 text-sm font-medium ${
                      selectedView === 'table'
                        ? 'bg-purple-600 text-white'
                        : 'text-gray-700 hover:text-gray-900'
                    }`}
                  >
                    <Icon name="list" size={16} className="mr-2 inline" />
                    Table View
                  </button>
                  <button
                    onClick={() => setSelectedView('cards')}
                    className={`px-4 py-2 text-sm font-medium ${
                      selectedView === 'cards'
                        ? 'bg-purple-600 text-white'
                        : 'text-gray-700 hover:text-gray-900'
                    }`}
                  >
                    <Icon name="grid" size={16} className="mr-2 inline" />
                    Card View
                  </button>
                </div>
                <Button>
                  <Icon name="plus" size={16} className="mr-2" />
                  Add Group
                </Button>
              </div>
            </div>

            {/* Filters */}
            <Card className="p-4">
              <div className="flex flex-wrap items-center gap-4">
                <select className="border border-gray-300 rounded-md px-3 py-2 text-sm">
                  <option>All Classes</option>
                  <option>TE-CS-A</option>
                  <option>TE-CS-B</option>
                  <option>TE-IT-A</option>
                </select>
                <select className="border border-gray-300 rounded-md px-3 py-2 text-sm">
                  <option>All Mentors</option>
                  <option>Dr. Priya Patel</option>
                  <option>Dr. Anjali Singh</option>
                  <option>Prof. Rahul Kumar</option>
                </select>
                <select className="border border-gray-300 rounded-md px-3 py-2 text-sm">
                  <option>All Domains</option>
                  <option>Artificial Intelligence</option>
                  <option>Internet of Things</option>
                  <option>Blockchain</option>
                  <option>Web Development</option>
                </select>
                <select className="border border-gray-300 rounded-md px-3 py-2 text-sm">
                  <option>All Status</option>
                  <option>In Progress</option>
                  <option>Needs Attention</option>
                  <option>Completed</option>
                </select>
                <div className="flex-1 max-w-md">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search groups..."
                      className="w-full border border-gray-300 rounded-md px-3 py-2 pl-10 text-sm"
                    />
                    <Icon name="search" size={16} className="absolute left-3 top-2.5 text-gray-400" />
                  </div>
                </div>
              </div>
            </Card>

            {/* Groups Table/Cards */}
            {selectedView === 'table' ? (
              <Card className="overflow-hidden">
                <GroupTable />
              </Card>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {allGroups.map((group) => (
                  <Card key={group.groupId} className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-gray-900">{group.groupId}</h3>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        group.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                        group.status === 'Needs Attention' ? 'bg-red-100 text-red-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {group.status}
                      </span>
                    </div>
                    
                    <h4 className="font-medium text-gray-900 mb-2">{group.projectTitle}</h4>
                    <p className="text-sm text-gray-600 mb-3">{group.domain}</p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Mentor:</span>
                        <span className="text-gray-900">{group.mentor}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Students:</span>
                        <span className="text-gray-900">{group.students.length}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Progress:</span>
                        <span className="text-gray-900">{group.completion}%</span>
                      </div>
                    </div>
                    
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                      <div
                        className="bg-purple-600 h-2 rounded-full"
                        style={{ width: `${group.completion}%` }}
                      ></div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Icon name="eye" size={14} className="mr-1" />
                        View
                      </Button>
                      <Button size="sm" className="flex-1">
                        <Icon name="edit" size={14} className="mr-1" />
                        Edit
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>
        )}

        {/* User Management Tab */}
        {activeTab === 'users' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">User Management</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <StatCard
                title="Total Students"
                value={systemStats.totalStudents}
                icon="user"
                color="blue"
              />
              <StatCard
                title="Total Mentors"
                value={systemStats.totalMentors}
                icon="users"
                color="green"
              />
              <StatCard
                title="Total Evaluators"
                value={systemStats.totalEvaluators}
                icon="shield"
                color="purple"
              />
              <StatCard
                title="Active Users"
                value={systemStats.totalStudents + systemStats.totalMentors + systemStats.totalEvaluators}
                icon="user-check"
                color="orange"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Add New User</h3>
                </div>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-purple-500"
                        placeholder="Enter first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-purple-500"
                        placeholder="Enter last name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-purple-500"
                      placeholder="Enter email address"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                    <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-purple-500">
                      <option>Select role</option>
                      <option>Student</option>
                      <option>Mentor</option>
                      <option>Evaluator</option>
                      <option>Admin</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
                    <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-purple-500">
                      <option>Select department</option>
                      <option>Computer Science</option>
                      <option>Information Technology</option>
                      <option>Electronics</option>
                      <option>Mechanical</option>
                    </select>
                  </div>
                  
                  <Button className="w-full">
                    <Icon name="user-plus" size={16} className="mr-2" />
                    Add User
                  </Button>
                </form>
              </Card>

              <Card className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Bulk User Import</h3>
                </div>
                <div className="space-y-4">
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                    <Icon name="upload" size={32} className="mx-auto text-gray-400 mb-4" />
                    <p className="text-gray-600 mb-2">Upload CSV file with user data</p>
                    <p className="text-sm text-gray-500 mb-4">
                      Download template file for proper format
                    </p>
                    <div className="flex flex-col space-y-2">
                      <Button variant="outline">
                        <Icon name="download" size={16} className="mr-2" />
                        Download Template
                      </Button>
                      <Button>
                        <Icon name="upload" size={16} className="mr-2" />
                        Upload CSV
                      </Button>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-medium text-blue-900 mb-2">Import Guidelines</h4>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>• CSV should include: Name, Email, Role, Department</li>
                      <li>• Maximum 100 users per import</li>
                      <li>• Duplicate emails will be skipped</li>
                      <li>• Users will receive welcome emails</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        )}

        {/* Reports & Analytics Tab */}
        {activeTab === 'reports' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Reports & Analytics</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 text-center">
                <Icon name="file-text" size={32} className="text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Progress Report</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Comprehensive progress report for all groups
                </p>
                <Button className="w-full">
                  <Icon name="download" size={16} className="mr-2" />
                  Generate Report
                </Button>
              </Card>

              <Card className="p-6 text-center">
                <Icon name="bar-chart" size={32} className="text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Analytics Dashboard</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Visual analytics and performance metrics
                </p>
                <Button variant="secondary" className="w-full">
                  <Icon name="trending-up" size={16} className="mr-2" />
                  View Analytics
                </Button>
              </Card>

              <Card className="p-6 text-center">
                <Icon name="calendar" size={32} className="text-purple-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Schedule Report</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Review schedules and deadline tracking
                </p>
                <Button variant="outline" className="w-full">
                  <Icon name="calendar" size={16} className="mr-2" />
                  View Schedule
                </Button>
              </Card>
            </div>

            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Custom Report Builder</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Report Type</label>
                    <select className="w-full border border-gray-300 rounded-md px-3 py-2">
                      <option>Progress Summary</option>
                      <option>Detailed Performance</option>
                      <option>Mentor Feedback</option>
                      <option>Submission Status</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Date Range</label>
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="date"
                        className="border border-gray-300 rounded-md px-3 py-2"
                      />
                      <input
                        type="date"
                        className="border border-gray-300 rounded-md px-3 py-2"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Filter by</label>
                    <div className="space-y-2">
                      <select className="w-full border border-gray-300 rounded-md px-3 py-2">
                        <option>All Classes</option>
                        <option>TE-CS-A</option>
                        <option>TE-CS-B</option>
                      </select>
                      <select className="w-full border border-gray-300 rounded-md px-3 py-2">
                        <option>All Mentors</option>
                        <option>Dr. Priya Patel</option>
                        <option>Dr. Anjali Singh</option>
                      </select>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Include Fields</label>
                    <div className="space-y-2">
                      {[
                        'Group Information',
                        'Student Details',
                        'Project Progress',
                        'Review Marks',
                        'Submission Status',
                        'Mentor Feedback'
                      ].map((field) => (
                        <label key={field} className="flex items-center">
                          <input type="checkbox" className="mr-2" defaultChecked />
                          <span className="text-sm text-gray-700">{field}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Export Format</label>
                    <div className="flex space-x-4">
                      <label className="flex items-center">
                        <input type="radio" name="format" value="excel" className="mr-2" defaultChecked />
                        <span className="text-sm text-gray-700">Excel</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="format" value="pdf" className="mr-2" />
                        <span className="text-sm text-gray-700">PDF</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="format" value="csv" className="mr-2" />
                        <span className="text-sm text-gray-700">CSV</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end mt-6 space-x-3">
                <Button variant="outline">
                  <Icon name="eye" size={16} className="mr-2" />
                  Preview
                </Button>
                <Button>
                  <Icon name="download" size={16} className="mr-2" />
                  Generate & Download
                </Button>
              </div>
            </Card>
          </div>
        )}

        {/* System Settings Tab */}
        {activeTab === 'settings' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">System Settings</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">General Settings</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Academic Year
                    </label>
                    <select className="w-full border border-gray-300 rounded-md px-3 py-2">
                      <option>2024-2025</option>
                      <option>2025-2026</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Default Review Duration (days)
                    </label>
                    <input
                      type="number"
                      defaultValue={14}
                      className="w-full border border-gray-300 rounded-md px-3 py-2"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Maximum Group Size
                    </label>
                    <input
                      type="number"
                      defaultValue={4}
                      className="w-full border border-gray-300 rounded-md px-3 py-2"
                    />
                  </div>
                  
                  <div className="flex items-center">
                    <input type="checkbox" className="mr-2" defaultChecked />
                    <span className="text-sm text-gray-700">
                      Send email notifications for deadline reminders
                    </span>
                  </div>
                  
                  <div className="flex items-center">
                    <input type="checkbox" className="mr-2" defaultChecked />
                    <span className="text-sm text-gray-700">
                      Allow students to change project titles
                    </span>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Notification Settings</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Notification Template
                    </label>
                    <textarea
                      rows={4}
                      className="w-full border border-gray-300 rounded-md px-3 py-2"
                      defaultValue="Dear {student_name}, your project {project_title} has an upcoming deadline."
                    ></textarea>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Reminder Schedule
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" defaultChecked />
                        <span className="text-sm text-gray-700">7 days before deadline</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" defaultChecked />
                        <span className="text-sm text-gray-700">3 days before deadline</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" defaultChecked />
                        <span className="text-sm text-gray-700">1 day before deadline</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm text-gray-700">On deadline day</span>
                      </label>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Data Management</h3>
                <div className="space-y-4">
                  <Button variant="outline" className="w-full">
                    <Icon name="download" size={16} className="mr-2" />
                    Backup All Data
                  </Button>
                  
                  <Button variant="outline" className="w-full">
                    <Icon name="upload" size={16} className="mr-2" />
                    Restore from Backup
                  </Button>
                  
                  <Button variant="outline" className="w-full">
                    <Icon name="archive" size={16} className="mr-2" />
                    Archive Completed Projects
                  </Button>
                  
                  <div className="border-t pt-4">
                    <p className="text-sm text-gray-600 mb-2">Danger Zone</p>
                    <Button variant="outline" className="w-full text-red-600 border-red-300 hover:bg-red-50">
                      <Icon name="trash-2" size={16} className="mr-2" />
                      Reset All Data
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">System Information</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Version:</span>
                    <span className="text-sm font-medium text-gray-900">v2.1.0</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Last Updated:</span>
                    <span className="text-sm font-medium text-gray-900">Jan 15, 2025</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Total Storage:</span>
                    <span className="text-sm font-medium text-gray-900">2.4 GB</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Active Sessions:</span>
                    <span className="text-sm font-medium text-gray-900">23</span>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t">
                  <Button variant="outline" className="w-full">
                    <Icon name="refresh-cw" size={16} className="mr-2" />
                    Check for Updates
                  </Button>
                </div>
              </Card>
            </div>
            
            <div className="flex justify-end space-x-3">
              <Button variant="outline">
                <Icon name="x" size={16} className="mr-2" />
                Cancel
              </Button>
              <Button>
                <Icon name="save" size={16} className="mr-2" />
                Save Settings
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
