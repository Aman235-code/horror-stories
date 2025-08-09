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
      {/* <Navbar /> */}
      <main className="pt-20 p-8 space-y-16 min-h-screen h-full bg-black bg-[url('/images/horror.jpg')] bg-cover bg-center bg-no-repeat bg-fixed">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="shadow-2xl max-w-xl mx-auto text-center py-6 px-4"
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl text-red-600 font-creepster uppercase tracking-widest"
            variants={typewriterVariants}
            initial="hidden"
            animate="visible"
          >
            All Horror Stories
          </motion.h2>
          <p className="mt-2 text-yellow-500 text-sm italic">
            Dare to read them all? 👁️‍🗨️
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
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
      {/* <Footer /> */}
    </>
  );
};

export default HorrorStories;
