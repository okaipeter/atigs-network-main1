import { motion } from "framer-motion";

const AtigsTimes = () => {
  const sections = [
    {
      title: "Trade & Investment News",
      description: "Latest updates on African trade and investment opportunities",
      icon: "📰"
    },
    {
      title: "Market Analysis",
      description: "In-depth research and market intelligence reports",
      icon: "📊"
    },
    {
      title: "Industry Insights",
      description: "Expert perspectives on key sectors and trends",
      icon: "💡"
    },
    {
      title: "Success Stories",
      description: "Inspiring stories of business achievements in Africa",
      icon: "🌟"
    },
    {
      title: "Policy Updates",
      description: "Latest regulatory and policy developments",
      icon: "📋"
    },
    {
      title: "Expert Opinions",
      description: "Thought leadership from industry experts",
      icon: "🎯"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section with Animated Background */}
      <div className="relative h-[70vh] bg-gradient-to-r from-[#1a365d] to-[#2c5282] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8 inline-block"
            >
              <span className="text-white/80 text-lg font-medium bg-white/10 px-4 py-2 rounded-full">
                Your Premier Business Intelligence Platform
              </span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              The ATIGS Times
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl">
              Your gateway to African trade, investment, and global business insights. 
              Stay ahead with expert analysis and market trends.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-[#1a365d] rounded-lg font-medium hover:bg-gray-100 transition-colors shadow-lg"
              >
                Subscribe Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-medium hover:bg-white/10 transition-colors"
              >
                View Latest Issue
              </motion.button>
            </div>
          </motion.div>
        </div>
        
        {/* Decorative Elements */}
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute right-10 top-20 w-72 h-72 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20">
        {/* Featured Articles Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Featured Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden group"
            >
              <div className="h-48 bg-[#1a365d] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <span className="text-blue-600 font-medium">Market Analysis</span>
                <h3 className="text-xl font-semibold mt-2 mb-3">
                  African Trade Outlook 2024
                </h3>
                <p className="text-gray-600">
                  Comprehensive analysis of trade opportunities and market trends across Africa.
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden group"
            >
              <div className="h-48 bg-[#2c5282] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <span className="text-blue-600 font-medium">Industry Focus</span>
                <h3 className="text-xl font-semibold mt-2 mb-3">
                  Tech Innovation in Africa
                </h3>
                <p className="text-gray-600">
                  Exploring the rapid growth of technology and digital transformation.
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden group"
            >
              <div className="h-48 bg-[#1a365d] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <span className="text-blue-600 font-medium">Investment</span>
                <h3 className="text-xl font-semibold mt-2 mb-3">
                  Emerging Market Opportunities
                </h3>
                <p className="text-gray-600">
                  Key investment opportunities in Africa's fastest-growing sectors.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Publication Sections */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Publication Sections
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{section.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {section.title}
                </h3>
                <p className="text-gray-600">
                  {section.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Subscribe Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-2xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a365d] to-[#2c5282]" />
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
          <div className="relative p-12 md:p-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay Informed with ATIGS Times
            </h2>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
              Get exclusive access to premium content, special reports, and early access to
              breaking news. Join our community of informed business leaders.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-[#1a365d] rounded-lg font-medium hover:bg-gray-100 transition-colors shadow-lg"
              >
                Subscribe Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-medium hover:bg-white/10 transition-colors"
              >
                View Plans
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AtigsTimes; 