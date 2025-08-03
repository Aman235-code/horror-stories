/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, BookOpen, BrainCircuit } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [active, setActive] = useState(null);

  const handleSelect = (section) => {
    setActive(section);
    setDrawerOpen(false);
    setDropdownOpen(false);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="w-full z-[999] relative bg-black bg-[url('/images/fog2.jpg')] bg-cover bg-center backdrop-blur-sm shadow-md border-b border-red-900 py-3 px-6"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center text-white">
        {/* Left: Logo */}
        {/* Left: Logo with flicker icon */}
        <motion.h1
          className="text-lg sm:text-xl text-red-600 font-creepster tracking-widest flex items-center gap-2 flicker"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
        >
          <BookOpen className="animate-pulse flicker text-red-500" size={22} />
          AmanStories Presents...
        </motion.h1>

        {/* Center: Title */}
        <div className="hidden sm:flex flex-col items-center">
          <h1 className="text-sm tracking-widest font-light shimmer-hover">
            Welcome to the Dark Side of the World
          </h1>
        </div>

        {/* Desktop Dropdown */}
        <div className="hidden sm:block relative z-[999]">
          <button
            onClick={() => setDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-1 hover:cursor-pointer text-white bg-black/50 hover:bg-black/70 px-4 py-1 rounded-full border border-gray-700 text-sm transition"
          >
            All Topics <ChevronDown size={16} />
          </button>

          <AnimatePresence>
            {isDropdownOpen && (
              <motion.ul
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 mt-2 bg-black border border-gray-700 rounded-md shadow-lg w-44 z-[999]"
              >
                <Link
                  to="/horror"
                  onClick={() => handleSelect("Horror Stories")}
                  className={`px-4 py-2 flex items-center gap-2 text-sm cursor-pointer transition ${
                    active === "Horror Stories"
                      ? "bg-gray-800 text-red-400"
                      : "hover:bg-gray-800"
                  }`}
                >
                  <BookOpen size={16} />
                  Horror Stories
                </Link>
                <Link
                  to={"/conspiracy"}
                  onClick={() => handleSelect("Conspiracy Theories")}
                  className={`px-4 py-2 flex items-center gap-2 text-sm cursor-pointer transition ${
                    active === "Conspiracy Theories"
                      ? "bg-gray-800 text-blue-400"
                      : "hover:bg-gray-800"
                  }`}
                >
                  <BrainCircuit size={16} />
                  Conspiracy Theories
                </Link>
              </motion.ul>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile Hamburger */}
        <div className="sm:hidden">
          <button
            onClick={() => setDrawerOpen(!isDrawerOpen)}
            className="p-2 hover:cursor-pointer border border-gray-600 rounded-full hover:bg-black/60 transition"
          >
            <Menu size={20} />
          </button>
        </div>
      </div>

      {/* Mobile Top Drawer */}
      <AnimatePresence>
        {isDrawerOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full bg-black text-white z-[9999] border-b border-red-900 shadow-xl p-6"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-creepster text-xl tracking-wider">Topics</h2>
              <button onClick={() => setDrawerOpen(false)}>
                <X size={24} />
              </button>
            </div>
            <ul className="space-y-4">
              <Link to={'/horror'}
                onClick={() => handleSelect("Horror Stories")}
                className={`flex items-center gap-2 cursor-pointer transition ${
                  active === "Horror Stories"
                    ? "text-red-400"
                    : "hover:text-red-400"
                }`}
              >
                <BookOpen size={18} />
                Horror Stories
              </Link>
              <Link to={'/conspiracy'}
                onClick={() => handleSelect("Conspiracy Theories")}
                className={`flex items-center gap-2 cursor-pointer transition ${
                  active === "Conspiracy Theories"
                    ? "text-blue-400"
                    : "hover:text-blue-400"
                }`}
              >
                <BrainCircuit size={18} />
                Conspiracy Theories
              </Link>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
