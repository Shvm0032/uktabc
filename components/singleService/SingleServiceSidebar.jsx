"use client";
import React from "react";
import { useRouter } from "next/navigation";
import ServiceData from "@/app/services/ServiceData.json" 

const SingleServiceSidebar = ({ service }) => {
    const router = useRouter();
    const currentService = service?.heading?.toLowerCase() || "";

    const serviceList = [
        "Tunnel",
        "Waterproofing",
        "Injection Grouting",
        "Coastal Protection",
        "Slope Protection/ Retaining Wall",
        "Precast",
        "MEP",
    ];

    return (
        <div className="w-full bg-white border border-gray-300 p-5 text-base shadow-md rounded-md">
            {/* Services Section */}
            <div className="mb-8">
                <h3 className="bg-gradient-to-r from-[#6B1B1B] to-[#141249] text-white text-center py-2 font-semibold text-lg rounded-sm">
                    Services
                </h3>
                <ul className="mt-4 border-t border-gray-300">
                    {ServiceData?.map((item, index) => {
                        const isActive = currentService.includes(item?.heading?.toLowerCase());
                        return (
                            <li
                                onClick={() => router.push(`/services/${item.slug}`)}
                                key={index}
                                className="flex items-center cursor-pointer border-b border-gray-200 py-2 text-[15px]"
                            >
                                <span
                                    className={`cursor-pointer transition font-medium ${isActive
                                        ? "text-[#1b1346] font-semibold"
                                        : "text-black hover:text-[#1b1346]"
                                        }`}
                                >
                                    {item?.heading}
                                </span>
                            </li>
                        );
                    })}
                </ul>
            </div>

            {/* Contact Us Section */}
            <div>
                <h3 className="bg-gradient-to-r mt-4 from-[#6B1B1B] to-[#141249] text-white text-center py-2 font-semibold text-lg rounded-sm">
                    Contact Us
                </h3>
                <form className="mt-4 space-y-4">
                    <div>
                        <label className="text-gray-700 text-[15px] font-medium">
                            Your name
                        </label>
                        <input
                            type="text"
                            className="w-full border border-gray-400 mt-1 px-3 py-2 text-[15px] rounded-sm focus:outline-none focus:ring-1 focus:ring-gray-600"
                        />
                    </div>
                    <div>
                        <label className="text-gray-700 text-[15px] font-medium">
                            Your email
                        </label>
                        <input
                            type="email"
                            className="w-full border border-gray-400 mt-1 px-3 py-2 text-[15px] rounded-sm focus:outline-none focus:ring-1 focus:ring-gray-600"
                        />
                    </div>
                    <div>
                        <label className="text-gray-700 text-[15px] font-medium">
                            Your message (optional)
                        </label>
                        <textarea
                            className="w-full border border-gray-400 mt-1 px-3 py-2 text-[15px] rounded-sm focus:outline-none focus:ring-1 focus:ring-gray-600"
                            rows="3"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="bg-gray-700 bg-gradient-to-r mt-4 from-[#6B1B1B] to-[#141249] text-white px-8 py-2 text-[15px] font-medium hover:bg-gray-800 transition rounded-sm"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SingleServiceSidebar;
