import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  FiGlobe, 
  FiTrendingUp, 
  FiUsers, 
  FiBook, 
  FiDatabase,
  FiAward,
  FiMessageSquare,
  FiShield
} from "react-icons/fi";

const benefits = [
  {
    icon: <FiGlobe className="w-8 h-8" />,
    title: "Global Network Access",
    description: "Connect with trade professionals and businesses worldwide through our extensive network."
  },
  {
    icon: <FiDatabase className="w-8 h-8" />,
    title: "Market Intelligence",
    description: "Access exclusive market research, trade data, and industry insights."
  },
  {
    icon: <FiUsers className="w-8 h-8" />,
    title: "Business Matchmaking",
    description: "Get personalized introductions to potential partners, buyers, and suppliers."
  },
  {
    icon: <FiAward className="w-8 h-8" />,
    title: "Trade Certification",
    description: "Receive internationally recognized trade certifications and credentials."
  },
  {
    icon: <FiBook className="w-8 h-8" />,
    title: "Expert Resources",
    description: "Access comprehensive guides, templates, and best practices for international trade."
  },
  {
    icon: <FiTrendingUp className="w-8 h-8" />,
    title: "Growth Support",
    description: "Get guidance on market entry strategies and business expansion plans."
  },
  {
    icon: <FiMessageSquare className="w-8 h-8" />,
    title: "Advisory Services",
    description: "Consult with trade experts on regulations, compliance, and market opportunities."
  },
  {
    icon: <FiShield className="w-8 h-8" />,
    title: "Risk Management",
    description: "Access tools and expertise to minimize international trade risks."
  }
];

export function MembershipBenefits() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900"
          >
            Membership Benefits
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Join our global trade community and unlock exclusive benefits
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-all duration-300 hover:bg-white hover:scale-105"
            >
              <div className="text-[#1a365d] mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/membership-plans">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-[#1a365d] text-white rounded-lg font-medium hover:bg-[#2c5282] transition-colors"
            >
              View Membership Plans
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
} 