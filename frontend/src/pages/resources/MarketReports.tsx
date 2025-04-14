import { motion } from "framer-motion";
import { useState } from "react";
import { FiDownload, FiFilter, FiSearch } from "react-icons/fi";

const MarketReports = () => {
  const [selectedRegion, setSelectedRegion] = useState<string>("all");
  const [selectedYear, setSelectedYear] = useState<string>("2024");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const regions = [
    { id: "all", name: "All Regions" },
    { id: "west", name: "West Africa" },
    { id: "east", name: "East Africa" },
    { id: "north", name: "North Africa" },
    { id: "south", name: "Southern Africa" },
    { id: "central", name: "Central Africa" }
  ];

  const years = ["2024", "2023", "2022", "2021"];

  const reports = [
    {
      title: "West African Trade & Investment Report 2024",
      region: "west",
      year: "2024",
      type: "Annual Report",
      pages: 120,
      fileSize: "8.5 MB",
      image: "/reports/west-africa.jpg",
      description: "Comprehensive analysis of trade and investment trends in West Africa.",
      featured: true
    },
    {
      title: "East African Market Opportunities Analysis",
      region: "east",
      year: "2024",
      type: "Market Analysis",
      pages: 85,
      fileSize: "6.2 MB",
      image: "/reports/east-africa.jpg",
      description: "Detailed analysis of market opportunities in East African countries.",
      featured: true
    },
    {
      title: "North African Export Market Guide",
      region: "north",
      year: "2024",
      type: "Market Guide",
      pages: 95,
      fileSize: "7.1 MB",
      image: "/reports/north-africa.jpg",
      description: "Guide to export opportunities and regulations in North African markets."
    },
    {
      title: "Southern Africa Investment Climate Report",
      region: "south",
      year: "2024",
      type: "Investment Report",
      pages: 110,
      fileSize: "7.8 MB",
      image: "/reports/south-africa.jpg",
      description: "Analysis of investment climate and opportunities in Southern Africa."
    }
  ];

  const filteredReports = reports.filter(report => {
    const matchesRegion = selectedRegion === "all" || report.region === selectedRegion;
    const matchesYear = selectedYear === "all" || report.year === selectedYear;
    const matchesSearch = report.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         report.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRegion && matchesYear && matchesSearch;
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
              Market Reports
            </h1>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
              In-depth analysis and insights on African markets and trade opportunities
            </p>
          </motion.div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search reports..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1a365d]"
              />
            </div>
            <div className="relative">
              <FiFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1a365d] appearance-none bg-white"
              >
                {regions.map((region) => (
                  <option key={region.id} value={region.id}>
                    {region.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="relative">
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1a365d] appearance-none bg-white"
              >
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Reports */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
          Featured Reports
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredReports.filter(report => report.featured).map((report, index) => (
            <motion.div
              key={report.title}
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
                      {report.type}
                    </span>
                    <span className="text-sm text-gray-500">{report.pages} pages</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#1a365d] transition-colors">
                    {report.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {report.description}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-[#1a365d] text-white rounded-lg hover:bg-[#2c5282] transition-colors"
                  >
                    <FiDownload />
                    <span>Download ({report.fileSize})</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* All Reports Grid */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
          All Reports
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredReports.filter(report => !report.featured).map((report, index) => (
            <motion.div
              key={report.title}
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
                      {report.type}
                    </span>
                    <span className="text-sm text-gray-500">{report.pages} pages</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#1a365d] transition-colors">
                    {report.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {report.description}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-[#1a365d] text-white rounded-lg hover:bg-[#2c5282] transition-colors"
                  >
                    <FiDownload />
                    <span>Download ({report.fileSize})</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Request Custom Report */}
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
                Need a Custom Market Report?
              </h2>
              <p className="text-xl text-gray-100 mb-8">
                Get detailed market analysis tailored to your specific needs
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-[#1a365d] rounded-lg font-medium hover:bg-opacity-90 transition-all"
              >
                Request Custom Report
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MarketReports; 