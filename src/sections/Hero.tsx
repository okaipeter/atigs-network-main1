// src/sections/Hero.tsx
import { motion } from "framer-motion";
import { FiChevronsDown } from "react-icons/fi";
import { Link } from "react-router-dom";

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

              <Link to="/globe">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-[#1a365d] text-[#1a365d] rounded-lg font-medium hover:bg-[#1a365d] hover:text-white transition-colors"
              >
                Learn More
              </motion.button>
              </Link>
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
              Our Global Impact
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative">
              <div className="text-center p-6 bg-white/90 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-4xl font-bold text-[#1a365d] mb-2">1000+</h3>
                <p className="text-gray-600">Members Worldwide</p>
                <div className="mt-3 text-[#2c5282]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
              <div className="text-center p-6 bg-white/90 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-4xl font-bold text-[#1a365d] mb-2">50+</h3>
                <p className="text-gray-600">Countries</p>
                <div className="mt-3 text-[#2c5282]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="text-center p-6 bg-white/90 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-4xl font-bold text-[#1a365d] mb-2">200+</h3>
                <p className="text-gray-600">Annual Events</p>
                <div className="mt-3 text-[#2c5282]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div className="text-center p-6 bg-white/90 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-4xl font-bold text-[#1a365d] mb-2">$2B+</h3>
                <p className="text-gray-600">Trade Volume</p>
                <div className="mt-3 text-[#2c5282]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
