import { motion } from "framer-motion";

export function AtigsDealRoom() {
  const dealRoomFeatures = [
    {
      title: "Deal Facilitation",
      description: "Expert guidance through every stage of deal-making",
      icon: "🤝"
    },
    {
      title: "Due Diligence",
      description: "Comprehensive assessment and verification services",
      icon: "📋"
    },
    {
      title: "Market Analysis",
      description: "In-depth market research and opportunity assessment",
      icon: "📊"
    },
    {
      title: "Legal Support",
      description: "Professional legal and regulatory compliance assistance",
      icon: "⚖️"
    }
  ];

  const dealTypes = [
    {
      title: "Joint Ventures",
      description: "Strategic partnerships for market expansion"
    },
    {
      title: "Direct Investment",
      description: "Capital injection for growth and development"
    },
    {
      title: "Project Finance",
      description: "Funding for infrastructure and development projects"
    },
    {
      title: "Trade Finance",
      description: "Working capital and trade financing solutions"
    },
    {
      title: "Mergers & Acquisitions",
      description: "Strategic business combinations and takeovers"
    },
    {
      title: "Technology Transfer",
      description: "Innovation and knowledge exchange partnerships"
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
              ATIGS Deal Room
            </h1>
            <p className="text-xl text-gray-100 mb-8">
              Your gateway to high-value investment opportunities in Africa
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white text-[#1a365d] rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Submit Your Project
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6">About the Deal Room</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-gray-600">
                The ATIGS Deal Room is a dedicated platform that facilitates high-value investment deals and business partnerships between international investors and African businesses.
              </p>
              <p className="text-gray-600">
                Our expert team provides end-to-end support throughout the deal-making process, ensuring successful outcomes for all parties involved.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Services</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-[#1a365d] rounded-full mr-3" />
                  Deal Structuring & Advisory
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-[#1a365d] rounded-full mr-3" />
                  Investment Matchmaking
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-[#1a365d] rounded-full mr-3" />
                  Due Diligence Support
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-[#1a365d] rounded-full mr-3" />
                  Post-Deal Implementation
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {dealRoomFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Deal Types */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Types of Deals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dealTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {type.title}
                </h3>
                <p className="text-gray-600">
                  {type.description}
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
            Ready to Make a Deal?
          </h2>
          <p className="text-gray-100 mb-8 max-w-2xl mx-auto">
            Submit your project or investment opportunity to our Deal Room and connect with qualified partners.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white text-[#1a365d] rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Submit Project
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-medium hover:bg-white/10 transition-colors"
            >
              Schedule Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 