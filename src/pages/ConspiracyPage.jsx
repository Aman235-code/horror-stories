/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import conspiracyData from "../data/conspiracyData.json";
import { Link } from "react-router-dom";
import ConspiracyCard from './../components/ConspiracyCard';

const typewriterVariants = {
  hidden: { width: 0 },
  visible: {
    width: "100%",
    transition: { duration: 2.5, ease: "easeInOut" },
  },
};

const ConspiracyPage = () => {
  return (
    <>
      <main className="pt-20 p-8 space-y-16 min-h-screen">
        {/* Glassmorphic Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="shadow-2xl max-w-xl mx-auto text-center py-6 px-4"
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl text-blue-400 font-creepster uppercase tracking-widest"
            variants={typewriterVariants}
            initial="hidden"
            animate="visible"
          >
            Conspiracy Theories
          </motion.h2>
          <p className="mt-2 text-gray-300 text-sm italic">
            Not everything is what it seems... 🧠
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {conspiracyData.slice(0, 3).map((theory, idx) => (
            <ConspiracyCard
              key={idx}
              title={theory.title}
              description={theory.description}
              image={theory.image}
              author={theory.author}
              date={theory.date}
              isNew={theory.new}
              slug={theory.slug}
            />
          ))}
        </div>

        {/* Read My Story Button */}
        <div className="flex justify-center">
          <Link
            to="/conspiracy"
            className="inline-block mt-8 px-6 py-3 text-sm font-bold rounded-md text-white bg-black neon-button transition-all duration-300 hover:bg-gray-900"
          >
            Read Conspiracy Theories →
          </Link>
        </div>
      </main>
    </>
  );
};

export default ConspiracyPage;
