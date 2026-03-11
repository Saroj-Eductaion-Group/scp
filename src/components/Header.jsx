import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/scp-logo.png";
import { FaPhone, FaEnvelope, FaBars, FaTimes, FaChevronDown, FaChevronRight, FaExclamationTriangle  } from "react-icons/fa";

const menuItems = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    links: [
      { name: "About Us", path: "/about" },
      { name: "Chairman Message", path: "/chairman-message" },
      { name: "Vision & Mission", path: "/vision-mission" },
    ],
  },
  {
    title: "Admission",
    links: [
      { name: "Admission Process", path: "/admission-process" },
      // { name: "Fee Structure", path: "/fee-structure" },
      { name: "Scholarships", path: "/scholarships" },
     
    ],
  },
  {
    title: "Academics",
    links: [
      { name: "Courses", path: "/courses" },
      // { name: "Academic Calendar", path: "/academic-calendar" },

    ],
  },
  {
    title: "Placement",
    path: "/placements",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

const Header = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpandedItem, setMobileExpandedItem] = useState(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: "100%" }
  };

  return (
    <>
      {/* Top info bar */}
    <div className="bg-gradient-to-r from-red-700 to-red-600 text-white text-xs">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Left side - Urgency message */}
        <motion.div
          initial={{ opacity: 0.8, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 1.5
          }}
          className="flex items-center"
        >
          <FaExclamationTriangle className="mr-2 text-yellow-300" />
          <span className="font-bold whitespace-nowrap">ADMISSIONS CLOSING SOON!</span>
        </motion.div>

        {/* Right side - CTA button */}
        <motion.div 
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <Link
            to="https://seglko.in8.nopaperforms.com/"
            className="flex items-center bg-yellow-400 hover:bg-yellow-300 text-red-800 px-3 py-1.5 rounded-md text-xs sm:text-sm font-bold shadow hover:shadow-md transition-all"
          >
            <span>APPLY</span>
            <motion.span
              className="ml-1"
              animate={{ x: [0, 2, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.2,
              }}
            >
              →
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </div>
      {/* Main header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-3">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <motion.img 
                src={logo} 
                alt="College Logo" 
                className="h-8 md:h-16"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {menuItems.map((item, index) => (
                <div
                  key={index}
                  className="relative h-full flex items-center"
                  onMouseEnter={() => setHoveredItem(index)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {item.links ? (
                    <>
                      <button className="flex items-center text-gray-800 hover:text-blue-700 px-4 py-3 font-medium transition-colors relative group">
                        <span>{item.title}</span>
                        <motion.span
                          animate={{
                            rotate: hoveredItem === index ? 180 : 0,
                          }}
                          className="ml-1"
                        >
                          <FaChevronDown size={12} />
                        </motion.span>
                        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-700 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                      </button>

                      <AnimatePresence>
                        {hoveredItem === index && (
                          <motion.ul
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute left-1/2 top-full -translate-x-1/2 mt-1 w-56 bg-white rounded-lg shadow-lg py-2 z-50 border border-gray-100"
                          >
                            {item.links.map((link, i) => (
                              <motion.li
                                key={i}
                                variants={itemVariants}
                                initial="hidden"
                                animate="visible"
                              >
                                <Link
                                  to={link.path}
                                  className="block px-4 py-2 text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition-colors"
                                  onClick={() => setHoveredItem(null)}
                                >
                                  {link.name}
                                </Link>
                              </motion.li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <div className="relative group h-full flex items-center">
                      <Link
                        to={item.path}
                        className="px-4 py-3 font-medium text-gray-800 hover:text-blue-700 transition-colors"
                      >
                        {item.title}
                      </Link>
                      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-700 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              className="lg:hidden  p-2 text-gray-700 rounded-md focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={mobileMenuVariants}
              transition={{ type: "tween", ease: "easeInOut" }}
              className="fixed inset-y-0 right-0  w-full max-w-xs bg-white shadow-xl z-50 overflow-y-auto lg:hidden"
            >
              <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                <Link to="/" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
                  <img src={logo} alt="College Logo" className="h-12" />
                </Link>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-gray-500 rounded-md hover:bg-gray-100"
                >
                  <FaTimes size={20} />
                </button>
              </div>

              <nav className="p-4">
                <motion.ul
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="space-y-2"
                >
                  {menuItems.map((item, index) => (
                    <motion.li key={index} variants={itemVariants}>
                      {item.links ? (
                        <div className="border-b border-gray-100 pb-2">
                          <button
                            className="flex items-center justify-between w-full py-3 text-gray-800 font-medium"
                            onClick={() =>
                              setMobileExpandedItem(mobileExpandedItem === index ? null : index)
                            }
                          >
                            <span>{item.title}</span>
                            <motion.span
                              animate={{
                                rotate: mobileExpandedItem === index ? 90 : 0,
                              }}
                            >
                              <FaChevronRight size={14} />
                            </motion.span>
                          </button>

                          <AnimatePresence>
                            {mobileExpandedItem === index && (
                              <motion.ul
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                                className="pl-4 overflow-hidden"
                              >
                                {item.links.map((link, i) => (
                                  <motion.li key={i}>
                                    <Link
                                      to={link.path}
                                      className="block py-2 text-gray-600 hover:text-blue-700"
                                      onClick={() => setMobileMenuOpen(false)}
                                    >
                                      {link.name}
                                    </Link>
                                  </motion.li>
                                ))}
                              </motion.ul>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          to={item.path}
                          className="block py-3 text-gray-800 font-medium border-b border-gray-100"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.title}
                        </Link>
                      )}
                    </motion.li>
                  ))}
                </motion.ul>

                <motion.div
                  variants={itemVariants}
                  className="mt-6"
                >
                  <Link
                    to="https://seglko.in8.nopaperforms.com/"
                    className="block w-full bg-blue-700 text-white text-center py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Apply Now
                  </Link>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;