'use client';

import { useState } from 'react';
import Divider from "@/components/Divider";

export default function InteriorDesignGallery({ designs }) {
  const [lightbox, setLightbox] = useState({ open: false, img: "" });

  const openLightbox = (img) => setLightbox({ open: true, img });
  const closeLightbox = () => setLightbox({ open: false, img: "" });

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-6">Living Room Designs</h2>
        <Divider />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {designs.map((design, idx) => (
            <div key={idx} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src={design.image}
                alt={design.title}
                className="w-full h-96 object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => openLightbox(design.image)}
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">{design.title}</h3>
                <p className="text-gray-700">{design.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Overlay */}
      {lightbox.open && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white text-3xl font-bold hover:text-gray-300 transition-colors"
          >
            ×
          </button>
          <img
            src={lightbox.img}
            alt="Preview"
            className="max-h-[90vh] max-w-[90vw] object-contain rounded"
          />
        </div>
      )}
    </section>
  );
}
