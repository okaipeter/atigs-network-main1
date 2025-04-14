import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export function AtigsDealMarketplace() {
  const marketplaceFeatures = [
    {
      title: "Smart Matching",
      description: "AI-powered matching of investors with relevant opportunities",
      icon: "🎯"
    },
    {
      title: "Due Diligence",
      description: "Comprehensive verification and risk assessment tools",
      icon: "✓"
    },
    {
      title: "Secure Platform",
      description: "End-to-end encrypted communication and document sharing",
      icon: "🔒"
    },
    {
      title: "Expert Support",
      description: "Access to industry experts and advisory services",
      icon: "👥"
    }
  ];

  const activeDeals = [
    {
      sector: "Renewable Energy",
      type: "Project Finance",
      amount: "$25M",
      location: "East Africa",
      stage: "Ready for Investment"
    },
    {
      sector: "AgriTech",
      type: "Series B",
      amount: "$10M",
      location: "West Africa",
      stage: "Due Diligence"
    },
    {
      sector: "Healthcare",
      type: "Joint Venture",
      amount: "$15M",
      location: "Southern Africa",
      stage: "Initial Review"
    },
    {
      sector: "Fintech",
      type: "Growth Capital",
      amount: "$20M",
      location: "North Africa",
      stage: "Term Sheet"
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
              ATIGS Deal Marketplace
            </h1>
            <p className="text-xl text-gray-100 mb-8">
              A digital platform connecting African businesses with global investors
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/signup">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-white text-[#1a365d] rounded-lg font-medium hover:bg-gray-100 transition-colors"
                >
                  List Your Deal
                </motion.button>
              </Link>
              <Link to="/signup">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-medium hover:bg-white/10 transition-colors"
                >
                  Browse Opportunities
                </motion.button>
              </Link>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6">About the Marketplace</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-gray-600">
                The ATIGS Deal Marketplace is a state-of-the-art digital platform that streamlines the process of connecting African businesses seeking capital with qualified global investors.
              </p>
              <p className="text-gray-600">
                Our platform leverages advanced technology and expert support to facilitate successful deal-making, from initial matching to final closing.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Platform Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-[#1a365d] rounded-full mr-3" />
                  Efficient Deal Discovery
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-[#1a365d] rounded-full mr-3" />
                  Secure Data Room
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-[#1a365d] rounded-full mr-3" />
                  Integrated Due Diligence
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-[#1a365d] rounded-full mr-3" />
                  Deal Flow Management
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {marketplaceFeatures.map((feature, index) => (
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

        {/* Active Deals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Featured Deals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activeDeals.map((deal, index) => (
              <motion.div
                key={deal.sector}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {deal.sector}
                  </h3>
                  <span className="px-3 py-1 bg-[#1a365d]/10 text-[#1a365d] rounded-full text-sm font-medium">
                    {deal.type}
                  </span>
                </div>
                <div className="space-y-2 text-gray-600">
                  <p className="flex justify-between">
                    <span>Amount:</span>
                    <span className="font-medium">{deal.amount}</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Location:</span>
                    <span>{deal.location}</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Stage:</span>
                    <span>{deal.stage}</span>
                  </p>
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
            Join the Marketplace
          </h2>
          <p className="text-gray-100 mb-8 max-w-2xl mx-auto">
            Whether you're seeking investment or looking to invest, our platform provides the tools and connections you need to succeed.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/signup">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white text-[#1a365d] rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Create Account
              </motion.button>
            </Link>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-medium hover:bg-white/10 transition-colors"
            >
              Schedule Demo
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 