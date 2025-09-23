"use client";
import React from "react";
import Image from "next/image";
import { Building2, Shield } from "lucide-react";
import { FaHardHat } from "react-icons/fa";
import { MdFactory } from "react-icons/md";
import Divider from "../Divider";

const About = () => {
  return (
    <>
      <section className="py-16 bg-gray-50">
        {/* Heading + Divider */}
        <div className="text-center mb-5">
          <h2 className="text-4xl font-bold text-gray-800">About Us</h2>
        </div>
        <Divider />

        {/* Text + Image */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Text */}
          <div>
            <h3 className="text-2xl font-semibold text-brand-blue mb-4">
              Building Tomorrow with Excellence
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed text-justify">
              UK Tunnel and Building Construction India Pvt. Ltd. is dedicated
              to delivering world-class infrastructure solutions. With years of
              experience in tunnel construction, building projects, and
              large-scale developments, we ensure quality, safety, and
              sustainability in everything we do.
            </p>
            <p className="text-gray-700 leading-relaxed text-justify">
              Our mission is to shape the future of infrastructure in India
              through innovation, dedication, and precision engineering.
            </p>
            <button class="bg-gradient-to-r mt-4 from-[#6B1B1B] to-[#141249] text-white px-3 py-1 rounded-md transform transition-all duration-200 hover:scale-95">
              Read More
            </button>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <Image
              src="/Assets/home-slider/home-slider-2.jpg"
              alt="About Image"
              width={100}
              height={100}
              className="rounded-lg shadow-lg h-[300px] w-[500px]"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
