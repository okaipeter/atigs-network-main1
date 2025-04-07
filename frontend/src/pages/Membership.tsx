import { motion } from "framer-motion";
import { FiUser, FiLock, FiMonitor, FiPlay, FiActivity, FiUsers, FiSearch, FiAward, FiBook, FiArrowLeft } from "react-icons/fi";
import { MembershipPlans } from "../sections/MembershipPlans";
import { Link } from 'react-router-dom';

export function Membership() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Back to Home Link */}
      <div className="container mx-auto px-4 pt-4">
        <Link to="/">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="inline-flex items-center gap-2 text-[#1a365d] hover:text-[#2c5282] transition-colors"
          >
            <FiArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Home</span>
          </motion.div>
        </Link>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Membership Plans Section */}
          <div className="order-2 lg:order-1">
            <MembershipPlans />
          </div>

          {/* Login Section */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-lg p-8 max-w-md mx-auto"
            >
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Login Now</h2>
              
              <form className="space-y-6">
                <div className="relative">
                  <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1a365d] focus:border-transparent"
                  />
                </div>
                
                <div className="relative">
                  <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1a365d] focus:border-transparent"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#1a365d] text-white py-3 rounded-lg font-medium hover:bg-[#2c5282] transition-colors"
                >
                  Log In
                </button>
              </form>

              <div className="mt-6 text-center">
                <Link to="/forgot-password" className="text-[#1a365d] hover:underline">Forgot Password?</Link>
              </div>

              <div className="mt-6 text-center">
                <p className="text-gray-600">Don't have an account?</p>
                <Link to="/signup" className="text-[#1a365d] font-medium hover:underline">Create an account</Link>
              </div>
            </motion.div>

            {/* Quick Access Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {[
                { icon: FiMonitor, text: "My Account", color: "bg-blue-50" },
                { icon: FiPlay, text: "Start", color: "bg-green-50" },
                { icon: FiActivity, text: "Member Activity", color: "bg-purple-50" },
                { icon: FiUsers, text: "New Members", color: "bg-yellow-50" },
                { icon: FiSearch, text: "Tender Search", color: "bg-pink-50" },
                { icon: FiAward, text: "Free Certification", color: "bg-indigo-50" },
                { icon: FiBook, text: "Free Courses", color: "bg-orange-50" }
              ].map((item, index) => (
                <motion.a
                  key={item.text}
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`${item.color} p-4 rounded-xl flex flex-col items-center justify-center text-center gap-2 shadow-sm hover:shadow-md transition-shadow`}
                >
                  <item.icon className="w-6 h-6 text-[#1a365d]" />
                  <span className="text-sm font-medium text-gray-700">{item.text}</span>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
} 