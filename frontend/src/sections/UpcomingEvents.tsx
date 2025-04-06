import { motion } from "framer-motion";
import { useState } from "react";
import { FiCalendar, FiClock, FiMapPin, FiUser } from "react-icons/fi";

type EventType = "All" | "Conference" | "Workshop" | "Forum" | "Webinar";

interface Event {
  id: number;
  type: EventType;
  title: string;
  description: string;
  image: string;
  date: string;
  time: string;
  location: string;
  attendees: string;
}

export function UpcomingEvents() {
  const [activeFilter, setActiveFilter] = useState<EventType>("All");

  const events: Event[] = [
    {
      id: 1,
      type: "Conference",
      title: "International Trade Summit 2024",
      description: "Join industry leaders for our flagship event discussing global trade trends and opportunities.",
      image: "/images/events/conference1.jpg",
      date: "March 15-17, 2024",
      time: "9:00 AM - 5:00 PM EST",
      location: "New York City, USA",
      attendees: "500 Expected Attendees"
    },
    {
      id: 2,
      type: "Conference",
      title: "African Business Forum 2024",
      description: "Connect with African business leaders and explore investment opportunities across the continent.",
      image: "/images/events/conference2.jpg",
      date: "April 5-7, 2024",
      time: "10:00 AM - 6:00 PM WAT",
      location: "Nairobi, Kenya",
      attendees: "400 Expected Attendees"
    },
    {
      id: 3,
      type: "Conference",
      title: "Global Supply Chain Conference",
      description: "Discover innovative solutions for modern supply chain challenges and network with industry experts.",
      image: "/images/events/conference3.jpg",
      date: "May 20-22, 2024",
      time: "9:00 AM - 5:00 PM SGT",
      location: "Singapore",
      attendees: "350 Expected Attendees"
    },
    {
      id: 4,
      type: "Conference",
      title: "Digital Trade & E-commerce Summit",
      description: "Explore the future of digital trade and e-commerce in the global marketplace.",
      image: "/images/events/conference4.jpg",
      date: "June 10-12, 2024",
      time: "10:00 AM - 6:00 PM BST",
      location: "London, UK",
      attendees: "450 Expected Attendees"
    },
    {
      id: 5,
      type: "Workshop",
      title: "Export Documentation Workshop",
      description: "Learn best practices for managing export documentation and compliance requirements.",
      image: "/images/events/workshop1.jpg",
      date: "April 5, 2024",
      time: "10:00 AM - 3:00 PM EST",
      location: "Virtual Event",
      attendees: "100 Expected Attendees"
    },
    {
      id: 6,
      type: "Workshop",
      title: "International Trade Finance Workshop",
      description: "Master the essentials of trade finance and risk management in international business.",
      image: "/images/events/workshop2.jpg",
      date: "May 15, 2024",
      time: "9:00 AM - 4:00 PM EDT",
      location: "Chicago, USA",
      attendees: "150 Expected Attendees"
    },
    {
      id: 7,
      type: "Workshop",
      title: "Cross-Border E-commerce Workshop",
      description: "Learn strategies for successful cross-border e-commerce operations and digital marketing.",
      image: "/images/events/workshop3.jpg",
      date: "June 20, 2024",
      time: "2:00 PM - 7:00 PM CST",
      location: "Shanghai, China",
      attendees: "120 Expected Attendees"
    },
    {
      id: 8,
      type: "Forum",
      title: "Asia Trade Forum",
      description: "Explore trade opportunities and partnerships in the Asian market.",
      image: "/images/events/forum1.jpg",
      date: "May 20-21, 2024",
      time: "8:00 AM - 4:00 PM SGT",
      location: "Singapore",
      attendees: "300 Expected Attendees"
    },
    {
      id: 9,
      type: "Forum",
      title: "European Trade & Investment Forum",
      description: "Connect with European business leaders and explore market opportunities.",
      image: "/images/events/forum2.jpg",
      date: "July 10-11, 2024",
      time: "9:00 AM - 5:00 PM CEST",
      location: "Paris, France",
      attendees: "250 Expected Attendees"
    },
    {
      id: 10,
      type: "Forum",
      title: "Americas Business Forum",
      description: "Discover business opportunities and network with leaders from North and South America.",
      image: "/images/events/forum3.jpg",
      date: "August 15-16, 2024",
      time: "10:00 AM - 6:00 PM EDT",
      location: "Miami, USA",
      attendees: "280 Expected Attendees"
    }
  ];

  const filteredEvents = activeFilter === "All" 
    ? events.slice(0, 3) 
    : events.filter(event => event.type === activeFilter);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Upcoming Events
          </h2>
          <p className="text-xl text-gray-600">
            Join our trade events, workshops, and networking opportunities
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["All", "Conference", "Workshop", "Forum", "Webinar"].map((filter) => (
            <motion.button
              key={filter}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter as EventType)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === filter
                  ? "bg-[#1a365d] text-white"
                  : "bg-white text-gray-600 hover:bg-[#1a365d] hover:text-white"
              }`}
            >
              {filter}
            </motion.button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-[#1a365d]">
                    {event.type}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {event.title}
                </h3>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <FiCalendar className="w-4 h-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <FiClock className="w-4 h-4" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <FiMapPin className="w-4 h-4" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <FiUser className="w-4 h-4" />
                    <span>{event.attendees}</span>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-4 w-full py-3 bg-[#1a365d] text-white rounded-lg font-medium hover:bg-[#2c5282] transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Register Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-3 bg-white text-[#1a365d] rounded-lg font-medium border-2 border-[#1a365d] hover:bg-[#1a365d] hover:text-white transition-all duration-300"
          >
            A events 
          </motion.button>
        </div>
      </div>
    </section>
  );
} 