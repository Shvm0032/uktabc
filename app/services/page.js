'use client';
import ServiceHero from '../../components/Services/ServiceHero';
import ServiceSection from '../../components/Services/ServiceSection';
import CTA from '../../components/Home/CTA';


export default function Service() {
  return (
    <div className="min-h-screen">
      <ServiceHero/>
      <ServiceSection/>
    </div>
  );
}