import { motion } from "framer-motion";
import { useState } from "react";
import { FiDownload, FiFilter, FiSearch, FiBook, FiFileText, FiAward } from "react-icons/fi";

const Publications = () => {
  const [selectedType, setSelectedType] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const types = [
    { id: "all", name: "All Publications", icon: FiBook },
    { id: "research", name: "Research Papers", icon: FiFileText },
    { id: "case-studies", name: "Case Studies", icon: FiAward },
    { id: "white-papers", name: "White Papers", icon: FiBook }
  ];

  const publications = [
    {
      title: "The Future of African Trade Integration",
      type: "research",
      date: "March 2024",
      authors: ["Dr. Sarah Johnson", "Prof. David Mukasa"],
      pages: 45,
      fileSize: "3.2 MB",
      image: "/publications/trade-integration.jpg",
      abstract: "A comprehensive analysis of African trade integration prospects and challenges.",
      featured: true,
      tags: ["Trade Integration", "AfCFTA", "Economic Development"]
    },
    {
      title: "Digital Transformation in African Trade",
      type: "white-papers",
      date: "February 2024",
      authors: ["Tech Innovation Team"],
      pages: 32,
      fileSize: "2.8 MB",
      image: "/publications/digital-trade.jpg",
      abstract: "Exploring the impact of digital technologies on African trade landscape.",
      featured: true,
      tags: ["Digital Trade", "Technology", "Innovation"]
    },
    {
      title: "Success Stories: African SMEs in Global Trade",
      type: "case-studies",
      date: "January 2024",
      authors: ["Business Development Team"],
      pages: 28,
      fileSize: "2.5 MB",
      image: "/publications/sme-success.jpg",
      abstract: "Collection of success stories from African SMEs in international trade.",
      tags: ["SMEs", "Success Stories", "International Trade"]
    }
  ];

  const filteredPublications = publications.filter(pub => {
    const matchesType = selectedType === "all" || pub.type === selectedType;
    const matchesSearch = pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         pub.abstract.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pt-20">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#1a365d] to-[#2c5282] py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"
        />
        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Publications
            </h1>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
              Research papers, case studies, and insights on African trade and development
            </p>
          </motion.div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search publications..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1a365d]"
              />
            </div>
            <div className="relative">
              <FiFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1a365d] appearance-none bg-white"
              >
                {types.map((type) => (
                  <option key={type.id} value={type.id}>
                    {type.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Publications */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
          Featured Publications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPublications.filter(pub => pub.featured).map((pub, index) => (
            <motion.div
              key={pub.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="h-64 bg-gray-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      {pub.type}
                    </span>
                    <span className="text-sm text-gray-500">{pub.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#1a365d] transition-colors">
                    {pub.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {pub.abstract}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {pub.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      By {pub.authors.join(", ")}
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-[#1a365d] text-white rounded-lg hover:bg-[#2c5282] transition-colors"
                    >
                      <FiDownload />
                      <span>Download ({pub.fileSize})</span>
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* All Publications Grid */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
          All Publications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredPublications.filter(pub => !pub.featured).map((pub, index) => (
            <motion.div
              key={pub.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="h-48 bg-gray-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      {pub.type}
                    </span>
                    <span className="text-sm text-gray-500">{pub.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#1a365d] transition-colors">
                    {pub.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {pub.abstract}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      {pub.pages} pages
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-[#1a365d] text-white rounded-lg hover:bg-[#2c5282] transition-colors"
                    >
                      <FiDownload />
                      <span>Download ({pub.fileSize})</span>
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Submit Research */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#1a365d] to-[#2c5282] rounded-2xl overflow-hidden"
        >
          <div className="relative p-12 md:p-20">
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
            <div className="relative max-w-xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Submit Your Research
              </h2>
              <p className="text-xl text-gray-100 mb-8">
                Contribute to our knowledge base by submitting your research paper
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-[#1a365d] rounded-lg font-medium hover:bg-opacity-90 transition-all"
              >
                Submit Research Paper
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Publications; 