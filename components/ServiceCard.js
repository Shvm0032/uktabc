'use client';

import { motion } from 'framer-motion';

export default function ServiceCard({ icon: Icon, title, description, features, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
    >
      <div className="p-8">
        <div className="w-16 h-16 bg-gradient-to-r from-brand-blue to-brand-maroon rounded-full flex items-center justify-center mb-6">
          <Icon className="h-8 w-8 text-white" />
        </div>
        
        <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
        
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="w-2 h-2 bg-brand-maroon rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="h-1 bg-gradient-to-r from-brand-blue to-brand-maroon"></div>
    </motion.div>
  );
}