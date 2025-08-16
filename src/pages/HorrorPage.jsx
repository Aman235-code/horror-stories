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
      {/* Haunted Background with Dark Overlay */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Background image */}
        <img
          src="/images/haunted-bg.jpg" // replace with your spooky bg image
          alt="Haunted Background"
          className="w-full h-full object-cover opacity-30"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Fog effect */}
        <motion.div
          className="absolute -top-1/3 -left-1/3 w-[200%] h-[200%] bg-gradient-radial from-red-900/40 via-black to-black blur-3xl"
          animate={{ x: ["0%", "10%", "-10%", "0%"], y: ["0%", "-5%", "5%", "0%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-1/3 -right-1/3 w-[200%] h-[200%] bg-gradient-radial from-purple-900/30 via-transparent to-black blur-2xl"
          animate={{ x: ["0%", "-10%", "10%", "0%"], y: ["0%", "5%", "-5%", "0%"] }}
          transition={{ duration: 55, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <main className="pt-20 p-8 space-y-16 min-h-screen">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="shadow-2xl max-w-2xl mx-auto text-center py-6 px-4 bg-black/40 backdrop-blur-md rounded-xl"
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl text-red-600 font-creepster uppercase tracking-widest"
            variants={typewriterVariants}
            initial="hidden"
            animate="visible"
          >
            Myths • Mysteries • Conspiracies
          </motion.h2>
          <p className="mt-3 text-gray-300 text-base italic">
            Created & Written By : Aman
          </p>
          <p className="text-xs text-gray-400 mt-3 leading-relaxed">
            Welcome to a realm where the shadows whisper and the truth hides
            behind locked doors. Here you’ll stumble across haunted legends,
            unsolved mysteries, dark conspiracies, and tales so strange they
            blur the line between fact and nightmare. <br />
            I write these stories to keep your mind curious, your heart racing,
            and your spine tingling. Are you ready to question what’s real… and
            what should have stayed buried in the dark?
          </p>
        </motion.div>

        {/* Stories Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {storyData.slice(0, 12).map((story, idx) => (
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

        {/* More Stories Button */}
        <div className="flex justify-center">
          <Link
            to="/horror"
            className="inline-block mt-8 px-6 py-3 text-sm font-bold rounded-md text-white bg-black neon-button transition-all duration-300 hover:bg-gray-900"
          >
            Explore All Stories →
          </Link>
        </div>
      </main>
    </>
  );
};

export default HorrorPage;
