import React from "react";

// Example data (tu chahe to API ya JSON se import kar sakta hai)
const detailsData = [
    {
        title: "Chemical Grouting",
        bgColor: "bg-yellow-100",
        textColor: "text-black",
        image: "/images/chemical-grouting.jpg",
        description: [
            "Chemical injection grouting method is used for the repair of structures, tunnel face stabilization, sealing of concrete elements, with fast-reaction time as needed.",
            "Depending upon site requirement, performance can be achieved using different accelerators requiring high skill and specialized equipment.",
        ],
        points: [
            "Crack Sealingh and Concrete Repair",
            "Ground consolidation and stabilization",
            "Arresting water and air permeation",
            "Cavity Filling",
        ],
    },
    {
        title: "Cement Grouting",
        bgColor: "bg-gray-800",
        textColor: "text-white",
        image: "/images/cement-grouting.jpg",
        description: [
            "In construction, unexpected water ingress and poor ground conditions affect construction activity and escalate cost.",
            "Cement grouting is generally carried out with cementitious products including additives, hydraulic binders, expanders or wash-out admixtures.",
        ],
        points: [
            "Grouting measures for compensation",
            "Consolidation and permeation",
            "Curtain grouting (e.g., in dam construction)",
        ],
    },


];

const DetailsSection = ({ service }) => {
    return (

        <>


            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
                {service?.details ? service?.details?.map((data, index) => {
                    const isEven = index % 2 === 1;

                    return (

                        <div
                            key={index}
                            className={`grid md:grid-cols-2 gap-8 items-start relative ${isEven ? "md:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Image */}
                            <div
                                className={` md:sticky md:top-[100px] ${isEven ? "md:order-2" : "md:order-1"
                                    } order-1 md:col-span-1 `}
                            >
                                <img
                                    src={data.image}
                                    alt={data.title}
                                    className="rounded-lg shadow-lg w-full object-cover"
                                />
                            </div>

                            {/* Text */}
                            <div
                                className={`${isEven ? "md:order-1" : "md:order-2"
                                    } order-2 md:col-span-1`}
                            >

                                {
                                    data?.heading && (
                                        <h2
                                            className={`text-xl w-full text-center md:text-2xl font-semibold inline-block px-4 py-2 rounded bg-gradient-to-r from-[#6B1B1B] to-[#141249]  text-white`}
                                        >
                                            {data?.heading}
                                        </h2>
                                    )
                                }



                                <p

                                    className="mt-4 text-gray-700 leading-relaxed dark:text-gray-300"
                                >
                                    {data?.discription}
                                </p>


                                {data?.list && (
                                    <ul className="mt-4 list-disc list-inside text-gray-700 space-y-1 dark:text-gray-300">
                                        {data?.list.map((point, i) => (
                                            <li key={i}>{point}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    );
                }) : null}
            </div>

        </>
    );
};

export default DetailsSection;
