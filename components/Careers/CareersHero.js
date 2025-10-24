'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Users, Briefcase, CheckCircle } from 'lucide-react';
import Divider from '@/components/Divider';

const jobOpenings = [
  {
    id: 1,
    title: 'Senior Tunnel Engineer',
    department: 'Engineering',
    location: 'Mumbai, Maharashtra',
    type: 'Full-time',
    experience: '5-8 years',
    description: 'Lead tunnel construction projects with focus on metro and highway tunnels.',
    requirements: [
      'B.Tech/M.Tech in Civil Engineering',
      'Experience in tunnel boring machines (TBM)',
      'Knowledge of geotechnical analysis',
      'Project management skills'
    ]
  },
  {
    id: 2,
    title: 'Construction Project Manager',
    department: 'Project Management',
    location: 'New Delhi',
    type: 'Full-time',
    experience: '7-10 years',
    description: 'Oversee large-scale construction projects from planning to completion.',
    requirements: [
      'Civil Engineering degree',
      'PMP certification preferred',
      'Experience in building construction',
      'Strong leadership skills'
    ]
  },
  {
    id: 3,
    title: 'Safety Officer',
    department: 'Safety & Compliance',
    location: 'Bangalore, Karnataka',
    type: 'Full-time',
    experience: '3-5 years',
    description: 'Ensure compliance with safety regulations across all construction sites.',
    requirements: [
      'Safety engineering qualification',
      'NEBOSH/IOSH certification',
      'Knowledge of construction safety',
      'Audit and compliance experience'
    ]
  },
  {
    id: 4,
    title: 'Site Engineer',
    department: 'Engineering',
    location: 'Chennai, Tamil Nadu',
    type: 'Full-time',
    experience: '2-4 years',
    description: 'On-site supervision and quality control for construction activities.',
    requirements: [
      'Civil Engineering degree',
      'AutoCAD proficiency',
      'Field experience',
      'Quality control knowledge'
    ]
  },
  {
    id: 5,
    title: 'Business Development Manager',
    department: 'Sales & Marketing',
    location: 'Pune, Maharashtra',
    type: 'Full-time',
    experience: '4-6 years',
    description: 'Identify new business opportunities and build client relationships.',
    requirements: [
      'Business/Engineering degree',
      'Sales experience in construction',
      'Excellent communication skills',
      'Market analysis capabilities'
    ]
  },
  {
    id: 6,
    title: 'Fresh Graduate Trainee',
    department: 'Various',
    location: 'Multiple locations',
    type: 'Full-time',
    experience: '0-1 years',
    description: 'Comprehensive training program for fresh engineering graduates.',
    requirements: [
      'B.Tech in Civil/Mechanical Engineering',
      'Fresh graduate or 1 year experience',
      'Willingness to relocate',
      'Strong academic record'
    ]
  }
];

const benefits = [
  'Competitive salary packages',
  'Comprehensive health insurance',
  'Performance-based bonuses',
  'Professional development programs',
  'Work-life balance initiatives',
  'Retirement savings plan',
  'Transportation allowance',
  'Annual leave and holidays'
];

export default function Career() {
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-96 flex items-center justify-center text-white"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 16, 83, 0.8), rgba(118, 28, 20, 0.8)), url(https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            Career Opportunities
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl"
          >
            Build Your Future with Us
          </motion.p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Work With Us?</h2>
            <Divider />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join a dynamic team that's shaping India's infrastructure future
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-3"
              >
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <span className="text-gray-700">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Current Openings</h2>
            <Divider/>
            <p className="text-xl text-gray-600">
              Explore exciting career opportunities across various departments
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-brand-blue text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {job.department}
                  </span>
                  <span className="text-brand-maroon font-semibold text-sm">{job.type}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span className="text-sm">{job.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-4 w-4 mr-2" />
                    <span className="text-sm">{job.experience}</span>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed">{job.description}</p>
                
                <button
                  onClick={() => setSelectedJob(job)}
                  className="w-full bg-gradient-to-r from-brand-blue to-brand-maroon text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                >
                  View Details & Apply
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Application Process</h2>
            <Divider/>
            <p className="text-xl text-gray-600 mb-12">
              Simple steps to join our team
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: 1, title: 'Apply Online', desc: 'Submit your application through our portal' },
                { step: 2, title: 'Screening', desc: 'Initial review of your qualifications' },
                { step: 3, title: 'Interview', desc: 'Technical and behavioral assessments' },
                { step: 4, title: 'Join Team', desc: 'Welcome aboard and start building!' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-brand-blue to-brand-maroon rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">{item.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Job Details Modal */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedJob.title}</h2>
                  <div className="flex items-center space-x-4 text-gray-600">
                    <span className="flex items-center">
                      <Briefcase className="h-4 w-4 mr-1" />
                      {selectedJob.department}
                    </span>
                    <span className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {selectedJob.location}
                    </span>
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {selectedJob.experience}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedJob(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Job Description</h3>
                <p className="text-gray-700 leading-relaxed">{selectedJob.description}</p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Requirements</h3>
                <ul className="space-y-2">
                  {selectedJob.requirements.map((req, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex space-x-4">
                <button className="flex-1 bg-gradient-to-r from-brand-blue to-brand-maroon text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
                  Apply Now
                </button>
                <button
                  onClick={() => setSelectedJob(null)}
                  className="flex-1 border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}