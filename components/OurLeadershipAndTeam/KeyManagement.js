"use client";
import Image from "next/image";
import Divider from "../Divider";

const team = [
  {
    id: 1,
    name: "Aradhna Sariyal",
    designation: "IT/Data Entry",
    image: "/Assets/team/aradhna.jpg",
  },
  {
    id: 2,
    name: "Arti Choudhary",
    designation: "Manager Mechanical",
    image: "/Assets/team/arti.jpg",
  },
  {
    id: 3,
    name: "Mohan Singh",
    designation: "Manager Grouting",
    image: "/Assets/team/mohan.jpg",
  },
  {
    id: 4,
    name: "Umed Negi",
    designation: "Manager Fabrication",
    image: "/Assets/team/umid.jpg",
  },
  {
    id: 5,
    name: "Jay Negi",
    designation: "Asst. Manager (Civil)",
    image: "/Assets/team/jay.jpg",
  },
  {
    id: 6,
    name: "Pankaj Singh",
    designation: "Asst. Manager UGSS",
    image: "/Assets/team/Pankaj.jpg",
  },
  {
    id: 7,
    name: "Davendra Singh",
    designation: "Asst. Manager UGSS",
    image: "/Assets/team/Davendra.jpg",
  },
  {
    id: 8,
    name: "Robin Aswal",
    designation: "Asst. Manager (Civil)",
    image: "/Assets/team/Robin.jpg",
  },
  
  
];

export default function KeyManagement() {
  return (
    <section className="py-16 bg-[#F1F5F9]">
      <div className="container mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-3xl mb-5 md:text-4xl font-bold text-gray-800">
          Key Management
        </h2>

        {/* Divider */}
        <Divider/>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 px-36 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {team.map((member) => (
            <div
              key={member.id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 relative"
            >
              <div className="w-full h-[250px] relative">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-content"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-600">{member.designation}</p>
              </div>

              {/* Gradient bottom border */}
              <div className="h-[5px] w-full bg-gradient-to-r from-[#6B1A1A] to-[#181247] absolute bottom-0 left-0"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
