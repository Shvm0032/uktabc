"use client";
import React from "react";
import Image from "next/image";
import { Building2, Shield } from "lucide-react";
import { FaHardHat } from "react-icons/fa"; 
import { MdFactory } from "react-icons/md";
import Divider from '../Divider'


const AboutUs = () => {
  return (
    <>
     <section className="py-5 mb-10 bg-gray-50">
      {/* Heading + Divider */}
      <div className="text-center mb-5">
        <h2 className="text-4xl font-bold text-gray-800">About Us</h2>
      </div>
       <Divider/>

      {/* Text + Image */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Text */}
        <div>
          <h3 className="text-2xl font-semibold text-brand-blue mb-4">
            Building Tomorrow with Excellence
          </h3>
          <p className="text-gray-700 mb-4 leading-relaxed text-justify">
            UK Tunnel and Building Construction India Pvt. Ltd. is dedicated to
            delivering world-class infrastructure solutions. With 25+ years of
            experience in tunnel construction, building projects, and
            large-scale developments, we ensure quality, safety, and
            sustainability in everything we do.
          </p>
          <p className="text-gray-700 leading-relaxed text-justify">
            Our mission is to shape the future of infrastructure in India
            through innovation, dedication, and precision engineering.
          </p>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <Image
            src="/Assets/about/about.jpg"
            alt="About Image"
            width={100}
            height={100}
            className="rounded-lg shadow-lg h-[300px] w-[500px]"
          />
        </div>
      </div>

      {/* Features Boxes */}
      <div className="max-w-6xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 px-6 lg:px-12">
        {/* Box 1 */}
        <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
        
          <FaHardHat className=" text-brand-maroon h-12 w-12 mb-4"/>
          <h4 className="text-xl font-semibold mb-2 text-left">Business Areas</h4>
          <ul className="text-gray-600 list-disc marker:text-brand-maroon list-inside text-left space-y-2">
            <li>Excavation - Tunnel, Road, Railway and Hydro.</li>
            <li>Building Construction - Commercial, Industrial and Residential.</li>
            <li>Under ground support system and Concrete lining.</li>
            <li>Power - Hydro projects.</li>
            <li>Grouting - All type of Groutings.</li>
            <li>Waterproofing - Tunnel, Bunker and Buildings.</li>
            <li>Water - Water supply and sanitation, under ground concrete water tank, steel water tank, MS and GI pipe line water supply.</li>
          </ul>
        </div>

        {/* Box 2 */}
        <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
          <MdFactory className=" text-brand-blue h-12 w-12 mb-4" />
          <h4 className="text-xl font-semibold mb-2 text-left">Our Commitment</h4>
         <ul className="text-gray-600 list-disc marker:text-brand-blue list-inside text-left space-y-4">
            <li>Safety & Quality.</li>
            <li>Team Work.</li>
            <li>Professional Liability.</li>
            <li>Dedicated To Our Clients.</li>
            <li>Outstanding Services.</li>
            <li>Customer Satisfaction.</li>
            <li>Timely Delivery.</li>
          </ul>
        </div>
      </div>
    </section>
    </>
  )
}

export default AboutUs