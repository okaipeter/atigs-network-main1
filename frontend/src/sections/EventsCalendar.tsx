import { motion } from "framer-motion";
import { FiCalendar, FiMapPin, FiClock, FiUsers } from "react-icons/fi";
import { useState } from "react";

const events = [
  {
    id: 1,
    title: "International Trade Summit 2024",
    date: "March 15-17, 2024",
    time: "9:00 AM - 5:00 PM EST",
    location: "New York City, USA",
    type: "Conference",
    attendees: 500,
    description: "Join industry leaders for our flagship event discussing global trade trends and opportunities.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&w=500&q=60"
  },
  {
    id: 2,
    title: "Export Documentation Workshop",
    date: "April 5, 2024",
    time: "10:00 AM - 3:00 PM EST",
    location: "Virtual Event",
    type: "Workshop",
    attendees: 100,
    description: "Learn best practices for managing export documentation and compliance requirements.",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&w=500&q=60"
  },
  {
    id: 3,
    title: "Asia Trade Forum",
    date: "May 20-21, 2024",
    time: "8:00 AM - 4:00 PM SGT",
    location: "Singapore",
    type: "Forum",
    attendees: 300,
    description: "Explore trade opportunities and partnerships in the Asian market.",
    image: "https://images.unsplash.com/photo-1602992708529-c9fdb12905c9?auto=format&w=500&q=60"
  }
];

const eventTypes = ["All", "Conference", "Workshop", "Forum", "Webinar"];

export function EventsCalendar() {
  const [selectedType, setSelectedType] = useState("All");

  const filteredEvents = selectedType === "All"
    ? events
    : events.filter(event => event.type === selectedType);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900"
          >
            Upcoming Events
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Join our trade events, workshops, and networking opportunities
          </motion.p>
        </div>

        {/* Event Type Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {eventTypes.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                selectedType === type
                  ? "bg-[#1a365d] text-white"
                  : "bg-white text-gray-600 hover:bg-[#1a365d] hover:text-white"
              }`}
            >
              {type}
            </button>
          ))}
        </motion.div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-[#1a365d]/10 text-[#1a365d] text-sm font-medium rounded-full">
                    {event.type}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  {event.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {event.description}
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-gray-600">
                    <FiCalendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FiClock className="w-4 h-4 mr-2" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FiMapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FiUsers className="w-4 h-4 mr-2" />
                    <span className="text-sm">{event.attendees} Expected Attendees</span>
                  </div>
                </div>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-[#1a365d] text-white rounded-lg px-6 py-3 font-medium hover:bg-[#2c5282] transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Register Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Events CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-[#1a365d] bg-white rounded-lg hover:bg-[#1a365d] hover:text-white transition-all duration-300 border-2 border-[#1a365d]"
          >
            View All Events
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
} 