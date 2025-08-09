/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import ConspiracyCard from "../components/ConspiracyCard";
import conspiracyData from "../data/conspiracyData.json";
import { Link } from "react-router-dom";

const typewriterVariants = {
  hidden: { width: 0 },
  visible: {
    width: "100%",
    transition: { duration: 2.5, ease: "easeInOut" },
  },
};

const ConspiraCies = () => {
  return (
    <>
      <main className="pt-20 p-8 space-y-16 min-h-screen h-full bg-black bg-[url('/images/cans.jpg')] bg-cover bg-center bg-no-repeat bg-fixed">
        {/* Title Section */}
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
            All Conspiracy Theories
          </motion.h2>
          <p className="mt-2 text-gray-300 text-sm italic">
            Some secrets were never meant to be uncovered... 🕵️‍♂️
          </p>
        </motion.div>

        {/* Conspiracy Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {conspiracyData.map((theory, idx) => (
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
        {/* 👇 Back to Home Button */}
        <div className="flex justify-center">
          <Link
            to="/"
            className="inline-block mt-10 px-6 py-3 text-sm font-bold rounded-md text-white bg-black neon-button transition-all duration-300 hover:bg-gray-900"
          >
            ← Back to Home
          </Link>
        </div>
      </main>
      {/* <Footer/> */}
    </>
  );
};

export default ConspiraCies;
