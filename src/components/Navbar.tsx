import { FiSearch, FiChevronDown, FiChevronRight, FiMenu, FiX } from 'react-icons/fi';
import logo from '../assets/logo_trans.png';
import 'animate.css';
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from 'react-router-dom';

interface SubMenuItem {
  title: string;
  link: string;
}

interface MenuItem {
  title: string;
  link?: string;
  items?: SubMenuItem[];
}

interface MenuSection {
  items: (string | MenuItem)[];
}

const menuItems: Record<string, MenuSection> = {
  "Who We Are": {
    items: [
      { title: "About", link: "#" },
      { title: "Our Story", link: "#" },
      { title: "Board of Directors", link: "#" },
      { title: "Executive Leadership", link: "#" },
      { title: "Administration Team", link: "#" }
    ]
  },
  "What We Do": {
    items: [
      { title: "Our Purpose", link: "#" },
      { title: "Our Work", link: "#" },
      { 
        title: "Our Portfolio of Initiatives",
        items: [
          { title: "ATIGS Summit", link: "#" },
          { title: "ATIGS Awards Ceremony", link: "#" },
          { title: "ATIGS Investors Summit", link: "#" },
          { title: "ATIGS Deal Marketplace", link: "#" },
          { title: "ATIGS Business Club", link: "#" },
          { title: "The ATIGS Times", link: "#" },
          { title: "ATIGS FDI Shark Tank", link: "#" },
          { title: "ATIGS Advantage Seminar", link: "#" },
          { title: "ATIGS Soiree", link: "#" }
        ]
      },
      { title: "Success Stories", link: "#" },
      { title: "Annual Reports", link: "#" }
    ]
  },
  "How We Help": {
    items: ["Trade Services", "Market Access", "Business Development", "Training & Events"]
  },
  "Resources": {
    items: ["Trade Insights", "Market Reports", "Industry News", "Publications"]
  },
  "News & Events": {
    items: ["Latest News", "Upcoming Events", "Press Releases", "Media Gallery"]
  },
  "Contact Us": {
    items: ["Get in Touch", "Office Locations", "Support", "Careers"]
  }
};

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);

  const handleMouseEnter = (menu: string) => {
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
    setActiveSubMenu(null);
  };

  const isMenuItem = (item: string | MenuItem): item is MenuItem => {
    return typeof item !== 'string' && 'title' in item;
  };

  return (
    <header className='w-full fixed top-0 z-50 animate__animated animate__fadeInDown'>
      <nav className="fixed w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <a href="/" className="flex items-center mr-8">
              <img 
                src={logo} 
                alt="Trade Council Logo" 
                className="h-20 w-auto object-contain hover:opacity-90 transition-opacity"
                style={{ minWidth: '160px', maxWidth: '200px' }}
              />
            </a>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {/* Navigation Items */}
              {Object.entries(menuItems).map(([menu, { items }]) => (
                <div
                  key={menu}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(menu)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button className="flex items-center space-x-1 text-gray-700 hover:text-[#1a365d] font-medium py-2">
                    <span>{menu}</span>
                    <FiChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === menu ? 'rotate-180' : ''
                    }`} />
                  </button>

                  <AnimatePresence>
                    {activeDropdown === menu && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 mt-2 w-72 bg-white rounded-lg shadow-xl py-3"
                      >
                        {items.map((item, idx) => (
                          typeof item === 'string' ? (
                            <a
                              key={idx}
                              href="#"
                              className="block px-8 py-3 text-gray-700 hover:bg-[#1a365d] hover:text-white transition-colors text-base"
                            >
                              {item}
                            </a>
                          ) : (
                            <div
                              key={idx}
                              className="relative group"
                              onMouseEnter={(e) => {
                                e.stopPropagation();
                                setActiveSubMenu(item.title);
                              }}
                              onMouseLeave={() => setActiveSubMenu(null)}
                            >
                              <a
                                href={item.link}
                                className="block px-8 py-3 text-gray-700 hover:bg-[#1a365d] hover:text-white transition-colors text-base flex items-center justify-between"
                              >
                                {item.title}
                                {item.items && <FiChevronRight className="w-4 h-4" />}
                              </a>
                              {item.items && activeSubMenu === item.title && (
                                <motion.div
                                  initial={{ opacity: 0, x: 10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  exit={{ opacity: 0, x: 10 }}
                                  className="absolute left-full top-0 w-72 bg-white rounded-lg shadow-xl py-3"
                                >
                                  {item.items.map((subItem, subIdx) => (
                                    <a
                                      key={subIdx}
                                      href={subItem.link}
                                      className="block px-8 py-3 text-gray-700 hover:bg-[#1a365d] hover:text-white transition-colors text-base"
                                    >
                                      {subItem.title}
                                    </a>
                                  ))}
                                </motion.div>
                              )}
                            </div>
                          )
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              {/* Search Bar */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 w-48 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1a365d] focus:border-transparent transition-all"
                />
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>

              {/* Become a Member Button */}
              <Link to="/membership">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 bg-[#1a365d] text-white rounded-lg hover:bg-[#2c5282] transition-colors whitespace-nowrap"
                >
                  Become a Member
                </motion.button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-4">
              <button
                className="text-gray-700 hover:text-[#1a365d] focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden overflow-hidden"
              >
                <div className="py-4 space-y-4">
                  {/* Mobile Navigation */}
                  {Object.entries(menuItems).map(([menu, { items }]) => (
                    <div key={menu} className="px-4">
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === menu ? null : menu)}
                        className="flex items-center justify-between w-full py-3 text-gray-700 hover:text-[#1a365d]"
                      >
                        <span className="font-medium text-lg">{menu}</span>
                        <FiChevronDown className={`w-5 h-5 transition-transform duration-200 ${
                          activeDropdown === menu ? 'rotate-180' : ''
                        }`} />
                      </button>

                      <AnimatePresence>
                        {activeDropdown === menu && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="pl-4 space-y-2"
                          >
                            {items.map((item, idx) => (
                              typeof item === 'string' ? (
                                <a
                                  key={idx}
                                  href="#"
                                  className="block py-3 text-gray-600 hover:text-[#1a365d] text-base"
                                >
                                  {item}
                                </a>
                              ) : (
                                <div key={idx}>
                                  <button
                                    onClick={() => setActiveSubMenu(activeSubMenu === item.title ? null : item.title)}
                                    className="flex items-center justify-between w-full py-3 text-gray-600 hover:text-[#1a365d]"
                                  >
                                    <span>{item.title}</span>
                                    {item.items && <FiChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                                      activeSubMenu === item.title ? 'rotate-180' : ''
                                    }`} />}
                                  </button>
                                  {item.items && activeSubMenu === item.title && (
                                    <motion.div
                                      initial={{ opacity: 0, height: 0 }}
                                      animate={{ opacity: 1, height: "auto" }}
                                      exit={{ opacity: 0, height: 0 }}
                                      className="pl-4 space-y-2"
                                    >
                                      {item.items.map((subItem, subIdx) => (
                                        <a
                                          key={subIdx}
                                          href={subItem.link}
                                          className="block py-2 text-gray-600 hover:text-[#1a365d] text-base"
                                        >
                                          {subItem.title}
                                        </a>
                                      ))}
                                    </motion.div>
                                  )}
                                </div>
                              )
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}

                  {/* Mobile Search */}
                  <div className="px-4">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Search..."
                        className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1a365d] focus:border-transparent"
                      />
                      <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>
                  </div>

                  {/* Mobile Become a Member Button */}
                  <div className="px-4 pt-2">
                    <Link to="/membership">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full px-6 py-3 bg-[#1a365d] text-white rounded-lg hover:bg-[#2c5282] transition-colors text-lg font-medium"
                      >
                        Become a Member
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </header>
  );
}