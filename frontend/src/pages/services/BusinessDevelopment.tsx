import { motion } from "framer-motion";

const BusinessDevelopment = () => {
  const services = [
    {
      title: "Strategic Planning",
      description: "Develop comprehensive business strategies tailored to African markets and your growth objectives.",
      icon: "📈",
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "Partnership Development",
      description: "Identify and establish strategic partnerships to accelerate your business growth in Africa.",
      icon: "🤝",
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Market Expansion",
      description: "Expand your business presence across multiple African markets with our expert guidance.",
      icon: "🌍",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Business Optimization",
      description: "Streamline operations and improve efficiency to maximize your business potential.",
      icon: "⚡",
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Innovation Support",
      description: "Access resources and expertise to drive innovation and digital transformation.",
      icon: "💡",
      color: "from-rose-500 to-orange-500"
    },
    {
      title: "Growth Financing",
      description: "Connect with investors and financial institutions to fuel your business growth.",
      icon: "💰",
      color: "from-orange-500 to-amber-500"
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Assessment",
      description: "Comprehensive evaluation of your business and growth potential"
    },
    {
      step: "2",
      title: "Strategy",
      description: "Development of tailored growth and market entry strategies"
    },
    {
      step: "3",
      title: "Implementation",
      description: "Execution of strategies with our expert support"
    },
    {
      step: "4",
      title: "Growth",
      description: "Continuous support for sustainable business growth"
    }
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
                Accelerate Your Growth in Africa
              </motion.span>
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Business Development
            </h1>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
              Strategic support and resources to help your business thrive and expand
              across African markets.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Process Steps */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-4 gap-6"
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="bg-white rounded-lg p-6 shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl"
                    >
                      {step.step}
                    </motion.div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {step.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 transform -translate-y-1/2 z-10">
                    <motion.div
                      animate={{ x: [0, 10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-2xl text-[#1a365d]"
                    >
                      →
                    </motion.div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
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
                  {service.icon}
                </motion.div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 rounded-full transition-all duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#1a365d] transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                {service.description}
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
              Ready to Accelerate Your Growth?
            </h2>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
              Partner with us to unlock your business potential and achieve sustainable growth
              in African markets.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-white text-[#1a365d] rounded-lg font-medium transition-all duration-300 hover:bg-opacity-90 hover:shadow-lg"
              >
                <span className="relative">
                  Start Your Journey
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
                  Book Consultation
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

export default BusinessDevelopment; 