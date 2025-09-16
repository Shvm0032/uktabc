"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const services = [
    { name: "Tunnel Construction", href: "/services#tunnel" },
    { name: "Building Construction", href: "/services#building" },
    { name: "Infrastructure Development", href: "/services#infrastructure" },
    { name: "Project Management", href: "/services#management" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 bg-white shadow-lg z-50"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Left Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/Assets/logo/uktabc-logo.png"
              alt="UK Tunnel & Building Construction India Pvt. Ltd."
              width={100}
              height={50}
              className="rounded-lg"
            />
          </Link>

          {/* Center Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-brand-blue transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about-us"
              className="text-gray-700 hover:text-brand-blue transition-colors"
            >
              About Us
            </Link>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center text-gray-700 hover:text-brand-blue transition-colors"
              >
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {isServicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border"
                >
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block px-4 py-3 text-gray-700 hover:bg-brand-blue hover:text-white transition-colors first:rounded-t-lg last:rounded-b-lg"
                    >
                      {service.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </div>

            <Link
              href="/our-team"
              className="text-gray-700 hover:text-brand-blue transition-colors"
            >
              Our Team
            </Link>
            <Link
              href="/gallery"
              className="text-gray-700 hover:text-brand-blue transition-colors"
            >
              Gallery
            </Link>
            <Link
              href="/contact-us"
              className="text-gray-700 hover:text-brand-blue transition-colors"
            >
              Contact Us
            </Link>
            <Link href="/career" className="btn-primary">
              Career
            </Link>
          </div>

          {/* Right Logo */}
          <Link href="/" className="hidden md:flex items-center">
            <Image
              src="/Assets/logo/KKTBS-logo.png"
              alt="Company Logo Right"
              width={100}
              height={50}
              className="rounded-lg"
            />
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t"
          >
            <div className="py-4 space-y-4">
              <Link href="/" className="block text-gray-700 hover:text-brand-blue">
                Home
              </Link>
              <Link href="/about-us" className="block text-gray-700 hover:text-brand-blue">
                About Us
              </Link>
              <Link href="/services" className="block text-gray-700 hover:text-brand-blue">
                Services
              </Link>
              <Link href="/our-team" className="block text-gray-700 hover:text-brand-blue">
                Our Team
              </Link>
              <Link href="/gallery" className="block text-gray-700 hover:text-brand-blue">
                Gallery
              </Link>
              <Link href="/contact-us" className="block text-gray-700 hover:text-brand-blue">
                Contact Us
              </Link>
              <Link href="/career" className="block text-brand-blue font-semibold">
                Career
              </Link>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}
