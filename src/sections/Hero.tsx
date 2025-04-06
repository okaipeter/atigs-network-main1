// src/sections/Hero.tsx
import { motion } from "framer-motion";
import { FiChevronsDown } from "react-icons/fi";

export function Hero() {
  const scrollToFooter = () => {
    const footer = document.querySelector('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-white mt-36">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Empowering Global Trade
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Join a global network of professionals and businesses in international trade and commerce. Access resources, connect with experts, and grow your business globally.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-[#1a365d] text-white rounded-lg font-medium hover:bg-[#2c5282] transition-colors"
              >
                Become a Member
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-[#1a365d] text-[#1a365d] rounded-lg font-medium hover:bg-[#1a365d] hover:text-white transition-colors"
              >
                Learn More
              </motion.button>
            </div>

            {/* Scroll to Footer Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="flex items-center gap-3 mt-8"
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="text-[#2c5282] font-medium"
              >
                Scroll Down
              </motion.p>
              <motion.button
                onClick={scrollToFooter}
                whileHover={{ scale: 1.1 }}
                animate={{
                  y: [0, 5, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="p-2 rounded-full bg-[#2c5282] shadow-lg hover:bg-[#1a365d] transition-all flex items-center group"
              >
                <FiChevronsDown className="w-6 h-6 text-white" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[330px] w-full lg:w-[90%] mx-auto"
          >
            <img
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="African Business Conference"
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
              style={{
                objectPosition: 'center',
                filter: 'brightness(1.1) contrast(1.2) saturate(1.1)'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#1a365d]/5 to-transparent rounded-2xl" />
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-32 relative"
        >
          <div className="absolute inset-0 bg-[#1a365d]/5 rounded-3xl transform -skew-y-2"></div>
          <div className="relative bg-white/80 backdrop-blur-sm shadow-lg rounded-3xl py-12 px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1a365d] mb-12">
              Our Brand Partners
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center p-6 bg-white/90 rounded-xl shadow-sm hover:shadow-md transition-all"
              >
                <img
                  src="/logos/brand1.png"
                  alt="Brand Partner"
                  className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center p-6 bg-white/90 rounded-xl shadow-sm hover:shadow-md transition-all"
              >
                <img
                  src="/logos/brand2.png"
                  alt="Brand Partner"
                  className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center p-6 bg-white/90 rounded-xl shadow-sm hover:shadow-md transition-all"
              >
                <img
                  src="/logos/brand3.png"
                  alt="Brand Partner"
                  className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center p-6 bg-white/90 rounded-xl shadow-sm hover:shadow-md transition-all"
              >
                <img
                  src="/logos/brand4.png"
                  alt="Brand Partner"
                  className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
