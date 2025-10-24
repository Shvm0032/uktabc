'use client';

import { motion } from 'framer-motion';
import ServiceCard from '@/components/ServiceCard';
import { Drill, Building2, Loader as Road, Settings } from 'lucide-react';
import Divider from '@/components/Divider';

const services = [
  {
    icon: Drill,
    title: 'Tunnel Construction',
    description: 'Specialized in underground tunnel construction for metro systems, highways, and water management projects.',
    features: [
      'Metro tunnel construction',
      'Highway tunnel boring',
      'Underground water channels',
      'Utility tunnel systems',
      'Safety and ventilation systems'
    ]
  },
  {
    icon: Building2,
    title: 'Building Construction',
    description: 'Complete building construction services from residential complexes to commercial and industrial facilities.',
    features: [
      'Residential complexes',
      'Commercial buildings',
      'Industrial facilities',
      'Educational institutions',
      'Healthcare facilities'
    ]
  },
  {
    icon: Road,
    title: 'Infrastructure Development',
    description: 'Comprehensive infrastructure development including roads, bridges, and urban development projects.',
    features: [
      'Highway construction',
      'Bridge construction',
      'Urban development',
      'Airport infrastructure',
      'Port development'
    ]
  },
  {
    icon: Settings,
    title: 'Project Management',
    description: 'End-to-end project management services ensuring timely delivery and quality control.',
    features: [
      'Project planning & design',
      'Quality assurance',
      'Safety management',
      'Resource optimization',
      'Timeline management'
    ]
  }
];

export default function Services() {
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Do</h2>
            <Divider/>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive construction services across multiple sectors, 
              delivering excellence in every project we undertake.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                delay={index * 0.2}
              />
            ))}
          </div>
        </div>
      </section>

     
    </div>
  );
}