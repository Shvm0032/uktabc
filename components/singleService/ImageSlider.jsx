"use client";
import React, { useEffect, useState, useRef } from "react";

const ImageSlider = ({ service }) => {
  const images = service?.images || [];
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideInterval = useRef(null);

  // Auto-play functionality
  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, [currentIndex]);

  const startAutoPlay = () => {
    stopAutoPlay();
    slideInterval.current = setInterval(() => {
      nextSlide();
    }, 2500);
  };

  const stopAutoPlay = () => {
    if (slideInterval.current) clearInterval(slideInterval.current);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  // Responsive slides count (1 on mobile, 2 tablet, 4 desktop)
  const [slidesToShow, setSlidesToShow] = useState(5);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setSlidesToShow(1);
      else if (window.innerWidth < 1024) setSlidesToShow(3);
      else setSlidesToShow(5);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleImages = [];
  for (let i = 0; i < slidesToShow; i++) {
    visibleImages.push(images[(currentIndex + i) % images.length]);
  }

  return (
    <div className="w-full py-10 bg-gray-100 select-none">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-800 tracking-wide">
          SITE PHOTOGRAPHS
        </h2>

        {/* Slider container */}
        <div className="relative overflow-hidden">
          <div className="flex transition-transform duration-700 ease-in-out">
            {visibleImages.map((img, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 px-2"
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={img}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-56 object-cover md:h-60 lg:h-64"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            onMouseEnter={stopAutoPlay}
            onMouseLeave={startAutoPlay}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-700 text-white rounded-full w-10 h-10 flex items-center justify-center opacity-80 hover:opacity-100"
          >
            &#10094;
          </button>

          <button
            onClick={nextSlide}
            onMouseEnter={stopAutoPlay}
            onMouseLeave={startAutoPlay}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-700 text-white rounded-full w-10 h-10 flex items-center justify-center opacity-80 hover:opacity-100"
          >
            &#10095;
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
