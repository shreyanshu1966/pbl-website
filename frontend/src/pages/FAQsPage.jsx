import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '../components';

const FAQItem = ({ question, answer, isOpen, toggleOpen }) => (
  <div className="border-b border-gray-200 py-4">
    <button 
      onClick={toggleOpen}
      className="flex justify-between items-center w-full text-left font-medium text-gray-900"
    >
      <span className="text-lg pr-8">{question}</span>
      <Icon 
        name={isOpen ? "chevron-up" : "chevron-down"} 
        size={20} 
        className="text-purple-600 flex-shrink-0"
      />
    </button>
    <motion.div 
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden"
    >
      {isOpen && (
        <div className="text-gray-600 pt-2 pb-1">
          {answer}
        </div>
      )}
    </motion.div>
  </div>
);

const FAQsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('general');
  const [openItems, setOpenItems] = useState({});

  const categories = [
    { id: 'general', name: 'General' },
    { id: 'students', name: 'For Students' },
    { id: 'faculty', name: 'For Faculty' },
    { id: 'industry', name: 'Industry Partners' },
    { id: 'technical', name: 'Technical' }
  ];

  const faqs = {
    general: [
      {
        id: 'g1',
        question: 'What is Project-Based Learning (PBL)?',
        answer: 'Project-Based Learning (PBL) is an instructional methodology that encourages students to learn and apply knowledge and skills through engaging projects set around challenges and problems they may face in the real world. At MIT ADT University, we implement PBL as a core teaching method to ensure students gain practical experience alongside theoretical knowledge.'
      },
      {
        id: 'g2',
        question: 'How does PBL differ from traditional learning?',
        answer: 'Unlike traditional learning that focuses on lectures and exams, PBL places students in active roles as problem-solvers, decision-makers, and investigators. Students work on extended projects that may span weeks or months, addressing complex questions or challenges. This approach develops critical thinking, collaboration, and communication skills that are essential for career readiness.'
      },
      {
        id: 'g3',
        question: 'What are the benefits of Project-Based Learning?',
        answer: 'PBL offers numerous benefits including: enhanced critical thinking and problem-solving skills, improved collaboration and communication, increased student engagement and motivation, better retention of knowledge, development of real-world skills and portfolio building, and preparation for modern workplace demands through hands-on experience with emerging technologies and methodologies.'
      },
      {
        id: 'g4',
        question: 'Is PBL suitable for all disciplines?',
        answer: 'Yes, PBL can be adapted to virtually any academic discipline. At MIT ADT University, we implement PBL across engineering, computer science, business, design, arts, and many other fields. The methodology is flexible enough to address discipline-specific competencies while building transferable skills applicable across various careers.'
      }
    ],
    students: [
      {
        id: 's1',
        question: 'How do I select a project topic?',
        answer: 'Project topics can be selected through multiple channels: faculty-proposed projects aligned with course objectives, your own project ideas (subject to faculty approval), industry-sponsored projects addressing real business challenges, or community service projects addressing local needs. We encourage selecting topics that align with your career interests and passion areas.'
      },
      {
        id: 's2',
        question: 'How are projects evaluated and graded?',
        answer: 'Projects are evaluated through a comprehensive rubric that includes: quality of final deliverables, process documentation, individual and team contributions, presentation and communication skills, innovation and creativity, and application of course concepts. Multiple assessment points throughout the project allow for feedback and improvement along the way.'
      },
      {
        id: 's3',
        question: 'Can I include my PBL projects in my portfolio?',
        answer: 'Absolutely! We strongly encourage students to document their projects thoroughly and include them in professional portfolios. Many students have leveraged their PBL projects during job interviews to demonstrate their skills and experience. The MIT ADT PBL platform allows you to create shareable project showcases with appropriate permissions.'
      },
      {
        id: 's4',
        question: 'How are teams formed for group projects?',
        answer: 'Team formation varies by course and project requirements. Some projects use faculty-assigned teams to ensure diversity of skills and perspectives, while others allow student-selected teams. Multidisciplinary projects often involve intentional team construction to bring together students from different programs. Typical team size ranges from 3-6 students depending on project scope.'
      }
    ],
    faculty: [
      {
        id: 'f1',
        question: 'How can I implement PBL in my courses?',
        answer: 'Faculty interested in implementing PBL can access our comprehensive training resources through the Faculty Development Portal. We offer workshops, template syllabi, assessment rubrics, and one-on-one coaching. The PBL Center also provides support for project design, community partner connections, and technology resources to facilitate successful implementation.'
      },
      {
        id: 'f2',
        question: 'What resources are available to support PBL instruction?',
        answer: 'MIT ADT provides extensive resources including dedicated PBL classrooms and labs, specialized equipment checkout, technology platforms for project management and collaboration, teaching assistants for larger PBL courses, and funding for materials and field trips. Faculty can also request specialized training for emerging technologies relevant to their course projects.'
      },
      {
        id: 'f3',
        question: 'How can I assess individual contributions in group projects?',
        answer: 'We recommend a multi-faceted approach including: regular project milestones with individual components, peer evaluations using our calibrated assessment tool, individual reflection assignments, observational notes during team meetings, and one-on-one check-ins. Our Project Management Platform also tracks individual contributions to collaborative documents and code repositories.'
      }
    ],
    industry: [
      {
        id: 'i1',
        question: 'How can our company propose a project for students?',
        answer: 'Industry partners can propose projects through our Industry Collaboration Portal. Projects should include a clear problem statement, desired outcomes, available resources, and timeline expectations. Our Industry Liaison Office will help match your project with appropriate courses and student teams based on skill requirements and learning objectives.'
      },
      {
        id: 'i2',
        question: 'What is the time commitment for industry project sponsors?',
        answer: 'Typical industry sponsorship requires 1-2 hours per week for updates and feedback, with more intensive involvement during project kickoff and final presentations. Sponsors designate a primary point of contact who interfaces with the student team and faculty advisor. We work to ensure the partnership adds value to your organization while respecting your time constraints.'
      },
      {
        id: 'i3',
        question: 'Who owns the intellectual property created during student projects?',
        answer: 'Intellectual property arrangements are specified in the project agreement before work begins. Options include: company retention of all IP with appropriate student recognition, shared licensing arrangements, or open-source licensing of project outputs. Our legal team works with sponsors to create agreements that protect company interests while supporting educational objectives.'
      }
    ],
    technical: [
      {
        id: 't1',
        question: 'What technology platforms does MIT ADT use to support PBL?',
        answer: 'We utilize an integrated ecosystem including: our custom PBL Management Portal for project documentation and assessment, industry-standard collaboration tools like GitHub, Figma, and Miro, learning management system integration, and specialized technology resources based on project requirements like cloud computing platforms, IoT frameworks, and simulation tools.'
      },
      {
        id: 't2',
        question: 'How are project materials and documentation managed?',
        answer: 'All project artifacts are maintained in our secure Project Repository, with appropriate access controls for different stakeholders. Documentation is required throughout the project lifecycle, not just at completion. Templates are provided for project plans, progress reports, technical documentation, and final deliverables to ensure consistency and completeness.'
      },
      {
        id: 't3',
        question: 'What technical support is available for students with advanced project requirements?',
        answer: 'Students working on projects with specialized technical needs can access: dedicated technical mentors from faculty and industry, specialized workshops and training sessions, advanced equipment and software resources through our Technology Resource Center, cloud computing credits, and funding for specialized components or materials through our Project Innovation Fund.'
      }
    ]
  };

  const toggleItem = (itemId) => {
    setOpenItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  // Filter FAQs based on search term
  const filteredFaqs = faqs[activeCategory]
    ? faqs[activeCategory].filter(faq => 
        searchTerm === '' || 
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

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
              Frequently Asked Questions
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 leading-relaxed">
              Find answers to common questions about our Project-Based Learning program
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="container max-w-4xl">
          {/* Search */}
          <div className="relative mb-8">
            <Icon name="search" size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex overflow-x-auto gap-2 pb-4 mb-6 hide-scrollbar">
            {categories.map(category => (
              <button
                key={category.id}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                  activeCategory === category.id
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* FAQ List */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map(faq => (
                <FAQItem
                  key={faq.id}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={!!openItems[faq.id]}
                  toggleOpen={() => toggleItem(faq.id)}
                />
              ))
            ) : (
              <div className="text-center py-12">
                <Icon name="search" size={64} className="mx-auto text-gray-300 mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No matching questions found</h3>
                <p className="text-gray-500">
                  Try adjusting your search terms or selecting a different category
                </p>
              </div>
            )}
          </div>

          {/* Still Have Questions */}
          <div className="mt-12 bg-purple-50 rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Still Have Questions?</h3>
            <p className="text-gray-600 mb-4">
              Can't find the answer you're looking for? Reach out to our support team.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700"
            >
              <Icon name="message-circle" size={18} className="mr-2" />
              Contact Support
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQsPage;
