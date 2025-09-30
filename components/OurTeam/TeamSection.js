'use client';

import { motion } from 'framer-motion';
import { Linkedin, Mail, Phone } from 'lucide-react';
import Divider from "../Divider";


const teamMembers = [
  {
    name: 'Rajesh Kumar Sharma',
    position: 'Managing Director & CEO',
    experience: '25+ Years',
    specialization: 'Project Management & Strategic Planning',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    email: 'rajesh.sharma@uktunnel.in',
    phone: '+91 98765 43210'
  },
  {
    name: 'Dr. Priya Patel',
    position: 'Chief Technical Officer',
    experience: '20+ Years',
    specialization: 'Tunnel Engineering & Geotechnical Analysis',
    image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    email: 'priya.patel@uktunnel.in',
    phone: '+91 98765 43211'
  },
  {
    name: 'Suresh Gupta',
    position: 'Chief Operations Officer',
    experience: '22+ Years',
    specialization: 'Construction Management & Quality Control',
    image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    email: 'suresh.gupta@uktunnel.in',
    phone: '+91 98765 43212'
  },
  {
    name: 'Kavita Reddy',
    position: 'Head of Safety & Environment',
    experience: '18+ Years',
    specialization: 'Safety Management & Environmental Compliance',
    image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    email: 'kavita.reddy@uktunnel.in',
    phone: '+91 98765 43213'
  },
  {
    name: 'Amit Singh',
    position: 'Chief Financial Officer',
    experience: '16+ Years',
    specialization: 'Financial Planning & Risk Management',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    email: 'amit.singh@uktunnel.in',
    phone: '+91 98765 43214'
  },
  {
    name: 'Sunita Krishnan',
    position: 'Head of Human Resources',
    experience: '14+ Years',
    specialization: 'Talent Management & Organizational Development',
    image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    email: 'sunita.krishnan@uktunnel.in',
    phone: '+91 98765 43215'
  }
];

export default function OurTeam() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <Divider/>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced leadership team brings together decades of expertise in 
              construction, engineering, and project management.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-brand-blue font-semibold mb-2">{member.position}</p>
                  <p className="text-brand-maroon text-sm font-medium mb-3">{member.experience} Experience</p>
                  <p className="text-gray-600 text-sm mb-4">{member.specialization}</p>
                  
                  <div className="flex space-x-3 pt-4 border-t">
                    <a 
                      href={`mailto:${member.email}`}
                      className="text-gray-400 hover:text-brand-blue transition-colors"
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                    <a 
                      href={`tel:${member.phone}`}
                      className="text-gray-400 hover:text-brand-blue transition-colors"
                    >
                      <Phone className="h-5 w-5" />
                    </a>
                    <a 
                      href="#"
                      className="text-gray-400 hover:text-brand-blue transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Join Our Team</h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We're always looking for talented individuals who share our passion for 
              excellence and innovation in construction. Explore career opportunities 
              with us and be part of building India's future.
            </p>
            <a 
              href="/career" 
              className="btn-primary text-lg px-8 py-4"
            >
              View Career Opportunities
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}