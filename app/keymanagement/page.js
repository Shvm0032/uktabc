"use client";
import KeyManagement from "../../components/KeyManagement/KeyManagement";
import ManagementHero from "../../components/KeyManagement/ManagementHero";

export default function Home() {
  return (
    <div className="min-h-screen">
      <ManagementHero />
      <KeyManagement />
    </div>
  );
}
