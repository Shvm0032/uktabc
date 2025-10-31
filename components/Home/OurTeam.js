"use client";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Divider from '../Divider'

const OurTeam = () => {
  const team = [
    {
      img: "/Assets/team/kunwar.jpg",
      name: "Kunwar Singh Negi",
      designation: "(Chairman & MD)",
    },
    {
      img: "/Assets/team/rekha.jpg",
      name: "Rekha Negi",
      designation: "Director",
    },
    {
      img: "/Assets/team/kuldeep.jpg",
      name: "Kuldeep Singh",
      designation: "Chief Executive Engineer",
    },
    {
      img: "/Assets/team/Shivi.png",
      name: "Shivi Kathait",
      designation: "General Manager (Civil)",
    },
    {
      img: "/Assets/team/amisha.png",
      name: "Amisha Bhandari",
      designation: "Company Secretary & Finance",
    },
  ];

  return (
    <section className="relative py-10 pb-20 bg-gray-50">
      {/* Dots Overlay Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/Assets/dot/bg-dots.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "10px 10px", // chhote dots ke liye adjust kare
          backgroundPosition: "0 0",
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Heading */}
        <motion.h2
          className="text-4xl font-bold text-gray-800 mb-5"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Team
        </motion.h2>
        <Divider/>
        {/* Team Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="group bg-white rounded-lg shadow-lg relative flex flex-col items-center text-center pt-6 px-4 pb-4 hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              {/* Member Image */}
              <div className="overflow-hidden rounded-full w-28 h-28 mb-4">
                <Image
                  src={member.img}
                  alt={member.name}
                  width={150}
                  height={150}
                  className="object-contain w-full h-full transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Name */}
              <h3 className="text-lg font-semibold text-gray-800">
                {member.name}
              </h3>

              {/* Designation */}
              <p className="text-gray-500 mb-5 text-sm">{member.designation}</p>

              {/* Social Icons */}
              <div className="absolute  bottom-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <a href="#" className="text-brand-blue hover:text-brand-maroon">
                  <FaFacebookF />
                </a>
                <a href="#" className="text-brand-blue hover:text-brand-maroon">
                  <FaTwitter />
                </a>
                <a href="#" className="text-brand-blue hover:text-brand-maroon">
                  <FaLinkedinIn />
                </a>
                <a href="#" className="text-brand-blue hover:text-brand-maroon">
                  <FaInstagram />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
