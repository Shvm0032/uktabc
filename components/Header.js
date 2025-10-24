"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown, Menu, X, Phone, Mail, Instagram, Facebook, Youtube } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDesktopServicesOpen, setIsDesktopServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const servicesRef = useRef(null);
  const mobileServicesRef = useRef(null);

  const services = [
    { name: "Tunnel Construction", href: "#" },
    { name: "Building Construction", href: "#" },
    { name: "Infrastructure Development", href: "#" },
    { name: "Project Management", href: "#" },
  ];

  useEffect(() => {
    function handleClickOutside(event) {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setIsDesktopServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnter = () => {
    if (window.innerWidth >= 768) setIsDesktopServicesOpen(true);
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 768) setIsDesktopServicesOpen(false);
  };

  const toggleMobileServices = () => setIsMobileServicesOpen((prev) => !prev);

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    setIsMobileServicesOpen(false);
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

      {/* Main Header */}
      <motion.header initial={{ y: -100 }} animate={{ y: 0 }} className="sticky top-0 bg-white shadow-lg z-50">
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
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about-us" },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative text-gray-700 hover:text-brand-blue transition-colors group"
                >
                  {link.name}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-[#6C1B1A] to-[#0D114C] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}

              {/* Services Dropdown */}
              <div
                ref={servicesRef}
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href="/services"
                  className="relative flex items-center text-gray-700 hover:text-brand-blue transition-colors group"
                >
                  Services <ChevronDown className="ml-1 h-4 w-4" />
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-[#6C1B1A] to-[#0D114C] transition-all duration-300 group-hover:w-full"></span>
                </Link>

                {isDesktopServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full left-0 p-5 mt-0 w-64 bg-white rounded-lg shadow-xl border z-50"
                  >
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="block px-4 py-3 text-gray-700 hover:bg-[#0D114C] hover:text-white transition-colors first:rounded-t-lg last:rounded-b-lg"
                        onClick={() => setIsDesktopServicesOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>

              {[
                { name: "Our Team", href: "/our-team" },
                { name: "Gallery", href: "/gallery" },
                { name: "Contact Us", href: "/contact-us" },
                { name: "Career", href: "/career" },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative text-gray-700 hover:text-brand-blue transition-colors group"
                >
                  {link.name}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-[#6C1B1A] to-[#0D114C] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>

            {/* Right Logo */}
            <Link href="/" className="hidden md:flex items-center">
              <Image src="/Assets/logo/KKTBS-logo.png" alt="Company Logo Right" width={100} height={50} className="rounded-lg" />
            </Link>

            {/* Mobile Menu Toggle */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="md:hidden border-t bg-white">
              <div className="py-4 space-y-4">
                <Link href="/" className="block px-4 py-2 text-gray-700 hover:text-brand-blue hover:bg-gray-50" onClick={closeMobileMenu}>
                  Home
                </Link>
                <Link href="/about-us" className="block px-4 py-2 text-gray-700 hover:text-brand-blue hover:bg-gray-50" onClick={closeMobileMenu}>
                  About Us
                </Link>

                {/* Mobile Services */}
                <div ref={mobileServicesRef} className="px-4">
                  <div
                    className="flex items-center justify-between py-2 text-gray-700 hover:text-brand-blue cursor-pointer"
                    onClick={toggleMobileServices}
                  >
                    <span>Services</span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-300 ${isMobileServicesOpen ? "rotate-180" : ""}`}
                    />
                  </div>

                  {isMobileServicesOpen && (
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

                <Link href="/our-team" className="block px-4 py-2 text-gray-700 hover:text-brand-blue hover:bg-gray-50" onClick={closeMobileMenu}>
                  Our Team
                </Link>
                <Link href="/gallery" className="block px-4 py-2 text-gray-700 hover:text-brand-blue hover:bg-gray-50" onClick={closeMobileMenu}>
                  Gallery
                </Link>
                <Link href="/contact-us" className="block px-4 py-2 text-gray-700 hover:text-brand-blue hover:bg-gray-50" onClick={closeMobileMenu}>
                  Contact Us
                </Link>
                <Link href="/career" className="block px-4 py-2 text-brand-blue font-semibold hover:bg-gray-50" onClick={closeMobileMenu}>
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
