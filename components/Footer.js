"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="relative">
      {/* CTA Section */}
      <section
        className="relative bg-cover bg-center py-14 z-20"
        style={{
          backgroundImage: "url('/Assets/cta-banner.png')",
        }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
          {/* Left Side */}
          <motion.div
            className="text-white md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4 leading-snug">
              Building Strong Foundations for a Better Tomorrow
            </h2>
            <p className="text-lg text-gray-200">
              From tunnels to towering structures, we deliver quality
              construction with trust, innovation, and excellence. Let’s bring
              your vision to life.
            </p>
          </motion.div>

          {/* Right Side: Button */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link
              href="/contact-us"
              className="bg-white text-black font-semibold py-3 px-6 rounded-full shadow-lg hover:scale-90 hover:shadow-md transition-transform duration-300"
            >
              Get a Free Consultation
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-white text-black border-t-2 pt-5 -mt-16 z-10">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          {/* Background Overlay Logo */}
          <div className="absolute bottom-0 right-20 opacity-10 pointer-events-none">
            <Image
              src="/Assets/logo/uktabc-logo.png"
              alt="Background Logo"
              width={250}
              height={85}
              className="object-contain"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Link href="/" className="flex items-center">
                  <Image
                    src="/Assets/logo/uktabc-logo.png"
                    alt="UK Tunnel & Building Construction India Pvt. Ltd."
                    width={100}
                    height={50}
                    className="rounded-lg"
                  />
                </Link>

                <p className="text-gray-800 mb-6 leading-relaxed">
                  Leading construction company specializing in tunnel
                  construction, building projects, and infrastructure development
                  across India. Committed to quality, safety, and timely delivery.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-brand-maroon" />
                    <span className="text-gray-800">
                      <p>UK Tunnel and Building Construction India Pvt. Ltd.</p>
                      <p>Khasra No. 1540, Ratanpur Nayagaon,</p>
                      <p>Dehradun, Uttarakhand, PIN-248007</p>
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-brand-maroon" />
                    <span className="text-gray-800">
                      <p>(+91) 0135 2977177</p>
                      <p>(+91) 99171 77777</p>
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-brand-maroon" />
                    <span className="text-gray-800">admin@uktabc.co.in</span>
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
                <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><Link href="/" className="hover:text-brand-maroon">Home</Link></li>
                  <li><Link href="/about-us" className="hover:text-brand-maroon">About Us</Link></li>
                  <li><Link href="/services" className="hover:text-brand-maroon">Services</Link></li>
                  <li><Link href="/our-team" className="hover:text-brand-maroon">Our Team</Link></li>
                  <li><Link href="/gallery" className="hover:text-brand-maroon">Gallery</Link></li>
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
                <h4 className="text-xl font-semibold mb-4">Services</h4>
                <ul className="space-y-2 text-gray-800">
                  <li>Tunnel Construction</li>
                  <li>Building Construction</li>
                  <li>Infrastructure Development</li>
                  <li>Project Management</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="bg-gradient-to-r"
          style={{ background: "linear-gradient(to right, #6C1B1A, #0D114C)" }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-2 pt-5 pb-5 px-10 flex flex-col md:flex-row justify-between items-center"
          >
            <div className="flex space-x-4 mb-4 md:mb-0">
              <a href="#" className="text-white hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-white">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
            <p className="text-white text-center md:text-lg text-sm">
              © {new Date().getFullYear()} UK Tunnel and Building Construction
              India Pvt. Ltd. All rights reserved.
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
