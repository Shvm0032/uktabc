'use client';
import Appreciation from "../../components/Download/Appreciation";
import AchievementHero from "../../components/Download/achievementHero";
import Certificate from "../../components/Download/Certificate";

export default function Gallery() {
  return (
    <div className="min-h-screen">
      <AchievementHero/>
      <Appreciation/>
      <Certificate/>


    </div>
  );
}