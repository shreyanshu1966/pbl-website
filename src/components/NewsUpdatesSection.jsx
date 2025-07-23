import React from 'react';
import { motion } from 'framer-motion';
import { NewsCard } from './Card';
import Button from './Button';

const NewsUpdatesSection = () => {
  const newsItems = [
    {
      title: "MIT-ADT PBL Students Win National Innovation Award",
      summary: "Team develops sustainable water purification system for rural communities",
      date: "June 10, 2025",
      author: "Dr. Sarah Johnson",
      category: "Achievement"
    },
    {
      title: "New Partnership with Global Tech Leaders",
      summary: "Collaboration opens doors for international project opportunities",
      date: "June 8, 2025",
      author: "Prof. Michael Chen",
      category: "Partnership"
    },
    {
      title: "Student Startup Secures Funding",
      summary: "EdTech solution developed through PBL receives $500K investment",
      date: "June 5, 2025",
      author: "Innovation Team",
      category: "Success Story"
    }
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900"
          >
            Latest News & Updates
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl max-w-2xl mx-auto text-gray-600"
          >
            Stay informed about the latest developments, achievements, and opportunities
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((news, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <NewsCard
                title={news.title}
                summary={news.summary}
                date={news.date}
                author={news.author}
                category={news.category}
                image={news.image}
                href={`/news/${news.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="h-full"
              />
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="primary" size="lg" href="/news">
            View All News & Updates
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsUpdatesSection;
