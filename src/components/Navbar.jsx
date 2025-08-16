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
      className="fixed top-0 left-0 w-full z-[999]  bg-black bg-[url('/images/fog2.jpg')] bg-cover bg-center backdrop-blur-sm shadow-md border-b border-red-900 py-3 px-6"
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
              <Link
                to={"/horror"}
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
              <Link
                to={"/conspiracy"}
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
