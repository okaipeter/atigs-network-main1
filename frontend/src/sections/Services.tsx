import { motion } from "framer-motion";
import { FiGlobe, FiTrendingUp, FiUsers, FiBook } from "react-icons/fi";

const services = [
  {
    name: "Global Market Access",
    description: "Connect with international markets and expand your business reach through our extensive network of trade partners.",
    icon: FiGlobe,
  },
  {
    name: "Business Growth",
    description: "Access market insights, trade data, and expert guidance to make informed decisions and grow your business.",
    icon: FiTrendingUp,
  },
  {
    name: "Networking Events",
    description: "Join exclusive events, trade shows, and conferences to connect with industry leaders and potential partners.",
    icon: FiUsers,
  },
  {
    name: "Trade Education",
    description: "Enhance your knowledge through our comprehensive training programs, workshops, and resources.",
    icon: FiBook,
  },
];

export function Services() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">How We Support Your Business</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive solutions to help businesses thrive in international trade
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#1a365d]/10 rounded-full flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-[#1a365d]" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{service.name}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 