import { motion } from "framer-motion";
import { Testimonials } from "@/sections/Testimonials";
import { Link } from 'react-router-dom';

export function SuccessStories() {
  return (
    <div className="pt-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-12"
      >
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold text-[#1a365d] mb-4 text-center"
        >
          Success Stories
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16"
        >
          Discover how our members have achieved remarkable success through our trade council's support and resources
        </motion.p>
      </motion.div>

      <Testimonials />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="container mx-auto px-4 py-20"
      >
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a365d] mb-8">
            Join Our Success Story
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Become a member today and unlock opportunities for your business growth
          </p>
          <Link to="/membership">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[#1a365d] text-white rounded-lg hover:bg-[#2c5282] transition-colors text-lg font-medium"
            >
              Become a Member
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
} 