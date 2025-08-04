/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import StoryCard from "../components/StoryCard";
import storyData from "../data/storyData.json";
import { Link } from "react-router-dom";

const typewriterVariants = {
  hidden: { width: 0 },
  visible: {
    width: "100%",
    transition: { duration: 2.5, ease: "easeInOut" },
  },
};

const HorrorPage = () => {
  return (
    <>
      <main className="pt-20 p-8 space-y-16 min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="shadow-2xl max-w-xl mx-auto text-center py-6 px-4"
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl text-red-600 font-creepster uppercase tracking-widest flicker"
            variants={typewriterVariants}
            initial="hidden"
            animate="visible"
          >
            Latest Horror Stories
          </motion.h2>
          <p className="mt-2 text-gray-300 text-sm italic">
            Created & Written By : Aman
            <br />
            <span className="text-xs text-gray-400 block mt-1">
              I'm a spooky, curious guy who loves conspiracy theories,
              <br />
              fascinated by UFOs, secret bases, and everything scary that
              <br />
              makes your spine tingle. I write these stories to make you
              <br />
              wonder what's really out there in the dark...
            </span>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {storyData.slice(0, 2).map((story, idx) => (
            <StoryCard
              key={idx}
              title={story.title}
              description={story.description}
              image={story.image}
              author={story.author}
              date={story.date}
              isNew={story.new}
              slug={story.slug}
            />
          ))}
        </div>

        <div className="flex justify-center">
          <Link
            to="/horror"
            className="inline-block mt-8 px-6 py-3 text-sm font-bold rounded-md text-white bg-black neon-button transition-all duration-300 hover:bg-gray-900"
          >
            Read My Stories →
          </Link>
        </div>
      </main>
    </>
  );
};

export default HorrorPage;
