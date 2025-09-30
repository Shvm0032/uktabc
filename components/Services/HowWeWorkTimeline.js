'use client';

import { motion } from 'framer-motion';
import Divider from '../Divider';

export default function HowWeWorkTimeline({ title, subtitle, steps }) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-2">{title}</h2>
          <Divider />
          <p className="text-md md:text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 h-full hidden lg:block"></div>
          
          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`flex flex-col lg:flex-row items-center ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Number Circle */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-brand-blue to-brand-maroon flex items-center justify-center text-white font-bold text-lg">
                    {index + 1}
                  </div>
                </div>

                {/* Step Content */}
                <div className={`mt-4 lg:mt-0 lg:w-1/2 px-6 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
