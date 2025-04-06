import { motion } from "framer-motion";
import { FiLinkedin, FiMail } from 'react-icons/fi';

interface BoardMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  linkedin?: string;
  email?: string;
}

export function BoardOfDirectors() {
  const boardMembers: BoardMember[] = [
    {
      name: "Dr. Bako Amabil",
      role: "Chairperson",
      image: "https://placehold.co/400x500",
      bio: "Dr. Johnson brings over 25 years of experience in international trade and economic development. She has led numerous initiatives to strengthen global trade relationships.",
      linkedin: "#",
      email: "sarah.johnson@example.com"
    },
    {
      name: "Michael Chen",
      role: "Vice Chairperson",
      image: "https://placehold.co/400x500",
      bio: "With expertise in Asian markets and cross-border partnerships, Michael has been instrumental in expanding our presence in the Asia-Pacific region.",
      linkedin: "#",
      email: "michael.chen@example.com"
    },
    {
      name: "Dr. Elena Rodriguez",
      role: "Board Member",
      image: "https://placehold.co/400x500",
      bio: "A renowned economist specializing in emerging markets, Dr. Rodriguez provides valuable insights into Latin American trade opportunities.",
      linkedin: "#",
      email: "elena.rodriguez@example.com"
    },
    {
      name: "James Williams",
      role: "Board Member",
      image: "https://placehold.co/400x500",
      bio: "James brings extensive experience in corporate governance and strategic planning from his 20-year career in international business.",
      linkedin: "#",
      email: "james.williams@example.com"
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
            Board of Directors
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl text-center max-w-3xl mx-auto"
          >
            Meet the visionary leaders guiding our organization towards excellence in international trade
          </motion.p>
        </div>
      </motion.div>

      {/* Board Members Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {boardMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/2">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-6">
                    <h3 className="text-2xl font-bold text-[#1a365d] mb-2">{member.name}</h3>
                    <p className="text-[#2c5282] font-medium mb-4">{member.role}</p>
                    <p className="text-gray-600 mb-6">{member.bio}</p>
                    <div className="flex space-x-4">
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          className="text-gray-600 hover:text-[#1a365d] transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FiLinkedin className="w-6 h-6" />
                        </a>
                      )}
                      {member.email && (
                        <a
                          href={`mailto:${member.email}`}
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

      {/* Mission Statement */}
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
              Our Commitment
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-gray-600 mb-8"
            >
              Our Board of Directors is committed to maintaining the highest standards of corporate 
              governance while driving innovation in international trade. Through their diverse 
              expertise and global perspective, they ensure that our organization continues to 
              serve as a catalyst for business growth and economic development worldwide.
            </motion.p>
          </div>
        </div>
      </section>
    </div>
  );
} 