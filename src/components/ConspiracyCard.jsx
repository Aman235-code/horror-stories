/* eslint-disable no-unused-vars */
// src/components/ConspiracyCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Brain, Eye } from "lucide-react";
import { motion } from "framer-motion";

const ConspiracyCard = ({
  title,
  description,
  image,
  author,
  date,
  isNew,
  slug,
}) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.03,
        boxShadow:
          "0 0 20px rgba(0, 255, 255, 0.3), 0 0 40px rgba(0, 255, 255, 0.2)",
      }}
      whileTap={{ scale: 0.97 }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-black/40 backdrop-blur-md rounded-xl overflow-hidden shadow-lg border border-cyan-900 hover:border-cyan-500 transition duration-300"
    >
      <div className="p-4 flex flex-col h-full text-white">
        <div className="relative">
          <img
            src={image}
            alt={title}
            className="w-full h-52 object-cover rounded-md border border-white/20"
          />
          <Brain
            className="absolute top-3 right-3 text-cyan-300 bg-black/70 p-1 rounded-full shadow-md"
            size={26}
          />
          {isNew && (
            <span className="absolute top-3 left-3 bg-cyan-700 text-white text-xs px-2 py-0.5 rounded-full font-bold animate-pulse">
              NEW
            </span>
          )}
        </div>

        <div className="mt-4 flex-1">
          <h3 className="text-xl font-bold text-cyan-200 flex items-center gap-2">
            {title}
            <Eye size={18} className="text-cyan-400" />
          </h3>
          <p className="text-sm text-gray-300 mt-1">{description}</p>
          <p className="text-xs mt-2 text-gray-400 italic">
            Written by {author} on {date}
          </p>
        </div>

        <div className="mt-4">
          <Link
            to={`/story/conspiracy/${slug}`}
            className="inline-block px-4 py-2 text-sm font-bold rounded-md text-white bg-black neon-button transition-all duration-300"
          >
            Read Theory →
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ConspiracyCard;
