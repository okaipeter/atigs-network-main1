import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiPlus, FiMinus, FiMessageCircle, FiPhone, FiMail, FiFileText, FiHelpCircle } from 'react-icons/fi';

interface FAQ {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQ[] = [
  {
    question: "How do I become a member of ATIGS Network?",
    answer: "To become a member, visit our Membership page and choose a plan that suits your business needs. Fill out the application form, and our team will review your submission within 2-3 business days.",
    category: "Membership"
  },
  {
    question: "What are the benefits of joining ATIGS Network?",
    answer: "Members enjoy exclusive access to trade opportunities, market insights, networking events, business development support, and our global network of partners. Visit our Membership Benefits page for detailed information.",
    category: "Membership"
  },
  {
    question: "How can I participate in ATIGS events?",
    answer: "You can register for our events through the Events page. Members receive priority registration and special rates. Sign up for our newsletter to stay updated on upcoming events.",
    category: "Events"
  },
  {
    question: "What trade services do you offer?",
    answer: "We offer a comprehensive range of trade services including market access support, business matchmaking, trade finance solutions, and advisory services. Visit our Services page for more details.",
    category: "Services"
  },
  {
    question: "How can I access market reports and research?",
    answer: "Market reports and research are available in our Resources section. Members have access to premium content and can request custom reports tailored to their needs.",
    category: "Resources"
  },
  {
    question: "What regions do you operate in?",
    answer: "We have offices across Africa and maintain a global network of partners. Our primary focus is on facilitating trade within Africa and between Africa and the rest of the world.",
    category: "General"
  }
];

const supportCategories = [
  {
    icon: FiMessageCircle,
    title: "Live Chat",
    description: "Chat with our support team in real-time",
    action: "Start Chat"
  },
  {
    icon: FiPhone,
    title: "Phone Support",
    description: "Speak directly with our support team",
    action: "Call Now"
  },
  {
    icon: FiMail,
    title: "Email Support",
    description: "Send us an email for assistance",
    action: "Send Email"
  },
  {
    icon: FiFileText,
    title: "Submit Ticket",
    description: "Create a support ticket for tracking",
    action: "Create Ticket"
  }
];

const Support = () => {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredFaqs = selectedCategory === "all" 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

  const categories = ["all", ...new Set(faqs.map(faq => faq.category))];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative py-20 bg-gradient-to-r from-[#1a365d] to-[#2c5282] overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Support Center
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Get the help you need. We're here to support your success.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Support Options */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="bg-white rounded-xl shadow-sm p-6 text-center"
              >
                <div className="w-16 h-16 bg-[#1a365d]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <category.icon className="w-8 h-8 text-[#1a365d]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{category.title}</h3>
                <p className="text-gray-600 mb-6">{category.description}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 bg-[#1a365d] text-white rounded-lg hover:bg-[#2c5282] transition-colors"
                >
                  {category.action}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Find quick answers to common questions about our services and membership.
              </p>
            </motion.div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium capitalize ${
                  selectedCategory === category
                    ? 'bg-[#1a365d] text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* FAQ List */}
          <div className="max-w-3xl mx-auto space-y-4">
            {filteredFaqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="bg-gray-50 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setActiveQuestion(activeQuestion === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  {activeQuestion === index ? (
                    <FiMinus className="w-5 h-5 text-[#1a365d]" />
                  ) : (
                    <FiPlus className="w-5 h-5 text-[#1a365d]" />
                  )}
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: activeQuestion === index ? "auto" : 0 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-4 text-gray-600">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Help */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-gradient-to-r from-[#1a365d] to-[#2c5282] rounded-2xl p-8 md:p-12 text-center"
          >
            <div className="max-w-3xl mx-auto">
              <div className="p-4 bg-white/10 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <FiHelpCircle className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Need Additional Help?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Our support team is available 24/7 to assist you with any questions or concerns.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-[#1a365d] rounded-lg hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
              >
                <FiMessageCircle className="w-5 h-5" />
                Contact Support Team
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Support; 