import { motion } from "framer-motion";

export function AtigsAwards() {
  const awardCategories = [
    {
      title: "Trade Excellence",
      description: "Recognizing outstanding achievements in international trade and market expansion.",
      icon: "🏆"
    },
    {
      title: "Innovation Leader",
      description: "Celebrating groundbreaking solutions in trade and investment facilitation.",
      icon: "💡"
    },
    {
      title: "Sustainable Impact",
      description: "Honoring initiatives that combine business success with environmental responsibility.",
      icon: "🌍"
    },
    {
      title: "Investment Champion",
      description: "Acknowledging significant contributions to African investment landscape.",
      icon: "📈"
    },
    {
      title: "Young Entrepreneur",
      description: "Recognizing outstanding young business leaders shaping Africa's future.",
      icon: "⭐"
    },
    {
      title: "Digital Transformation",
      description: "Celebrating excellence in digital innovation and technology adoption.",
      icon: "💻"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-[#1a365d] overflow-hidden">
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              ATIGS Awards Ceremony
            </h1>
            <p className="text-xl text-gray-100 mb-8">
              Celebrating excellence and innovation in African trade and investment
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white text-[#1a365d] rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Submit Nomination
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">About the Awards</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-gray-600">
                The ATIGS Awards Ceremony is a prestigious annual event recognizing outstanding achievements in African trade, investment, and business development.
              </p>
              <p className="text-gray-600">
                Our awards celebrate individuals and organizations that have demonstrated excellence, innovation, and significant impact in advancing Africa's economic growth and development.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Event Highlights</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-[#1a365d] rounded-full mr-3" />
                  Gala Dinner & Awards Presentation
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-[#1a365d] rounded-full mr-3" />
                  Keynote Speeches
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-[#1a365d] rounded-full mr-3" />
                  Networking Reception
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-[#1a365d] rounded-full mr-3" />
                  Success Story Showcases
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Award Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Award Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {awardCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-600">
                  {category.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#1a365d] rounded-2xl p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Nominate Excellence
          </h2>
          <p className="text-gray-100 mb-8 max-w-2xl mx-auto">
            Know an outstanding individual or organization making a significant impact in African trade and investment? Submit your nomination for the ATIGS Awards.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white text-[#1a365d] rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Submit Nomination
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-medium hover:bg-white/10 transition-colors"
            >
              View Past Winners
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 