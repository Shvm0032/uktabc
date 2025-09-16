'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

const comments = [
  {
    name: 'Rajesh Kumar',
    company: 'Metro Rail Corporation',
    comment: 'Outstanding work on the tunnel construction project. Professional team with excellent execution.',
    rating: 5
  },
  {
    name: 'Priya Sharma',
    company: 'Housing Development Board',
    comment: 'Delivered our residential complex ahead of schedule with superior quality. Highly recommended.',
    rating: 5
  },
  {
    name: 'Amit Patel',
    company: 'Industrial Infrastructure Ltd.',
    comment: 'Their expertise in industrial construction is unmatched. Great experience working with them.',
    rating: 5
  },
  {
    name: 'Sunita Reddy',
    company: 'Educational Trust',
    comment: 'Built our school campus with attention to detail and within budget. Excellent service.',
    rating: 5
  },
];

export default function Comments() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      const scrollWidth = scrollContainer.scrollWidth;
      const clientWidth = scrollContainer.clientWidth;
      
      const scroll = () => {
        scrollContainer.scrollLeft += 1;
        if (scrollContainer.scrollLeft >= scrollWidth - clientWidth) {
          scrollContainer.scrollLeft = 0;
        }
      };

      const interval = setInterval(scroll, 50);
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Client Comments</h2>
          <p className="text-xl text-gray-600">
            What our clients say about our work
          </p>
        </motion.div>

        <div 
          ref={scrollRef}
          className="flex space-x-6 overflow-x-hidden"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {[...comments, ...comments].map((comment, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-80 bg-gray-50 rounded-xl p-6 shadow-lg"
            >
              <div className="flex mb-3">
                {[...Array(comment.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{comment.comment}"</p>
              <div>
                <h4 className="font-semibold text-brand-blue">{comment.name}</h4>
                <p className="text-sm text-gray-600">{comment.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}