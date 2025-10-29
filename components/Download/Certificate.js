"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

export default function Certificate() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [zoomed, setZoomed] = useState(false);

  const images = [
    "/Assets/gallery/img1.jpg",
    "/Assets/gallery/img2.jpg",
    "/Assets/gallery/img3.jpg",
    "/Assets/gallery/img4.jpg",
    "/Assets/gallery/img5.jpg",
    "/Assets/gallery/img6.jpg",
  ];

  return (
    <section className="py-20 bg-gray-50 relative">
      {/* Gradient Heading */}
      <div className="text-center mb-12">
        <div className="inline-block px-10 py-3 rounded-full bg-gradient-to-r from-[#041151] via-[#6F1B17] to-[#041151] text-white text-md md:text-xl font-semibold shadow-md">
          Certificate of Registration
        </div>
      </div>

      {/* Image Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {images.map((src, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className="relative cursor-pointer overflow-hidden rounded-lg shadow-md"
            onClick={() => setSelectedImage(src)}
          >
            <img
              src={src}
              alt={`Gallery ${index + 1}`}
              className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 flex items-center justify-center transition-all">
              <ZoomIn className="text-white w-8 h-8" />
            </div>
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
            <div className="relative max-w-3xl w-full px-4">
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition"
                onClick={() => {
                  setSelectedImage(null);
                  setZoomed(false);
                }}
              >
                <X className="w-6 h-6" />
              </button>

              {/* Zoom Button */}
              <button
                className="absolute top-4 left-4 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition"
                onClick={() => setZoomed(!zoomed)}
              >
                <ZoomIn className="w-6 h-6" />
              </button>

              <motion.img
                key={selectedImage}
                src={selectedImage}
                alt="Preview"
                initial={{ scale: 0.8 }}
                animate={{ scale: zoomed ? 1.3 : 1 }}
                transition={{ duration: 0.4 }}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-lg"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
