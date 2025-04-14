import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiCalendar, FiSearch, FiDownload, FiShare2 } from 'react-icons/fi';

const PressReleases = () => {
  const [selectedYear, setSelectedYear] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const years = [
    { id: 'all', name: 'All Years' },
    { id: '2024', name: '2024' },
    { id: '2023', name: '2023' },
    { id: '2022', name: '2022' },
    { id: '2021', name: '2021' }
  ];

  const pressReleases = [
    {
      id: 1,
      title: "ATIGS Network Launches New Trade Innovation Platform",
      date: "2024-03-15",
      year: "2024",
      category: "Announcement",
      summary: "ATIGS Network introduces a groundbreaking platform to revolutionize African trade practices.",
      content: "ATIGS Network is proud to announce the launch of its new Trade Innovation Platform, designed to streamline and enhance trade practices across Africa. This platform represents a significant step forward in digitalizing trade processes and connecting businesses across the continent.",
      pdfUrl: "/press-releases/2024/trade-innovation-platform.pdf",
      featured: true
    },
    {
      id: 2,
      title: "Partnership Announcement: ATIGS Network and African Development Bank",
      date: "2024-02-20",
      year: "2024",
      category: "Partnership",
      summary: "Strategic partnership formed to boost African trade development initiatives.",
      content: "ATIGS Network and the African Development Bank have formed a strategic partnership aimed at accelerating trade development across Africa. This collaboration will focus on implementing innovative solutions and providing support to businesses across the continent.",
      pdfUrl: "/press-releases/2024/afdb-partnership.pdf",
      featured: true
    },
    {
      id: 3,
      title: "ATIGS Network Expands Operations to East Africa",
      date: "2023-12-10",
      year: "2023",
      category: "Expansion",
      summary: "Network expansion brings enhanced trade services to East African region.",
      content: "ATIGS Network announces its expansion into East Africa, bringing its comprehensive trade services and expertise to businesses in the region. This expansion marks a significant milestone in the network's mission to facilitate trade across Africa.",
      pdfUrl: "/press-releases/2023/east-africa-expansion.pdf",
      featured: false
    },
    // Add more press releases as needed
  ];

  const filteredReleases = pressReleases.filter(item => {
    const matchesYear = selectedYear === 'all' || item.year === selectedYear;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesYear && matchesSearch;
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
              Press Releases
            </h1>
            <p className="text-blue-100 max-w-3xl mx-auto">
              Official announcements and statements from our organization
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search press releases..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a365d]"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
              {years.map((year) => (
                <motion.button
                  key={year.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedYear(year.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                    selectedYear === year.id
                      ? 'bg-[#1a365d] text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {year.name}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Press Releases */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Releases</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredReleases.filter(item => item.featured).map((item) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center gap-4 text-gray-500 text-sm mb-4">
                    <span className="flex items-center gap-1">
                      <FiCalendar className="w-4 h-4" />
                      {new Date(item.date).toLocaleDateString()}
                    </span>
                    <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 mb-6">{item.summary}</p>
                  <div className="flex items-center gap-4">
                    <motion.a
                      href={item.pdfUrl}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <FiDownload className="w-4 h-4" />
                      Download PDF
                    </motion.a>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      <FiShare2 className="w-4 h-4" />
                      Share
                    </motion.button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* All Press Releases */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">All Press Releases</h2>
          <div className="space-y-6">
            {filteredReleases.filter(item => !item.featured).map((item) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center gap-4 text-gray-500 text-sm mb-4">
                    <span className="flex items-center gap-1">
                      <FiCalendar className="w-4 h-4" />
                      {new Date(item.date).toLocaleDateString()}
                    </span>
                    <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 mb-6">{item.summary}</p>
                  <div className="flex items-center gap-4">
                    <motion.a
                      href={item.pdfUrl}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <FiDownload className="w-4 h-4" />
                      Download PDF
                    </motion.a>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      <FiShare2 className="w-4 h-4" />
                      Share
                    </motion.button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Media Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#1a365d] to-[#2c5282] rounded-2xl p-8 md:p-12"
          >
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Media Contact
              </h2>
              <p className="text-blue-100 mb-8">
                For media inquiries, please contact our communications team
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a365d]"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-white text-[#1a365d] font-semibold rounded-lg hover:bg-blue-50 transition-colors"
                >
                  Contact Us
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PressReleases; 