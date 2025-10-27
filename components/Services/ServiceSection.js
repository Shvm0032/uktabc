"use client";

import { motion } from "framer-motion";
import ServiceCard from "@/components/ServiceCard";
import { Drill, Building2, Loader as Road, Settings } from "lucide-react";
import Divider from "@/components/Divider";
import ServiceData from "@/app/services/ServiceData.json";
import Image from "next/image";
import { useRouter } from "next/navigation";

// const services = [
//   {
//     icon: Drill,
//     title: "Tunnel Construction",
//     description:
//       "Specialized in underground tunnel construction for metro systems, highways, and water management projects.",
//     features: [
//       "Metro tunnel construction",
//       "Highway tunnel boring",
//       "Underground water channels",
//       "Utility tunnel systems",
//       "Safety and ventilation systems",
//     ],
//   },
//   {
//     icon: Building2,
//     title: "Building Construction",
//     description:
//       "Complete building construction services from residential complexes to commercial and industrial facilities.",
//     features: [
//       "Residential complexes",
//       "Commercial buildings",
//       "Industrial facilities",
//       "Educational institutions",
//       "Healthcare facilities",
//     ],
//   },
//   {
//     icon: Road,
//     title: "Infrastructure Development",
//     description:
//       "Comprehensive infrastructure development including roads, bridges, and urban development projects.",
//     features: [
//       "Highway construction",
//       "Bridge construction",
//       "Urban development",
//       "Airport infrastructure",
//       "Port development",
//     ],
//   },
//   {
//     icon: Settings,
//     title: "Project Management",
//     description:
//       "End-to-end project management services ensuring timely delivery and quality control.",
//     features: [
//       "Project planning & design",
//       "Quality assurance",
//       "Safety management",
//       "Resource optimization",
//       "Timeline management",
//     ],
//   },
// ];

export default function Services() {
  const router = useRouter();
  console.log("Service Data:", ServiceData);
  console.log("Service Data");
  return (
    <div className="min-h-screen">
      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What We Do
            </h2>
            <Divider />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive construction services across multiple
              sectors, delivering excellence in every project we undertake.
            </p>
          </motion.div>

          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                delay={index * 0.2}
              />
            ))}
          </div> */}

          {/* //////////////////// My Service Section //////////////////// */}
          <div className="grid grid-cols-3 gap-6 mt-20">
            {ServiceData.map((data, i) => (
              <>
                <div
                  key={i}
                  className="rounded-lg  bg-white shadow-lg p-2 flex flex-col gap-2 items-start"
                >
                  <Image
                    className="w-full rounded-lg h-[250px]"
                    src={data.mainImage}
                    alt={data.heading}
                    width={100}
                    height={100}
                  />
                  <h1 className="text-2xl font-bold text-[#000b51]">
                    {data.heading}
                  </h1>
                  <p className="line-clamp-3 text-md text-black">
                    {data?.discription}
                  </p>

                  <button
                    onClick={() => router.push(`/services/${data.slug}`)}
                    className="bg-gradient-to-r mt-4 from-[#6B1B1B] to-[#141249] text-white px-7 py-3  rounded-full transform transition-all duration-200 hover:scale-95"
                  >
                    Read More
                  </button>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
