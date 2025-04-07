import { motion } from "framer-motion";
import { useState } from "react";

const TradeInsights = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", name: "All Insights" },
    { id: "trends", name: "Trade Trends" },
    { id: "analysis", name: "Market Analysis" },
    { id: "opportunities", name: "Opportunities" },
    { id: "guides", name: "Trade Guides" }
  ];

  const insights = [
    {
      title: "African Continental Free Trade Area: Opportunities and Challenges",
      category: "analysis",
      date: "March 15, 2024",
      readTime: "8 min read",
      image: "/insights/afcfta.jpg",
      excerpt: "An in-depth analysis of the AfCFTA and its potential impact on intra-African trade.",
      featured: true,
      tags: ["AfCFTA", "Trade Policy", "Economic Integration"]
    },
    {
      title: "Emerging Digital Trade Trends in Africa",
      category: "trends",
      date: "March 10, 2024",
      readTime: "6 min read",
      image: "/insights/digital-trade.jpg",
      excerpt: "Exploring how digital technologies are transforming trade across Africa.",
      featured: true,
      tags: ["Digital Trade", "E-commerce", "Technology"]
    },
    {
      title: "Guide to Export Documentation in African Markets",
      category: "guides",
      date: "March 5, 2024",
      readTime: "10 min read",
      image: "/insights/export-guide.jpg",
      excerpt: "Comprehensive guide to navigating export documentation requirements.",
      tags: ["Exports", "Documentation", "Compliance"]
    },
    {
      title: "Investment Opportunities in African Agriculture",
      category: "opportunities",
      date: "March 1, 2024",
      readTime: "7 min read",
      image: "/insights/agri-invest.jpg",
      excerpt: "Highlighting promising investment opportunities in Africa's agricultural sector.",
      tags: ["Agriculture", "Investment", "Growth Sectors"]
    }
  ];

  const filteredInsights = selectedCategory === "all" 
    ? insights 
    : insights.filter(insight => insight.category === selectedCategory);

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
              Trade Insights
            </h1>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
              Expert analysis and insights on African trade and market opportunities
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

      {/* Featured Insights */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredInsights.filter(insight => insight.featured).map((insight, index) => (
            <motion.div
              key={insight.title}
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
                    <span className="text-sm text-gray-500">{insight.date}</span>
                    <span className="text-sm text-gray-500">•</span>
                    <span className="text-sm text-gray-500">{insight.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#1a365d] transition-colors">
                    {insight.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {insight.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {insight.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Regular Insights Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredInsights.filter(insight => !insight.featured).map((insight, index) => (
            <motion.div
              key={insight.title}
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
                    <span className="text-sm text-gray-500">{insight.date}</span>
                    <span className="text-sm text-gray-500">•</span>
                    <span className="text-sm text-gray-500">{insight.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#1a365d] transition-colors">
                    {insight.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {insight.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {insight.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
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
                Stay Updated with Trade Insights
              </h2>
              <p className="text-xl text-gray-100 mb-8">
                Get the latest trade insights and analysis delivered to your inbox
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

export default TradeInsights; 