"use client";

import ServiceHero from '@/components/Services/ServiceHero';
import ServiceChooseUs from '@/components/Services/ServiceChooseUs';
import FeatureService from '@/components/Services/FeatureService';
import HowWeWorkTimeline from '@/components/Services/HowWeWorkTimeline';
import ServiceCTA from '@/components/Services/ServiceCTA';
import InteriorDesignGallery from "@/components/Services/InteriorDesignGallery"

// Icons
import { FaCouch, FaRulerCombined, FaPalette, FaDoorOpen, FaLightbulb, FaCogs, FaWarehouse, FaBath } from "react-icons/fa";
import { Lightbulb, ClipboardCheck, Hammer, Building } from "lucide-react";

export default function BuildingConstruction() {
  const features = [
    { icon: <FaCouch />, title: "Interior Design", description: "Space planning, renovation, and decoration projects tailored to client needs." },
    // { icon: <FaCouch />, title: "Living Room Design 1", description: "Neutral palette with blue & grey accents, wooden flooring, PVC wallpaper, flat ceiling, concealed lights, and minimalist furniture." },
    // { icon: <FaCouch />, title: "Living Room Design 2", description: "Teal & white color palette, modern furniture, use of wood, steel, glass, PVC/UPVC, with PVC panel ceiling." },
    // { icon: <FaCouch />, title: "Living Room Design 3", description: "Art deco inspiration with modern furniture, fireplace for cozy vibe, full-height windows for natural light." },
    // { icon: <FaCouch />, title: "Living Room Design 4", description: "Duplex layout with full-height windows, neutral palette, floating staircase with glass railings, black modern furniture." },
    { icon: <FaRulerCombined />, title: "Furniture Placement/Designs", description: "Layouts using new & existing furniture, custom furniture, cabinets, and millwork design." },
    { icon: <FaPalette />, title: "Color Consultant", description: "Color solutions based on client goals and psychology." },
    { icon: <FaRulerCombined />, title: "Basic Sketch", description: "Floor plans, elevations, details, and renderings for selected design." },
    { icon: <FaCogs />, title: "Design in Budget", description: "Affordable yet premium interior design solutions." },
    { icon: <FaDoorOpen />, title: "Doors & Windows", description: "Best and suitable designs for aesthetic doors and windows." },
    { icon: <FaLightbulb />, title: "Lighting Design", description: "Placement, intensity, and color of lights for balance and ambiance." },
    { icon: <FaPalette />, title: "Material Recommendation", description: "Selection of wood, tile, curtain, furniture, laminates, carpet, wallpaper as per design." },
    { icon: <FaWarehouse />, title: "Refurbishing Existing Buildings", description: "Architecture & interior renovation of homes, offices, and public buildings." },
    { icon: <FaCouch />, title: "Modular Kitchen Designs", description: "Custom kitchen furniture, cabinets, tile & flooring selection." },
    { icon: <FaBath />, title: "Kitchen & Bathroom Designs", description: "Basic layouts with sanitary fixture selection." },
    { icon: <FaLightbulb />, title: "False Ceiling Designs", description: "Modern false ceilings with integrated lighting fixtures." },
  ];

  const steps = [
    { icon: <Lightbulb className="h-8 w-8 text-white" />, title: "Planning & Research", description: "We start with client consultations and detailed project research." },
    { icon: <ClipboardCheck className="h-8 w-8 text-white" />, title: "Design & Ideas", description: "Creating sketches, floor plans, 3D renders, and finalizing designs." },
    { icon: <Hammer className="h-8 w-8 text-white" />, title: "Specialized Projects", description: "Execution of tailored designs including interiors, kitchens, and refurbishments." },
    { icon: <Building className="h-8 w-8 text-white" />, title: "Final Outputs", description: "On-time delivery with strong, durable, and elegant buildings." },
  ];

const livingRoomDesigns = [
  {
    title: "Living Room Design 1",
    description: "Neutral palette with blue & grey, wooden flooring, PVC wallpaper, flat ceiling with concealed lights, minimalist furniture.",
    image: "https://images.pexels.com/photos/271667/pexels-photo-271667.jpeg?auto=compress&cs=tinysrgb&w=800", // new image
  },
  {
    title: "Living Room Design 2",
    description: "Teal & white palette, modern furniture, use of wood, steel, glass, PVC/UPVC, with PVC panel ceiling.",
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Living Room Design 3",
    description: "Art deco style with modern furniture, fireplace for cozy vibe, full-height windows for natural light.",
    image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Living Room Design 4",
    description: "Duplex layout with full-height windows, neutral palette, floating staircase, black modern furniture.",
    image: "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];



  return (
    <>
      {/* Hero Section */}
      <ServiceHero
        title="Building Construction"
        tagline="Sturdy buildings that bring your vision into reality – from residential to commercial projects."
        bgImage="/Assets/services/building-bg.jpg"
      />

      {/* About Section */}
      <ServiceChooseUs
        title="Why Choose UKTABC?"
        description="UKTABC is one of the few construction companies to build sturdy buildings that turn our client’s vision into reality. Whether it's residential, commercial, or large-scale projects, we cater to diverse client needs. We prepare detailed plans showing color schemes, materials, lighting, and furnishings of your choice. We also provide detailed drawings, sketches, scale models, and material samples to ensure complete transparency."
        features={[
          "Expertise in both residential & commercial building projects",
          "Transparent planning with drawings, sketches & models",
          "Client-first approach with customization & quality control",
        ]}
        image="/Assets/services/building-about.jpg"
      />

      {/* Feature Services Section */}
      <FeatureService
        title="Our Building & Interior Services"
        subtitle="From living rooms to kitchens, modular furniture to false ceilings, UKTABC offers complete solutions."
        features={features}
      />
      {/* Interior Design Gallery  */}
      <InteriorDesignGallery designs={livingRoomDesigns} />


      {/* Process Timeline */}
      <HowWeWorkTimeline
        title="How We Work"
        subtitle="Our step-by-step process ensures quality, safety, and client satisfaction."
        steps={steps}
      />

      {/* Call To Action */}
      <ServiceCTA
        title="Let’s Build Your Dream Project"
        subtitle="From concept to completion, we deliver durable, elegant, and high-quality construction solutions."
        buttonText="Book a Free Consultation"
        buttonLink="/contact-us"
        bgImage="/Assets/services/building-cta.jpg"
      />
    </>
  );
}
