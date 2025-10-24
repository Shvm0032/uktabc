"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";

export default function StudentActivities() {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const lastPosition = useRef({ x: 0, y: 0 });

  const tabs = [
    {
      title: "All",
      images: [
        "/Assets/gallery/img101.jpg",
        "/Assets/gallery/img102.jpg",
        "/Assets/gallery/img103.jpg",
        "/Assets/gallery/img104.jpg",
        "/Assets/gallery/img105.jpg",
        "/Assets/gallery/tunnel/tunnel1.jpg",
        "/Assets/gallery/tunnel/tunnel2.jpg",
        "/Assets/gallery/tunnel/tunnel3.jpg",
        "/Assets/gallery/tunnel/tunnel4.jpg",
        "/Assets/gallery/tunnel/tunnel5.jpg",
        "/Assets/gallery/tunnel/tunnel6.jpg",
        "/Assets/gallery/tunnel/tunnel7.jpg",
        "/Assets/gallery/tunnel/tunnel8.jpg",
        "/Assets/gallery/tunnel/tunnel9.jpg",
      ],
    },
    {
      title: "Tunnel Construction",
      images: [
        "/Assets/gallery/tunnel/tunnel1.jpg",
        "/Assets/gallery/tunnel/tunnel2.jpg",
        "/Assets/gallery/tunnel/tunnel3.jpg",
        "/Assets/gallery/tunnel/tunnel4.jpg",
        "/Assets/gallery/tunnel/tunnel5.jpg",
        "/Assets/gallery/tunnel/tunnel6.jpg",
        "/Assets/gallery/tunnel/tunnel7.jpg",
        "/Assets/gallery/tunnel/tunnel8.jpg",
        "/Assets/gallery/tunnel/tunnel9.jpg",
      ],
    },
    {
      title: "Building Construction",
      images: [
        "/Assets/gallery/img102.jpg",
        "/Assets/gallery/img103.jpg",
        "/Assets/gallery/img104.jpg",
      ],
    },
    {
      title: "Infrastructure",
      images: [
        "/Assets/gallery/img102.jpg",
        "/Assets/gallery/img103.jpg",
        "/Assets/gallery/img104.jpg",
      ],
    },
  ];

  // Handle zoom via scroll or pinch
  const handleWheel = (e) => {
    e.preventDefault();
    setZoom((prev) => Math.min(Math.max(prev + e.deltaY * -0.001, 1), 3));
  };

  // Handle mouse drag for panning
  const handleMouseDown = (e) => {
    if (zoom === 1) return;
    setDragging(true);
    lastPosition.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e) => {
    if (!dragging) return;
    const dx = e.clientX - lastPosition.current.x;
    const dy = e.clientY - lastPosition.current.y;
    lastPosition.current = { x: e.clientX, y: e.clientY };
    setPosition((prev) => ({ x: prev.x + dx, y: prev.y + dy }));
  };

  const handleMouseUp = () => setDragging(false);

  // Reset zoom when closing
  const handleClose = () => {
    setSelectedImage(null);
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  };

  return (
    <section className="py-16 px-6 bg-white">
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-5 py-2 rounded-full text-sm font-medium border transition-all ${
              activeTab === index
                ? "bg-[#00306E] text-white border-[#00306E]"
                : "border-[#00306E] text-gray-700 hover:bg-gray-100"
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-6xl mx-auto"
        >
          {tabs[activeTab].images.map((src, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => setSelectedImage(src)}
            >
              <Image
                src={src}
                alt={`gallery-${i}`}
                width={400}
                height={300}
                className="rounded-lg object-cover w-full h-48 transition-transform group-hover:scale-105"
              />
            </div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 md:top-6 md:right-6 text-white bg-black/60 p-2 rounded-full hover:bg-black transition z-50"
            >
              <X size={24} />
            </button>

            {/* Zoomable Image */}
            <div
              className="relative w-full max-w-5xl h-full flex items-center justify-center overflow-hidden cursor-grab active:cursor-grabbing"
              onWheel={handleWheel}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              <motion.img
                src={selectedImage}
                alt="Zoomable"
                className="rounded-lg select-none max-h-[85vh] object-contain"
                style={{
                  transform: `scale(${zoom}) translate(${
                    position.x / zoom
                  }px, ${position.y / zoom}px)`,
                  transition: dragging ? "none" : "transform 0.2s ease",
                }}
                draggable="false"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
