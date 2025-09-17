'use client';
import { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { motion } from 'framer-motion';
import Modal from 'react-modal';
import Divider from '../Divider';

const GallerySlider = () => {
  const images = [
    '/Assets/gallery/img101.jpg',
    '/Assets/gallery/img102.jpg',
    '/Assets/gallery/img103.jpg',
    '/Assets/gallery/img104.jpg',
    '/Assets/gallery/img105.jpg',
    '/Assets/home-slider/home-slider-1.jpg',
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState('');
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const openModal = (img) => {
    setCurrentImg(img);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrentImg('');
  };

  return (
    <section className="py-20 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <motion.h2
          className="text-4xl font-bold text-gray-800 mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Gallery
        </motion.h2>
        <Divider />

        {/* Slider */}
        <div className="relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            loop={true}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  className="cursor-pointer overflow-hidden rounded-lg"
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={img}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-48 object-cover"
                    onClick={() => openModal(img)}
                  />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Arrows with refs */}
          <div ref={prevRef} className="swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg cursor-pointer z-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </div>
          <div ref={nextRef} className="swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg cursor-pointer z-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm z-50"
        overlayClassName="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-50"
      >
        <button
          onClick={closeModal}
          className="absolute top-5 right-5 text-white text-3xl font-bold z-50"
        >
          &times;
        </button>
        <img src={currentImg} alt="Enlarged" className="max-h-[80vh] rounded-lg" />
      </Modal>
    </section>
  );
};

export default GallerySlider;