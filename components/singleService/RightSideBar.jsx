"use client";
import React from "react";
import Image from "next/image";

const RightSideBar = ({ service }) => {

    console.log("service in right sidebar:", service);
    return (
        <div className="w-full bg-white  p-4 rounded-md shadow-lg">
            {/* Title */}
            <h3 className="bg-gradient-to-r from-[#6B1B1B] to-[#141249]  text-white text-center py-2 font-semibold text-lg rounded-sm mb-4">
                {service?.heading}
            </h3>

            {/* Image */}
            <div className="w-full mb-4">
                <Image
                    src={service?.mainImage}
                    alt={service?.heading}
                    className="rounded-md w-auto h-[400px]  object-cover"
                    height={100}
                    width={100}
                />
            </div>

            {/* Description */}

            {
                service?.discription?.map((item, i) => (
                    <>

                        <p className="text-gray-800 text-[15px] leading-relaxed text-justify mt-3">
                            {item}
                        </p>
                    </>
                ))
            }

        </div>
    );
};

export default RightSideBar;
