import { motion } from "framer-motion";
import { FiArrowLeft, FiLock, FiGlobe } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const countries = {
  europe: ["United Kingdom", "Germany", "France", "Italy", "Spain", "Netherlands", "Switzerland"],
  asia: ["Japan", "South Korea", "Singapore", "China", "India", "Malaysia"],
  africa: ["Ghana", "Nigeria", "South Africa", "Kenya", "Uganda", "Tanzania"],
  other: ["United States", "Canada", "Australia", "New Zealand"]
};

const africanBanks = [
  { name: "Standard Chartered Bank", value: "standard-chartered" },
  { name: "Consolidated Bank", value: "consolidated" },
  { name: "GCB Bank", value: "gcb" },
  { name: "Fidelity Bank", value: "fidelity" },
  { name: "Absa Bank", value: "absa" },
  { name: "Access Bank", value: "access" },
  { name: "Zenith Bank", value: "zenith" },
  { name: "First Bank", value: "firstbank" },
  { name: "UBA", value: "uba" }
];

const internationalBanks = [
  { name: "HSBC", value: "hsbc" },
  { name: "Citibank", value: "citibank" },
  { name: "Deutsche Bank", value: "deutsche" },
  { name: "Barclays", value: "barclays" },
  { name: "JP Morgan", value: "jpmorgan" }
];

export function MembershipPaymentPage() {
  const location = useLocation();
  const [selectedCountry, setSelectedCountry] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<"card" | "bank">("card");
  
  const planDetails = location.state?.planDetails || {
    name: "Basic",
    price: "$499",
    period: "/year"
  };

  const isAfricanCountry = () => {
    return countries.africa.includes(selectedCountry);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="container mx-auto px-4 py-6">
        <Link to="/membership-plans">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="inline-flex items-center gap-1 text-[#1a365d] hover:text-[#2c5282] transition-colors mb-4"
          >
            <FiArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back to Plans</span>
          </motion.div>
        </Link>

        <div className="max-w-lg mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-md p-5"
          >
            <h1 className="text-2xl font-bold text-[#1a365d] mb-4">Complete Your Subscription</h1>
            
            {/* Order Summary */}
            <div className="bg-gray-50 rounded-lg p-4 mb-5">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">{planDetails.name} Plan</span>
                <span className="font-medium">{planDetails.price}{planDetails.period}</span>
              </div>
            </div>

            {/* Country Selection */}
            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Your Country
              </label>
              <div className="relative">
                <FiGlobe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <select
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a365d] focus:border-transparent"
                >
                  <option value="">Select a country</option>
                  <optgroup label="Africa">
                    {countries.africa.map(country => (
                      <option key={country} value={country}>{country}</option>
                    ))}
                  </optgroup>
                  <optgroup label="Europe">
                    {countries.europe.map(country => (
                      <option key={country} value={country}>{country}</option>
                    ))}
                  </optgroup>
                  <optgroup label="Asia">
                    {countries.asia.map(country => (
                      <option key={country} value={country}>{country}</option>
                    ))}
                  </optgroup>
                  <optgroup label="Other">
                    {countries.other.map(country => (
                      <option key={country} value={country}>{country}</option>
                    ))}
                  </optgroup>
                </select>
              </div>
            </div>

            {/* Payment Method Selection */}
            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Payment Method
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setPaymentMethod("card")}
                  className={`p-3 rounded-lg border ${
                    paymentMethod === "card"
                      ? 'border-[#1a365d] bg-[#1a365d] text-white'
                      : 'border-gray-300 text-gray-700'
                  }`}
                >
                  Credit/Debit Card
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod("bank")}
                  className={`p-3 rounded-lg border ${
                    paymentMethod === "bank"
                      ? 'border-[#1a365d] bg-[#1a365d] text-white'
                      : 'border-gray-300 text-gray-700'
                  }`}
                >
                  Bank Transfer
                </button>
              </div>
            </div>

            {/* Payment Form */}
            <form className="space-y-4">
              {paymentMethod === "card" && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Card Information
                    </label>
                    <input
                      type="text"
                      placeholder="Card number"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a365d] focus:border-transparent"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a365d] focus:border-transparent"
                    />
                    <input
                      type="text"
                      placeholder="CVC"
                      className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a365d] focus:border-transparent"
                    />
                  </div>
                </>
              )}

              {paymentMethod === "bank" && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Your Bank
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a365d] focus:border-transparent mb-3">
                    <option value="">Choose a bank</option>
                    {isAfricanCountry() ? (
                      africanBanks.map(bank => (
                        <option key={bank.value} value={bank.value}>
                          {bank.name}
                        </option>
                      ))
                    ) : (
                      internationalBanks.map(bank => (
                        <option key={bank.value} value={bank.value}>
                          {bank.name}
                        </option>
                      ))
                    )}
                  </select>
                  <input
                    type="text"
                    placeholder="Account Number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a365d] focus:border-transparent"
                  />
                </div>
              )}

              <div className="flex items-center gap-2 text-sm text-gray-500">
                <FiLock className="w-4 h-4" />
                <span>Your payment information is secure and encrypted</span>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#1a365d] text-white py-2.5 rounded-lg font-medium hover:bg-[#2c5282] transition-colors"
              >
                Complete Subscription
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 