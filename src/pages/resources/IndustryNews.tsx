import { motion } from "framer-motion";
import { useState } from "react";
import { FiClock, FiShare2, FiBookmark, FiArrowRight } from "react-icons/fi";

const IndustryNews = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", name: "All News" },
    { id: "trade", name: "Trade Updates" },
    { id: "policy", name: "Policy Changes" },
    { id: "market", name: "Market News" },
    { id: "technology", name: "Technology" },
    { id: "sustainability", name: "Sustainability" }
  ];

  const featuredNews = [
    {
      title: "African Trade Finance Gap Narrows as Digital Solutions Emerge",
      category: "trade",
      date: "March 20, 2024",
      readTime: "5 min read",
      image: "/news/trade-finance.jpg",
      excerpt: "New digital trade finance platforms are helping to bridge the trade finance gap in Africa, enabling more businesses to access international markets.",
      author: {
        name: "Sarah Johnson",
        role: "Trade Finance Expert",
        image: "/team/sarah.jpg"
      }
    },
    {
      title: "Major Policy Shifts in East African Community Trade Regulations",
      category: "policy",
      date: "March 18, 2024",
      readTime: "7 min read",
      image: "/news/policy-update.jpg",
      excerpt: "EAC announces significant changes to trade regulations, aimed at facilitating easier cross-border trade within the region.",
      author: {
        name: "David Mukasa",
        role: "Policy Analyst",
        image: "/team/david.jpg"
      }
    }
  ];

  const latestNews = [
    {
      title: "Blockchain Technology Revolutionizing African Supply Chains",
      category: "technology",
      date: "March 15, 2024",
      readTime: "6 min read",
      image: "/news/blockchain.jpg",
      excerpt: "How blockchain is transforming supply chain transparency and efficiency in African trade."
    },
    {
      title: "Sustainable Trade Practices Gain Momentum in West Africa",
      category: "sustainability",
      date: "March 14, 2024",
      readTime: "4 min read",
      image: "/news/sustainability.jpg",
      excerpt: "West African nations embrace sustainable trade practices to meet global environmental standards."
    },
    {
      title: "New Market Opportunities Emerge in Southern African Region",
      category: "market",
      date: "March 13, 2024",
      readTime: "5 min read",
      image: "/news/market-opportunities.jpg",
      excerpt: "Analysis of emerging market opportunities in the Southern African region."
    }
  ];

  const trendingTopics = [
    "AfCFTA Implementation",
    "Digital Trade",
    "Green Economy",
    "SME Development",
    "Regional Integration"
  ];

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
              Industry News
            </h1>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
              Stay updated with the latest developments in African trade and commerce
            </p>
          </motion.div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-4 justify-center">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category.id
                ? "bg-[#1a365d] text-white"
                : "bg-white text-gray-600 hover:bg-gray-50"
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Featured News */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredNews.map((news, index) => (
            <motion.div
              key={news.title}
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
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      {news.category}
                    </span>
                    <div className="flex items-center gap-3">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <FiBookmark />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <FiShare2 />
                      </motion.button>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#1a365d] transition-colors">
                    {news.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {news.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gray-200" />
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {news.author.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {news.author.role}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <FiClock className="w-4 h-4" />
                      <span>{news.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Latest News Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestNews.map((news, index) => (
            <motion.div
              key={news.title}
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
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      {news.category}
                    </span>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <FiClock className="w-4 h-4" />
                      <span>{news.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#1a365d] transition-colors">
                    {news.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {news.excerpt}
                  </p>
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-[#1a365d] font-medium"
                  >
                    Read More
                    <FiArrowRight />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Trending Topics */}
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Trending Topics
          </h2>
          <div className="flex flex-wrap gap-3">
            {trendingTopics.map((topic, index) => (
              <motion.button
                key={topic}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-[#1a365d] hover:text-white transition-all"
              >
                #{topic}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter */}
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
                Never Miss an Update
              </h2>
              <p className="text-xl text-gray-100 mb-8">
                Subscribe to our newsletter for the latest industry news and insights
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-[#1a365d] rounded-lg font-medium hover:bg-opacity-90 transition-all whitespace-nowrap"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default IndustryNews; 