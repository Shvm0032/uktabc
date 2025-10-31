'use client';
import TeamHeroSection from '../../components/OurLeadershipAndTeam/TeamPage';
import TeamSection from '../../components/OurLeadershipAndTeam/TeamSection';
import KeyManagement from "../../components/OurLeadershipAndTeam/KeyManagement";
import JoinUs from "../../components/OurLeadershipAndTeam/JoinUs";


export default function OurLeadershipAndTeam() {
  return (
    <div className="min-h-screen">
      <TeamHeroSection/>
      <TeamSection/>
      <KeyManagement/>
      <JoinUs/>
      
    </div>
  );
}