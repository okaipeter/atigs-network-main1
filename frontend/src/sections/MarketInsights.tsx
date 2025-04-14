import { motion } from "framer-motion";
import { FiTrendingUp, FiGlobe, FiFileText, FiPieChart } from "react-icons/fi";

const regions = [
  { name: "North America", growth: 75 },
  { name: "Europe", growth: 82 },
  { name: "Asia Pacific", growth: 90 },
  { name: "Latin America", growth: 65 },
  { name: "Middle East", growth: 70 },
  { name: "Africa", growth: 55 }
];

export function MarketInsights() {
  const insights = [
    {
      icon: <FiTrendingUp />,
      value: "$18.3T",
      change: "+12.5%",
      label: "Global Trade Volume",
      description: "Total international trade volume in 2023",
    },
    {
      icon: <FiGlobe />,
      value: "5",
      change: "+3",
      label: "Emerging Markets",
      description: "New emerging markets identified in Q4 2023",
    },
    {
      icon: <FiFileText />,
      value: "24",
      change: "+2",
      label: "Trade Agreements",
      description: "Active international trade agreements",
    },
    {
      icon: <FiPieChart />,
      value: "32%",
      change: "+5.2%",
      label: "Market Share",
      description: "Average member market share growth",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#1a365d] to-[#2c5282]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Market Insights & Analysis
          </h2>
          <p className="text-xl text-gray-300">
            Stay informed with the latest trade statistics and market trends
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {insights.map((insight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.2 }
              }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                viewport={{ once: true }}
                className="text-[#60A5FA] text-4xl mb-4"
              >
                {insight.icon}
              </motion.div>

              <div className="flex items-baseline gap-3 mb-2">
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                  className="text-4xl font-bold text-white"
                >
                  {insight.value}
                </motion.h3>
                <motion.span
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                  viewport={{ once: true }}
                  className="text-[#60A5FA] font-semibold"
                >
                  {insight.change}
                </motion.span>
              </div>

              <motion.h4
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                viewport={{ once: true }}
                className="text-xl font-semibold text-white mb-2"
              >
                {insight.label}
              </motion.h4>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
                viewport={{ once: true }}
                className="text-gray-300"
              >
                {insight.description}
              </motion.p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-[#60A5FA] text-white rounded-lg font-medium hover:bg-[#3B82F6] transition-colors inline-flex items-center gap-2"
          >
            <span>Download Full Report</span>
            <FiTrendingUp className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
} 