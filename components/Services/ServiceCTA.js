"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ServiceCTA({ title, subtitle, buttonText, buttonLink, bgImage }) {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-24"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 text-white">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          {title}
        </motion.h2>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl mb-8"
          >
            {subtitle}
          </motion.p>
        )}

        {buttonText && buttonLink && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link
              href={buttonLink}
              className="inline-block bg-brand-blue hover:bg-brand-maroon text-white font-semibold px-8 py-4 rounded-lg shadow-lg transition-colors duration-300"
            >
              {buttonText}
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
