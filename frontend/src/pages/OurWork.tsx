import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const OurWork = () => {
  const workAreas = [
    {
      title: "Trade Facilitation",
      description: "Streamlining cross-border trade processes and reducing barriers for African businesses.",
      icon: "🔄",
      stats: { value: "60%", label: "Faster Trade Processing" }
    },
    {
      title: "Market Development",
      description: "Creating new opportunities and expanding market access for African products globally.",
      icon: "📈",
      stats: { value: "45+", label: "Markets Accessed" }
    },
    {
      title: "Business Support",
      description: "Providing comprehensive assistance to help African businesses succeed internationally.",
      icon: "🤝",
      stats: { value: "1000+", label: "Businesses Supported" }
    },
    {
      title: "Investment Promotion",
      description: "Attracting and facilitating foreign direct investment into African markets.",
      icon: "💰",
      stats: { value: "$2B+", label: "Investment Facilitated" }
    }
  ];

  const initiatives = [
    {
      title: "ATIGS Summit",
      description: "Premier gathering of global trade leaders and African businesses.",
      link: "/initiatives/atigs-summit",
      image: "/initiatives/summit.jpg"
    },
    {
      title: "Deal Room",
      description: "Facilitating direct business connections and investment opportunities.",
      link: "/initiatives/atigs-deal-room",
      image: "/initiatives/deal-room.jpg"
    },
    {
      title: "FDI Shark Tank",
      description: "Innovative platform connecting investors with African opportunities.",
      link: "/initiatives/fdi-shark-tank",
      image: "/initiatives/shark-tank.jpg"
    }
  ];

  const impactMetrics = [
    { value: "25+", label: "African Countries" },
    { value: "500M+", label: "Market Access Population" },
    { value: "3000+", label: "Business Connections" },
    { value: "150+", label: "Trade Events" }
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
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our Work
            </h1>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
              Transforming African trade through innovative solutions and strategic partnerships
            </p>
          </motion.div>
        </div>
      </div>

      {/* Work Areas Section */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            What We Do
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive approach to facilitating trade and business growth in Africa
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {workAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all group"
            >
              <div className="flex items-start space-x-6">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: [0, 5, -5, 0] }}
                  className="text-4xl"
                >
                  {area.icon}
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#1a365d] transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {area.description}
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-[#1a365d]">
                      {area.stats.value}
                    </div>
                    <div className="text-sm text-gray-600">
                      {area.stats.label}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Key Initiatives Section */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Key Initiatives
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flagship programs driving our mission forward
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {initiatives.map((initiative, index) => (
              <motion.div
                key={initiative.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Link to={initiative.link}>
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="h-48 bg-gray-200 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#1a365d] transition-colors">
                        {initiative.title}
                      </h3>
                      <p className="text-gray-600">
                        {initiative.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Impact Metrics */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Making a difference across the African continent
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {impactMetrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: index * 0.1 
                }}
                className="text-4xl md:text-5xl font-bold text-[#1a365d] mb-2"
              >
                {metric.value}
              </motion.div>
              <div className="text-gray-600">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#1a365d] to-[#2c5282] rounded-2xl overflow-hidden"
        >
          <div className="relative p-12 md:p-20 text-center">
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Grow Your Business?
              </h2>
              <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
                Join us in building a stronger, more connected African economy
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-[#1a365d] rounded-lg font-medium hover:bg-opacity-90 transition-all"
                >
                  Get Started
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-[#1a365d] transition-all"
                >
                  Learn More
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OurWork; 