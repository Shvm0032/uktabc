'use client';

import Testimonials from '../components/Home/Testimonials';
import HeroSection from '../components/Home/HeroSection';
import About from '../components/Home/About';
import Services from '../components/Home/Services';
import OurTeam from '../components/Home/OurTeam';
import GallerySlider from '../components/Home/GallerySlider';
import CTA from '../components/Home/CTA';
import Achivements from '../components/Home/Achivements';

export default function Home() {
  return (
    <div className="min-h-screen">
      
      <HeroSection/>
      <About/>
      <Services/>
      <Achivements />
      <OurTeam/>
      <Testimonials />
      <GallerySlider/>
      <CTA/>

      
    </div>
  );
}