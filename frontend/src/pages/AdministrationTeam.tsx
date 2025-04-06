import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  department: string;
  expertise: string[];
  contact: {
    email: string;
    phone?: string;
    location?: string;
  };
}

export function AdministrationTeam() {
  const teamMembers: TeamMember[] = [
    {
      name: "Jennifer Parker",
      role: "Head of Administration",
      image: "https://placehold.co/400x500",
      bio: "Jennifer leads our administrative operations with over 15 years of experience in organizational management and process optimization.",
      department: "Administration",
      expertise: [
        "Office Management",
        "Process Optimization",
        "Team Coordination",
        "Resource Planning"
      ],
      contact: {
        email: "jennifer.parker@example.com",
        phone: "+1 (555) 123-4567",
        location: "Headquarters"
      }
    },
    {
      name: "Marcus Chen",
      role: "HR Manager",
      image: "https://placehold.co/400x500",
      bio: "Marcus oversees human resources operations, focusing on talent development and maintaining a positive workplace culture.",
      department: "Human Resources",
      expertise: [
        "Talent Acquisition",
        "Employee Relations",
        "Training & Development",
        "Performance Management"
      ],
      contact: {
        email: "marcus.chen@example.com",
        phone: "+1 (555) 234-5678",
        location: "HR Department"
      }
    },
    {
      name: "Sarah Williams",
      role: "Office Operations Coordinator",
      image: "https://placehold.co/400x500",
      bio: "Sarah ensures smooth daily operations and coordinates administrative support across all departments.",
      department: "Operations",
      expertise: [
        "Facility Management",
        "Event Coordination",
        "Administrative Support",
        "Vendor Relations"
      ],
      contact: {
        email: "sarah.williams@example.com",
        location: "Operations Center"
      }
    },
    {
      name: "Carlos Rodriguez",
      role: "IT Support Manager",
      image: "https://placehold.co/400x500",
      bio: "Carlos manages our IT infrastructure and provides technical support to ensure seamless operations across the organization.",
      department: "Information Technology",
      expertise: [
        "Technical Support",
        "System Administration",
        "Network Management",
        "IT Security"
      ],
      contact: {
        email: "carlos.rodriguez@example.com",
        phone: "+1 (555) 345-6789",
        location: "IT Department"
      }
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
            Administration Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl text-center max-w-3xl mx-auto"
          >
            Meet the dedicated professionals who keep our organization running smoothly
          </motion.p>
        </div>
      </motion.div>

      {/* Team Members Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-8">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-[#1a365d] mb-2">{member.name}</h3>
                      <p className="text-[#2c5282] font-medium mb-2">{member.role}</p>
                      <p className="text-gray-500 mb-4">{member.department}</p>
                      <p className="text-gray-600 mb-6">{member.bio}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-[#1a365d] mb-3">Areas of Expertise:</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {member.expertise.map((skill, idx) => (
                          <li key={idx} className="text-gray-600 flex items-center">
                            <span className="w-2 h-2 bg-[#2c5282] rounded-full mr-2"></span>
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col space-y-2">
                      <a
                        href={`mailto:${member.contact.email}`}
                        className="text-gray-600 hover:text-[#1a365d] transition-colors flex items-center"
                      >
                        <FiMail className="w-5 h-5 mr-2" />
                        {member.contact.email}
                      </a>
                      {member.contact.phone && (
                        <span className="text-gray-600 flex items-center">
                          <FiPhone className="w-5 h-5 mr-2" />
                          {member.contact.phone}
                        </span>
                      )}
                      {member.contact.location && (
                        <span className="text-gray-600 flex items-center">
                          <FiMapPin className="w-5 h-5 mr-2" />
                          {member.contact.location}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Mission Section */}
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
              Our Commitment to Excellence
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-gray-600 mb-8"
            >
              Our administration team is the backbone of our organization, ensuring efficient 
              operations and seamless coordination across all departments. Through their dedication 
              and expertise, we maintain the highest standards of service and support for our 
              members and stakeholders.
            </motion.p>
          </div>
        </div>
      </section>
    </div>
  );
} 