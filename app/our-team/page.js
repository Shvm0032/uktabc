'use client';
import TeamHeroSection from '../../components/OurTeam/TeamPage';
import TeamSection from '../../components/OurTeam/TeamSection';


export default function Home() {
  return (
    <div className="min-h-screen">
      <TeamHeroSection/>
      <TeamSection/>
      
    </div>
  );
}