'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import Divider from '@/components/Divider';



const benefits = [
  'Competitive salary packages',
  'Comprehensive health insurance',
  'Performance-based bonuses',
  'Professional development programs',
  'Work-life balance initiatives',
  'Retirement savings plan',
  'Transportation allowance',
  'Annual leave and holidays'
];

export default function Career() {
 

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-96 flex items-center justify-center text-white"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 16, 83, 0.8), rgba(118, 28, 20, 0.8)), url(https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            Career Opportunities
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl"
          >
            Build Your Future with Us
          </motion.p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Work With Us?</h2>
            <Divider />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join a dynamic team that's shaping India's infrastructure future
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-3"
              >
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <span className="text-gray-700">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     
    
    </div>
  );
}