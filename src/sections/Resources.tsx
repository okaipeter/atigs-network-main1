import { motion } from "framer-motion";
import { FiDownload, FiFileText, FiBarChart2 } from "react-icons/fi";
import { useState } from "react";

const resources = [
  {
    title: "Global Trade Report 2024",
    type: "Report",
    category: "Market Analysis",
    description: "Comprehensive analysis of international trade trends and forecasts.",
    downloadLink: "#",
    fileSize: "2.4 MB",
    fileType: "PDF"
  },
  {
    title: "Export Documentation Guide",
    type: "Guide",
    category: "Trade Basics",
    description: "Step-by-step guide to managing export documentation and compliance.",
    downloadLink: "#",
    fileSize: "1.8 MB",
    fileType: "PDF"
  },
  {
    title: "Market Entry Strategies",
    type: "Whitepaper",
    category: "Business Growth",
    description: "Strategic approaches to entering new international markets.",
    downloadLink: "#",
    fileSize: "3.1 MB",
    fileType: "PDF"
  },
  {
    title: "Trade Finance Handbook",
    type: "Guide",
    category: "Finance",
    description: "Understanding international trade finance options and best practices.",
    downloadLink: "#",
    fileSize: "4.2 MB",
    fileType: "PDF"
  }
];

const categories = ["All", "Market Analysis", "Trade Basics", "Business Growth", "Finance"];

export function Resources() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredResources = selectedCategory === "All" 
    ? resources 
    : resources.filter(resource => resource.category === selectedCategory);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900"
          >
            Trade Resources & Publications
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Access our library of trade resources, publications, and market insights
          </motion.p>
        </div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                selectedCategory === category
                  ? "bg-[#1a365d] text-white"
                  : "bg-white text-gray-600 hover:bg-[#1a365d] hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredResources.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="inline-block px-3 py-1 bg-[#1a365d]/10 text-sm font-medium text-[#1a365d] rounded-full mb-4">
                    {resource.type}
                  </span>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {resource.description}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <FiFileText className="w-4 h-4" />
                      {resource.fileType}
                    </span>
                    <span className="flex items-center gap-1">
                      <FiBarChart2 className="w-4 h-4" />
                      {resource.fileSize}
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100">
                <motion.a
                  href={resource.downloadLink}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center w-full px-4 py-3 bg-[#1a365d] text-white rounded-lg hover:bg-[#2c5282] transition-all duration-300"
                >
                  <FiDownload className="w-4 h-4 mr-2" />
                  Download Resource
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 