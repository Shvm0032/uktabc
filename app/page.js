'use client';

import Testimonials from '../components/Home/Testimonials';
import HeroSection from '../components/Home/HeroSection';
import About from '../components/Home/About';
import OurTeam from '../components/Home/OurTeam';
import GallerySlider from '../components/Home/GallerySlider';
import Achivements from '../components/Home/Achivements';
import Services from '../components/Home/Services';
import Specialist from '../components/Home/Specialist';

export default function Home() {
  return (
    <div className="min-h-screen">
      
      <HeroSection/>
      <About/>
      <Services/>
      <Achivements />
       <Specialist/>
      <OurTeam/>
      <Testimonials />
      <GallerySlider/> 
    </div>
  );
}