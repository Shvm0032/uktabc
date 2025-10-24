"use client";

import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section
      className="relative bg-cover bg-center py-14"
      style={{
        backgroundImage: "url('/Assets/cta-banner.png')",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        {/* Left Side: Heading & Description */}
        <motion.div
          className="text-white md:w-1/2 mb-8 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">
            Building Strong Foundations for a Better Tomorrow
          </h2>
          <p className="text-lg">
            From tunnels to towering structures, we deliver quality construction
            with trust, innovation, and excellence. Let’s bring your vision to
            life.
          </p>
        </motion.div>

        {/* Right Side: Button */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <a
            href="/contact-us"
            className="bg-white text-black font-semibold py-3 px-6 rounded-full shadow-lg hover:scale-90 hover:shadow-md transition-transform duration-300"
          >
            Get a Free Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
