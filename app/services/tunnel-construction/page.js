import ServiceHero from '@/components/Services/ServiceHero';
import ServiceChooseUs from '@/components/Services/ServiceChooseUs';
import FeatureService from '@/components/Services/FeatureService';
import { FaWater, FaMountain, FaIndustry, FaTools, FaShieldAlt, FaProjectDiagram, FaFaucet } from 'react-icons/fa';
import HowWeWorkTimeline from '@/components/Services/HowWeWorkTimeline';


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
  { title: 'Survey & Planning', description: 'Detailed site survey and geological study to ensure precise tunneling.' },
  { title: 'Design & Engineering', description: 'Structural and geotechnical design tailored to project requirements.' },
  { title: 'Excavation', description: 'Mechanized or conventional tunneling with safety and efficiency.' },
  { title: 'Grouting & Reinforcement', description: 'Soil stabilization and foundation strengthening using advanced methods.' },
  { title: 'Waterproofing', description: 'Protects tunnels and underground structures from moisture and water ingress.' },
  { title: 'Inspection & Handover', description: 'Safety checks, quality assurance, and project handover.' }
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
        subtitle="Our structured approach ensures efficiency, safety, and quality in every tunneling project we undertake."
        steps={steps}
      />
      
    </>
  );
}
