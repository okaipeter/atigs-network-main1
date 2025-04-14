import { motion } from "framer-motion";

const MarketAccess = () => {
  const features = [
    {
      title: "Market Entry Strategy",
      description: "Customized strategies for entering African markets with comprehensive risk assessment and opportunity analysis.",
      icon: "🎯",
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "Local Partner Network",
      description: "Access to our extensive network of vetted local partners, distributors, and agents across Africa.",
      icon: "🤝",
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Regulatory Navigation",
      description: "Expert guidance through complex regulatory requirements and compliance procedures.",
      icon: "📋",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Market Research",
      description: "In-depth market analysis, consumer insights, and competitive intelligence for informed decision-making.",
      icon: "📊",
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Business Matchmaking",
      description: "Targeted introductions to potential partners, customers, and stakeholders in your target market.",
      icon: "🔄",
      color: "from-rose-500 to-orange-500"
    },
    {
      title: "Local Presence Setup",
      description: "Support in establishing your local presence, from office setup to staff recruitment.",
      icon: "🏢",
      color: "from-orange-500 to-amber-500"
    }
  ];

  const marketStats = [
    { value: "54", label: "African Countries" },
    { value: "1.4B", label: "Population" },
    { value: "$2.7T", label: "GDP" },
    { value: "8%", label: "Average Growth Rate" }
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
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8 inline-block"
            >
              <motion.span 
                className="text-white/80 text-lg font-medium bg-white/10 px-6 py-3 rounded-full inline-block"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
              >
                Your Gateway to African Markets
              </motion.span>
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Market Access
            </h1>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
              Unlock the potential of African markets with our comprehensive market access
              solutions and expert local knowledge.
            </p>
          </motion.div>
        </div>

        {/* Market Stats */}
        <div className="container mx-auto px-4 mt-12">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {marketStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * index }}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center group hover:bg-white/20 transition-all duration-300"
                >
                  <motion.div
                    className="text-3xl md:text-4xl font-bold text-white mb-2"
                    whileHover={{ scale: 1.1 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-gray-200 text-sm md:text-base">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: [0, 5, -5, 0] }}
                  className="text-4xl mb-4 w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10"
                >
                  {feature.icon}
                </motion.div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 rounded-full transition-all duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#1a365d] transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                {feature.description}
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-[#1a365d] rounded-lg font-medium group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-300"
              >
                Learn More
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden"
        >
          <motion.div
            animate={{ 
              background: [
                "linear-gradient(to right, #1a365d, #2c5282)",
                "linear-gradient(to right, #2c5282, #1a365d)",
                "linear-gradient(to right, #1a365d, #2c5282)"
              ]
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute inset-0"
          />
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
          <div className="relative p-12 md:p-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Enter African Markets?
            </h2>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
              Let our experts guide you through the process and help you establish a
              successful presence in Africa.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-white text-[#1a365d] rounded-lg font-medium transition-all duration-300 hover:bg-opacity-90 hover:shadow-lg"
              >
                <span className="relative">
                  Get Started
                  <motion.span
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1a365d] group-hover:w-full transition-all duration-300"
                  />
                </span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-medium transition-all duration-300 hover:bg-white hover:text-[#1a365d]"
              >
                <span className="relative">
                  Schedule Consultation
                  <motion.span
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:bg-[#1a365d] group-hover:w-full transition-all duration-300"
                  />
                </span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MarketAccess; 