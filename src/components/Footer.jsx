/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import {
  FaSkullCrossbones,
  FaGhost,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="bg-black bg-[url('/images/fog3.jpg')] bg-cover bg-center text-gray-300 py-4 px-4 border-t border-gray-800 relative backdrop-blur-sm"
    >
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
        {/* Left: Animated Text */}
        <motion.p
          className="tracking-wider font-mono text-white shadow-red-500 text-shadow-sm text-lg animate-flicker"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          🩸 Created by Aman 🕯️
        </motion.p>

        {/* Right: Icons */}
        <div className="flex items-center space-x-4">
          <FaSkullCrossbones
            className="text-red-600 hover:scale-110 transition"
            size={20}
          />
          <FaGhost
            className="text-white hover:text-gray-400 transition"
            size={20}
          />
          {/* <FaGithub className="hover:text-gray-400 transition" size={20} />
          <FaInstagram className="hover:text-pink-500 transition" size={20} /> */}
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
