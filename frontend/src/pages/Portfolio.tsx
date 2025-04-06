import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

interface PortfolioItem {
  title: string;
  description: string;
  image: string;
  category: string;
  link: string;
}

export function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const portfolioItems: PortfolioItem[] = [
    {
      title: "ATIGS Summit",
      description: "The flagship event bringing together global business leaders, investors, and policymakers to foster international trade and investment in Africa.",
      image: "https://placehold.co/1200x800/1a365d/ffffff?text=ATIGS+Summit",
      category: "Events",
      link: "/initiatives/atigs-summit"
    },
    {
      title: "ATIGS Awards Ceremony",
      description: "Recognizing excellence and innovation in African trade, investment, and business development.",
      image: "https://placehold.co/1200x800/1a365d/ffffff?text=ATIGS+Awards",
      category: "Events",
      link: "/initiatives/awards-ceremony"
    },
    {
      title: "ATIGS Investors Summit",
      description: "Connecting African businesses with global investors to facilitate strategic partnerships and investments.",
      image: "https://placehold.co/1200x800/1a365d/ffffff?text=Investors+Summit",
      category: "Investment",
      link: "/initiatives/investors-summit"
    },
    {
      title: "ATIGS Deal Marketplace",
      description: "A digital platform facilitating business deals, partnerships, and investment opportunities across Africa.",
      image: "https://placehold.co/1200x800/1a365d/ffffff?text=Deal+Marketplace",
      category: "Digital Platform",
      link: "/initiatives/deal-marketplace"
    },
    {
      title: "ATIGS Business Club",
      description: "An exclusive network of business leaders fostering collaboration and growth opportunities.",
      image: "https://placehold.co/1200x800/1a365d/ffffff?text=Business+Club",
      category: "Networking",
      link: "/initiatives/business-club"
    },
    {
      title: "The ATIGS Times",
      description: "Your premier source for African trade, investment, and business news and insights.",
      image: "https://placehold.co/1200x800/1a365d/ffffff?text=ATIGS+Times",
      category: "Media",
      link: "/initiatives/times"
    },
    {
      title: "ATIGS FDI Shark Tank",
      description: "Innovative platform connecting African startups with global investors in a dynamic pitch format.",
      image: "https://placehold.co/1200x800/1a365d/ffffff?text=FDI+Shark+Tank",
      category: "Investment",
      link: "/initiatives/shark-tank"
    },
    {
      title: "ATIGS Advantage Seminar",
      description: "Educational sessions providing insights and strategies for successful African market entry.",
      image: "https://placehold.co/1200x800/1a365d/ffffff?text=Advantage+Seminar",
      category: "Education",
      link: "/initiatives/advantage-seminar"
    },
    {
      title: "ATIGS Soiree",
      description: "High-level networking events fostering connections between African and global business leaders.",
      image: "https://placehold.co/1200x800/1a365d/ffffff?text=ATIGS+Soiree",
      category: "Networking",
      link: "/initiatives/soiree"
    }
  ];

  const categories = Array.from(new Set(portfolioItems.map(item => item.category)));
  
  const filteredItems = selectedCategory
    ? portfolioItems.filter(item => item.category === selectedCategory)
    : portfolioItems;

  return (
    <div className="min-h-screen bg-gray-50 py-20 mt-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Portfolio of Initiatives
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive suite of programs and platforms driving African trade and investment
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCategory(null)}
            className={`px-6 py-2 rounded-full ${
              selectedCategory === null
                ? 'bg-[#1a365d] text-white shadow-md'
                : 'bg-white text-gray-700 hover:text-[#1a365d] shadow-sm hover:shadow-md'
            } transition-all duration-300`}
          >
            All
          </motion.button>
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full ${
                selectedCategory === category
                  ? 'bg-[#1a365d] text-white shadow-md'
                  : 'bg-white text-gray-700 hover:text-[#1a365d] shadow-sm hover:shadow-md'
              } transition-all duration-300`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <Link to={item.link} key={item.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full"
              >
                <div className="aspect-[16/9] relative overflow-hidden">
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700 mb-4">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {item.description}
                  </p>
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block px-6 py-2 bg-[#1a365d] text-white rounded-lg hover:bg-[#2c5282] transition-colors"
                  >
                    Learn More
                  </motion.span>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 