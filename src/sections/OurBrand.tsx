import { motion } from "framer-motion";

export function OurBrand() {
  const brandLogos = [
    {
      name: "Brand 1",
      logo: "https://placehold.co/200x80/1a365d/white?text=Brand+Logo",
    },
    {
      name: "Brand 2",
      logo: "https://placehold.co/200x80/1a365d/white?text=Brand+Logo",
    },
    {
      name: "Brand 3",
      logo: "https://placehold.co/200x80/1a365d/white?text=Brand+Logo",
    },
    {
      name: "Brand 4",
      logo: "https://placehold.co/200x80/1a365d/white?text=Brand+Logo",
    },
    {
      name: "Brand 5",
      logo: "https://placehold.co/200x80/1a365d/white?text=Brand+Logo",
    },
    {
      name: "Brand 6",
      logo: "https://placehold.co/200x80/1a365d/white?text=Brand+Logo",
    },
    {
      name: "Brand 7",
      logo: "https://placehold.co/200x80/1a365d/white?text=Brand+Logo",
    },
    {
      name: "Brand 8",
      logo: "https://placehold.co/200x80/1a365d/white?text=Brand+Logo",
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
            Our Brand
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by leading organizations and businesses worldwide
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {brandLogos.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="aspect-[3/2] relative">
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  className="absolute inset-0 w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 