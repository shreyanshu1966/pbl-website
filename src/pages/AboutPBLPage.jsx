import React from 'react';
import { motion } from 'framer-motion';
import { Icon, Button, Card } from '../components';

const AboutPBLPage = () => {
  const benefits = [
    {
      icon: 'lightbulb',
      title: 'Innovation-Driven Learning',
      description: 'Develop creative solutions to real-world problems through hands-on project experience.'
    },
    {
      icon: 'users',
      title: 'Collaborative Environment',
      description: 'Work in multidisciplinary teams to build communication and leadership skills.'
    },
    {
      icon: 'target',
      title: 'Industry-Relevant Skills',
      description: 'Gain practical experience with current technologies and industry best practices.'
    },
    {
      icon: 'award',
      title: 'Research Excellence',
      description: 'Contribute to cutting-edge research with publication and patent opportunities.'
    },
    {
      icon: 'globe-alt',
      title: 'Global Impact',
      description: 'Address UN Sustainable Development Goals through meaningful project work.'
    },
    {
      icon: 'briefcase',
      title: 'Career Readiness',
      description: 'Build a portfolio of projects that demonstrate your capabilities to employers.'
    }
  ];

  const implementationStages = [
    {
      phase: 'Phase 1',
      title: 'Problem Identification',
      description: 'Students identify real-world problems and define project scope with faculty guidance.',
      timeline: 'Weeks 1-2'
    },
    {
      phase: 'Phase 2',
      title: 'Research & Planning',
      description: 'Comprehensive literature review, technology assessment, and project planning.',
      timeline: 'Weeks 3-4'
    },
    {
      phase: 'Phase 3',
      title: 'Design & Development',
      description: 'Iterative design process with regular feedback and milestone evaluations.',
      timeline: 'Weeks 5-12'
    },
    {
      phase: 'Phase 4',
      title: 'Testing & Validation',
      description: 'Rigorous testing, validation, and refinement of project deliverables.',
      timeline: 'Weeks 13-14'
    },
    {
      phase: 'Phase 5',
      title: 'Presentation & Evaluation',
      description: 'Final presentations, peer review, and comprehensive project evaluation.',
      timeline: 'Weeks 15-16'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <section className="bg-gray-50 py-16 border-b-4 border-gray-200">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              About Project-Based Learning
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed text-gray-600">
              Transforming education through real-world problem solving and innovation at MIT ADT University
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction to PBL */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What is Project-Based Learning?
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Project-Based Learning (PBL) is an innovative educational approach that engages students in 
                  authentic, real-world challenges. Rather than traditional lecture-based learning, PBL empowers 
                  students to drive their own learning through meaningful project work.
                </p>
                <p>
                  At MIT ADT University, our PBL methodology combines cutting-edge technology, industry collaboration, 
                  and academic rigor to prepare students for the challenges of tomorrow. Students work on projects 
                  that address real societal needs while developing critical thinking, collaboration, and leadership skills.
                </p>
                <p>
                  Our approach integrates the United Nations Sustainable Development Goals (SDGs) into project work, 
                  ensuring that student innovations contribute to global solutions for pressing challenges like 
                  climate change, healthcare, education, and economic development.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-blue-50 rounded-lg p-8">
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 bg-purple-800 rounded-full flex items-center justify-center mx-auto">
                    <Icon name="lightbulb" size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">PBL Methodology</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-white rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-purple-800">500+</div>
                      <div className="text-gray-600">Projects</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-blue-800">50+</div>
                      <div className="text-gray-600">Industry Partners</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-red-600">25+</div>
                      <div className="text-gray-600">Patents Filed</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-blue-600">100+</div>
                      <div className="text-gray-600">Publications</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Objectives & Benefits */}
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
              Objectives & Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our PBL approach delivers measurable outcomes that prepare students for successful careers 
              while contributing to societal advancement.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <div className="text-center p-6">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#761b89'}}>
                      <Icon name={benefit.icon} size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Framework */}
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
              Implementation Framework
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Our structured approach ensures consistent quality and measurable outcomes across all PBL initiatives.
            </p>
            <Button variant="outline" size="lg" className="mb-8">
              <Icon name="download" size={20} className="mr-2" />
              Download Framework PDF
            </Button>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full rounded-full hidden md:block z-10" style={{backgroundColor: '#761b89'}}></div>
            
            <div className="space-y-12">
              {implementationStages.map((stage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="flex-1">
                    <Card className="p-8 hover:shadow-lg transition-shadow duration-300">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold mr-4" style={{backgroundColor: '#761b89'}}>
                          {index + 1}
                        </div>
                        <div>
                          <div className="text-sm font-medium text-purple-800">{stage.phase}</div>
                          <div className="text-xs text-gray-500">{stage.timeline}</div>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{stage.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{stage.description}</p>
                    </Card>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="hidden md:block w-6 h-6 bg-white border-4 border-purple-800 rounded-full relative z-20 shadow-md"></div>
                  
                  <div className="flex-1 hidden md:block"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPBLPage;
