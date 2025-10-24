"use client";
import Image from "next/image";
import Divider from "../Divider";
import Link from "next/link";

export default function Services() {
  const cards = [
    {
      image: "/Assets/home-slider/home-slider-2.jpg",
      title: "Tunneling & Grouting",
      description:
        "Tunneling is one of the core competencies of UKTABC. The company has been involved as a sub-contractor, family partner specialist and manufacturer of grouting equipment for the execution of mechanized and conventional tunnel construction works in relation to large and complex projects in India.",
    },
    {
      image: "/Assets/home-slider/home-slider-3.jpg",
      title: "Waterproofing & Roof leakage",
      description:
        "UKTABC Waterproofing Service in India provides top-notch waterproofing services to help maintain the structural quality and integrity of buildings. We specialize in protecting infrastructures such as roofs, tunnels, and bridges from water leakage and deterioration, ensuring long-lasting stability and safety.",
    },
    {
      image: "/Assets/home-slider/home-slider-4.jpg",
      title: "Building Design & Construction",
      description:
        "UKTABC builds sturdy, high-quality buildings that bring clients' visions to life. From residential to commercial spaces, our team creates detailed designs using premium materials, ensuring beauty, functionality, and durability in every project.",
    },
  ];

  const trimText = (text, wordLimit) => {
    const words = text.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "..."
      : text;
  };

  return (
    <section className="relative bg-gray-50 pt-10 pb-20 md:pb-10">
      {/* Heading + Divider */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0D114C]">
          Our Services
        </h2>
        <Divider />
      </div>

      {/* Background Image */}
      <div className="relative h-[400px] w-full mb-16 md:mb-20">
        <Image
          src="/Assets/services/tunnel-bg.jpg"
          alt="Background"
          fill
          className="object-cover"
        />
      </div>

      {/* Cards Section */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 -mt-40 md:-mt-52">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 p-4 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 w-full rounded-xl overflow-hidden mb-4">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-[#0D114C] mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {trimText(card.description, 18)}
                </p>
              </div>
              <button className="mt-auto bg-gradient-to-r from-[#6C1B1A] to-[#0D114C] text-white text-sm font-medium px-6 py-2 rounded-full transform transition-transform duration-300 hover:scale-95">
                Read More
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Button */}
        <div className="text-center mt-14">
          <Link
            href="/services"
            className="inline-block bg-white text-[#0D114C] border border-[#0D114C] font-medium px-8 py-3 rounded-full transform transition-transform duration-300 hover:scale-95"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
