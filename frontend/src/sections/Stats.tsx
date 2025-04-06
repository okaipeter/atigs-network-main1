import { motion } from "framer-motion";
import { FiUsers, FiGlobe, FiAward, FiCalendar } from 'react-icons/fi';

export function Stats() {
  const stats = [
    { 
      label: "Active Members", 
      value: "1000+", 
      percentage: 100,
      icon: <FiUsers className="w-8 h-8 text-[#1a365d]" />,
      description: "Growing community of business leaders"
    },
    { 
      label: "Global Partners", 
      value: "50+", 
      percentage: 75,
      icon: <FiGlobe className="w-8 h-8 text-[#1a365d]" />,
      description: "International partnerships worldwide"
    },
    { 
      label: "Years of Experience", 
      value: "25+", 
      percentage: 85,
      icon: <FiAward className="w-8 h-8 text-[#1a365d]" />,
      description: "Decades of industry expertise"
    },
    { 
      label: "Events Hosted", 
      value: "10+", 
      percentage: 90,
      icon: <FiCalendar className="w-8 h-8 text-[#1a365d]" />,
      description: "Successful events and conferences"
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a365d] mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-gray-600">
            Growing stronger together
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-6 mb-4">
                <div className="p-3 bg-blue-50 rounded-lg">
                  {stat.icon}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-semibold text-[#1a365d]">{stat.label}</h3>
                    <span className="text-2xl font-bold text-[#1a365d]">{stat.value}</span>
                  </div>
                  <p className="text-gray-500 text-sm">{stat.description}</p>
                </div>
              </div>
              
              <div className="relative h-3 bg-gray-100 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${stat.percentage}%` }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="absolute top-0 left-0 h-full rounded-full"
                  style={{
                    background: 'linear-gradient(90deg, #1a365d 0%, #2563eb 100%)',
                    boxShadow: '0 0 10px rgba(37, 99, 235, 0.3)'
                  }}
                />
              </div>

              <div className="absolute -right-2 -top-2 w-16 h-16 bg-blue-50 rounded-full opacity-20" />
              <div className="absolute -left-2 -bottom-2 w-24 h-24 bg-blue-50 rounded-full opacity-20" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 