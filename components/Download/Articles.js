"use client";
import React from "react";
import Image from "next/image";
import { pdfs } from "@/data/pdfs";

export default function PdfGallerySection({ heading = "Our Documents" }) {
  return (
    <section className="w-full py-10">
      {/* Top heading with gradient background */}
      <div className="w-full py-8">
        <div className="mx-auto max-w-5xl rounded-lg p-3 bg-gradient-to-r from-[#1C1344] to-[#5B1923] text-white text-center">
          <h2 className="text-xl font-semibold">Article</h2>
        </div>
      </div>

      {/* PDF gallery grid */}
      <div className="mx-auto max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {pdfs.map((pdf, index) => (
          <a
            key={index}
            href={pdf.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200"
          >
            <div className="relative w-full h-64 bg-gray-100">
              <Image
                src={pdf.image}
                alt={pdf.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-3 bg-white text-center">
              <p className="font-medium text-gray-800 group-hover:text-[#0B114D] transition-colors duration-200">
                {pdf.title}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
