import React from 'react'
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';


const HeroSection = () => {
  return (
 <>
 <section 
        className="relative h-screen flex items-center justify-center text-white"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 16, 83, 0.7), rgba(118, 28, 20, 0.7)), url(https://images.pexels.com/photos/162539/architecture-building-amsterdam-blue-162539.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/80 to-brand-maroon/80"></div>
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            UK Tunnel and Building
            <span className="block text-yellow-400">Construction India</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed"
          >
            Building Tomorrow's Infrastructure Today - Excellence in Tunnel Construction, 
            Building Projects & Infrastructure Development Across India
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link 
              href="/services" 
              className="bg-white text-brand-blue px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              Explore Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              href="/contact-us" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-brand-blue transition-colors"
            >
              Get Quote
            </Link>
          </motion.div>
        </div>
      </section>
 
 </>
  )
}

export default HeroSection