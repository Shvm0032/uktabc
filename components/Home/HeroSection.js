"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const slides = [
  {
    image: "/Assets/home-slider/home-slider-1.jpg",
    title: "UK Tunnel and Building",
    highlight: "Construction India",
    subtitle:
      "Building Tomorrow's Infrastructure Today - Excellence in Tunnel Construction, Building Projects & Infrastructure Development Across India",
    btn1: { text: "Explore Services", link: "#" },
    btn2: { text: "Get Quote", link: "#" },
  },
  {
    image: "/Assets/home-slider/home-slider-2.jpg",
    title: "Strong Foundations",
    highlight: "Lasting Impact",
    subtitle:
      "Delivering world-class construction solutions with innovative design and reliable execution.",
    btn1: { text: "Our Projects", link: "#" },
    btn2: { text: "Contact Us", link: "#" },
  },
  {
    image: "/Assets/home-slider/home-slider-3.jpg",
    title: "Innovating for",
    highlight: "Tomorrow",
    subtitle:
      "Transforming landscapes with modern engineering and sustainable practices.",
    btn1: { text: "Learn More", link: "#" },
    btn2: { text: "Work With Us", link: "#" },
  },
  {
    image: "/Assets/home-slider/home-slider-4.jpg",
    title: "Commitment to",
    highlight: "Excellence",
    subtitle:
      "Quality construction that stands the test of time, trusted by clients across India.",
    btn1: { text: "Our Services", link: "#" },
    btn2: { text: "Get in Touch", link: "#" },
  },
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  // Auto slide every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const current = slides[index];

  return (
    <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1.1 }} // zoom in hoga
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 1 }, // fade time
              scale: { duration: 5, ease: "easeInOut" }, // jitna slide delay hai utna zoom
            }}
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${current.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Black Overlay fix */}
            <div className="absolute inset-0 bg-black/60"></div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        <motion.h1
          key={current.title + index}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          {current.title}
          <span className="block text-orange-600">{current.highlight}</span>
        </motion.h1>

        <motion.p
          key={current.subtitle + index}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed"
        >
          {current.subtitle}
        </motion.p>

        <motion.div
          key={current.btn1.text + index}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            href={current.btn1.link}
            className="bg-white text-brand-blue px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center"
          >
            {current.btn1.text}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <Link
            href={current.btn2.link}
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-brand-blue transition-colors"
          >
            {current.btn2.text}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
