import { motion } from "framer-motion";

const TrainingAndEvents = () => {
  const upcomingEvents = [
    {
      title: "African Trade Summit 2024",
      date: "June 15-17, 2024",
      location: "Dubai, UAE",
      type: "Conference",
      description: "Join industry leaders for insights on African trade opportunities.",
      image: "/events/trade-summit.jpg"
    },
    {
      title: "Export Excellence Workshop",
      date: "July 8, 2024",
      location: "Virtual Event",
      type: "Workshop",
      description: "Master the essentials of successful exporting to African markets.",
      image: "/events/workshop.jpg"
    },
    {
      title: "Investment Forum",
      date: "August 22-23, 2024",
      location: "Nairobi, Kenya",
      type: "Forum",
      description: "Connect with investors and explore funding opportunities.",
      image: "/events/investment-forum.jpg"
    }
  ];

  const trainingPrograms = [
    {
      title: "Trade Fundamentals",
      duration: "4 Weeks",
      format: "Online Course",
      description: "Master the basics of international trade with Africa.",
      icon: "📚",
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "Market Entry Masterclass",
      duration: "2 Days",
      format: "Intensive Workshop",
      description: "Strategic approaches to entering African markets successfully.",
      icon: "🎯",
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Digital Trade & E-commerce",
      duration: "6 Weeks",
      format: "Hybrid Learning",
      description: "Navigate the digital transformation of African trade.",
      icon: "💻",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Export Documentation",
      duration: "3 Days",
      format: "Hands-on Workshop",
      description: "Practical training on trade documentation and compliance.",
      icon: "📋",
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Trade Finance",
      duration: "5 Weeks",
      format: "Online Course",
      description: "Understanding financial instruments and trade financing.",
      icon: "💰",
      color: "from-rose-500 to-orange-500"
    },
    {
      title: "Supply Chain Management",
      duration: "8 Weeks",
      format: "Comprehensive Course",
      description: "Optimize your supply chain for African markets.",
      icon: "⛓️",
      color: "from-orange-500 to-amber-500"
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
                Learn, Connect, and Grow
              </motion.span>
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Training & Events
            </h1>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
              Enhance your knowledge and network through our comprehensive training programs
              and industry-leading events.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="container mx-auto px-4 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center"
        >
          Upcoming Events
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingEvents.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden group"
            >
              <div className="h-48 bg-gray-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-[#1a365d]">
                  {event.type}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#1a365d] transition-colors">
                  {event.title}
                </h3>
                <div className="flex items-center text-gray-600 mb-4">
                  <span className="mr-3">📅 {event.date}</span>
                  <span>📍 {event.location}</span>
                </div>
                <p className="text-gray-600 mb-4">
                  {event.description}
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-[#1a365d] rounded-lg font-medium group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-300"
                >
                  Register Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Training Programs */}
      <div className="container mx-auto px-4 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center"
        >
          Training Programs
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {trainingPrograms.map((program, index) => (
            <motion.div
              key={program.title}
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
                  {program.icon}
                </motion.div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 rounded-full transition-all duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#1a365d] transition-colors">
                {program.title}
              </h3>
              <div className="flex items-center text-gray-600 mb-3">
                <span className="mr-3">⏱️ {program.duration}</span>
                <span>🎓 {program.format}</span>
              </div>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                {program.description}
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
              Ready to Enhance Your Expertise?
            </h2>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
              Join our training programs and events to build the knowledge and connections
              you need for success in African markets.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-white text-[#1a365d] rounded-lg font-medium transition-all duration-300 hover:bg-opacity-90 hover:shadow-lg"
              >
                <span className="relative">
                  Browse Programs
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
                  View Calendar
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

export default TrainingAndEvents; 