"use client";

import { motion } from "framer-motion";
import Divider from "../Divider";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const teamMembers = [
  {
    name: "Kunwar Singh Negi",
    position: "(Chairman & MD)",
    image: "/Assets/team/kunwar.jpg",
  },
  { name: "Rekha Negi", position: "Director", image: "/Assets/team/rekha.jpg" },
  {
    name: "Kuldeep Singh",
    position: "Chief Executive Engineer",
    image: "/Assets/team/kuldeep.jpg",
  },
  {
    name: "Shivi Kathait",
    position: "General Manager (Civil)",
    image: "/Assets/team/Yogita.jpg",
  },
  {
    name: "Amisha Bhandari",
    position: "Company Secretary & Finance",
    image: "/Assets/team/aradhna.jpg",
  },
];

export default function OurTeam() {
  return (
    <div className="min-h-screen">
      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
            <Divider />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced leadership team brings together decades of
              expertise in construction, engineering, and project management.
            </p>
          </motion.div>

          {/* Flex container for cards */}
          <div className="flex flex-wrap justify-center gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden w-full sm:w-[300px]"
              >
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-[350px] object-content"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#041151] mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[#6F1B17] text-base font-semibold mb-2">
                    {member.position}
                  </p>

                  <div className="flex space-x-3 pt-4 border-t">
                    <a
                      href="#"
                      className="text-[#6F1B17] hover:text-brand-blue transition-colors"
                    >
                      <FaFacebookF className="h-4 w-4" />
                    </a>
                    <a
                      href="#"
                      className="text-[#6F1B17] hover:text-brand-blue transition-colors"
                    >
                      <FaTwitter className="h-4 w-4" />
                    </a>
                    <a
                      href="#"
                      className="text-[#6F1B17] hover:text-brand-blue transition-colors"
                    >
                      <FaLinkedinIn className="h-4 w-4" />
                    </a>
                    <a
                      href="#"
                      className="text-[#6F1B17] hover:text-brand-blue transition-colors"
                    >
                      <FaInstagram className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-[#F1F5F9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Join Our Team
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We're always looking for talented individuals who share our
              passion for excellence and innovation in construction. Explore
              career opportunities with us and be part of building India's
              future.
            </p>
            <a
              href="/career"
              className="text-white font-semibold rounded-full text-lg px-8 py-4 
                   bg-gradient-to-r from-brand-blue to-[#6F1B17] 
                   hover:from-[#6F1B17] hover:to-brand-blue 
                   transition-all duration-300 inline-block"
            >
              View Career Opportunities
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
