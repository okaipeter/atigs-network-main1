import { motion } from "framer-motion";
import { FiCheck, FiArrowLeft } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

export function MembershipPlansPage() {
  const navigate = useNavigate();
  const plans = [
    {
      name: "Basic",
      price: "$499",
      period: "/year",
      description: "Perfect for small businesses entering international trade",
      features: [
        "Basic Market Intelligence Reports",
        "Directory Listing",
        "2 Trade Events",
        "Email Support",
        "Basic Trade Resources",
        "Community Forum Access",
        "Monthly Newsletter",
        "Basic Profile"
      ]
    },
    {
      name: "Professional",
      price: "$999",
      period: "/year",
      description: "Ideal for growing businesses seeking global opportunities",
      isRecommended: true,
      features: [
        "All Basic Features",
        "Premium Market Intelligence",
        "Featured Directory Listing",
        "5 Trade Events",
        "Priority Email Support",
        "Advanced Trade Resources",
        "1-on-1 Consultation",
        "Enhanced Profile",
        "Trade Finance Access",
        "Market Entry Support"
      ]
    },
    {
      name: "Enterprise",
      price: "$2499",
      period: "/year",
      description: "For established businesses requiring comprehensive support",
      features: [
        "All Professional Features",
        "Custom Market Research",
        "Premium Directory Placement",
        "Unlimited Trade Events",
        "24/7 Priority Support",
        "Full Resource Library",
        "Dedicated Account Manager",
        "Custom Analytics",
        "Trade Finance Priority",
        "Global Network Access",
        "Custom Training Sessions",
        "Market Strategy Planning"
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
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Back Navigation */}
      <div className="container mx-auto px-4 pt-2">
        <Link to="/">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="inline-flex items-center gap-1 text-[#1a365d] hover:text-[#2c5282] transition-colors"
          >
            <FiArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back to Home</span>
          </motion.div>
        </Link>
      </div>

      <div className="container mx-auto px-4 py-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl font-bold text-[#1a365d] mb-2">
            Choose Your Membership Plan
          </h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Select the perfect membership tier to accelerate your international trade journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-white rounded-lg shadow-md overflow-hidden ${
                plan.isRecommended ? 'ring-1 ring-[#1a365d]' : ''
              }`}
            >
              {plan.isRecommended && (
                <div className="absolute top-0 right-0 bg-[#1a365d] text-white px-3 py-0.5 rounded-bl-lg text-xs font-medium">
                  Recommended
                </div>
              )}
              <div className="p-4">
                <h3 className="text-xl font-bold text-[#1a365d] mb-1">{plan.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{plan.description}</p>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-[#1a365d]">{plan.price}</span>
                  <span className="text-sm text-gray-600">{plan.period}</span>
                </div>
                <ul className="space-y-2 mb-4 text-sm">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <FiCheck className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleGetStarted(plan)}
                  className={`w-full py-2 rounded-lg text-sm font-medium transition-colors ${
                    plan.isRecommended
                      ? 'bg-[#1a365d] text-white hover:bg-[#2c5282]'
                      : 'bg-gray-100 text-[#1a365d] hover:bg-gray-200'
                  }`}
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-8"
        >
          <p className="text-sm text-gray-600 mb-2">Need help choosing the right plan?</p>
          <a
            href="#"
            className="text-[#1a365d] hover:text-[#2c5282] text-sm font-medium transition-colors"
          >
            Contact our team for guidance
          </a>
        </motion.div>
      </div>
    </div>
  );
} 