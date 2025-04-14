import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import { Container } from "@/components/ui/container";
// import { Section } from "@/components/ui/section";
// import { Typography } from "@/components/ui/typography";

const AtigsAdvantageSeminar = () => {
  const benefits = [
    {
      title: "Expert Insights",
      description: "Learn from industry leaders and successful entrepreneurs",
      icon: "🎯"
    },
    {
      title: "Networking",
      description: "Connect with like-minded professionals and potential partners",
      icon: "🤝"
    },
    {
      title: "Market Access",
      description: "Gain strategies for entering African markets successfully",
      icon: "🌍"
    },
    {
      title: "Investment Focus",
      description: "Understand investment opportunities and funding strategies",
      icon: "💰"
    },
    {
      title: "Trade Knowledge",
      description: "Master international trade practices and regulations",
      icon: "📚"
    },
    {
      title: "Growth Strategy",
      description: "Develop effective business expansion plans",
      icon: "📈"
    }
  ];

  const upcomingSeminars = [
    {
      title: "Market Entry Strategies",
      date: "March 15, 2024",
      location: "Virtual Event",
      theme: "blue"
    },
    {
      title: "Investment Opportunities",
      date: "April 22, 2024",
      location: "Dubai, UAE",
      theme: "purple"
    },
    {
      title: "Trade Regulations",
      date: "May 10, 2024",
      location: "Nairobi, Kenya",
      theme: "blue"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section with Animated Background */}
      <div className="relative h-[70vh] bg-gradient-to-r from-[#1a365d] to-[#2c5282] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8 inline-block"
            >
              <span className="text-white/80 text-lg font-medium bg-white/10 px-4 py-2 rounded-full">
                Empowering Business Success
              </span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              ATIGS Advantage Seminar
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl">
              Transform your business potential with expert insights, strategic networking,
              and actionable knowledge for success in African markets.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-[#1a365d] rounded-lg font-medium hover:bg-gray-100 transition-colors shadow-lg"
              >
                Register Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-medium hover:bg-white/10 transition-colors"
              >
                View Schedule
              </motion.button>
            </div>
          </motion.div>
        </div>
        
        {/* Decorative Elements */}
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute right-10 top-20 w-72 h-72 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20">
        {/* Upcoming Seminars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Upcoming Seminars
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingSeminars.map((seminar, index) => (
              <motion.div
                key={seminar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden group"
              >
                <div className={`h-32 bg-[#1a365d] relative overflow-hidden`}>
                  <div className={`absolute inset-0 bg-gradient-to-r from-${seminar.theme}-600/20 to-purple-600/20 group-hover:scale-110 transition-transform duration-500`} />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {seminar.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {seminar.date} • {seminar.location}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-4 py-2 bg-[#1a365d] text-white rounded-lg hover:bg-[#2c5282] transition-colors"
                  >
                    Learn More
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Why Attend Our Seminars
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
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
          className="relative rounded-2xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a365d] to-[#2c5282]" />
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
          <div className="relative p-12 md:p-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
              Join our next seminar and gain the knowledge, connections, and strategies
              needed to succeed in African markets.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-[#1a365d] rounded-lg font-medium hover:bg-gray-100 transition-colors shadow-lg"
              >
                Register Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-medium hover:bg-white/10 transition-colors"
              >
                Download Brochure
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AtigsAdvantageSeminar; 