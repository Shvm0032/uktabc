import React from 'react'
import { motion } from 'framer-motion';
import Divider from '@/components/Divider';

const ApplicationProcess = () => {
  return (
     <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Application Process</h2>
            <Divider/>
            <p className="text-xl text-gray-600 mb-12">
              Simple steps to join our team
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: 1, title: 'Apply Online', desc: 'Submit your application through our portal' },
                { step: 2, title: 'Screening', desc: 'Initial review of your qualifications' },
                { step: 3, title: 'Interview', desc: 'Technical and behavioral assessments' },
                { step: 4, title: 'Join Team', desc: 'Welcome aboard and start building!' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-brand-blue to-brand-maroon rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">{item.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
  )
}

export default ApplicationProcess