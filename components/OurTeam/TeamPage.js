"use client";

import { motion } from "framer-motion";
import { Award, Users, Target, Shield } from "lucide-react";


export default function TeamPage() {
  return (
    <div className="">
      {/* Hero Section */}
      <section
        className="relative h-[80vh] flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 16, 83, 0.4), rgba(118, 28, 20, 0.4)), url(/Assets/team-page/team.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl mt-20 sm:mt-0  md:text-6xl font-bold mb-4"
          >
            Meet Our Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-6xl px-12"
          >
            Our dedicated team of experts brings together creativity, experience, and passion to drive innovation and deliver exceptional results. Get to know the people behind our success.
          </motion.p>
        </div>
      </section>
    </div>
  );
}
