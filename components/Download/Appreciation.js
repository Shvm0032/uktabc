"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ZoomOut } from "lucide-react";

export default function Appreciation() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [zoomed, setZoomed] = useState(false);

  const images = [
    {
      src: "/Assets/exp-certi/exp-certificate-uktabc.jpg",
      caption: "Certificate of Appreciation – UKTABC",
    },
    {
      src: "/Assets/exp-certi/ritwik-work-exp-certi.jpg",
      caption: "Letter of Appreciation – Ritwik",
    },
    {
      src: "/Assets/exp-certi/Uktabc-exp-letter.jpg",
      caption: "Experience Letter – UKTABC",
    },
  ];

  const handleClose = () => {
    setZoomed(false);
    setSelectedImage(null);
  };

  return (
    <section className="py-10 bg-gray-50 relative">
      {/* Heading */}
      <div className="mx-auto max-w-5xl mb-8 rounded-lg p-2 bg-gradient-to-r from-[#041151] via-[#6F1B17] to-[#041151] text-white text-center shadow-md">
        <h2 className="text-xl md:text-2xl font-semibold">
          Letter of Appreciation
        </h2>
      </div>

      {/* Image Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {images.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className="cursor-pointer overflow-hidden rounded-lg shadow-md bg-white flex flex-col items-center"
            onClick={() => setSelectedImage(item.src)}
          >
            <div className="relative w-full overflow-hidden rounded-t-lg">
              <img
                src={item.src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 flex items-center justify-center transition-all">
                <ZoomIn className="text-white w-8 h-8" />
              </div>
            </div>

            {/* Caption below image */}
            <p className="text-center text-gray-700 text-sm md:text-base font-medium px-3 py-3">
              {item.caption}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Modal Preview */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          >
            <div className="relative max-w-5xl w-full px-4 flex justify-center">
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition z-50"
                onClick={handleClose}
              >
                <X className="w-6 h-6" />
              </button>

              {/* Zoom Button */}
              <button
                className="absolute top-4 left-4 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition z-50"
                onClick={() => setZoomed(!zoomed)}
              >
                {zoomed ? (
                  <ZoomOut className="w-6 h-6" />
                ) : (
                  <ZoomIn className="w-6 h-6" />
                )}
              </button>

              {/* Image Container for zoom */}
              <motion.div
                className={`overflow-hidden rounded-lg shadow-lg ${
                  zoomed ? "cursor-zoom-out" : "cursor-zoom-in"
                }`}
                animate={{
                  scale: zoomed ? 1.5 : 1,
                  rotate: 0,
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <img
                  src={selectedImage}
                  alt="Preview"
                  className="w-full h-auto max-h-[80vh] object-contain rounded-lg select-none pointer-events-auto"
                  onClick={() => setZoomed(!zoomed)}
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
