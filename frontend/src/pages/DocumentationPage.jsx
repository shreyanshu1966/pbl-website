import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Icon, Button, Card } from '../components';

const DocumentationPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const documentationCategories = [
    { id: 'all', name: 'All Documentation' },
    { id: 'guides', name: 'User Guides' },
    { id: 'api', name: 'API Documentation' },
    { id: 'tutorials', name: 'Tutorials' },
    { id: 'examples', name: 'Code Examples' }
  ];

  const documentationItems = [
    {
      id: 1,
      title: 'Getting Started with PBL',
      category: 'guides',
      description: 'A comprehensive guide to understanding Project Based Learning methodology and implementation at MIT ADT University.',
      icon: 'book',
      downloadUrl: '#',
      updatedAt: '2025-06-01'
    },
    {
      id: 2,
      title: 'PBL Project Lifecycle',
      category: 'guides',
      description: 'Learn about the complete project lifecycle from ideation to final presentation and assessment.',
      icon: 'loader',
      downloadUrl: '#',
      updatedAt: '2025-06-05'
    },
    {
      id: 3,
      title: 'Assessment Framework',
      category: 'guides',
      description: 'Detailed explanation of how projects are evaluated and graded with rubrics and examples.',
      icon: 'check',
      downloadUrl: '#',
      updatedAt: '2025-05-20'
    },
    {
      id: 4,
      title: 'Project Management API',
      category: 'api',
      description: 'Documentation for the REST API used to manage PBL projects and resources.',
      icon: 'code',
      downloadUrl: '#',
      updatedAt: '2025-06-10'
    },
    {
      id: 5,
      title: 'Integrating External Tools',
      category: 'api',
      description: 'Learn how to integrate external tools and services with the PBL platform.',
      icon: 'external-link',
      downloadUrl: '#',
      updatedAt: '2025-05-28'
    },
    {
      id: 6,
      title: 'Creating Your First Project',
      category: 'tutorials',
      description: 'Step-by-step tutorial for creating and setting up your first PBL project.',
      icon: 'file-text',
      downloadUrl: '#',
      updatedAt: '2025-06-08'
    },
    {
      id: 7,
      title: 'Team Collaboration Guide',
      category: 'tutorials',
      description: 'Best practices and tools for effective team collaboration in PBL projects.',
      icon: 'users',
      downloadUrl: '#',
      updatedAt: '2025-05-25'
    },
    {
      id: 8,
      title: 'IoT Project Example',
      category: 'examples',
      description: 'Complete source code and documentation for a sample IoT-based PBL project.',
      icon: 'smartphone',
      downloadUrl: '#',
      updatedAt: '2025-06-12'
    },
    {
      id: 9,
      title: 'Web Application Example',
      category: 'examples',
      description: 'Source code and architecture documentation for a web application PBL project.',
      icon: 'globe',
      downloadUrl: '#',
      updatedAt: '2025-06-15'
    }
  ];

  // Filter documentation based on search and category
  const filteredDocumentation = documentationItems.filter(item => {
    const matchesSearch = searchTerm === '' || 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

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
              Documentation
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 leading-relaxed">
              Comprehensive guides, tutorials, and resources to support your PBL journey
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          {/* Search and Filters */}
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-8">
            <div className="relative flex-1 max-w-md">
              <Icon name="search" size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search documentation..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {documentationCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeCategory === category.id
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Documentation Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDocumentation.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                        <Icon name={item.icon} size={24} className="text-purple-600" />
                      </div>
                    </div>
                    <span className="text-xs text-gray-500">
                      Updated: {new Date(item.updatedAt).toLocaleDateString()}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 flex-grow">{item.description}</p>

                  <div className="mt-auto pt-4 flex gap-2">
                    <Button size="sm" className="flex-1">
                      <Icon name="download" size={16} className="mr-2" />
                      Download
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredDocumentation.length === 0 && (
            <div className="text-center py-16">
              <Icon name="search" size={64} className="mx-auto text-gray-300 mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No documentation found</h3>
              <p className="text-gray-500">
                Try adjusting your search terms or category filter
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default DocumentationPage;
