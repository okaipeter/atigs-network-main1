import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiCalendar, FiClock, FiSearch } from 'react-icons/fi';

const LatestNews = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All News' },
    { id: 'trade', name: 'Trade Updates' },
    { id: 'policy', name: 'Policy Changes' },
    { id: 'market', name: 'Market News' },
    { id: 'tech', name: 'Technology' },
    { id: 'sustainability', name: 'Sustainability' }
  ];

  const news = [
    {
      id: 1,
      title: "New Trade Agreement Between African Nations",
      category: "trade",
      date: "2024-03-15",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      excerpt: "Major breakthrough in African trade relations as new agreement promises to boost cross-border commerce.",
      featured: true,
      tags: ["Trade", "Africa", "Economy"]
    },
    {
      id: 2,
      title: "Digital Transformation in African Markets",
      category: "tech",
      date: "2024-03-14",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      excerpt: "How digital technologies are reshaping business landscapes across Africa.",
      featured: true,
      tags: ["Technology", "Innovation", "Digital"]
    },
    {
      id: 3,
      title: "Sustainable Business Practices in Africa",
      category: "sustainability",
      date: "2024-03-13",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      excerpt: "Companies embracing sustainable practices see significant growth in African markets.",
      featured: false,
      tags: ["Sustainability", "Business", "Growth"]
    },
    // Add more news items as needed
  ];

  const filteredNews = news.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
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
              Latest News
            </h1>
            <p className="text-blue-100 max-w-3xl mx-auto">
              Stay updated with the latest developments in African trade, business, and market insights
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
                placeholder="Search news..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a365d]"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                    selectedCategory === category.id
                      ? 'bg-[#1a365d] text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredNews.filter(item => item.featured).map((item) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
              >
                <div className="relative h-64">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-4 text-white/80 text-sm mb-2">
                      <span className="flex items-center gap-1">
                        <FiCalendar className="w-4 h-4" />
                        {new Date(item.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <FiClock className="w-4 h-4" />
                        {item.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-blue-100 line-clamp-2">{item.excerpt}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-[#1a365d]/10 text-[#1a365d] rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* All News Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Latest Updates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.filter(item => !item.featured).map((item) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
              >
                <div className="relative h-48">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-gray-500 text-sm mb-2">
                    <span className="flex items-center gap-1">
                      <FiCalendar className="w-4 h-4" />
                      {new Date(item.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <FiClock className="w-4 h-4" />
                      {item.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 line-clamp-2 mb-4">{item.excerpt}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-[#1a365d]/10 text-[#1a365d] rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
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
                Stay Updated with Latest News
              </h2>
              <p className="text-blue-100 mb-8">
                Subscribe to our newsletter and never miss important updates about African trade and business
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a365d]"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-white text-[#1a365d] font-semibold rounded-lg hover:bg-blue-50 transition-colors"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LatestNews; 