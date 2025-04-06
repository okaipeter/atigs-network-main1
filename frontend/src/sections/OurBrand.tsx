import { motion } from "framer-motion";
import brand1 from "../assets/brand1.jpg";
import brand2 from "../assets/brand2.jpg";
import brand3 from "../assets/brand3.jpg";
import brand4 from "../assets/brand4.jpg";
import brand5 from "../assets/brand5.jpg";

export function OurBrand() {
  const brandLogos = [
    {
      name: "Brand 1",
      logo: brand1,
      description: "Leading global trade partner",
    },
    {
      name: "Brand 2",
      logo: brand2,
      description: "International commerce solutions",
    },
    {
      name: "Brand 3",
      logo: brand3,
      description: "Worldwide business network",
    },
    {
      name: "Brand 4",
      logo: brand4,
      description: "Trade excellence partner",
    },
    {
      name: "Brand 5",
      logo: brand5,
      description: "Global market leader",
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Partners
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by leading organizations and businesses worldwide
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
          {brandLogos.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"
              }}
              className="group relative bg-white p-6 rounded-xl shadow-sm transition-all duration-300 cursor-pointer"
            >
              <div className="aspect-[3/2] relative mb-4 overflow-hidden">
                <motion.img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  className="absolute inset-0 w-full h-full object-contain"
                  whileHover={{ 
                    scale: 1.1,
                    transition: { duration: 0.3 }
                  }}
                />
              </div>

              <motion.div
                className="absolute inset-0 bg-[#1a365d]/0 rounded-xl"
                whileHover={{
                  backgroundColor: "rgba(26, 54, 93, 0.03)",
                  transition: { duration: 0.3 }
                }}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-[#1a365d] text-white rounded-lg font-medium hover:bg-[#2c5282] transition-colors"
          >
            Become a Partner
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
} 