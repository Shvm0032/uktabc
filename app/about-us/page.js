'use client';
import AboutHeroSlider from '../../components/About/AboutHeroSlider';
import AboutUs from '../../components/About/AboutUs';
import OurStory from '../../components/About/OurStory';
import OurTeam from '../../components/Home/OurTeam';
import GallerySlider from '@/components/Home/GallerySlider';


export default function About() {
  return (
    <div className="min-h-screen">
      <AboutHeroSlider/>
      <AboutUs/>
      <OurStory/>
      <OurTeam/>
      <GallerySlider/>
    </div>
  );
}