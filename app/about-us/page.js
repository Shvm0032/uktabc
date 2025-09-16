'use client';

import { motion } from 'framer-motion';
import { Award, Users, Target, Shield } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Excellence',
    description: 'We strive for excellence in every project, ensuring the highest standards of quality and craftsmanship.'
  },
  {
    icon: Shield,
    title: 'Safety',
    description: 'Safety is our top priority. We maintain zero-accident work environments through rigorous safety protocols.'
  },
  {
    icon: Users,
    title: 'Teamwork',
    description: 'Our success is built on collaborative teamwork and strong partnerships with clients and stakeholders.'
  },
  {
    icon: Award,
    title: 'Innovation',
    description: 'We embrace innovative technologies and methodologies to deliver cutting-edge construction solutions.'
  }
];

export default function AboutUs() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-96 flex items-center justify-center text-white"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 16, 83, 0.8), rgba(118, 28, 20, 0.8)), url(https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop)',
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
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl"
          >
            Building India's Infrastructure with Excellence
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Established with a vision to transform India's infrastructure landscape, UK Tunnel and Building 
                Construction India Pvt. Ltd. has been at the forefront of construction excellence for over two decades.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our journey began with a simple commitment: to deliver world-class construction projects that 
                stand the test of time. From tunnel construction for metro systems to residential and commercial 
                buildings, we have consistently exceeded client expectations.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Today, we are proud to be recognized as one of India's leading construction companies, with a 
                portfolio that includes some of the country's most significant infrastructure projects.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Construction site"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-brand-blue text-white rounded-2xl p-8"
            >
              <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg leading-relaxed">
                To deliver exceptional construction projects that contribute to India's growth while 
                maintaining the highest standards of quality, safety, and environmental responsibility.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-brand-maroon text-white rounded-2xl p-8"
            >
              <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
              <p className="text-lg leading-relaxed">
                To be India's most trusted construction partner, known for innovation, reliability, 
                and excellence in transforming infrastructure dreams into reality.
              </p>
            </motion.div>
          </div>

          {/* Values */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-gray-900 mb-4"
            >
              Our Values
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600"
            >
              The principles that guide everything we do
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-brand-blue to-brand-maroon rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-700 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}