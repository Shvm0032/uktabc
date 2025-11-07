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
    position: "(Chairman & MD)",
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
    image: "/Assets/team/Shivi.png",
  },
  {
    name: "Amisha Bhandari",
    position: "Company Secretary & Finance",
    image: "/Assets/team/amisha.png",
  },
  
];

export default function OurTeam() {
  return (
    <div className="min-h-screen">
      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className=" text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
            <Divider />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced leadership team brings together decades of
              expertise in construction, engineering, and project management.
            </p>
          </motion.div>

          {/* Responsive grid for cards */}
          <div className="grid px-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="relative group rounded-2xl overflow-hidden p-[2px] 
                           bg-gradient-to-r from-[#041151] via-[#6F1B17] to-[#041151]
                           bg-[length:200%_200%] animate-borderFlow
                           shadow-lg hover:shadow-2xl transition-all duration-500 
                           w-full max-w-sm flex flex-col justify-between"
              >
                <div className="bg-white rounded-2xl overflow-hidden flex flex-col h-full">
                  <div className="relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-[300px] md:h-[250px] object-content group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  </div>

                  <div className="p-6 text-center flex flex-col flex-grow justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-[#041151] mb-1">
                        {member.name}
                      </h3>
                      <p className="text-[#6F1B17] text-base font-semibold mb-3">
                        {member.position}
                      </p>
                    </div>

                    <div className="flex justify-center space-x-4 pt-4 border-t border-gray-200 mt-auto">
                      <a
                        href="#"
                        className="text-gray-600 hover:text-[#041151] transition-colors"
                      >
                        <FaFacebookF className="h-4 w-4" />
                      </a>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-[#041151] transition-colors"
                      >
                        <FaTwitter className="h-4 w-4" />
                      </a>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-[#041151] transition-colors"
                      >
                        <FaLinkedinIn className="h-4 w-4" />
                      </a>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-[#041151] transition-colors"
                      >
                        <FaInstagram className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}


