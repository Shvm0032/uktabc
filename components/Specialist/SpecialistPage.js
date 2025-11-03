"use client";

import { Droplets, SprayCan, Drill, Waves, Layers, Beaker, Hammer } from "lucide-react";

import Divider from "../Divider";

export default function SpecialistPage() {
  const cards = [
    {
      id: 1,
        icon: <Waves className="w-16 h-16 text-[#A54C4B]" />,
      title: "Grouting",
      description:
        "Grouting is used in specialist foundation engineering to introduce the grout material (water with hydraulic binders and possibly additives) and solutions (soft gel, silicate gel) into the soil. A basic distinction is made between displacement grouting (compaction grouting, hydraulic fracturing) and grouting without displacement of the host material not involving ground displacement (permeation, fissure grouting, bulk-filling).",
    },
    {
      id: 2,
      icon: <Layers className="w-16 h-16 text-[#A54C4B]" />,
      title: "Soil Mixed Methods",
      description:
        "The soil mixed and injected method is particularly ideal in non-cohesive soils for producing cut-off walls as ground­water barrier or to encapsulate inherited pollution, for repairs to dikes and dams or as structurally effective retaining walls for topo-graphical changes and exca­vation pits. In the Mixed-in-Place method, the existing soil is broken with a single or triple auger, transferred and the pore spaces are filled with a binding agent slurry. The indivi­dual dual insertions are combined to walls using the pilgering process. The auger dimensions ultimately deter­mine the insertion size. Reinforce­ments can be inserted into the fresh Mixed-in-Place mix for structural strengthening.",
    },
    {
      id: 3,
      icon: <Hammer  className="w-16 h-16 text-[#A54C4B]" />,
      title: "Cutter Soil Mixing",
      description:
        "The Cutter Soil Mixing method combines properties of the diaphragm wall techniques and the Mixed-in-Place method, and also offers additional advantages: soil can also be mixed at great depths and in densely packed soils by using modified, powerful cutters. Even thicker walls and higher reinforcement levels can also be achieved. As a result, the Cutter Soil Mixing method is used in particular to stabilize particularly deep excavation pits or to reinforce high dams and dikes, in addition to the applications described for the Mixed-in-Place methods.",
    },
    {
      id: 4,
      icon: <Drill className="w-16 h-16 text-[#A54C4B]" />,
      title: "High pressure injection",
      description:
        "High pressure injection is used for reinforcing or deepen-ing building foundations, sealing or stiffening blankets and dam sealing. After a target depth is reached, part of the soil is flushed out with liquid. The binding agent suspension added at the same time strengthens the remaining soil.",
    },
    {
      id: 5,
      icon: <SprayCan className="w-16 h-16 text-[#A54C4B]" />,
      title: "Jet grouting",
      description:
        "A specialist technique for underpinning, reinforcing or deepening building foundations, for sealing or stiffening blankets and for dam sealing. To produce jet grouting bodies a drill rod is drilled into the ground. When the specified depth is reached, an energy-rich liquid – water or water-binder slurry – is jetted through a nozzle at the bottom end of the rod. Simultaneous extraction and rotation of the drill rod causes the liquid jet to erode the soil. A portion of the soil is flushed out with the liquid. With the binder slurry remaining in the soil, a cylindrical plastic concrete body is produced.",
    },
    {
      id: 6,
      icon: <Beaker className="w-16 h-16 text-[#A54C4B]" />,
      title: "Chemical Grouting",
      description:
        "Chemical grouting by use of acrylic, polyurethane, epoxy and silicate resin for waterproofing of underground structures (tunnels, caverns, shafts, dams, etc.) against moisture and pressurised water. Many of the products for preventing water ingress can be adjusted on site to give varying performance properties to suit the conditions using different accelerators, which requires a high demand on experience, material know-how and equipment technology from the specialised applicator. Additional requirements on health/safety and durability aspects have to be considered. UKTABC offers its service in a wide range of application fields. Chemical grouting is often used for the repair of structures, concrete elements or sealing components, where fast-reaction is necessary. The range can vary from a convenient one-component resin for small water sealing jobs to specialist robust multi-component systems to effectively stop massive water ingress problems",
    },
    {
      id: 7,
      icon: <Droplets className="w-16 h-16 text-[#A54C4B]" />,
      title: "Waterproofing & Roof leakage",
      description:
        "UKTABC Waterproofing Service in india. Waterproofing services in India to clients who want to maintain the structural quality and integrity of their buildings long-term. UKTABC specialize in protecting buildings and other infrastructures against degradation. Yes, our buildings, houses, tunnels, highways, bridges, and even sidewalks have been doing their share in making our country stable. Our lives are running smoothly because these infrastructures are there to support us, and they need supporting too. These infrastructures are often subjected to rainfall. With poor maintenance, the roofs and walls of houses and buildings as well as the surfaces of bridges and highways are getting damaged due to water leakage. waterproofing is an important maintenance in India. Waterproofing can help maintain a structure’s stability throughout the years. It protects the property from water leakage that may harm the structure from within. UKTABC provides only the best and complete waterproofing services in India. Metal roof recoating, Rust treatment with Rust Convertor, Sealing up of lapping joints with waterproofing membranes. Gutter, flashings and cappings waterproofing, Application of sealants and roof fasteners replacement. Liquid applied acrylic waterproofing membrane. Torch-on Membrane System, Roof re-coating. Replacement of cracked roof tiles. Sealing of vertical lapping joints. Rectification of water backflow. Re-waterproofing of gutters, roof ridges & flashings etc.",
    },
  ];

  return (
    <section className="py-16 bg-gray-150">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl mb-5 font-semibold text-gray-800">
          Our Areas of Expertise
        </h2>
        <Divider/>
      </div>

      {/* Cards */}
      <div className="flex flex-col items-center gap-8 px-6">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-[#1D1344] max-w-6xl w-full rounded-2xl shadow-md p-6 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex flex-col items-start gap-3">
              <div>{card.icon}</div>
              <h3 className="text-xl font-semibold text-gray-100">
                {card.title}
              </h3>
              <p className="text-gray-100 text-sm leading-relaxed">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
