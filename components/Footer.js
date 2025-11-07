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
  Youtube,
  Instagram,
} from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="relative overflow-hidden">
      {/* CTA Section */}
      <section
        className="relative bg-cover bg-center py-8 z-30 rounded-2xl shadow-2xl max-w-4xl mx-auto sm:max-w-3xl md:max-w-6xl"
        style={{
          backgroundImage: "url('/Assets/cta-banner.png')",
          marginBottom: "-100px",
          transform: "translateY(40px)",
        }}
      >
        <div className="mx-auto px-6 sm:px-10 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-6">
          {/* Left Side */}
          <motion.div
            className="text-white md:w-2/3"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 leading-snug drop-shadow-lg">
              Building Strong Foundations for a Better Tomorrow
            </h2>
            <p className="text-sm sm:text-base text-gray-200 drop-shadow">
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
              className="bg-white text-black font-semibold py-3 px-6 rounded-full shadow-lg hover:scale-90 hover:shadow-md transition-transform duration-300 inline-block"
            >
              Get a Free Consultation
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-white text-black border-t-2 pt-40 sm:pt-48 -mt-24 z-10">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          {/* Background Overlay Logo */}
          <div className="absolute bottom-0 right-10 sm:right-20 opacity-10 pointer-events-none hidden sm:block">
            <Image
              src="/Assets/logo/uktabc-logo.png"
              alt="Background Logo"
              width={250}
              height={85}
              className="object-contain"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Link href="/" className="flex items-center mb-3">
                  <Image
                    src="/Assets/logo/uktabc-logo.png"
                    alt="UK Tunnel & Building Construction India Pvt. Ltd."
                    width={100}
                    height={50}
                    className="rounded-lg"
                  />
                </Link>

                <p className="text-gray-800 mb-4 text-justify leading-relaxed text-sm sm:text-base">
                  Leading construction company specializing in tunnel and
                  building projects across India. Committed to quality, safety,
                  and timely delivery.
                </p>

                <div className="space-y-3 text-sm sm:text-base">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-brand-maroon shrink-0 mt-1" />
                    <span className="text-gray-800 leading-tight">
                      <p>UK Tunnel and Building Construction India Pvt. Ltd.</p>
                      <p>
                        Khasra No-1535, Ratanpur Nayagaon Simla Bye Paas Road
                      </p>
                      <p>Dehradun, Uttarakhand, PIN-248007</p>
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Phone className="h-5 w-5 text-brand-maroon shrink-0 mt-1" />
                    <span className="text-gray-800 leading-tight">
                      <p>(+91) 0135 2977177</p>
                      <p>(+91) 99171 77777</p>
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-brand-maroon shrink-0" />
                    <span className="text-gray-800 break-all">
                      admin@uktabc.co.in
                    </span>
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
                <h4 className="text-lg font-semibold mb-3 sm:mb-4">
                  Quick Links
                </h4>
                <ul className="space-y-2 text-sm sm:text-base">
                  <li>
                    <Link href="/" className="hover:text-brand-maroon">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/about-us" className="hover:text-brand-maroon">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="hover:text-brand-maroon">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link href="//our-leadership-and-team" className="hover:text-brand-maroon">
                      Our Leadership & Team
                    </Link>
                  </li>
                  <li>
                    <Link href="/gallery" className="hover:text-brand-maroon">
                      Gallery
                    </Link>
                  </li>
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
                <h4 className="text-lg font-semibold mb-3 sm:mb-4">Services</h4>
                <ul className="space-y-2 text-gray-800 text-sm sm:text-base">
                  <Link href="/services/tunneling-and-grouting"><li>Tunneling and Grouting</li></Link>
                  <Link href="/services/WaterProofing"><li>WaterProofing</li></Link>
                  <Link href="/services/Injection-grouting"><li>Injection Grouting</li></Link>
                  <Link href="/services/coastal-protection"><li>Coastal Protection</li></Link>
                  <Link href="/services/slope-protection-retaining-wall"><li>Slope Protection/Retaining Wall</li></Link>
                  <Link href="/services/precast"><li>Precast</li></Link>
                  <Link href="/services/building-construction"><li>Building Construction</li></Link>
                  
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
            className="mt-2 pt-5 pb-5 px-6 sm:px-10 flex flex-col md:flex-row justify-between items-center text-center gap-3"
          >
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/uktabc.co.in" target="_blank" className="text-white hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              
              <a href="https://www.youtube.com/channel/UC_QxTKD6jg82HXcCHlHPhqQ" target="_blank" className="text-white hover:text-white">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/uktabc.co.in/" target="_blank" className="text-white hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
            <p className="text-white text-xs sm:text-sm md:text-base">
              © {new Date().getFullYear()} UK Tunnel and Building Construction
              India Pvt. Ltd. All rights reserved.
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
