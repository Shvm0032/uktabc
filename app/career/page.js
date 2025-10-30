'use client';
import CareersHero from '../../components/Careers/CareersHero';
import JobOpeningSection from '../../components/Careers/JobOpeningSection';
import ApplicationProcess from '../../components/Careers/ApplicationProcess';

export default function Gallery() {
  return (
    <div className="min-h-screen">
      
      <CareersHero/>
      <JobOpeningSection/>
      <ApplicationProcess/>

    </div>
  );
}