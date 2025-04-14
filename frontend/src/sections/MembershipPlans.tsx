import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export function MembershipPlans() {
  const navigate = useNavigate();
  
  const plans = [
    {
      name: "Basic",
      price: "$499",
      period: "/year",
      description: "Perfect for small businesses entering trade",
      features: [
        "Basic Market Intelligence",
        "Directory Listing",
        "2 Trade Events",
        "Email Support",
        "Basic Trade Resources"
      ]
    },
    {
      name: "Professional",
      price: "$999",
      period: "/year",
      description: "For growing businesses seeking opportunities",
      isRecommended: true,
      features: [
        "All Basic Features",
        "Premium Intelligence",
        "Featured Listing",
        "5 Trade Events",
        "Priority Support"
      ]
    },
    {
      name: "Enterprise",
      price: "$2499",
      period: "/year",
      description: "For established businesses needing full support",
      features: [
        "All Pro Features",
        "Custom Research",
        "Premium Placement",
        "Unlimited Events",
        "24/7 Support"
      ]
    }
  ];

  const handleGetStarted = (plan: any) => {
    navigate('/membership-payment', { 
      state: { 
        planDetails: {
          name: plan.name,
          price: plan.price,
          period: plan.period
        }
      }
    });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-[#1a365d] mb-3">Membership Plans</h2>
      <p className="text-sm text-gray-600 mb-4">Choose your perfect membership tier to start your journey</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className={`relative bg-white rounded-lg shadow-sm p-5 ${
              plan.isRecommended ? 'ring-1 ring-[#1a365d]' : ''
            }`}
          >
            {plan.isRecommended && (
              <div className="absolute top-0 right-0 bg-[#1a365d] text-white px-3 py-0.5 rounded-bl-lg text-xs font-medium">
                Recommended
              </div>
            )}
            <div className="mb-3">
              <h3 className="text-lg font-bold text-[#1a365d] mb-1">{plan.name}</h3>
              <p className="text-sm text-gray-600">{plan.description}</p>
            </div>
            <div className="mb-4">
              <span className="text-2xl font-bold text-[#1a365d]">{plan.price}</span>
              <span className="text-sm text-gray-600">{plan.period}</span>
            </div>
            <ul className="space-y-2 mb-4 text-sm">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <FiCheck className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleGetStarted(plan)}
              className={`w-full py-2 rounded text-sm font-medium transition-colors ${
                plan.isRecommended
                  ? 'bg-[#1a365d] text-white hover:bg-[#2c5282]'
                  : 'bg-gray-50 text-[#1a365d] hover:bg-gray-100'
              }`}
            >
              Get Started
            </motion.button>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-4">
        <a
          href="/membership-plans"
          className="text-sm text-[#1a365d] hover:text-[#2c5282] font-medium"
        >
          View all features →
        </a>
      </div>
    </div>
  );
} 