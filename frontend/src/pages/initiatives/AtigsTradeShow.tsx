import { motion } from "framer-motion";

export function AtigsTradeShow() {
  const exhibitorBenefits = [
    {
      title: "Global Exposure",
      description: "Connect with buyers and investors from over 50 countries",
      icon: "🌎"
    },
    {
      title: "Business Matchmaking",
      description: "Pre-scheduled B2B and B2G meetings with qualified prospects",
      icon: "🤝"
    },
    {
      title: "Market Insights",
      description: "Access to market intelligence and industry trends",
      icon: "📊"
    },
    {
      title: "Networking Events",
      description: "Exclusive access to networking receptions and VIP events",
      icon: "🎯"
    }
  ];

  const sectors = [
    "Agriculture & Agro-Processing",
    "Manufacturing & Industrial",
    "Technology & Innovation",
    "Energy & Infrastructure",
    "Healthcare & Pharmaceuticals",
    "Financial Services",
    "Tourism & Hospitality",
    "Mining & Natural Resources"
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <div className="relative h-[70vh] bg-[#1a365d] overflow-hidden">
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              ATIGS Global Trade Show
            </h1>
            <p className="text-xl text-gray-100 mb-8">
              Africa's premier trade and investment exhibition connecting global businesses with African opportunities
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white text-[#1a365d] rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Register as Exhibitor
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-medium hover:bg-white/10 transition-colors"
              >
                Visit the Show
              </motion.button>
            </div>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6">About the Trade Show</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-gray-600">
                The ATIGS Global Trade Show is a high-profile biennial trade conference and exhibition designed to promote trade and investment between Africa and the rest of the world.
              </p>
              <p className="text-gray-600">
                Our event brings together qualified global investors, companies, government delegations, and high-profile individuals for direct access to African markets and growth opportunities.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Event Features</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-[#1a365d] rounded-full mr-3" />
                  Exhibition Showcase
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-[#1a365d] rounded-full mr-3" />
                  B2B Matchmaking
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-[#1a365d] rounded-full mr-3" />
                  Country Presentations
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-[#1a365d] rounded-full mr-3" />
                  Investment Forums
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Exhibitor Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Exhibit?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {exhibitorBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Featured Sectors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Featured Sectors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {sectors.map((sector, index) => (
              <motion.div
                key={sector}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-4 rounded-lg text-center border border-gray-200 hover:border-[#1a365d] transition-colors cursor-pointer"
              >
                <p className="text-gray-800 font-medium">{sector}</p>
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
            Join Africa's Premier Trade Event
          </h2>
          <p className="text-gray-100 mb-8 max-w-2xl mx-auto">
            Secure your spot at the ATIGS Global Trade Show and connect with key stakeholders in the African market.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white text-[#1a365d] rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Book Your Stand
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-medium hover:bg-white/10 transition-colors"
            >
              Download Brochure
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 