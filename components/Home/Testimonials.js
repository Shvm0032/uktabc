"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { FaStar, FaQuoteRight } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rahul Sharma",
      designation: "Client",
      comment: "Amazing work! The team delivered our project on time and exceeded expectations.",
      rating: 5,
    },
    {
      name: "Priya Singh",
      designation: "Client",
      comment: "Professional and reliable. Highly recommended for large-scale construction projects.",
      rating: 5,
    },
    {
      name: "Amit Kumar",
      designation: "Client",
      comment: "Excellent communication and quality work. Truly experts in their field.",
      rating: 4,
    },
    {
      name: "Sanya Verma",
      designation: "Client",
      comment: "The project management was flawless. We are extremely satisfied with the results.",
      rating: 5,
    },
    {
      name: "Vikram Patel",
      designation: "Client",
      comment: "High-quality infrastructure development and very responsive team. Loved working with them.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 relative bg-gradient-to-r from-brand-blue to-brand-maroon">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Heading */}
        <motion.h2
          className="text-4xl font-bold text-white mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          What Our Clients Say
        </motion.h2>

        {/* Slider */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          speed={800}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="bg-white rounded-lg shadow-lg p-8 md:p-10 mx-4 md:mx-0 relative"
                style={{
                  borderLeft: "5px solid #6E1B17",
                  borderRight: "5px solid #07114F",
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                {/* Rating */}
                <div className="flex justify-start mb-3">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 mr-1" />
                  ))}
                </div>

                {/* Comment */}
                <div className="relative">
                  <p className="text-gray-700 mb-6 text-sm md:text-base text-left">
                    "{item.comment}"
                  </p>
                </div>

                {/* Name & Designation */}
                <h3 className="text-lg font-semibold text-gray-900 text-left">{item.name}</h3>
                <p className="text-gray-500 text-sm text-left">{item.designation}</p>

                {/* Quote icon - bottom right */}
                <FaQuoteRight className="absolute bottom-4 right-4 text-brand-blue text-4xl" />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
