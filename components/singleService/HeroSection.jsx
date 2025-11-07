import React from 'react';

const HeroSection = ({service}) => {
  return (
    <div
      className="relative w-full h-[60vh] flex items-center justify-center bg-center bg-cover"
      style={{
        backgroundImage: `url('${service?.mainImage}')`, 
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Text */}
      <div className="relative text-center z-10">
        <h1 className="text-white text-xl md:text-6xl font-bold uppercase tracking-wide">
          {service?.heading.toUpperCase()}
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
