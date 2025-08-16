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

const HorrorStories = () => {
  return (
    <>
      <main className="relative pt-20 p-8 space-y-16 min-h-screen bg-black bg-[url('/images/horror.jpg')] bg-cover bg-center bg-no-repeat bg-fixed">
        {/* 🔥 Full-page Dark Overlay */}
        <div className="absolute inset-0 bg-black/70 z-0"></div>

        {/* Content sits above overlay */}
        <div className="relative z-10">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="shadow-2xl max-w-3xl mx-auto text-center py-8 px-6 bg-black/40 rounded-xl backdrop-blur-md"
          >
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl text-red-600 font-creepster uppercase tracking-widest drop-shadow-lg"
              variants={typewriterVariants}
              initial="hidden"
              animate="visible"
            >
              Horror Stories Based on Real Events
            </motion.h2>
            <p className="mt-4 text-gray-300 text-sm md:text-base italic leading-relaxed">
              Enter a chilling collection of true horrors and twisted tales.
              Each story is inspired by dark mysteries, haunted places, and
              terrifying encounters that blur the line between reality and
              nightmare. <br />
              <span className="text-red-500 font-semibold">
                Dare to keep reading... if you can.
              </span>
            </p>
          </motion.div>

          {/* Stories Grid */}
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {storyData.map((story, idx) => (
              <StoryCard
                key={idx}
                title={story.title}
                description={story.description}
                image={story.image}
                author={story.author}
                date={story.date}
                isNew={story.new}
                slug={story.slug}
                tag={story.tag}
              />
            ))}
          </div>

          {/* Back Button */}
          <div className="flex justify-center">
            <Link
              to="/"
              className="inline-block mt-12 px-8 py-3 text-sm font-bold rounded-md text-white bg-black/70 border border-red-600 neon-button transition-all duration-300 hover:bg-red-600 hover:text-black"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default HorrorStories;
