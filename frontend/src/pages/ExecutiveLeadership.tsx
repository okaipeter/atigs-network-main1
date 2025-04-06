import { motion } from "framer-motion";
import { FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi';

interface ExecutiveLeader {
  name: string;
  role: string;
  image: string;
  bio: string;
  responsibilities: string[];
  linkedin?: string;
  twitter?: string;
  email?: string;
}

export function ExecutiveLeadership() {
  const executives: ExecutiveLeader[] = [
    {
      name: "Robert Anderson",
      role: "Chief Executive Officer",
      image: "https://placehold.co/400x500",
      bio: "Robert brings over two decades of experience in international trade and business development. Under his leadership, our organization has expanded its global reach and impact significantly.",
      responsibilities: [
        "Strategic organizational direction",
        "Global partnerships development",
        "Innovation initiatives",
        "Stakeholder relations"
      ],
      linkedin: "#",
      twitter: "#",
      email: "robert.anderson@example.com"
    },
    {
      name: "Maria Santos",
      role: "Chief Operations Officer",
      image: "https://placehold.co/400x500",
      bio: "Maria's expertise in operational excellence and process optimization has been crucial in streamlining our services and enhancing member experience worldwide.",
      responsibilities: [
        "Operational efficiency",
        "Service delivery optimization",
        "Quality assurance",
        "Resource management"
      ],
      linkedin: "#",
      twitter: "#",
      email: "maria.santos@example.com"
    },
    {
      name: "Dr. David Kim",
      role: "Chief Strategy Officer",
      image: "https://placehold.co/400x500",
      bio: "Dr. Kim leads our strategic initiatives with a focus on emerging markets and digital transformation, ensuring our organization stays ahead of global trade trends.",
      responsibilities: [
        "Market strategy development",
        "Digital transformation",
        "Research & analytics",
        "Strategic partnerships"
      ],
      linkedin: "#",
      email: "david.kim@example.com"
    },
    {
      name: "Lisa Thompson",
      role: "Chief Financial Officer",
      image: "https://placehold.co/400x500",
      bio: "Lisa oversees our financial operations and strategy, ensuring sustainable growth and responsible resource management across all our initiatives.",
      responsibilities: [
        "Financial planning",
        "Risk management",
        "Investment strategy",
        "Compliance oversight"
      ],
      linkedin: "#",
      email: "lisa.thompson@example.com"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-[#1a365d] to-[#2c5282] text-white py-20"
      >
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-center"
          >
            Executive Leadership
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl text-center max-w-3xl mx-auto"
          >
            Meet our dynamic leadership team driving innovation and excellence in global trade
          </motion.p>
        </div>
      </motion.div>

      {/* Executive Team Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 max-w-6xl mx-auto">
            {executives.map((executive, index) => (
              <motion.div
                key={executive.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3">
                    <img
                      src={executive.image}
                      alt={executive.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-8">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-[#1a365d] mb-2">{executive.name}</h3>
                      <p className="text-[#2c5282] font-medium mb-4">{executive.role}</p>
                      <p className="text-gray-600 mb-6">{executive.bio}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-[#1a365d] mb-3">Key Responsibilities:</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {executive.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="text-gray-600 flex items-center">
                            <span className="w-2 h-2 bg-[#2c5282] rounded-full mr-2"></span>
                            {responsibility}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex space-x-4">
                      {executive.linkedin && (
                        <a
                          href={executive.linkedin}
                          className="text-gray-600 hover:text-[#1a365d] transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FiLinkedin className="w-6 h-6" />
                        </a>
                      )}
                      {executive.twitter && (
                        <a
                          href={executive.twitter}
                          className="text-gray-600 hover:text-[#1a365d] transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FiTwitter className="w-6 h-6" />
                        </a>
                      )}
                      {executive.email && (
                        <a
                          href={`mailto:${executive.email}`}
                          className="text-gray-600 hover:text-[#1a365d] transition-colors"
                        >
                          <FiMail className="w-6 h-6" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-[#1a365d] mb-8"
            >
              Leadership Vision
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-gray-600 mb-8"
            >
              Our executive team is dedicated to fostering innovation, driving sustainable growth, 
              and creating lasting value for our members and stakeholders. Through strategic leadership 
              and a commitment to excellence, we continue to shape the future of international trade 
              and economic development.
            </motion.p>
          </div>
        </div>
      </section>
    </div>
  );
} 