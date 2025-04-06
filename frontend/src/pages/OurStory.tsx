import { motion } from "framer-motion";
import { FiClock, FiFlag, FiAward, FiTrendingUp } from 'react-icons/fi';

export function OurStory() {
  const milestones = [
    {
      year: "2000",
      title: "The Beginning",
      description: "ATIGS Trade Council was founded with a vision to facilitate international trade and commerce.",
      icon: <FiFlag className="w-6 h-6" />
    },
    {
      year: "2005",
      title: "Global Expansion",
      description: "Expanded operations to multiple continents and established key international partnerships.",
      icon: <FiTrendingUp className="w-6 h-6" />
    },
    {
      year: "2010",
      title: "Digital Transformation",
      description: "Launched innovative digital platforms to better serve our members worldwide.",
      icon: <FiClock className="w-6 h-6" />
    },
    {
      year: "2015",
      title: "Excellence Recognition",
      description: "Received multiple awards for outstanding contributions to international trade.",
      icon: <FiAward className="w-6 h-6" />
    },
    {
      year: "2020",
      title: "New Era",
      description: "Adapted to global challenges and strengthened virtual trade capabilities.",
      icon: <FiTrendingUp className="w-6 h-6" />
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-[#1a365d] to-[#2c5282] text-white py-20"
      >
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-center"
          >
            Our Story
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl text-center max-w-3xl mx-auto"
          >
            Two decades of dedication to international trade excellence and business growth
          </motion.p>
        </div>
      </motion.div>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative flex items-center mb-16 last:mb-0"
              >
                {/* Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 -z-10" />
                
                {/* Year Bubble */}
                <div className="w-16 h-16 rounded-full bg-[#1a365d] text-white flex items-center justify-center font-bold text-lg shrink-0">
                  {milestone.year}
                </div>

                {/* Content */}
                <div className="ml-8 bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex-1">
                  <div className="flex items-center mb-3">
                    <div className="text-[#1a365d] mr-3">
                      {milestone.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-[#1a365d]">
                      {milestone.title}
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-[#1a365d] mb-8"
            >
              Our Vision for the Future
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-gray-600 mb-8"
            >
              Looking ahead, we remain committed to innovating and expanding our services to meet 
              the evolving needs of international trade. Our goal is to continue building bridges 
              between markets, fostering sustainable business relationships, and empowering 
              organizations to thrive in the global marketplace.
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[#1a365d] text-white rounded-lg hover:bg-[#2c5282] transition-colors text-lg font-medium"
            >
              Join Our Journey
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
} 