import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm, FormProvider } from 'react-hook-form';
import { Icon, Button, Card, Form } from '../components';
import { validateField, validateFile } from '../utils/formUtils';

const ContactUsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('general');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const contactCategories = [
    { id: 'general', name: 'General Inquiry', icon: 'message-circle' },
    { id: 'collaboration', name: 'Collaboration', icon: 'handshake' },
    { id: 'support', name: 'Technical Support', icon: 'settings' },
    { id: 'feedback', name: 'Feedback', icon: 'star' }
  ];

  const facultyCoordinators = [
    {
      name: 'Dr. Rajesh Kumar',
      title: 'PBL Program Director',
      specialization: 'AI/ML, Data Science',
      email: 'rajesh.kumar@mitadt.edu.in',
      phone: '+91 98765 43210',
      officeHours: 'Mon-Fri: 10:00 AM - 5:00 PM',
      image: '/api/placeholder/200/200',
      location: 'Innovation Center, Block A'
    },
    {
      name: 'Dr. Priya Sharma',
      title: 'Industry Relations Head',
      specialization: 'IoT, Embedded Systems',
      email: 'priya.sharma@mitadt.edu.in',
      phone: '+91 98765 43211',
      officeHours: 'Mon-Fri: 9:00 AM - 4:00 PM',
      image: '/api/placeholder/200/200',
      location: 'Industry Connect Hub, Block B'
    },
    {
      name: 'Prof. Amit Patel',
      title: 'Student Project Coordinator',
      specialization: 'Software Development, Full Stack',
      email: 'amit.patel@mitadt.edu.in',
      phone: '+91 98765 43212',
      officeHours: 'Mon-Fri: 11:00 AM - 6:00 PM',
      image: '/api/placeholder/200/200',
      location: 'Student Center, Block C'
    }
  ];

  const clubHeads = [
    {
      name: 'Arjun Mehta',
      title: 'Technical Club President',
      specialization: 'Web Development, Cloud Computing',
      email: 'arjun.mehta@student.mitadt.edu.in',
      year: 'Final Year, Computer Engineering',
      image: '/api/placeholder/150/150'
    },
    {
      name: 'Sneha Desai',
      title: 'Innovation Club Head',
      specialization: 'Product Design, UX/UI',
      email: 'sneha.desai@student.mitadt.edu.in',
      year: 'Third Year, Design Engineering',
      image: '/api/placeholder/150/150'
    }
  ];

  const faqData = [
    {
      question: 'How can I join a PBL project?',
      answer: 'You can join PBL projects by registering through our events page, contacting faculty coordinators, or submitting your project idea through our platform. We match students with projects based on their interests and skills.'
    },
    {
      question: 'What resources are available for project development?',
      answer: 'We provide access to state-of-the-art labs, software licenses, hardware components, industry mentors, and funding opportunities. Our resource library includes templates, guidelines, and technical documentation.'
    },
    {
      question: 'Can industry professionals collaborate with students?',
      answer: 'Yes! We actively encourage industry collaboration. Companies can sponsor projects, provide mentorship, offer internships, or participate in our advisory board. Contact our Industry Relations team for partnership opportunities.'
    },
    {
      question: 'How do I submit my completed project?',
      answer: 'Projects can be submitted through our online portal with required documentation including project report, source code, demonstration video, and evaluation forms. Detailed submission guidelines are available in our resources section.'
    },
    {
      question: 'What funding opportunities are available?',
      answer: 'We offer various funding sources including government grants, university research funds, industry sponsorships, and international collaboration programs. Check our Funding Opportunities page for current openings.'
    }
  ];

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Form submitted:', { ...data, category: selectedCategory });
      alert('Message sent successfully! We will get back to you soon.');
      reset();
    } catch (error) {
      alert('Error sending message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 leading-relaxed">
              Get in touch with our PBL team for support, collaboration, or any questions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-8">                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                
                {/* Category Selection */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    What can we help you with?
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {contactCategories.map((category) => (
                      <button
                        key={category.id}
                        type="button"
                        onClick={() => setSelectedCategory(category.id)}
                        className={`p-3 rounded-lg border text-left transition-all ${
                          selectedCategory === category.id
                            ? 'border-purple-500 bg-purple-50 text-purple-700'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="flex items-center">
                          <Icon name={category.icon} size={20} className="mr-2" />
                          <span className="text-sm font-medium">{category.name}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <FormProvider {...useForm()}>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <Form.Field
                        label="Full Name"
                        required
                        error={errors.name}
                      >
                        <Form.Input
                          {...register('name', { 
                            required: 'Name is required',
                            minLength: { value: 2, message: 'Name must be at least 2 characters' }
                          })}
                          placeholder="Your full name"
                          icon="user"
                        />
                      </Form.Field>

                      <Form.Field
                        label="Email Address"
                        required
                        error={errors.email}
                      >
                        <Form.Input
                          type="email"
                          {...register('email', { 
                            required: 'Email is required',
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: 'Invalid email address'
                            }
                          })}
                          placeholder="your.email@example.com"
                          icon="mail"
                        />
                      </Form.Field>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <Form.Field
                        label="Phone Number"
                        error={errors.phone}
                      >
                        <Form.Input
                          {...register('phone', {
                            pattern: {
                              value: /^[\+]?[0-9\s\-\(\)]{7,20}$/,
                              message: 'Invalid phone number'
                            }
                          })}
                          placeholder="+91 98765 43210"
                          icon="phone"
                        />
                      </Form.Field>

                      <Form.Field
                        label="Organization/Institution"
                        error={errors.organization}
                      >
                        <Form.Input
                          {...register('organization')}
                          placeholder="Your organization name"
                          icon="briefcase"
                        />
                      </Form.Field>
                    </div>

                    <Form.Field
                      label="Subject"
                      required
                      error={errors.subject}
                    >
                      <Form.Input
                        {...register('subject', { required: 'Subject is required' })}
                        placeholder="Brief subject of your message"
                        icon="message-square"
                      />
                    </Form.Field>

                    <Form.Field
                      label="Message"
                      required
                      error={errors.message}
                    >
                      <Form.Textarea
                        {...register('message', { 
                          required: 'Message is required',
                          minLength: { value: 10, message: 'Message must be at least 10 characters' }
                        })}
                        rows={5}
                        placeholder="Please provide details about your inquiry..."
                      />
                    </Form.Field>

                    <Form.Field
                      label="Attachments (Optional)"
                      error={errors.attachments}
                    >
                      <Form.EnhancedFileUpload
                        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                        multiple={true}
                        maxSize={5 * 1024 * 1024} // 5MB
                        maxFiles={3}
                        {...register('attachments')}
                      />
                    </Form.Field>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full"
                    >
                      {isSubmitting ? (
                        <>
                          <Icon name="loader" size={20} className="mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Icon name="send" size={20} className="mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </FormProvider>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Quick Contact Info */}              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Icon name="map-pin" size={20} className="text-purple-600 mr-3" />
                    <div>
                      <div className="font-medium">MIT ADTU Loni Kalbhor</div>
                      <div className="text-sm text-gray-600">Loni Kalbhor, Pune, Maharashtra 412201</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Icon name="phone" size={20} className="text-purple-600 mr-3" />
                    <div>
                      <div className="font-medium">+91 20 3084 4200</div>
                      <div className="text-sm text-gray-600">Main Campus</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Icon name="email" size={20} className="text-purple-600 mr-3" />
                    <div>
                      <div className="font-medium">pbl@mitadt.edu.in</div>
                      <div className="text-sm text-gray-600">PBL Program Office</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Icon name="globe-alt" size={20} className="text-purple-600 mr-3" />
                    <div>
                      <div className="font-medium">mituniversity.ac.in</div>
                      <div className="text-sm text-gray-600">Official Website</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Icon name="clock" size={20} className="text-purple-600 mr-3" />
                    <div>
                      <div className="font-medium">Mon - Fri: 9:00 AM - 6:00 PM</div>
                      <div className="text-sm text-gray-600">Saturday: 9:00 AM - 1:00 PM</div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Social Media */}
              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Follow Us</h3>                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                    <Icon name="facebook" size={16} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-blue-400 text-white rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                    <Icon name="twitter" size={16} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-blue-800 text-white rounded-full flex items-center justify-center hover:bg-blue-900 transition-colors">
                    <Icon name="linkedin" size={16} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
                    <Icon name="youtube" size={16} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors">
                    <Icon name="instagram" size={16} />
                  </a>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Faculty Coordinators */}
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
              Faculty Coordinators
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced faculty team is here to guide and support your PBL journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facultyCoordinators.map((faculty, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
                  <img
                    src={faculty.image}
                    alt={faculty.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{faculty.name}</h3>
                  <p className="text-purple-600 font-medium mb-2">{faculty.title}</p>
                  <p className="text-sm text-gray-600 mb-4">{faculty.specialization}</p>
                  
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center justify-center">
                      <Icon name="email" size={16} className="mr-2" />
                      <a href={`mailto:${faculty.email}`} className="hover:text-purple-600">
                        {faculty.email}
                      </a>
                    </div>
                    <div className="flex items-center justify-center">
                      <Icon name="phone" size={16} className="mr-2" />
                      <a href={`tel:${faculty.phone}`} className="hover:text-purple-600">
                        {faculty.phone}
                      </a>
                    </div>
                    <div className="flex items-center justify-center">
                      <Icon name="clock" size={16} className="mr-2" />
                      <span>{faculty.officeHours}</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <Icon name="map-pin" size={16} className="mr-2" />
                      <span>{faculty.location}</span>
                    </div>
                  </div>
                  
                  <Button size="sm" variant="outline" className="w-full">
                    <Icon name="message-circle" size={16} className="mr-2" />
                    Contact
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Club Heads */}
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
              Student Leaders
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with our student club heads for peer support and collaboration opportunities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {clubHeads.map((student, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
                  <img
                    src={student.image}
                    alt={student.name}
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{student.name}</h3>
                  <p className="text-orange-600 font-medium mb-2">{student.title}</p>
                  <p className="text-sm text-gray-600 mb-2">{student.year}</p>
                  <p className="text-sm text-gray-600 mb-4">{student.specialization}</p>
                  
                  <div className="flex items-center justify-center mb-4">
                    <Icon name="email" size={16} className="mr-2" />
                    <a href={`mailto:${student.email}`} className="text-sm text-gray-600 hover:text-orange-600">
                      {student.email}
                    </a>
                  </div>
                  
                  <Button size="sm" variant="outline" className="w-full">
                    <Icon name="users" size={16} className="mr-2" />
                    Connect
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find quick answers to common questions about our PBL program
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden">
                  <button
                    onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    <Icon 
                      name="ChevronDown" 
                      size={20} 
                      className={`text-gray-400 transition-transform ${
                        expandedFAQ === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {expandedFAQ === index && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Map */}
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
              Visit Our Campus
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Come and experience our state-of-the-art facilities and innovation labs
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 h-full">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Campus Information</h3>                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Address</h4>
                    <p className="text-gray-600">
                      MIT ADTU Loni Kalbhor,<br />
                      Loni Kalbhor, Pune - 412201,<br />
                      Maharashtra, India
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Transportation</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• 45 km from Pune Railway Station</li>
                      <li>• 35 km from Pune Airport</li>
                      <li>• Regular bus services from Pune</li>
                      <li>• Ample parking available on campus</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Campus Facilities</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Innovation Labs and Maker Spaces</li>
                      <li>• Advanced Research Centers</li>
                      <li>• Industry Collaboration Hubs</li>
                      <li>• Student Recreation Areas</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <Button variant="outline" size="lg" className="w-full">
                      <Icon name="download" size={20} className="mr-2" />
                      Download Campus Map
                    </Button>
                    <Button 
                      variant="primary" 
                      size="lg" 
                      className="w-full"
                      onClick={() => {
                        // Open Google Maps with MIT ADT University exact coordinates
                        const mapUrl = "https://www.google.com/maps/place/MIT+Art,+Design+and+Technology+University/@18.3977,73.9593,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2c06c8f4a7d6b:0x8b6b8f8b8f8b8f8b!8m2!3d18.3977!4d73.9593!16s%2Fm%2F0_6yfzs";
                        window.open(mapUrl, '_blank');
                      }}
                    >
                      <Icon name="navigation" size={20} className="mr-2" />
                      Get Directions (GPS)
                    </Button>
                    <Button 
                      variant="success" 
                      size="lg" 
                      className="w-full bg-green-600 hover:bg-green-700 text-white"
                      onClick={() => {
                        // Try to get user's current location and show directions
                        if (navigator.geolocation) {
                          navigator.geolocation.getCurrentPosition(
                            (position) => {
                              const { latitude, longitude } = position.coords;
                              const directionsUrl = `https://www.google.com/maps/dir/${latitude},${longitude}/MIT+Art,+Design+and+Technology+University,+Loni+Kalbhor,+Pune,+Maharashtra+412201/@18.3977,73.9593,12z`;
                              window.open(directionsUrl, '_blank');
                            },
                            (error) => {
                              // Fallback to regular directions
                              const directionsUrl = "https://www.google.com/maps/dir//MIT+Art,+Design+and+Technology+University,+Loni+Kalbhor,+Pune,+Maharashtra+412201";
                              window.open(directionsUrl, '_blank');
                            }
                          );
                        } else {
                          const directionsUrl = "https://www.google.com/maps/dir//MIT+Art,+Design+and+Technology+University,+Loni+Kalbhor,+Pune,+Maharashtra+412201";
                          window.open(directionsUrl, '_blank');
                        }
                      }}
                    >
                      <Icon name="map-pin" size={20} className="mr-2" />
                      Get Live Directions from My Location
                    </Button>
                    <Button 
                      variant="secondary" 
                      size="lg" 
                      className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                      onClick={() => window.open('https://www.iviewd.com/mitadt/', '_blank')}
                    >
                      <Icon name="eye" size={20} className="mr-2" />
                      Virtual Campus Tour (360°)
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="hidden lg:block"
            >
              <Card className="p-4 h-full">
                <div className="bg-gray-200 rounded-lg h-full min-h-[400px] flex items-center justify-center">                  <div className="text-center text-gray-500">
                    <Icon name="map-pin" size={40} className="mx-auto mb-4 text-purple-600" />
                    <p className="text-lg font-medium">Interactive Campus Map</p>
                    <p className="text-sm">Google Maps integration would be placed here</p>
                    <Button variant="outline" className="mt-4">
                      <Icon name="external-link" size={16} className="mr-2" />
                      Open in Google Maps
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUsPage;
