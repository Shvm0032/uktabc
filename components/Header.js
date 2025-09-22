"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import { Phone, Mail, Instagram, Facebook, Youtube } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const servicesRef = useRef(null);
  const mobileServicesRef = useRef(null);

  const services = [
    { name: "Tunnel Construction", href: "#" },
    { name: "Building Construction", href: "#" },
    { name: "Infrastructure Development", href: "#" },
    { name: "Project Management", href: "#" },
  ];

  // Close dropdown when clicking outside - IMPROVED
  useEffect(() => {
    function handleClickOutside(event) {
      // Desktop dropdown
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
      
      // Mobile dropdown - only if menu is open
      if (isMenuOpen && mobileServicesRef.current && !mobileServicesRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  // Handle hover for desktop
  const handleMouseEnter = () => {
    if (window.innerWidth >= 768) {
      setIsServicesOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 768) {
      setIsServicesOpen(false);
    }
  };

  // Handle click for mobile - SIMPLIFIED
  const toggleMobileServices = () => {
    setIsServicesOpen(prev => !prev);
  };

  // Close mobile menu when link is clicked
  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  return (
    <>
      {/* Top Bar */}
      <div
        className="hidden md:block bg-gradient-to-r text-white"
        style={{ background: "linear-gradient(to right, #6C1B1A, #0D114C)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-10">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>(+91) 0135 2977177</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>admin@uktabc.co.in</span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Link href="https://instagram.com" target="_blank">
              <Instagram className="h-5 w-5 hover:text-gray-200 transition" />
            </Link>
            <Link href="https://facebook.com" target="_blank">
              <Facebook className="h-5 w-5 hover:text-gray-200 transition" />
            </Link>
            <Link href="https://youtube.com" target="_blank">
              <Youtube className="h-5 w-5 hover:text-gray-200 transition" />
            </Link>
          </div>
        </div>
      </div>

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
                href="#"
                className="text-gray-700 hover:text-brand-blue transition-colors"
              >
                About Us
              </Link>

              {/* Services Dropdown - Desktop */}
              <div 
                ref={servicesRef}
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className="flex items-center text-gray-700 hover:text-brand-blue transition-colors"
                >
                  Services <ChevronDown className="ml-1 h-4 w-4" />
                </button>

                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-xl border z-50"
                  >
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="block px-4 py-3 text-gray-700 hover:bg-brand-blue hover:text-white transition-colors first:rounded-t-lg last:rounded-b-lg"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>

              <Link
                href="#"
                className="text-gray-700 hover:text-brand-blue transition-colors"
              >
                Our Team
              </Link>

              <Link
                href="#"
                className="text-gray-700 hover:text-brand-blue transition-colors"
              >
                Gallery
              </Link>

              <Link
                href="#"
                className="text-gray-700 hover:text-brand-blue transition-colors"
              >
                Contact Us
              </Link>

              <Link href="#" className="btn-primary">
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
              className="md:hidden border-t bg-white"
            >
              <div className="py-4 space-y-4">
                <Link
                  href="/"
                  className="block px-4 py-2 text-gray-700 hover:text-brand-blue hover:bg-gray-50"
                  onClick={closeMobileMenu}
                >
                  Home
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:text-brand-blue hover:bg-gray-50"
                  onClick={closeMobileMenu}
                >
                  About Us
                </Link>

                {/* Services with Dropdown - Mobile - FIXED */}
                <div ref={mobileServicesRef} className="px-4">
                  <div 
                    className="flex items-center justify-between py-2 text-gray-700 hover:text-brand-blue cursor-pointer"
                    onClick={toggleMobileServices}
                  >
                    <span>Services</span>
                    <ChevronDown 
                      className={`h-4 w-4 transition-transform duration-300 ${
                        isServicesOpen ? 'rotate-180' : ''
                      }`} 
                    />
                  </div>
                  
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="pl-4 mt-2 space-y-2 border-l-2 border-gray-200"
                    >
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="block py-2 text-gray-600 hover:text-brand-blue transition-colors"
                          onClick={closeMobileMenu}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>

                <Link
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:text-brand-blue hover:bg-gray-50"
                  onClick={closeMobileMenu}
                >
                  Our Team
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:text-brand-blue hover:bg-gray-50"
                  onClick={closeMobileMenu}
                >
                  Gallery
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:text-brand-blue hover:bg-gray-50"
                  onClick={closeMobileMenu}
                >
                  Contact Us
                </Link>
                <Link 
                  href="#" 
                  className="block px-4 py-2 text-brand-blue font-semibold hover:bg-gray-50"
                  onClick={closeMobileMenu}
                >
                  Career
                </Link>
              </div>
            </motion.div>
          )}
        </nav>
      </motion.header>
    </>
  );
}