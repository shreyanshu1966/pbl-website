import React from 'react';
import { motion } from 'framer-motion';
import { Icon, Card } from '../components';

const ManagementTeamPage = () => {
  const managementTeam = [
    {
      name: 'Dr. Mangesh Karad',
      title: 'Executive President & Vice-Chancellor',
      message: 'MIT Art, Design & Technology University, Pune is a place for aspiring Innovators Entrepreneurs. The University in a short span has been recognized as a distinctive university delivering academic brilliance with the vast and influential network, extensive research, and thoughtful approach, we have been instrumental in designing and customizing new \'out of the box\' specialized UG programs, superspecialized PG programs, and initiatives in keeping with the prevailing employment trends and industry demands. Engineering Education at the university along with the usual engineering branches offers myriads of specializations like AI, Blockchain, Cybersecurity & Forensics Cloud Computing, Aerospace, Robotics, Bioengineering, Food Technology, and Marine Engineering and Nautical Science, to name a few.',
      image: '/ManagementTeamPage/Vice-Chancellor.png'
    },
    {
      name: 'Dr. Vipul Dalal',
      title: 'Director - MIT School of Computing',
      message: 'Problem-Based Learning (PBL) develops critical thinking and problem-solving skills. PBL immerses students in real-world challenges, requiring them to apply theoretical knowledge to practical scenarios. This approach fosters a deeper understanding of core concepts, as students must analyze problems, research solutions, collaborate with peers, and iterate on their ideas. As a result, they become adept at tackling complex, unstructured problems, a crucial skill in the ever-evolving landscape of technology and engineering. This hands-on experience also enhances their adaptability and innovation, preparing them for the dynamic demands of the industry.',
      image: '/ManagementTeamPage/Director.png'
    },
    {
      name: 'Dr. Rajneeshkaur Sachdeo',
      title: 'Dean - MIT School of Computing',
      message: 'School of Computing is dedicated to impart knowledge in the field of AIML, IoT, Cyber-security, Block-chain, Cloud Computing, Data Science and Analytics, 3D printing, etc. along with Holistic and Multidisciplinary learning. We would like to nurture new generation of technocrat with sound knowledge of core and contemporary concepts of \'Computation and Informatics, who are capable to make difference in the society. Our learning activities are diversified which include classroom teaching, project based learning, research and consultancy.',
      image: '/ManagementTeamPage/Dean.png'
    },
    {
      name: 'Dr. Ramachandra Pujeri',
      title: 'Pro Vice Chancellor - MIT ADT University',
      message: 'As an established professional institution, we are aware of the fact that our responsibility does not cease by just producing the graduates, but help them to get suitable employment during their study tenure. To enhance their employability, we arrange addition support to empower them with latest technological knowledge. Cisco, AWS, Apple, Intel and Microsoft certification centers are catering training to students to achieve this objective. As a learning organization we are focused on continuous improvement – responsive to community needs and making useful contributions to education, knowledge and the society at large.',
      image: '/ManagementTeamPage/Pro Vice Chancellor.png'
    }
  ];

  const departmentHeads = [
    { name: 'Dr. Ganesh Pathak', title: 'Head - CSE', image: '/ManagementTeamPage/Dr.Ganesh Pathak.png' },
    { name: 'Dr. Shraddha Phansalkar', title: 'Head - CSE', image: '/ManagementTeamPage/Dr. Shraddha Phansalkar.png' },
    { name: 'Dr. Prashant Dhotre', title: 'Head - CSE', image: '/ManagementTeamPage/Dr. Prashant Dhotre.png' },
    { name: 'Dr. Rekha Sugandhi', title: 'Head - IT', image: '/ManagementTeamPage/Dr. Rekha Sugandhi.png' },
    { name: 'Dr. Jayashree Prasad', title: 'Head - CSE', image: '/ManagementTeamPage/Dr. Jayashree Prasad.png' }
  ];

  const coordinators = [
    { name: 'Prof. Suresh Kapare', title: 'Chief Coordinator - MIT SOC', image: '/ManagementTeamPage/Prof. Suresh Kapare.png' },
    { name: 'Prof. Ashvini Jadhav', title: 'Coordinator - IT', image: '/ManagementTeamPage/Prof. Ashvini Jadhav.png' },
    { name: 'Dr. Shafi Pathan', title: 'Chief Coordinator - CSE', image: '/ManagementTeamPage/Dr. Shafi Pathan.png' }
  ];

  const contactInfo = [
    {
      type: 'Address',
      details: 'MIT Art, Design & Technology University, Loni Kalbhor, Pune - 412201, Maharashtra, India',
      icon: 'map-pin'
    },
    {
      type: 'Phone',
      details: '+91 20 6792 5000',
      icon: 'phone'
    },
    {
      type: 'Email',
      details: 'info@mituniversity.ac.in',
      icon: 'email'
    },
    {
      type: 'Website',
      details: 'www.mituniversity.ac.in',
      icon: 'globe-alt'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gray-50 py-16 border-b-4 border-gray-200">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Management Team
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed text-gray-600">
              Meet the leadership driving innovation and excellence in Project-Based Learning at MIT ADT University
            </p>
          </motion.div>
        </div>
      </section>

      {/* PBL Team Structure */}
      <section className="py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">PBL Team Structure</h2>
          </motion.div>
          
          <div className="max-w-6xl mx-auto">
            <Card className="p-8 bg-white">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Left side - Text content */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="text-xl font-semibold text-purple-800 mb-3">Class Leads</h3>
                    <p className="text-gray-700">Faculty who is managing Guides and student groups of allocated classes.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-purple-800 mb-3">Specialization Lead</h3>
                    <p className="text-gray-700">Faculty who is Managing Class Leads under respective specialization. He/She makes sure about the quality and problem statements under their specialization.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-purple-800 mb-3">Program Head</h3>
                    <p className="text-gray-700">Faculty who is heading specialization.</p>
                  </div>
                </motion.div>
                
                {/* Right side - Specialization image */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="flex justify-center"
                >
                  <img
                    src="/Specialization.png"
                    alt="PBL Specialization Structure"
                    className="w-full max-w-md h-auto rounded-lg shadow-lg"
                  />
                </motion.div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-white">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-gray-900 mb-12"
          >
            Leadership Team
          </motion.h2>
          
          {/* Executive President Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <Card className="overflow-hidden bg-white shadow-lg border-0">
              <div className="p-12">
                <div className="flex flex-col lg:flex-row gap-10 items-start">
                  <div className="flex-shrink-0">
                    <img
                      src={managementTeam[0].image}
                      alt={managementTeam[0].name}
                      className="w-56 h-56 rounded-lg object-cover shadow-md"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <div className="mb-8">
                      <h3 className="text-4xl font-bold text-gray-900 mb-3 tracking-tight">
                        {managementTeam[0].name}
                      </h3>
                      <p className="text-xl text-gray-600 font-medium mb-6">
                        {managementTeam[0].title}
                      </p>
                      <div className="w-16 h-1 bg-purple-600"></div>
                    </div>
                    
                    <div className="prose prose-lg max-w-none">
                      <p className="text-gray-700 leading-relaxed text-lg">
                        {managementTeam[0].message}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Other Leadership Team Members */}
          <div className="space-y-12">
            {managementTeam.slice(1).map((member, index) => (
              <motion.div
                key={index + 1}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-32 h-32 rounded-full object-cover border-4 border-purple-200"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                      <p className="text-lg text-purple-700 font-semibold mb-4">{member.title}</p>
                      <p className="text-gray-700 leading-relaxed">{member.message}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Department Heads */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-gray-900 mb-12"
          >
            Department Heads
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departmentHeads.map((head, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
                  <img
                    src={head.image}
                    alt={head.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-3 border-purple-200"
                  />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{head.name}</h3>
                  <p className="text-purple-700 font-semibold">{head.title}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coordinators */}
      <section className="py-16 bg-white">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-gray-900 mb-12"
          >
            Coordinators
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coordinators.map((coordinator, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
                  <img
                    src={coordinator.image}
                    alt={coordinator.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-3 border-purple-200"
                  />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{coordinator.name}</h3>
                  <p className="text-purple-700 font-semibold">{coordinator.title}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-gray-900 mb-12"
          >
            Contact Us
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={info.icon} size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{info.type}</h3>
                  <p className="text-gray-700 text-sm">{info.details}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManagementTeamPage;
