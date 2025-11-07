'use client';
import { motion, AnimatePresence } from 'framer-motion';


export default function SpecialistHero() {
  
  return (
 
      <section 
        className="relative h-96 flex items-center justify-center text-white"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 16, 83, 0.8), rgba(118, 28, 20, 0.8)), url(/Assets/Services/tunnel/tunnel101.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl md:text-6xl font-bold mb-4"
          >
            Our Specialization in Construction Works
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl"
          >
            
          </motion.p>
        </div>
      </section>

  );
}