import { motion } from "framer-motion";
import { FiMail, FiCheck, FiArrowRight } from "react-icons/fi";
import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setMessage("Thank you for subscribing to our newsletter!");
      setEmail("");
    }, 1000);
  };

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a365d] to-[#2c5282]"></div>
      
      {/* Animated background shapes */}
      <motion.div 
        className="absolute top-0 left-0 w-72 h-72 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.1, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container relative mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-4 text-white"
            >
              Stay Updated with Trade Insights
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-gray-300 mb-12"
            >
              Subscribe to our newsletter for the latest trade news, market updates, and industry insights
            </motion.p>

            <motion.form 
              onSubmit={handleSubmit} 
              className="max-w-md mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-grow relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiMail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="block w-full pl-10 pr-3 py-4 border-2 border-white/20 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#60A5FA] focus:border-transparent transition-all duration-300 sm:text-sm"
                    disabled={status === "loading" || status === "success"}
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-8 py-4 bg-[#60A5FA] text-white rounded-xl font-semibold hover:bg-[#3B82F6] focus:outline-none focus:ring-2 focus:ring-[#60A5FA] focus:ring-offset-2 focus:ring-offset-[#1a365d] transition-all duration-300 ${
                    status === "loading" ? "opacity-75 cursor-not-allowed" : ""
                  } ${
                    status === "success" ? "bg-[#60A5FA] hover:bg-[#3B82F6]" : ""
                  }`}
                >
                  {status === "loading" ? (
                    <span>Subscribing...</span>
                  ) : status === "success" ? (
                    <span className="flex items-center">
                      <FiCheck className="w-5 h-5 mr-2" />
                      Subscribed
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Subscribe
                      <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                  )}
                </motion.button>
              </div>
            </motion.form>

            {message && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-sm text-[#60A5FA]"
              >
                {message}
              </motion.p>
            )}

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-sm text-gray-300 mt-6"
            >
              By subscribing, you agree to receive our newsletter and accept our{" "}
              <a href="#" className="text-[#60A5FA] hover:text-[#3B82F6] underline transition-colors duration-300">
                Privacy Policy
              </a>
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 