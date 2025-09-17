import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const CTA = () => {
  return (
    <>
      {/* CTA Section */}
      <section 
        className="relative py-28 text-white overflow-hidden"
        style={{
          backgroundImage: "url('/Assets/home-slider/home-slider-2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <motion.div
            className="backdrop-blur-sm bg-brand-blue/30 p-10 rounded-2xl border border-white/20 shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-4xl font-bold mb-6 text-center">Building Strong Foundations for a Better Tomorrow</h2>
            <p className="text-lg text-gray-200 mb-10 max-w-2xl mx-auto text-center leading-relaxed">
              From tunnels to towering structures, we deliver quality construction with trust, innovation, and excellence. Let’s bring your vision to life.
            </p>
            <div className="text-center">
              <Link 
                href="/contact-us" 
                className="inline-block bg-gradient-to-r from-brand-blue to-brand-maroon text-white font-semibold text-lg px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get a Free Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default CTA;