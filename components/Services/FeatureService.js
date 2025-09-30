'use client';

import { motion } from 'framer-motion';
import Divider from '../Divider';

export default function FeatureService({ title, subtitle, features }) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-2">{title}</h2>
          <Divider />
          <p className="text-md md:text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-xl p-8 shadow-lg transition-all duration-500 text-center
                         bg-white hover:bg-gradient-to-br hover:from-brand-blue hover:to-brand-maroon hover:text-white"
            >
              {/* Optional overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/20 to-transparent opacity-0 hover:opacity-30 transition-opacity duration-500 z-0"></div>

              {/* Content */}
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-brand-blue to-brand-maroon rounded-full flex items-center justify-center mx-auto mb-4">
                  {/* Keep icon always white */}
                  <div className="text-white text-2xl">{feature.icon}</div>
                </div>
                <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600 hover:text-white transition-colors duration-500">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
