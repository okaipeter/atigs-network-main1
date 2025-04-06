import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";

const plans = [
  {
    name: "Basic",
    price: "$499",
    period: "/year",
    description: "For small businesses",
    features: [
      "Market reports",
      "Basic advisory",
      "Directory listing",
      "Email support"
    ],
    recommended: false
  },
  {
    name: "Professional",
    price: "$999",
    period: "/year",
    description: "For growing businesses",
    features: [
      "All Basic features",
      "Priority support",
      "Trade matching",
      "Market guides"
    ],
    recommended: true
  },
  {
    name: "Enterprise",
    price: "$2499",
    period: "/year",
    description: "For established businesses",
    features: [
      "All Pro features",
      "Account manager",
      "Custom research",
      "VIP access"
    ],
    recommended: false
  }
];

export function MembershipPlans() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold mb-3 text-[#1a365d]">Choose Your Plan</h2>
          <p className="text-lg text-gray-600">
            Select your membership tier to get started
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative bg-gray-50 rounded-lg p-6 ${
                plan.recommended ? "ring-2 ring-[#1a365d]" : "border border-gray-200"
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#1a365d] text-white px-3 py-1 rounded-full text-sm font-medium">
                    Recommended
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-2 text-[#1a365d]">{plan.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{plan.description}</p>
                <div className="flex items-end justify-center">
                  <span className="text-3xl font-bold text-[#1a365d]">{plan.price}</span>
                  <span className="text-gray-500 ml-1">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm">
                    <FiCheck className="w-4 h-4 text-[#1a365d] mr-2" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full bg-[#1a365d] text-white py-2 rounded-lg font-medium hover:bg-[#2c5282] transition-colors duration-300">
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 