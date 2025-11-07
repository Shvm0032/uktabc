"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Divider from "@/components/Divider";
import ServiceData from "@/app/services/ServiceData.json";

export default function Services() {
  const router = useRouter();

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

          {/* 🔹 Responsive Service Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
            {ServiceData.map((data, i) => (
              <div
                key={i}
                className="rounded-lg bg-white shadow-lg p-4 flex flex-col gap-3 items-start hover:shadow-xl transition-all duration-300"
              >
                <Image
                  className="w-full rounded-lg h-[220px] sm:h-[250px] object-cover"
                  src={data.mainImage}
                  alt={data.heading}
                  width={500}
                  height={300}
                />
                <h1 className="text-xl sm:text-2xl font-bold text-[#000b51]">
                  {data.heading}
                </h1>
                <p className="text-sm sm:text-md text-gray-700 line-clamp-3">
                  {data?.discription}
                </p>

                <button
                  onClick={() => router.push(`/services/${data.slug}`)}
                  className="bg-gradient-to-r mt-4 from-[#6B1B1B] to-[#141249] text-white px-6 py-3 rounded-full transform transition-all duration-200 hover:scale-95"
                >
                  Read More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
