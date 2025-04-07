import { motion } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail, FiClock, FiGlobe } from 'react-icons/fi';

interface Office {
  id: number;
  city: string;
  country: string;
  address: string[];
  phone: string;
  email: string;
  hours: string[];
  region: string;
  image: string;
}

const offices: Office[] = [
  {
    id: 1,
    city: "Washington DC",
    country: "United States",
    address: ["123 Trade Avenue", "Washington, DC 20001"],
    phone: "+1 (234) 567-8900",
    email: "dc@atigsnetwork.com",
    hours: ["Monday - Friday: 9:00 AM - 6:00 PM EST", "Saturday - Sunday: Closed"],
    region: "North America",
    image: "https://images.unsplash.com/photo-1501466044931-62695aada8e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1978&q=80"
  },
  {
    id: 2,
    city: "Lagos",
    country: "Nigeria",
    address: ["45 Victoria Island Way", "Lagos, Nigeria"],
    phone: "+234 123 456 7890",
    email: "lagos@atigsnetwork.com",
    hours: ["Monday - Friday: 9:00 AM - 6:00 PM WAT", "Saturday - Sunday: Closed"],
    region: "West Africa",
    image: "https://images.unsplash.com/photo-1588358524496-e0360abef04f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: 3,
    city: "Nairobi",
    country: "Kenya",
    address: ["78 Business District", "Nairobi, Kenya"],
    phone: "+254 123 456 789",
    email: "nairobi@atigsnetwork.com",
    hours: ["Monday - Friday: 9:00 AM - 6:00 PM EAT", "Saturday - Sunday: Closed"],
    region: "East Africa",
    image: "https://images.unsplash.com/photo-1611348524140-53c9a25263d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: 4,
    city: "Johannesburg",
    country: "South Africa",
    address: ["90 Trade Center", "Sandton, Johannesburg"],
    phone: "+27 12 345 6789",
    email: "joburg@atigsnetwork.com",
    hours: ["Monday - Friday: 9:00 AM - 6:00 PM SAST", "Saturday - Sunday: Closed"],
    region: "Southern Africa",
    image: "https://images.unsplash.com/photo-1577948000111-9c970dfe3743?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  }
];

const OfficeLocations = () => {
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
              Our Office Locations
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Find ATIGS Network offices across Africa and around the world
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Global Presence */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Global Presence</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our offices are strategically located to serve businesses across Africa and facilitate international trade connections.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={office.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
              >
                <div className="relative h-48">
                  <img
                    src={office.image}
                    alt={`${office.city} Office`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-2 text-white mb-1">
                      <FiMapPin className="w-5 h-5" />
                      <span className="text-lg font-semibold">{office.region}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      {office.city}, {office.country}
                    </h3>
                  </div>
                </div>
                <div className="p-6 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-[#1a365d]/10 text-[#1a365d] rounded-lg">
                      <FiMapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Address</h4>
                      {office.address.map((line, i) => (
                        <p key={i} className="text-gray-600">{line}</p>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-[#1a365d]/10 text-[#1a365d] rounded-lg">
                      <FiPhone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Phone</h4>
                      <p className="text-gray-600">{office.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-[#1a365d]/10 text-[#1a365d] rounded-lg">
                      <FiMail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <p className="text-gray-600">{office.email}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-[#1a365d]/10 text-[#1a365d] rounded-lg">
                      <FiClock className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Business Hours</h4>
                      {office.hours.map((hours, i) => (
                        <p key={i} className="text-gray-600">{hours}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Network */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-r from-[#1a365d] to-[#2c5282] rounded-2xl p-8 md:p-12 text-center"
          >
            <div className="max-w-3xl mx-auto">
              <div className="p-4 bg-white/10 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <FiGlobe className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Our Global Network
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Beyond our physical offices, we maintain a vast network of partners and representatives across the globe to better serve your business needs.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-[#1a365d] rounded-lg hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
              >
                <FiMapPin className="w-5 h-5" />
                Find a Representative
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default OfficeLocations; 