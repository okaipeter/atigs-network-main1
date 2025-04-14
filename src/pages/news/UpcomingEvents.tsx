import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiCalendar, FiClock, FiMapPin, FiSearch} from 'react-icons/fi';

const UpcomingEvents = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Events' },
    { id: 'conference', name: 'Conferences' },
    { id: 'seminar', name: 'Seminars' },
    { id: 'workshop', name: 'Workshops' },
    { id: 'networking', name: 'Networking' },
    { id: 'trade-fair', name: 'Trade Fairs' }
  ];

  const events = [
    {
      id: 1,
      title: "African Trade Summit 2024",
      category: "conference",
      date: "2024-06-15",
      time: "09:00 AM",
      location: "Lagos, Nigeria",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Join industry leaders and experts for the most comprehensive trade conference in Africa.",
      featured: true,
      tags: ["Trade", "Business", "Networking"]
    },
    {
      id: 2,
      title: "Digital Innovation Workshop",
      category: "workshop",
      date: "2024-05-20",
      time: "02:00 PM",
      location: "Nairobi, Kenya",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Learn about the latest digital transformation strategies for African businesses.",
      featured: true,
      tags: ["Technology", "Innovation", "Digital"]
    },
    {
      id: 3,
      title: "Business Networking Mixer",
      category: "networking",
      date: "2024-04-25",
      time: "06:00 PM",
      location: "Accra, Ghana",
      image: "https://images.unsplash.com/photo-1511795409834-432f7b1728d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Connect with industry leaders and expand your business network.",
      featured: false,
      tags: ["Networking", "Business", "Africa"]
    },
    // Add more events as needed
  ];

  const filteredEvents = events.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
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
              Upcoming Events
            </h1>
            <p className="text-blue-100 max-w-3xl mx-auto">
              Discover and participate in our upcoming conferences, seminars, workshops, and networking events
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
                placeholder="Search events..."
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

      {/* Featured Events */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredEvents.filter(item => item.featured).map((item) => (
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
                        {item.time}
                      </span>
                      <span className="flex items-center gap-1">
                        <FiMapPin className="w-4 h-4" />
                        {item.location}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-blue-100 line-clamp-2">{item.description}</p>
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
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Register Now
                  </motion.button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* All Events Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.filter(item => !item.featured).map((item) => (
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
                      {item.time}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 line-clamp-2 mb-4">{item.description}</p>
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                    <FiMapPin className="w-4 h-4" />
                    <span>{item.location}</span>
                  </div>
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
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Register Now
                  </motion.button>
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
                Never Miss an Event
              </h2>
              <p className="text-blue-100 mb-8">
                Subscribe to our event calendar and receive notifications about upcoming events
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

export default UpcomingEvents; 