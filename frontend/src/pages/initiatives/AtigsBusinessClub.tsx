import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AtigsBusinessClub = () => {
  const benefits = [
    {
      title: "Exclusive Events",
      description: "Access to high-level networking events and business forums",
      icon: "🎯"
    },
    {
      title: "Business Matching",
      description: "Personalized introductions to potential partners and investors",
      icon: "🤝"
    },
    {
      title: "Market Intelligence",
      description: "Premium access to market research and industry reports",
      icon: "📊"
    },
    {
      title: "Advisory Services",
      description: "One-on-one consultations with industry experts",
      icon: "💡"
    },
    {
      title: "Trade Support",
      description: "Facilitated access to international markets",
      icon: "🌍"
    },
    {
      title: "Member Directory",
      description: "Featured listing in our exclusive business directory",
      icon: "📘"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
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
              ATIGS Business Club
            </h1>
            <p className="text-xl text-gray-100 mb-8">
              An exclusive network of global business leaders shaping the future of African trade
            </p>
            <div className="flex gap-4">
              <Link to="/signup">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-white text-[#1a365d] rounded-lg font-medium hover:bg-gray-100 transition-colors"
                >
                  Join the Club
                </motion.button>
              </Link>
              <Link to="/signup">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-medium hover:bg-white/10 transition-colors"
                >
                  Learn More
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6">About the Club</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-gray-600">
                The ATIGS Business Club is an exclusive membership-based community that brings
                together influential business leaders, entrepreneurs, and professionals committed
                to advancing African trade and investment.
              </p>
              <p className="text-gray-600">
                Our members enjoy unparalleled access to networking opportunities, market
                intelligence, and business support services designed to facilitate successful
                trade and investment in Africa.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Membership Levels</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-[#1a365d] rounded-full mr-3" />
                  Executive Membership
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-[#1a365d] rounded-full mr-3" />
                  Corporate Membership
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-[#1a365d] rounded-full mr-3" />
                  Entrepreneur Membership
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-[#1a365d] rounded-full mr-3" />
                  Associate Membership
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Member Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
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

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#1a365d] rounded-2xl p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Join Our Elite Network
          </h2>
          <p className="text-gray-100 mb-8 max-w-2xl mx-auto">
            Become part of an exclusive community of business leaders and gain access to
            unparalleled opportunities in African trade and investment.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/signup">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white text-[#1a365d] rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Apply for Membership
              </motion.button>
            </Link>
            <Link to="/signup">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-medium hover:bg-white/10 transition-colors"
              >
                View Benefits
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AtigsBusinessClub; 