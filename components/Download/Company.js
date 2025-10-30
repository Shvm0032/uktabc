import React from 'react';


export default function Company({
  heading = 'Company',
  title = 'Company profile ',
  description = 'UKTABC, incorporated in January 2021 (as per the Certificate of Incorporation), has been operating in India since 2014. Over the years, we have grown into a trusted name known for quality, reliability, and innovation in infrastructure and engineering services.',
  pdfHref = '/docs/your-document.pdf', 
}) {
  return (
    <section className="w-full">
      {/* Top heading with gradient background */}
      <div className="w-full py-5">
        <div className="mx-auto max-w-5xl rounded-lg p-3 bg-gradient-to-r from-[#1C1345] to-[#6C1B1A] text-white">
          <h2 className="text-xl font-semibold">{heading}</h2>
        </div>
      </div>

      {/* Content container */}
      <div className="mx-auto max-w-5xl bg-white border border-b-4 border-[#1D1344] shadow-md rounded-lg p-6 md:flex md:items-center md:justify-between">
        {/* Left side: title + description */}
        <div className="md:w-2/3">
          <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
          <p className="mt-3 text-gray-600 leading-relaxed">{description}</p>
        </div>

        {/* Right side: action button */}
        <div className="mt-6 md:mt-0 md:w-1/3 flex md:justify-end items-center">
          {/* Use an anchor so the browser's native PDF viewer opens in a new tab */}
          <a
            href={pdfHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block transform transition-transform duration-150 ease-in-out"
          >
            <button
              type="button"
              aria-label={`Open ${title} PDF`}
              className="px-6 py-3 bg-[#48172D]  text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-[#48172D] transform transition-transform duration-150 ease-in-out hover:scale-95"
            >
              View PDF
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
