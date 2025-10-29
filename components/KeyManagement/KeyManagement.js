"use client";
import Image from "next/image";
import Divider from "../Divider";

const team = [
  {
    id: 1,
    name: "Rajesh Sharma",
    designation: "Managing Director",
    image: "/Assets/team/person1.jpg",
  },
  {
    id: 2,
    name: "Anita Verma",
    designation: "Project Head",
    image: "/Assets/team/person2.jpg",
  },
  {
    id: 3,
    name: "Rohit Mehta",
    designation: "Operations Manager",
    image: "/Assets/team/person3.jpg",
  },
  {
    id: 4,
    name: "Kavita Singh",
    designation: "Finance Head",
    image: "/Assets/team/person4.jpg",
  },
  {
    id: 5,
    name: "Suresh Patil",
    designation: "Technical Advisor",
    image: "/Assets/team/person5.jpg",
  },
  {
    id: 6,
    name: "Pooja Nair",
    designation: "HR Manager",
    image: "/Assets/team/person6.jpg",
  },
];

export default function KeyManagement() {
  return (
    <section className="py-16 bg-gray-50">
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
              <div className="w-full h-60 relative">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
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
