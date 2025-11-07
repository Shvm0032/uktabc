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
      name: "Rajat Saxena",
      designation: "CEO",
      comment: "We were extremely satisfied with the neatness and quality with which the work was carried out. Since then we have associated with UKTABC on various minor and major construction activities including a new office block done recently. We highly recommend them for any small or big construction work!",
      rating: 5,
    },
    {
      name: "Anil Kumar",
      designation: "Director",
      comment: "UKTABC managed the encountered problems very professionally. Team is proficient and focused, with a sound work ethic. We wholeheartedly recommend UKTABC for any type of construction job.",
      rating: 5,
    },
    {
      name: "Pankaj Goyal",
      designation: "Managing Director",
      comment: "Thank you UKTABC for guiding us through the construction process, understanding, and always ready to accommodate our needs. We love our new space and know that it was built by the very best!",
      rating: 4,
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
