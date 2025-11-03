"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Divider from "../Divider";
import Link from "next/link";


export default function Specialist() {
  const cards = [
    {
      id: 1,
      title: "Grouting",
      description:
        "Grouting is used in specialist foundation engineering to introduce the grout material (water with hydraulic binders and possibly additives) and solutions (soft gel, silicate gel) into the soil. A basic distinction is made between displacement grouting (compaction grouting, hydraulic fracturing) and grouting without displacement of the host material not involving ground displacement (permeation, fissure grouting, bulk-filling).",
      image: "/Assets/grouting1.jpg",
    },
    {
      id: 2,
      title: "Soil Mixed Methods",
      description:
        "The soil mixed and injected method is particularly ideal in non-cohesive soils for producing cut-off walls as ground­water barrier or to encapsulate inherited pollution, for repairs to dikes and dams or as structurally effective retaining walls for topo-graphical changes and exca­vation pits. In the Mixed-in-Place method, the existing soil is broken with a single or triple auger, transferred and the pore spaces are filled with a binding agent slurry. The indivi­dual dual insertions are combined to walls using the pilgering process. The auger dimensions ultimately deter­mine the insertion size. Reinforce­ments can be inserted into the fresh Mixed-in-Place mix for structural strengthening.",
      image: "/Assets/soil-mixed.jpg",
    },
    {
      id: 3,
      title: "Cutter Soil Mixing",
      description:
        "The Cutter Soil Mixing method combines properties of the diaphragm wall techniques and the Mixed-in-Place method, and also offers additional advantages: soil can also be mixed at great depths and in densely packed soils by using modified, powerful cutters. Even thicker walls and higher reinforcement levels can also be achieved. As a result, the Cutter Soil Mixing method is used in particular to stabilize particularly deep excavation pits or to reinforce high dams and dikes, in addition to the applications described for the Mixed-in-Place methods.",
      image: "/Assets/cutter.jpg",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl mb-5 font-bold text-gray-800">
          Our Specialization in Construction Works
        </h2>
        <Divider />
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden group transition-all duration-300"
          >
            <div className="overflow-hidden">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  width={500}
                  height={300}
                  className="w-full h-56 object-cover rounded-t-2xl"
                />
              </motion.div>
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {card.description.split(" ").slice(0, 20).join(" ")}...
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="text-center mt-12">
        <Link
          href="/our-specialization-in-construction-works"
          className="bg-gradient-to-r from-[#191245] to-[#6B1B1B] 
             text-white px-6 py-2 rounded-full font-medium 
             hover:from-[#6B1B1B] hover:to-[#191245] hover:text-white 
             transition-all duration-300 shadow-md"
        >
          Read More
         
        </Link>
      </div>
    </section>
  );
}
