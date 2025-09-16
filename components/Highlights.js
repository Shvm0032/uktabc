'use client';

import { motion } from 'framer-motion';
import { Award, Users, Clock, Shield } from 'lucide-react';

const highlights = [
  {
    icon: Award,
    title: '25+ Years',
    subtitle: 'Experience',
    description: 'Excellence in construction industry'
  },
  {
    icon: Users,
    title: '500+',
    subtitle: 'Projects Completed',
    description: 'Successfully delivered nationwide'
  },
  {
    icon: Clock,
    title: '98%',
    subtitle: 'On-Time Delivery',
    description: 'Commitment to timely completion'
  },
  {
    icon: Shield,
    title: 'Zero',
    subtitle: 'Safety Incidents',
    description: 'Uncompromising safety standards'
  }
];

export default function Highlights() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Achievements</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Delivering excellence in construction with a track record of success
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-brand-blue to-brand-maroon rounded-full flex items-center justify-center mx-auto mb-4">
                <highlight.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-brand-blue mb-1">{highlight.title}</h3>
              <h4 className="text-lg font-semibold text-brand-maroon mb-2">{highlight.subtitle}</h4>
              <p className="text-gray-600">{highlight.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}