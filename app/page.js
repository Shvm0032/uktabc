'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Highlights from '@/components/Highlights';
import Comments from '@/components/Comments';
import Testimonials from '@/components/Testimonials';
import { ArrowRight } from 'lucide-react';
import HeroSection from '../components/Home/HeroSection'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection/>

      {/* Highlights Section */}
      <Highlights />

      {/* Client Comments Section */}
      {/* <Comments /> */}

      {/* Testimonials Section */}
      {/* <Testimonials /> */}

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your construction needs and turn your vision into reality with our expert team.
            </p>
            <Link href="/contact-us" className="btn-primary text-lg px-8 py-4">
              Contact Us Today
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}