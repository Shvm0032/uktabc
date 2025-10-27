"use client";
import Image from "next/image";
import Divider from "../Divider";
import Link from "next/link";
import Service from "@/app/services/ServiceData.json"
import { useRouter } from "next/navigation";

export default function Services() {
  const router = useRouter();
  
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
          {Service?.slice(0, 3)?.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 p-4 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 w-full rounded-xl overflow-hidden mb-4">
                  <Image
                    src={card?.mainImage}
                    alt={card.heading}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-[#0D114C] mb-2">
                  {card?.heading}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                 {card?.discription}
                </p>
              </div>
              <button 
              onClick={() => router?.push(`/services/${card?.slug}`)}
              className="mt-auto bg-gradient-to-r from-[#6C1B1A] to-[#0D114C] text-white text-sm font-medium px-6 py-2 rounded-full transform transition-transform duration-300 hover:scale-95">
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
