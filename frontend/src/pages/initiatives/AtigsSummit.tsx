import { motion } from "framer-motion";

export function AtigsSummit() {
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
              ATIGS Summit
            </h1>
            <p className="text-xl text-gray-100 mb-8">
              The premier global trade and investment summit connecting businesses, investors, and government leaders from Africa and around the world.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white text-[#1a365d] rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Register for Next Summit
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Overview Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">About the Summit</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-gray-600">
                The ATIGS Summit is a prestigious biennial business conference and exhibition designed to promote and facilitate international trade and foreign direct investment in Africa.
              </p>
              <p className="text-gray-600">
                Our summit brings together high-level government officials, business leaders, investors, and entrepreneurs from across Africa and the global business community.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-[#1a365d] rounded-full mr-3" />
                    Business-to-Business Matchmaking
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-[#1a365d] rounded-full mr-3" />
                    Investment Showcases
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-[#1a365d] rounded-full mr-3" />
                    Expert Panel Discussions
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-[#1a365d] rounded-full mr-3" />
                    Networking Events
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Previous Summits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Previous Summits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[2022, 2020, 2018].map((year) => (
              <motion.div
                key={year}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-lg overflow-hidden shadow-sm"
              >
                <div className="aspect-[16/9] relative bg-gray-100">
                  {/* Placeholder for summit image */}
                  <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-gray-400">
                    ATIGS {year}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    ATIGS Summit {year}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Highlights and achievements from our {year} summit, featuring delegates from over 70 countries.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-[#1a365d] font-medium hover:text-[#2c5282] transition-colors"
                  >
                    View Highlights →
                  </motion.button>
                </div>
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
            Join Us at the Next ATIGS Summit
          </h2>
          <p className="text-gray-100 mb-8 max-w-2xl mx-auto">
            Be part of Africa's premier trade and investment gathering. Connect with industry leaders, discover opportunities, and shape the future of African commerce.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-white text-[#1a365d] rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Register Your Interest
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
} 