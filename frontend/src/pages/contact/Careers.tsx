import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiMapPin, FiClock, FiBriefcase, FiDollarSign, FiSearch, FiFilter, FiChevronRight, FiAward, FiUsers, FiTrendingUp, FiGlobe } from 'react-icons/fi';

interface Job {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  salary: string;
  description: string;
  requirements: string[];
  posted: string;
}

const jobs: Job[] = [
  {
    id: 1,
    title: "Trade Development Manager",
    department: "Business Development",
    location: "Washington DC, USA",
    type: "Full-time",
    experience: "5+ years",
    salary: "$80,000 - $120,000",
    description: "Lead trade development initiatives and foster international business relationships across Africa and global markets.",
    requirements: [
      "Bachelor's degree in International Business or related field",
      "Proven experience in trade development and business relationships",
      "Strong understanding of African markets",
      "Excellent communication and negotiation skills",
      "Ability to travel internationally"
    ],
    posted: "2 days ago"
  },
  {
    id: 2,
    title: "Market Research Analyst",
    department: "Research",
    location: "Nairobi, Kenya",
    type: "Full-time",
    experience: "3+ years",
    salary: "$45,000 - $65,000",
    description: "Conduct market research and analysis to support trade development initiatives in African markets.",
    requirements: [
      "Master's degree in Economics, Business, or related field",
      "Experience in market research and data analysis",
      "Knowledge of African markets and trade dynamics",
      "Strong analytical and report writing skills",
      "Proficiency in research tools and methodologies"
    ],
    posted: "1 week ago"
  },
  {
    id: 3,
    title: "Digital Marketing Specialist",
    department: "Marketing",
    location: "Lagos, Nigeria",
    type: "Full-time",
    experience: "2+ years",
    salary: "$35,000 - $50,000",
    description: "Drive digital marketing strategies to promote ATIGS Network's services and events across Africa.",
    requirements: [
      "Bachelor's degree in Marketing or related field",
      "Experience in digital marketing and social media management",
      "Knowledge of SEO and content marketing",
      "Creative mindset and strong copywriting skills",
      "Experience with marketing analytics tools"
    ],
    posted: "3 days ago"
  }
];

const benefits = [
  {
    icon: FiAward,
    title: "Competitive Compensation",
    description: "Attractive salary packages and performance bonuses"
  },
  {
    icon: FiUsers,
    title: "Global Network",
    description: "Work with professionals from around the world"
  },
  {
    icon: FiTrendingUp,
    title: "Career Growth",
    description: "Continuous learning and development opportunities"
  },
  {
    icon: FiGlobe,
    title: "International Travel",
    description: "Opportunities for global business travel"
  }
];

const Careers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [activeJob, setActiveJob] = useState<number | null>(null);

  const departments = ["all", ...new Set(jobs.map(job => job.department))];
  const locations = ["all", ...new Set(jobs.map(job => job.location))];

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === "all" || job.department === selectedDepartment;
    const matchesLocation = selectedLocation === "all" || job.location === selectedLocation;
    return matchesSearch && matchesDepartment && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative py-20 bg-gradient-to-r from-[#1a365d] to-[#2c5282] overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Be part of a dynamic team driving trade and investment growth across Africa.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Join Us?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer exciting opportunities for growth and development in a global environment.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="bg-white rounded-xl shadow-sm p-6"
              >
                <div className="w-12 h-12 bg-[#1a365d]/10 rounded-full flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-[#1a365d]" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Open Positions</h2>
            
            {/* Search and Filters */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              <div className="relative">
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search positions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a365d] focus:border-transparent"
                />
              </div>
              <div className="relative">
                <FiBriefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a365d] focus:border-transparent appearance-none"
                >
                  {departments.map(dept => (
                    <option key={dept} value={dept}>{dept === "all" ? "All Departments" : dept}</option>
                  ))}
                </select>
              </div>
              <div className="relative">
                <FiMapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a365d] focus:border-transparent appearance-none"
                >
                  {locations.map(loc => (
                    <option key={loc} value={loc}>{loc === "all" ? "All Locations" : loc}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Job List */}
            <div className="space-y-4">
              {filteredJobs.map((job) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="bg-gray-50 rounded-lg overflow-hidden"
                >
                  <div
                    onClick={() => setActiveJob(activeJob === job.id ? null : job.id)}
                    className="p-6 cursor-pointer hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <FiMapPin className="w-4 h-4" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <FiClock className="w-4 h-4" />
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <FiBriefcase className="w-4 h-4" />
                        {job.experience}
                      </span>
                      <span className="flex items-center gap-1">
                        <FiDollarSign className="w-4 h-4" />
                        {job.salary}
                      </span>
                      <span className="text-[#1a365d]">{job.posted}</span>
                    </div>
                  </div>
                  {activeJob === job.id && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      className="border-t border-gray-200 p-6"
                    >
                      <div className="prose max-w-none">
                        <h4 className="text-lg font-semibold mb-4">Description</h4>
                        <p className="mb-6">{job.description}</p>
                        <h4 className="text-lg font-semibold mb-4">Requirements</h4>
                        <ul className="list-disc pl-5 mb-6">
                          {job.requirements.map((req, index) => (
                            <li key={index}>{req}</li>
                          ))}
                        </ul>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-6 py-3 bg-[#1a365d] text-white rounded-lg hover:bg-[#2c5282] transition-colors inline-flex items-center gap-2"
                        >
                          Apply Now
                          <FiChevronRight className="w-4 h-4" />
                        </motion.button>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Careers; 