"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    subheading: "Trusted by Global Leaders",
    title: "UK Tunnel and Building Construction India",
    description:
      "We specialize in modern infrastructure projects with innovative solutions for tunnels and buildings.",
    bg: "/Assets/home-slider/home-slider-1.jpg",
  },
  {
    id: 2,
    subheading: "Building The Future",
    title: "World-Class Engineering Solutions",
    description:
      "Delivering sustainable and advanced construction projects for the future generation.",
    bg: "/Assets/home-slider/home-slider-2.jpg",
  },
  {
    id: 3,
    subheading: "Reliable & Efficient",
    title: "High-Quality Construction Services",
    description:
      "We ensure on-time delivery of projects with safety, durability, and quality.",
    bg: "/Assets/home-slider/home-slider-3.jpg",
  },
  {
    id: 4,
    subheading: "Innovative Designs",
    title: "Transforming Ideas Into Reality",
    description:
      "From concept to completion, we create innovative solutions for every construction need.",
    bg: "/Assets/home-slider/home-slider-4.jpg",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  // Auto slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000); // 7 sec auto change
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={slides[current].id}
          className="absolute inset-0 flex items-center justify-center text-center md:text-left text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Background with zoom effect */}
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[current].bg})` }}
            initial={{ scale: 1 }}
            animate={{ scale: 1.2 }}
            transition={{ duration: 7, ease: "easeInOut" }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Content */}
          <div className="relative z-10 max-w-3xl px-4 md:px-8 lg:px-0 text-center md:text-left">
            <motion.h3
              className="text-sm md:text-lg font-semibold text-yellow-400 mb-1 md:mb-2"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              key={`sub-${slides[current].id}`}
            >
              {slides[current].subheading}
            </motion.h3>

            <motion.h1
              className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4"
              initial={{ x: 150, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              key={`title-${slides[current].id}`}
            >
              {slides[current].title}
            </motion.h1>

            <motion.p
              className="text-xs md:text-sm lg:text-lg text-gray-200"
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              key={`desc-${slides[current].id}`}
            >
              {slides[current].description}
            </motion.p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 rounded-full bg-black/50 hover:bg-black/70 transition"
      >
        <ChevronLeft className="text-white w-5 h-5 md:w-6 md:h-6" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 rounded-full bg-black/50 hover:bg-black/70 transition"
      >
        <ChevronRight className="text-white w-5 h-5 md:w-6 md:h-6" />
      </button>
    </div>
  );
}
