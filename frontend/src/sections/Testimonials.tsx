import { motion } from "framer-motion";
import { FiStar } from "react-icons/fi";

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "CEO",
    company: "Global Exports Inc.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&w=150&q=80",
    quote: "The trade council has been instrumental in our international expansion. Their market insights and networking opportunities have opened new doors for our business.",
    rating: 5
  },
  {
    name: "Michael Chen",
    position: "Director of Operations",
    company: "Pacific Trade Solutions",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&w=150&q=80",
    quote: "The resources and support provided by the council have helped us navigate complex trade regulations and establish valuable partnerships across Asia.",
    rating: 5
  },
  {
    name: "Elena Rodriguez",
    position: "International Sales Manager",
    company: "Mercado Global",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&w=150&q=80",
    quote: "Being a member has given us access to exclusive trade opportunities and expert guidance that has accelerated our growth in new markets.",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#1a365d] to-[#2c5282] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Member Success Stories
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto"
          >
            Hear from our members about their experience and success with our trade council
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-8 relative border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover ring-2 ring-white/20"
                />
                <div>
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <p className="text-gray-300 text-sm">{testimonial.position}</p>
                  <p className="text-[#60A5FA] text-sm">{testimonial.company}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FiStar key={i} className="w-5 h-5 text-[#60A5FA] fill-current" />
                ))}
              </div>

              <blockquote className="text-gray-300 italic mb-6">
                "{testimonial.quote}"
              </blockquote>

              <div className="absolute -bottom-4 right-8">
                <svg
                  className="h-16 w-16 text-[#60A5FA] opacity-10"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-[#1a365d] bg-white rounded-lg hover:bg-[#1a365d] hover:text-white transition-all duration-300 border-2 border-white"
          >
            Read More Success Stories
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
} 