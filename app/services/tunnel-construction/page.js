"use client";

import ServiceHero from '@/components/Services/ServiceHero';
import ServiceChooseUs from '@/components/Services/ServiceChooseUs';
import FeatureService from '@/components/Services/FeatureService';
import HowWeWorkTimeline from '@/components/Services/HowWeWorkTimeline';
import ServiceCTA from '@/components/Services/ServiceCTA';

// Icons
import { FaWater, FaMountain, FaIndustry, FaTools, FaShieldAlt, FaProjectDiagram } from 'react-icons/fa';
import { Lightbulb, ClipboardCheck, Hammer, Building } from 'lucide-react';

export default function TunnelConstruction() {
 const features = [
    { 
      icon: <FaTools />, 
      title: "Grouting", 
      description: "Stabilizes soil by injecting grout materials, including water with hydraulic binders and additives. Techniques include displacement grouting (compaction, hydraulic fracturing) and non-displacement grouting (permeation, fissure, bulk-filling), suitable for improving soil strength and reducing settlement in tunneling projects." 
    },
    { 
      icon: <FaMountain />, 
      title: "Soil Mixed Methods", 
      description: "Particularly ideal for non-cohesive soils, this method produces cut-off walls as groundwater barriers, encapsulates contamination, and strengthens retaining structures. The soil is broken, mixed with binding agents, and reinforced for high structural stability, making it perfect for excavation pits, dikes, and dams." 
    },
    { 
      icon: <FaIndustry />, 
      title: "Cutter Soil Mixing", 
      description: "Combines diaphragm wall and mixed-in-place techniques to mix soil at great depths or in densely packed soils. Supports thicker walls and higher reinforcement, stabilizes deep excavation pits, and reinforces large dams, providing exceptional structural integrity in challenging geological conditions." 
    },
    { 
      icon: <FaShieldAlt />, 
      title: "High Pressure Injection", 
      description: "Reinforces foundations, seals dams, and stiffens blankets by injecting binding agent at high pressure into the soil. Ensures improved load-bearing capacity, reduces soil permeability, and strengthens underground structures for long-term durability." 
    },
    { 
      icon: <FaProjectDiagram />, 
      title: "Jet Grouting", 
      description: "Specialist technique for underpinning and reinforcing foundations. High-energy fluid jets erode soil while injecting binder slurry, creating strong cylindrical concrete-like structures underground. Ideal for dams, tunnels, and areas requiring precise structural reinforcement." 
    },
    { 
      icon: <FaWater />, 
      title: "Chemical Grouting", 
      description: "Uses acrylic, polyurethane, epoxy, and silicate resins to waterproof and strengthen underground structures. Applied for tunnels, shafts, dams, and foundations where rapid reaction and high durability are required. Offers customizable solutions for complex water ingress or structural issues." 
    },
  ];

  const steps = [
    {
      icon: <Lightbulb className="h-8 w-8 text-white" />,
      title: 'Idea & Consultation',
      description: 'We start by understanding your needs, vision, and goals.'
    },
    {
      icon: <ClipboardCheck className="h-8 w-8 text-white" />,
      title: 'Planning & Design',
      description: 'Detailed project planning and finalizing design layouts.'
    },
    {
      icon: <Hammer className="h-8 w-8 text-white" />,
      title: 'Execution',
      description: 'Skilled professionals bring the plan to life with quality.'
    },
    {
      icon: <Building className="h-8 w-8 text-white" />,
      title: 'Handover',
      description: 'Final inspection and successful delivery of the project.'
    }
  ];

  return (
    <>
      <ServiceHero
        title="Tunnel Construction & Grouting"
        tagline="Specialized underground and foundation solutions for metro systems, highways, and large-scale infrastructure projects."
        bgImage="/Assets/services/tunnel-bg.jpg"
      />

      <ServiceChooseUs
        title="Why Choose UKTABC?"
        description="Tunneling is one of the core competencies of UKTABC. The company has served as a trusted sub-contractor in numerous high-profile projects across the country, offering expertise in grouting, foundation reinforcement, and complex underground constructions. Our solutions prioritize safety, efficiency, and durability, leveraging advanced technology and highly skilled teams for every project."
        features={[
          "Expertise in underground tunnels, from planning to execution",
          "Dedicated project management for seamless coordination",
          "Strict adherence to safety standards and regulatory compliance",
        ]}
        image="/Assets/services/tunnel-about.jpg"
      />

      <FeatureService
        title="Tunneling Methods"
        subtitle="UKTABC specializes in various tunneling techniques, ensuring safety, efficiency, and structural integrity for underground and building works across India."
        features={features}
      />

      <HowWeWorkTimeline
        title="How We Work"
        subtitle="Our structured approach ensures efficiency, safety, and quality."
        steps={steps}
      />
      <ServiceCTA
        title="Expert Tunnel Construction & Grouting"
        subtitle="Delivering safe, efficient, and high-quality underground infrastructure solutions across India."
        buttonText="Get a Free Consultation"
        buttonLink="/contact-us"
        bgImage="/Assets/services/tunnel-cta.jpg"
      />
    </>
  );
}
