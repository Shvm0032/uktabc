'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Divider from "../Divider.js"

const ServiceChooseUs = ({ title, description, features, image }) => {
  return (
    <section className="py-16 bg-gray-50">
      {/* Heading */}
       <div className="text-center mb-5">
               <h2 className="text-4xl font-bold text-gray-800">Why Choose Us</h2>
             </div>
             <Divider />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 ">
        {/* Left: Text + Features */}
        <div>
          <p className="text-gray-700 mb-6 leading-relaxed text-justify">
            {description}
          </p>

          <ul className="space-y-3">
            {features?.map((feature, index) => (
              <motion.li
                key={index}
                className="flex items-start text-gray-700"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="text-brand-maroon font-bold mr-2">•</span>
                <span>{feature}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Right: Image */}
        {image && (
          <div className="flex justify-center">
            <Image
              src={image}
              alt={title}
              width={100}
              height={200}
            className="rounded-lg shadow-lg h-[300px] w-[500px]"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default ServiceChooseUs;
