"use client";

import { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

// Dynamically import lightbox with proper configuration
const Lightbox = dynamic(() => import("yet-another-react-lightbox"), {
  ssr: false,
  loading: () => null,
});

// Import lightbox plugins and styles
import "yet-another-react-lightbox/styles.css";

export default function ImageGallerySection() {
  const images = [
    "/Assets/dummy-img.png",
    "/Assets/dummy-img.png",
    "/Assets/dummy-img.png",
    "/Assets/dummy-img.png",
    "/Assets/dummy-img.png",
    "/Assets/dummy-img.png",
  ];

  const heading = "Our Project Gallery";
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle image click
  const handleImageClick = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  // Close lightbox
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <section className="w-full py-10">
      {/* Gradient Heading */}
      <div className="w-full py-8">
        <div className="mx-auto max-w-5xl rounded-lg p-3 bg-gradient-to-r from-[#1C1344] to-[#5B1923] text-white text-left">
          <h2 className="text-xl font-semibold">{heading}</h2>
        </div>
      </div>

      {/* Image Grid */}
      <div className="mx-auto max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative w-full h-64 cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-lg transition duration-300 group"
            onClick={() => handleImageClick(index)}
          >
            <Image
              src={img}
              alt={`Gallery Image ${index + 1}`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              priority={index < 3}
            />
            
            {/* Overlay effect */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
          </div>
        ))}
      </div>

      {/* Lightbox Popup */}
      {isOpen && (
        <Lightbox
          open={isOpen}
          close={handleClose}
          index={currentIndex}
          slides={images.map((src, idx) => ({ 
            src: src,
            alt: `Gallery Image ${idx + 1}`
          }))}
          controller={{ closeOnBackdropClick: true }}
          render={{
            buttonClose: () => (
              <button 
                className="yarl__button yarl__button_close"
                onClick={handleClose}
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: 'rgba(0,0,0,0.5)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  fontSize: '20px',
                  zIndex: 9999
                }}
              >
                ×
              </button>
            )
          }}
        />
      )}
    </section>
  );
}