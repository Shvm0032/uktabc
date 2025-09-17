'use client';
import Image from "next/image";
import { motion } from "framer-motion";
import Divider from '../Divider'

const Services = () => {
    const services = [
    {
      img: "/Assets/home-slider/home-slider-2.jpg",
      title: "Tunneling & Grouting",
      text: "Tunneling is one of the core competencies of UKTABC. The company has been involved as a sub- contractor, family partner specialist and manufacturer of grouting equipment for the execution of mechanized and conventional tunnel construction works in relation to large and complex projects in India.",
    },
    {
      img: "/Assets/home-slider/home-slider-3.jpg",
      title: "Waterproofing & Roof leakage",
      text: "UKTABC Waterproofing Service in india. Waterproofing services in India to clients who want to maintain the structural quality and integrity of their buildings long-term. UKTABC specialize in protecting buildings and other infrastructures against degradation. Yes, our buildings, houses, tunnels, highways, bridges, and even sidewalks have been doing their share in making our country stable. Our lives are running smoothly because these infrastructures are there to support us, and they need supporting too. These infrastructures are often subjected to rainfall. With poor maintenance, the roofs and walls of houses and buildings as well as the surfaces of bridges and highways are getting damaged due to water leakage. waterproofing is an important maintenance in India. Waterproofing can help maintain a structure’s stability throughout the years. It protects the property from water leakage that may harm the structure from within. UKTABC provides only the best and complete waterproofing services in India. Metal roof recoating, Rust treatment with Rust Convertor, Sealing up of lapping joints with waterproofing membranes. Gutter, flashings and cappings waterproofing, Application of sealants and roof fasteners replacement. Liquid applied acrylic waterproofing membrane. Torch-on Membrane System, Roof re-coating. Replacement of cracked roof tiles. Sealing of vertical lapping joints. Rectification of water backflow. Re-waterproofing of gutters, roof ridges & flashings etc.",
    },
    {
      img: "/Assets/home-slider/home-slider-4.jpg",
      title: "Building Design & Construction",
      text: "UKTABC is one of the few construction companies to build sturdy buildings that turn our client’s vision into reality. Whether it's for residential, commercial or a full-fledged building construction company. We cater to the differing needs of all our clients. We prepare detailed plans for the space, showing the color scheme, materials, lighting and soft furnishings of your choice",
    },
  ];
  return (
    <>
     <section className="relative py-20 bg-gray-100">
      {/* Background Overlay Image */}
      <div className="absolute inset-0">
        <Image
          src="/Assets/home-slider/home-slider-1.jpg"
          alt="Services Background"
          fill
          className="object-cover opacity-60"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <motion.h2
          className="text-4xl font-bold text-gray-800 mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Services
        </motion.h2>

        <Divider/>

        {/* Services Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              {/* Image */}
              <Image
                src={service.img}
                alt={service.title}
                width={100}
                height={100}
                className="mb-4 rounded-md h-[200px] w-[400px]"
              />

              {/* Title */}
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>

              {/* Text (truncate to ~25 words) */}
              <p className="text-gray-600 mb-4">
                {service.text.split(" ").slice(0, 15).join(" ")}...
              </p>

              {/* Read More Button */}
              <button className="px-4 py-2 rounded-full bg-gradient-to-r from-brand-blue to-brand-maroon text-white text-sm hover:scale-95 transition-transform">
                Read More
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}

export default Services