import { motion } from "framer-motion";
import amen from "../assets/partners/amen.jpeg";
import asian from "../assets/partners/asian.jpeg";
import asoko from "../assets/partners/asoko.jpeg";
import varanda from "../assets/partners/varanda.png";
import velocity from "../assets/partners/velocity.jpg";


export function Stats() {
  const brandLogos = [
    { name: "Amen Africa", image: amen },
    { name: "Asian", image: asian },
    { name: "Asoko", image: asoko },
    { name: "Varanda", image: varanda },
    { name: "Velocity", image: velocity}
    // { name: "Brand 5", image: "/logos/brand5.png" },
    // { name: "Brand 6", image: "/logos/brand6.png" },
    // { name: "Brand 7", image: "/logos/brand7.png" },
    // { name: "Brand 8", image: "/logos/brand8.png" },
  ];

  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a365d] mb-4">
            Our Partners
          </h2>
          <p className="text-gray-600 text-lg">
            Trusted by leading companies worldwide
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {brandLogos.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white shadow-lg rounded-xl p-8 flex items-center justify-center group hover:shadow-xl transition-all duration-300"
            >
              <img
                src={brand.image}
                alt={brand.name}
                className="h-15  object-fill opacity-70 group-hover:opacity-100 transition-all duration-300"
              />
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
          <a
            href="#"
            className="inline-flex items-center text-[#1a365d] hover:text-[#2c5282] transition-colors text-lg font-medium"
          >
            <span>View all our partners</span>
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
} 