import { motion } from "framer-motion";
import { FiTarget, FiGlobe, FiUsers, FiAward } from 'react-icons/fi';

export function About() {
  const values = [
    {
      icon: <FiTarget className="w-8 h-8" />,
      title: "Our Mission",
      description: "To facilitate and promote international trade by connecting businesses globally and providing comprehensive support for cross-border commerce."
    },
    {
      icon: <FiGlobe className="w-8 h-8" />,
      title: "Global Reach",
      description: "Operating across continents, we bridge markets and create opportunities for businesses to expand their international presence."
    },
    {
      icon: <FiUsers className="w-8 h-8" />,
      title: "Member-Focused",
      description: "Dedicated to our members' success, we provide tailored solutions and support to help businesses thrive in the global marketplace."
    },
    {
      icon: <FiAward className="w-8 h-8" />,
      title: "Excellence",
      description: "Committed to maintaining the highest standards of service and professionalism in international trade facilitation."
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
            About ATIGS Trade Council
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl text-center max-w-3xl mx-auto"
          >
            Empowering businesses to succeed in international trade through expert guidance, 
            valuable connections, and comprehensive support services.
          </motion.p>
        </div>
      </motion.div>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-[#1a365d] mb-12 text-center"
          >
            Our Core Values
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-[#1a365d] mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-[#1a365d] mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-[#1a365d] mb-8 text-center"
            >
              Our History
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-gray-600 mb-6"
            >
              Founded with a vision to facilitate global trade, ATIGS Trade Council has been at the 
              forefront of international business development for over two decades. Our journey began 
              with a simple mission: to help businesses navigate the complexities of international trade.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-gray-600"
            >
              Today, we've grown into a global organization with a network spanning multiple continents, 
              helping thousands of businesses achieve their international trade objectives. Our commitment 
              to excellence and member success remains as strong as ever, as we continue to evolve and 
              adapt to meet the changing needs of global commerce.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-[#1a365d] mb-8"
          >
            Join Our Global Network
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            Become part of a thriving community of international trade professionals and unlock 
            new opportunities for your business.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-[#1a365d] text-white rounded-lg hover:bg-[#2c5282] transition-colors text-lg font-medium"
          >
            Learn More About Membership
          </motion.button>
        </div>
      </section>
    </div>
  );
} 