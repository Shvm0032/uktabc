"use client";

import { motion } from "framer-motion";

export default function ManagementHero() {
  return (
    <section
      className="relative w-full md:h-[70vh] h-[50vh]  flex items-center justify-center bg-center bg-cover"
      style={{
        backgroundImage: "url('/Assets/gallery/img101.jpg')", 
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Centered Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-4"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Key Management
        </h1>
      </motion.div>
    </section>
  );
}
