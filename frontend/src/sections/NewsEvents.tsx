import { motion } from "framer-motion";
import { FiCalendar, FiClock, FiArrowRight } from "react-icons/fi";

const news = [
  {
    title: "International Trade Summit 2024",
    date: "March 15, 2024",
    type: "Event",
    description: "Join industry leaders for our annual summit on global trade opportunities and challenges.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&w=500&q=60"
  },
  {
    title: "New Trade Agreement Signed",
    date: "February 28, 2024",
    type: "News",
    description: "Major breakthrough in international trade relations as new agreement is signed between partner nations.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&w=500&q=60"
  },
  {
    title: "Export Workshop Series",
    date: "April 5-7, 2024",
    type: "Event",
    description: "Three-day intensive workshop on export regulations and best practices.",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&w=500&q=60"
  },
  {
    title: "Trade Report 2024",
    date: "January 15, 2024",
    type: "Publication",
    description: "Annual comprehensive analysis of global trade trends and forecasts.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&w=500&q=60"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};

export function NewsEvents() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900"
          >
            Latest News & Events
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Stay updated with the latest developments in international trade
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {news.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <motion.div
                className="relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 object-cover transition-transform duration-300"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-[#1a365d]/10 backdrop-blur-[2px] transition-all duration-300"
                />
              </motion.div>
              <motion.div 
                className="p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <motion.div 
                  className="flex items-center gap-2 mb-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <span className="text-sm text-[#1a365d] font-medium px-3 py-1 bg-[#1a365d]/10 rounded-full">
                    {item.type}
                  </span>
                  <span className="text-gray-400">•</span>
                  <span className="text-sm text-gray-500 flex items-center gap-1">
                    <FiCalendar className="w-4 h-4" />
                    {item.date}
                  </span>
                </motion.div>
                <motion.h3 
                  className="text-xl font-semibold mb-2 text-gray-900"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {item.title}
                </motion.h3>
                <motion.p 
                  className="text-gray-600 mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {item.description}
                </motion.p>
                <motion.a 
                  href="#" 
                  className="inline-flex items-center text-[#1a365d] hover:text-[#2c5282] font-medium group"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  Learn More
                  <motion.span
                    className="ml-2"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FiArrowRight />
                  </motion.span>
                </motion.a>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.a 
            href="#" 
            className="inline-flex items-center text-[#1a365d] hover:text-[#2c5282] font-medium text-lg group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All News & Events
            <motion.span
              className="ml-2"
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <FiArrowRight />
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
} 