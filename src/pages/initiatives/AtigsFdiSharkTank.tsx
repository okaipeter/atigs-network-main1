import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const AtigsFdiSharkTank = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  const features = [
    {
      title: "Pitch Sessions",
      description: "Present your business to a panel of global investors",
      icon: "🎯",
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "Investment Range",
      description: "Access funding opportunities from $100K to $10M",
      icon: "💰",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Expert Mentorship",
      description: "Get guidance from seasoned business leaders",
      icon: "🌟",
      color: "from-pink-500 to-red-500"
    },
    {
      title: "Global Network",
      description: "Connect with investors from around the world",
      icon: "🌍",
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Due Diligence",
      description: "Professional evaluation and validation support",
      icon: "📊",
      color: "from-orange-500 to-yellow-500"
    },
    {
      title: "Post-Investment",
      description: "Ongoing support for business growth",
      icon: "📈",
      color: "from-yellow-500 to-green-500"
    }
  ];

  const successStories = [
    {
      company: "AgriTech Solutions",
      funding: "$2.5M",
      sector: "Agriculture",
      description: "Revolutionizing farming with IoT technology",
      color: "from-emerald-500 to-teal-500"
    },
    {
      company: "HealthConnect",
      funding: "$5M",
      sector: "Healthcare",
      description: "Digital health platform for remote communities",
      color: "from-teal-500 to-cyan-500"
    },
    {
      company: "EcoEnergy",
      funding: "$8M",
      sector: "Renewable Energy",
      description: "Sustainable power solutions for rural areas",
      color: "from-cyan-500 to-blue-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section with Animated Background */}
      <div className="relative h-[80vh] bg-gradient-to-r from-[#1a365d] to-[#2c5282] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"
        />
        <motion.div
          animate={{ 
            background: [
              "linear-gradient(to right, rgba(59,130,246,0.1), rgba(147,51,234,0.1))",
              "linear-gradient(to right, rgba(147,51,234,0.1), rgba(236,72,153,0.1))",
              "linear-gradient(to right, rgba(236,72,153,0.1), rgba(59,130,246,0.1))"
            ]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute inset-0"
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
              <motion.span 
                className="text-white/80 text-lg font-medium bg-white/10 px-6 py-3 rounded-full inline-block"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
              >
                Where Innovation Meets Investment
              </motion.span>
            </motion.div>
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                ATIGS FDI
              </motion.span>{" "}
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
              >
                Shark Tank
              </motion.span>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl"
            >
              A dynamic platform connecting innovative African businesses with global 
              investors through engaging pitch competitions and strategic matchmaking.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-white text-[#1a365d] rounded-lg font-medium transition-all duration-300 hover:bg-opacity-90 hover:shadow-lg"
              >
                <span className="relative">
                  Apply as Entrepreneur
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
                  Register as Investor
                  <motion.span
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:bg-[#1a365d] group-hover:w-full transition-all duration-300"
                  />
                </span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Animated Background Elements */}
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute right-10 top-20 w-72 h-72 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute left-10 bottom-20 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20">
        {/* About Section */}
        <motion.div
          ref={targetRef}
          style={{ opacity, scale }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
            About the Program
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-lg text-gray-600 leading-relaxed"
              >
                ATIGS FDI Shark Tank is a dynamic platform connecting innovative African 
                businesses with global investors, fostering direct foreign investment 
                opportunities through structured pitch competitions.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg text-gray-600 leading-relaxed"
              >
                Our program provides a unique opportunity for African entrepreneurs to secure 
                significant investment while giving investors access to high-potential 
                businesses across the continent.
              </motion.p>
              <motion.ul
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="space-y-4"
              >
                {["Direct access to qualified investors", "Professional pitch preparation", 
                  "Business valuation support", "Post-investment guidance"].map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-center text-gray-600 group"
                  >
                    <motion.span
                      whileHover={{ scale: 1.2 }}
                      className="w-2 h-2 bg-[#1a365d] rounded-full mr-3 group-hover:bg-blue-500 transition-colors"
                    />
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <motion.div
                animate={{ 
                  background: [
                    "linear-gradient(to right, #1a365d, #2c5282)",
                    "linear-gradient(to right, #2c5282, #1a365d)",
                    "linear-gradient(to right, #1a365d, #2c5282)"
                  ]
                }}
                transition={{ duration: 10, repeat: Infinity }}
                className="absolute inset-0 opacity-90"
              />
              <div className="relative p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Program Highlights</h3>
                <div className="space-y-8">
                  {[
                    { value: "$50M+", label: "Total Investment Facilitated" },
                    { value: "100+", label: "Successful Matches" },
                    { value: "30+", label: "Countries Represented" }
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 * index }}
                      className="group"
                    >
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-purple-200"
                      >
                        {stat.value}
                      </motion.div>
                      <div className="text-gray-200 group-hover:text-white transition-colors">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
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
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-xl transform -rotate-1" />
                <div className="relative bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 mb-4"
                  >
                    {story.funding}
                  </motion.div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#1a365d] transition-colors">
                    {story.company}
                  </h3>
                  <div className="text-sm text-gray-500 mb-4">{story.sector}</div>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                    {story.description}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-6 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-[#1a365d] rounded-lg font-medium group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-300"
                  >
                    Read More
                  </motion.button>
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
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto"
            >
              Join our next pitch competition and gain the opportunity to secure
              investment for your business growth.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-white text-[#1a365d] rounded-lg font-medium transition-all duration-300 hover:bg-opacity-90 hover:shadow-lg"
              >
                <span className="relative">
                  Apply Now
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
                  Learn More
                  <motion.span
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:bg-[#1a365d] group-hover:w-full transition-all duration-300"
                  />
                </span>
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AtigsFdiSharkTank; 