import { motion } from "framer-motion";
import { Award, Users, Target, Shield } from "lucide-react";
import Divider from "../Divider";

const OurStory = () => {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description:
        "We strive for excellence in every project, ensuring the highest standards of quality and craftsmanship.",
    },
    {
      icon: Shield,
      title: "Safety",
      description:
        "Safety is our top priority. We maintain zero-accident work environments through rigorous safety protocols.",
    },
    {
      icon: Users,
      title: "Teamwork",
      description:
        "Our success is built on collaborative teamwork and strong partnerships with clients and stakeholders.",
    },
    {
      icon: Award,
      title: "Innovation",
      description:
        "We embrace innovative technologies and methodologies to deliver cutting-edge construction solutions.",
    },
  ];

  return (
    <>
      <section className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mission & Vision */}
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Mission & Vision
            </h2>
            <p className="text-gray-600 mt-2 mb-3">
              Driving excellence and innovation in every project we undertake.
            </p>
            <Divider />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-brand-blue text-white rounded-2xl p-8"
            >
              <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg leading-relaxed">
                To deliver exceptional construction projects that contribute to
                India's growth while maintaining the highest standards of
                quality, safety, and environmental responsibility.
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
                To be India's most trusted construction partner, known for
                innovation, reliability, and excellence in transforming
                infrastructure dreams into reality.
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
              className="text-xl text-gray-600 mb-3"
            >
              The principles that guide everything we do
            </motion.p>
            <Divider />
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
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OurStory;
