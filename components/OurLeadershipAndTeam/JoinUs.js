
import { motion } from "framer-motion";

import React from 'react'

const JoinUs = () => {
  return (
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Join Our Team
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We're always looking for talented individuals who share our
              passion for excellence and innovation in construction. Explore
              career opportunities with us and be part of building India's
              future.
            </p>
            <a
              href="/career"
              className="text-white font-semibold rounded-full text-lg px-8 py-4 
                   bg-gradient-to-r from-brand-blue to-[#6F1B17] 
                   hover:from-[#6F1B17] hover:to-brand-blue 
                   transition-all duration-300 inline-block"
            >
              View Career Opportunities
            </a>
          </motion.div>
        </div>
      </section>
  )
}

export default JoinUs
