'use client';
import Appreciation from "../../components/Download/Appreciation";
import AchievementHero from "../../components/Download/AchievementHero";
import Certificate from "../../components/Download/Certificate";
import Company from "../../components/Download/Company";
import Articles from "../../components/Download/Articles";
import Galleries from "../../components/Download/Galleries";

export default function OurAchievements() {
  return (
    <div className="min-h-screen">
      <AchievementHero/>
      <Appreciation/>
      <Certificate/>
      <Company/>
      <Articles/>
      <Galleries/>


    </div>
  );
}