'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Mumbai Metro Tunnel Project',
    category: 'Tunnel Construction',
    location: 'Mumbai, Maharashtra',
    year: '2023',
    image: 'https://images.pexels.com/photos/162539/architecture-building-amsterdam-blue-162539.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    description: 'Advanced tunnel boring for Mumbai Metro Line 3, featuring state-of-the-art TBM technology.'
  },
  {
    id: 2,
    title: 'Delhi Commercial Complex',
    category: 'Building Construction',
    location: 'New Delhi',
    year: '2023',
    image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    description: 'Modern commercial complex with sustainable design and energy-efficient systems.'
  },
  {
    id: 3,
    title: 'Highway Tunnel - Himachal Pradesh',
    category: 'Tunnel Construction',
    location: 'Himachal Pradesh',
    year: '2022',
    image: 'https://images.pexels.com/photos/3601283/pexels-photo-3601283.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    description: 'Strategic highway tunnel construction through challenging mountainous terrain.'
  },
  {
    id: 4,
    title: 'Residential Township',
    category: 'Building Construction',
    location: 'Bangalore, Karnataka',
    year: '2022',
    image: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    description: 'Premium residential township with modern amenities and green spaces.'
  },
  {
    id: 5,
    title: 'Chennai Industrial Facility',
    category: 'Infrastructure',
    location: 'Chennai, Tamil Nadu',
    year: '2021',
    image: 'https://images.pexels.com/photos/247763/pexels-photo-247763.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    description: 'Large-scale industrial facility with advanced manufacturing infrastructure.'
  },
  {
    id: 6,
    title: 'Kolkata Metro Extension',
    category: 'Tunnel Construction',
    location: 'Kolkata, West Bengal',
    year: '2021',
    image: 'https://images.pexels.com/photos/3601283/pexels-photo-3601283.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    description: 'Underground metro extension with complex engineering challenges.'
  }
];

const categories = ['All', 'Tunnel Construction', 'Building Construction', 'Infrastructure'];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const openModal = (project) => {
    setSelectedImage(project);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    if (!selectedImage) return;
    
    const currentIndex = filteredProjects.findIndex(p => p.id === selectedImage.id);
    let nextIndex;
    
    if (direction === 'next') {
      nextIndex = (currentIndex + 1) % filteredProjects.length;
    } else {
      nextIndex = (currentIndex - 1 + filteredProjects.length) % filteredProjects.length;
    }
    
    setSelectedImage(filteredProjects[nextIndex]);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-96 flex items-center justify-center text-white"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 16, 83, 0.8), rgba(118, 28, 20, 0.8)), url(https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            Project Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl"
          >
            Showcasing Our Construction Excellence
          </motion.p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                  selectedCategory === category
                    ? 'bg-brand-blue text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
                onClick={() => openModal(project)}
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white">
                      <p className="font-semibold">{project.category}</p>
                      <p className="text-sm">{project.location} • {project.year}</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-brand-blue font-semibold mb-2">{project.category}</p>
                  <p className="text-gray-600 text-sm mb-2">{project.location} • {project.year}</p>
                  <p className="text-gray-700 leading-relaxed">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl max-h-full"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-white/20 rounded-full p-2 hover:bg-white/30 transition-colors"
              >
                <X className="h-6 w-6 text-white" />
              </button>
              
              <button
                onClick={() => navigateImage('prev')}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 rounded-full p-2 hover:bg-white/30 transition-colors"
              >
                <ChevronLeft className="h-6 w-6 text-white" />
              </button>
              
              <button
                onClick={() => navigateImage('next')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 rounded-full p-2 hover:bg-white/30 transition-colors"
              >
                <ChevronRight className="h-6 w-6 text-white" />
              </button>
              
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white p-6 rounded-b-lg">
                <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
                <p className="text-lg mb-1">{selectedImage.category}</p>
                <p className="text-sm opacity-90">{selectedImage.location} • {selectedImage.year}</p>
                <p className="mt-2 opacity-90">{selectedImage.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}