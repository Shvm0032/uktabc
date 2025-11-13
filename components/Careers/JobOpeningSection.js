import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Divider from "@/components/Divider";
import { MapPin, Clock, Briefcase, CheckCircle, X } from "lucide-react";
import { useState } from "react";
import emailjs from "emailjs-com";

const jobOpenings = [
  {
    id: 1,
    title: "Senior Tunnel Engineer",
    department: "Engineering",
    location: "Mumbai, Maharashtra",
    type: "Full-time",
    experience: "5-8 years",
    description:
      "Lead tunnel construction projects with focus on metro and highway tunnels.",
    requirements: [
      "B.Tech/M.Tech in Civil Engineering",
      "Experience in tunnel boring machines (TBM)",
      "Knowledge of geotechnical analysis",
      "Project management skills",
    ],
  },
  {
    id: 2,
    title: "Construction Project Manager",
    department: "Project Management",
    location: "New Delhi",
    type: "Full-time",
    experience: "7-10 years",
    description:
      "Oversee large-scale construction projects from planning to completion.",
    requirements: [
      "Civil Engineering degree",
      "PMP certification preferred",
      "Experience in building construction",
      "Strong leadership skills",
    ],
  },
  {
    id: 3,
    title: "Safety Officer",
    department: "Safety & Compliance",
    location: "Bangalore, Karnataka",
    type: "Full-time",
    experience: "3-5 years",
    description:
      "Ensure compliance with safety regulations across all construction sites.",
    requirements: [
      "Safety engineering qualification",
      "NEBOSH/IOSH certification",
      "Knowledge of construction safety",
      "Audit and compliance experience",
    ],
  },
  {
    id: 4,
    title: "Site Engineer",
    department: "Engineering",
    location: "Chennai, Tamil Nadu",
    type: "Full-time",
    experience: "2-4 years",
    description:
      "On-site supervision and quality control for construction activities.",
    requirements: [
      "Civil Engineering degree",
      "AutoCAD proficiency",
      "Field experience",
      "Quality control knowledge",
    ],
  },
  {
    id: 5,
    title: "Business Development Manager",
    department: "Sales & Marketing",
    location: "Pune, Maharashtra",
    type: "Full-time",
    experience: "4-6 years",
    description:
      "Identify new business opportunities and build client relationships.",
    requirements: [
      "Business/Engineering degree",
      "Sales experience in construction",
      "Excellent communication skills",
      "Market analysis capabilities",
    ],
  },
  {
    id: 6,
    title: "Fresh Graduate Trainee",
    department: "Various",
    location: "Multiple locations",
    type: "Full-time",
    experience: "0-1 years",
    description:
      "Comprehensive training program for fresh engineering graduates.",
    requirements: [
      "B.Tech in Civil/Mechanical Engineering",
      "Fresh graduate or 1 year experience",
      "Willingness to relocate",
      "Strong academic record",
    ],
  },
];
const JobOpeningSection = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .send(
        "service_xrc4a0d", 
        "template_benz5y8", 
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          designation: selectedJob?.title || "Not specified", // ✅ Auto-filled designation
        },
        "s3y5QmP3jraYF71Mj" // ⚙️ Your Public Key
      )
      .then(
        () => {
          setIsLoading(false);
          setIsSubmitted(true);
          setFormData({
            name: "",
            email: "",
            phone: "",
          });
          setTimeout(() => setIsSubmitted(false), 5000);
        },
        (error) => {
          console.error("Email Error:", error);
          setIsLoading(false);
          alert("❌ Something went wrong. Please try again later!");
        }
      );
  };

  return (
    <>
      <section className="py-10 bg-[#F1F5F9]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Current Openings
            </h2>
            <Divider />
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
                  <span className="text-brand-maroon font-semibold text-sm">
                    {job.type}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {job.title}
                </h3>

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

                <p className="text-gray-700 mb-5 leading-relaxed">
                  {job.description}
                </p>

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

      {/* Job Details Modal */}
      <AnimatePresence>
        {selectedJob && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="p-8">
                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                      {selectedJob.title}
                    </h2>
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
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Job Description */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Job Description
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {selectedJob.description}
                  </p>
                </div>

                {/* Requirements */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Requirements
                  </h3>
                  <ul className="space-y-2">
                    {selectedJob.requirements.map((req, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Buttons */}
                <div className="flex space-x-4">
                  <button
                    onClick={() => setShowForm(true)}
                    className="flex-1 bg-[#0A114D] text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
                  >
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

            {/* Apply Form Modal */}
            <AnimatePresence>
              {showForm && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
                >
                  <div className="bg-white rounded-xl max-w-lg w-full p-6 relative">
                    <button
                      onClick={() => setShowForm(false)}
                      className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
                    >
                      <X className="w-5 h-5" />
                    </button>
                    <h2 className="text-2xl font-semibold mb-4 text-gray-900">
                      Apply for {selectedJob.title}
                    </h2>

                    <div className="relative max-w-lg mx-auto">
                      {!isSubmitted ? (
                        <form
                          onSubmit={handleSubmit}
                          className="space-y-4 bg-white p-6 rounded-xl shadow-md"
                        >
                          <div>
                            <label className="block text-gray-700 mb-1">
                              Full Name
                            </label>
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                              className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-200 outline-none"
                              placeholder="Enter your name"
                            />
                          </div>

                          <div>
                            <label className="block text-gray-700 mb-1">
                              Email
                            </label>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-200 outline-none"
                              placeholder="Enter your email"
                            />
                          </div>

                          <div>
                            <label className="block text-gray-700 mb-1">
                              Phone
                            </label>
                            <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              required
                              className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-200 outline-none"
                              placeholder="Enter your phone number"
                            />
                          </div>

                          {/* 🔹 Designation Field (auto-filled from URL) */}
                          <div>
                            <label className="block text-gray-700 mb-1">
                              Designation
                            </label>
                            <input
                              type="text"
                              name="designation"
                              value={formData.designation}
                              onChange={handleChange}
                              readOnly
                              required
                              className="w-full border rounded-lg px-3 py-2 bg-gray-100 text-gray-700 outline-none"
                            />
                          </div>

                          <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-[#0A114D] text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all flex justify-center items-center"
                          >
                            {isLoading ? (
                              <svg
                                className="animate-spin h-5 w-5 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <circle
                                  className="opacity-25"
                                  cx="12"
                                  cy="12"
                                  r="10"
                                  stroke="currentColor"
                                  strokeWidth="4"
                                ></circle>
                                <path
                                  className="opacity-75"
                                  fill="currentColor"
                                  d="M4 12a8 8 0 018-8v8z"
                                ></path>
                              </svg>
                            ) : (
                              "Submit Application"
                            )}
                          </button>
                        </form>
                      ) : (
                        <AnimatePresence>
                          <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            className="bg-[#0A114D] text-white text-center p-8 rounded-xl shadow-lg"
                          >
                            <h2 className="text-2xl font-bold mb-2">
                              ✅ Application Submitted!
                            </h2>
                            <p className="text-blue-100">
                              Thank you for applying. Our HR team will contact
                              you soon.
                            </p>
                          </motion.div>
                        </AnimatePresence>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default JobOpeningSection;
