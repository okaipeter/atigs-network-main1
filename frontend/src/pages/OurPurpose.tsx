import { motion } from "framer-motion";

const OurPurpose = () => {
  const missionPoints = [
    {
      title: "Connecting Africa to Global Markets",
      description: "Building bridges between African businesses and international markets through strategic partnerships and trade facilitation.",
      icon: "🌍",
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "Fostering Economic Growth",
      description: "Driving sustainable economic development across Africa by promoting trade, investment, and business opportunities.",
      icon: "📈",
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Empowering Businesses",
      description: "Providing resources, knowledge, and support to help African businesses thrive in the global marketplace.",
      icon: "💪",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const values = [
    {
      title: "Excellence",
      description: "Committed to delivering the highest standards of service and support to our members.",
      icon: "⭐"
    },
    {
      title: "Innovation",
      description: "Embracing new ideas and technologies to drive African trade forward.",
      icon: "💡"
    },
    {
      title: "Integrity",
      description: "Operating with transparency, honesty, and ethical business practices.",
      icon: "🤝"
    },
    {
      title: "Collaboration",
      description: "Working together with stakeholders to achieve shared goals and success.",
      icon: "🤲"
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
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our Purpose
            </h1>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
              Driving Africa's economic growth through international trade and collaboration
            </p>
          </motion.div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            To facilitate and promote international trade and investment opportunities for African businesses, fostering economic growth and prosperity across the continent.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {missionPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: [0, 5, -5, 0] }}
                className="text-4xl mb-4"
              >
                {point.icon}
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {point.title}
              </h3>
              <p className="text-gray-600">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Guided by strong principles that shape our work and relationships
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: [0, 5, -5, 0] }}
                  className="text-4xl mb-4 mx-auto"
                >
                  {value.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-20">
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
                Join Us in Shaping Africa's Future
              </h2>
              <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
                Be part of our mission to drive economic growth and create opportunities across Africa
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-[#1a365d] rounded-lg font-medium hover:bg-opacity-90 transition-all"
              >
                Become a Member
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OurPurpose; 