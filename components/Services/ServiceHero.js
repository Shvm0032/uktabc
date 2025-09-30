'use client';

import { motion } from 'framer-motion';

export default function ServiceHero({ title, tagline, bgImage, textColor = 'white', height = 'h-96', motionDelay = 0 }) {
  return (
    <section
      className={`relative flex items-center justify-center ${height} text-${textColor}`}
      style={{
        backgroundImage: `linear-gradient(rgba(0,16,83,0.8), rgba(118,28,20,0.8)), url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: motionDelay }}
          className="text-5xl md:text-6xl font-bold mb-4"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: motionDelay + 0.2 }}
          className="text-xl max-w-2xl mx-auto"
        >
          {tagline}
        </motion.p>
      </div>
    </section>
  );
}
