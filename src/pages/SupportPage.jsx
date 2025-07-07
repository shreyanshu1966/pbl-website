import React from 'react';
import { motion } from 'framer-motion';
import { Icon, Button, Card } from '../components';
import { Link } from 'react-router-dom';

const SupportPage = () => {
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
              Support Center
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 leading-relaxed">
              Get help with your PBL projects and access technical support resources
            </p>
          </motion.div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 h-full flex flex-col items-center text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-6">
                  <Icon name="message-circle" size={32} className="text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Live Chat Support</h3>
                <p className="text-gray-600 mb-6">
                  Chat with our support team for immediate assistance with your questions.
                </p>
                <Button className="mt-auto">
                  <Icon name="message" size={18} className="mr-2" />
                  Start Chat
                </Button>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 h-full flex flex-col items-center text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mb-6">
                  <Icon name="email" size={32} className="text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Email Support</h3>
                <p className="text-gray-600 mb-6">
                  Send us an email with your question and we'll respond within 24 hours.
                </p>
                <Button variant="secondary" className="mt-auto">
                  <Icon name="send" size={18} className="mr-2" />
                  Email Support
                </Button>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 h-full flex flex-col items-center text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
                  <Icon name="phone" size={32} className="text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Phone Support</h3>
                <p className="text-gray-600 mb-6">
                  Call our support line for direct assistance with complex issues.
                </p>
                <Button variant="outline" className="mt-auto">
                  <Icon name="phone" size={18} className="mr-2" />
                  +91 20 2292 0000
                </Button>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Common Issues */}
      <section className="py-16 bg-gray-100">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Common Issues & Quick Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find quick answers to frequently encountered problems
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Project Submission Issues",
                content: "If you're having trouble submitting your project, ensure all required fields are filled and files are under the size limit. Try using a different browser if problems persist.",
                icon: "upload"
              },
              {
                title: "Account Access Problems",
                content: "For login issues, try resetting your password. If you still can't access your account, contact the IT department at it.support@mitadt.edu.in.",
                icon: "user-x"
              },
              {
                title: "Missing Project Resources",
                content: "Resources may be temporarily unavailable during maintenance. Check back in a few hours or contact your faculty coordinator.",
                icon: "file-question"
              },
              {
                title: "Collaboration Tools Not Working",
                content: "Ensure you have the latest browser version. Clear your cache and cookies, then restart your browser before trying again.",
                icon: "users"
              }
            ].map((issue, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mr-4 flex-shrink-0">
                      <Icon name={issue.icon} size={24} className="text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">{issue.title}</h3>
                      <p className="text-gray-600">{issue.content}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/faqs">
              <Button size="lg">
                <Icon name="help-circle" size={20} className="mr-2" />
                View All FAQs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Technical Support */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Technical Support</h2>
              <p className="text-xl text-gray-600">
                Get specialized help for technical issues
              </p>
            </motion.div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-3">IT Help Desk</h3>
                  <p className="text-gray-600 mb-4">Monday-Friday: 9am-5pm</p>
                  <div className="flex items-center text-gray-700 mb-2">
                    <Icon name="email" size={16} className="mr-2" />
                    <span>it.helpdesk@mitadt.edu.in</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Icon name="phone" size={16} className="mr-2" />
                    <span>+91 20 2292 1234</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-3">PBL Lab Support</h3>
                  <p className="text-gray-600 mb-4">Monday-Saturday: 10am-6pm</p>
                  <div className="flex items-center text-gray-700 mb-2">
                    <Icon name="email" size={16} className="mr-2" />
                    <span>pbl.support@mitadt.edu.in</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Icon name="map-pin" size={16} className="mr-2" />
                    <span>PBL Center, 2nd Floor</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-3">Emergency Support</h3>
                  <p className="text-gray-600 mb-4">For urgent technical issues</p>
                  <div className="flex items-center text-gray-700 mb-2">
                    <Icon name="phone" size={16} className="mr-2" />
                    <span>+91 20 2292 9999</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    Available 24/7 for critical issues only
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-purple-600 text-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Still need help?</h2>
            <p className="text-xl mb-8">
              Our dedicated support team is ready to assist you with any questions or issues you may have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="bg-white text-purple-600 hover:bg-gray-100 min-w-[200px]">
                  <Icon name="message-circle" size={20} className="mr-2" />
                  Contact Us
                </Button>
              </Link>
              <Link to="/resources">
                <Button variant="outline" className="border-white text-white hover:bg-purple-700 min-w-[200px]">
                  <Icon name="file-text" size={20} className="mr-2" />
                  View Resources
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupportPage;
