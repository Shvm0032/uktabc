'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-4">UK Tunnel and Building Construction India Pvt. Ltd.</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Leading construction company specializing in tunnel construction, building projects, and infrastructure development across India. Committed to quality, safety, and timely delivery.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-brand-maroon" />
                  <span className="text-gray-300">New Delhi, India</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-brand-maroon" />
                  <span className="text-gray-300">+91 11 1234 5678</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-brand-maroon" />
                  <span className="text-gray-300">info@uktunnel.in</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/about-us" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
                <li><Link href="/our-team" className="text-gray-300 hover:text-white transition-colors">Our Team</Link></li>
                <li><Link href="/gallery" className="text-gray-300 hover:text-white transition-colors">Gallery</Link></li>
              </ul>
            </motion.div>
          </div>

          {/* Services */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><span className="text-gray-300">Tunnel Construction</span></li>
                <li><span className="text-gray-300">Building Construction</span></li>
                <li><span className="text-gray-300">Infrastructure Development</span></li>
                <li><span className="text-gray-300">Project Management</span></li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
          </div>
          <p className="text-gray-300 text-center">
            © {new Date().getFullYear()} UK Tunnel and Building Construction India Pvt. Ltd. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}