import { motion } from "framer-motion";

const AtigsFdiSharkTank = () => {
  const features = [
    {
      title: "Pitch Sessions",
      description: "Present your business to a panel of global investors",
      icon: "🎯"
    },
    {
      title: "Investment Range",
      description: "Access funding opportunities from $100K to $10M",
      icon: "💰"
    },
    {
      title: "Expert Mentorship",
      description: "Get guidance from seasoned business leaders",
      icon: "🌟"
    },
    {
      title: "Global Network",
      description: "Connect with investors from around the world",
      icon: "🌍"
    },
    {
      title: "Due Diligence",
      description: "Professional evaluation and validation support",
      icon: "📊"
    },
    {
      title: "Post-Investment",
      description: "Ongoing support for business growth",
      icon: "📈"
    }
  ];

  const successStories = [
    {
      company: "AgriTech Solutions",
      funding: "$2.5M",
      sector: "Agriculture",
      description: "Revolutionizing farming with IoT technology"
    },
    {
      company: "HealthConnect",
      funding: "$5M",
      sector: "Healthcare",
      description: "Digital health platform for remote communities"
    },
    {
      company: "EcoEnergy",
      funding: "$8M",
      sector: "Renewable Energy",
      description: "Sustainable power solutions for rural areas"
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
                Where Innovation Meets Investment
              </span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              ATIGS FDI Shark Tank
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl">
              A dynamic platform connecting innovative African businesses with global 
              investors through engaging pitch competitions and strategic matchmaking.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-[#1a365d] rounded-lg font-medium hover:bg-gray-100 transition-colors shadow-lg"
              >
                Apply as Entrepreneur
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-medium hover:bg-white/10 transition-colors"
              >
                Register as Investor
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
        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            About the Program
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-lg text-gray-600">
                ATIGS FDI Shark Tank is a dynamic platform connecting innovative African 
                businesses with global investors, fostering direct foreign investment 
                opportunities through structured pitch competitions.
              </p>
              <p className="text-lg text-gray-600">
                Our program provides a unique opportunity for African entrepreneurs to secure 
                significant investment while giving investors access to high-potential 
                businesses across the continent.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-[#1a365d] rounded-full mr-3" />
                  Direct access to qualified investors
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-[#1a365d] rounded-full mr-3" />
                  Professional pitch preparation
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-[#1a365d] rounded-full mr-3" />
                  Business valuation support
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-[#1a365d] rounded-full mr-3" />
                  Post-investment guidance
                </li>
              </ul>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-[#1a365d] to-[#2c5282] opacity-90" />
              <div className="relative p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Program Highlights</h3>
                <div className="space-y-6">
                  <div>
                    <div className="text-4xl mb-2">$50M+</div>
                    <div className="text-gray-200">Total Investment Facilitated</div>
                  </div>
                  <div>
                    <div className="text-4xl mb-2">100+</div>
                    <div className="text-gray-200">Successful Matches</div>
                  </div>
                  <div>
                    <div className="text-4xl mb-2">30+</div>
                    <div className="text-gray-200">Countries Represented</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Program Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Success Stories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={story.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden group"
              >
                <div className="h-24 bg-[#1a365d] relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {story.company}
                    </h3>
                    <span className="text-green-600 font-semibold">
                      {story.funding}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-2">
                    {story.description}
                  </p>
                  <span className="text-blue-600 text-sm font-medium">
                    {story.sector}
                  </span>
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
          className="relative rounded-2xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a365d] to-[#2c5282]" />
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
          <div className="relative p-12 md:p-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Take Your Business to the Next Level?
            </h2>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
              Join ATIGS FDI Shark Tank and connect with investors who can help scale 
              your business across Africa and beyond.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-[#1a365d] rounded-lg font-medium hover:bg-gray-100 transition-colors shadow-lg"
              >
                Submit Your Pitch
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-medium hover:bg-white/10 transition-colors"
              >
                Learn More
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AtigsFdiSharkTank; 