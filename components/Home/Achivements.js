'use client';

import { motion } from 'framer-motion';
import { Award, Users, Clock, Shield } from 'lucide-react';
import Divider from '../Divider';

const highlights = [
  {
    icon: Award,
    title: '25+ Years',
    subtitle: 'Experience',
    description: 'Excellence in construction industry',
  },
  {
    icon: Users,
    title: '500+',
    subtitle: 'Projects Completed',
    description: 'Successfully delivered nationwide',
  },
  {
    icon: Clock,
    title: '98%',
    subtitle: 'On-Time Delivery',
    description: 'Commitment to timely completion',
  },
  {
    icon: Shield,
    title: 'Zero',
    subtitle: 'Safety Incidents',
    description: 'Uncompromising safety standards',
  },
];

export default function Achievements() {
  return (
    <section className="py-20 bg-[#F1F5F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-5"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-2">
            Our Achievements
          </h2>
          <p className="text-md md:text-xl text-gray-600 max-w-3xl mx-auto">
            Delivering excellence in construction with a track record of success
          </p>
        </motion.div>

        <Divider />

        {/* Achievement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="relative bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow"
            >
              {/* Folded Corner Effect */}
              <div className="absolute top-0 left-0 w-0 h-0 border-t-[50px] border-l-[50px] border-t-[#0D114C] border-l-transparent rounded-tl-xl"></div>

              {/* Content */}
              <div className="text-center mt-2">
                <div className="w-16 h-16 bg-gradient-to-r from-[#0D114C] to-[#6C1B1A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <highlight.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-[#0D114C] mb-1">
                  {highlight.title}
                </h3>
                <h4 className="text-lg font-semibold text-[#6C1B1A] mb-2">
                  {highlight.subtitle}
                </h4>
                <p className="text-gray-600">{highlight.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
