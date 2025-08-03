/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MarkdownRenderer from "./MarkdownRenderer";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Ghost, Flame, Skull } from "lucide-react";
import { Link } from "react-router-dom";

const StoryPage = () => {
  const { slug } = useParams();
  const [content, setContent] = useState("");

  useEffect(() => {
    const loadStory = async () => {
      try {
        const file = await import(`../stories/horror/${slug}.md?raw`);
        setContent(file.default);
      } catch (error) {
        setContent(
          "# 404 - Story Not Found\n\nWe couldn’t find the spooky tale you’re looking for. 👻"
        );
      }
    };
    loadStory();
  }, [slug]);

  return (
    <>
      <div className="min-h-screen h-full bg-black bg-[url('/images/halloween.jpg')] bg-cover bg-center bg-no-repeat flex items-center justify-center px-4 py-12 bg-fixed">
        <motion.main
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-full max-w-3xl bg-black/60 backdrop-blur-md rounded-lg border border-red-700 shadow-2xl p-8 text-red-500"
        >
          {/* Header Icons */}
          <div className="flex items-center justify-center gap-4 mb-6 text-red-400 animate-pulse">
            <Ghost size={28} />
            <Flame size={24} />
            <Skull size={26} />
          </div>

          {/* Markdown Article */}
          <article className="prose prose-invert max-w-none prose-img:rounded-lg prose-headings:text-red-400 prose-p:text-red-300 prose-li:text-red-300">
            <MarkdownRenderer content={content} />
          </article>
        </motion.main>
        {/* 👇 Back to Home Button */}
      </div>
      <div className="flex justify-center mb-6">
        <Link
          to="/"
          className="inline-block mt-10 px-6 py-3 text-sm font-bold rounded-md text-white bg-black neon-button transition-all duration-300 hover:bg-gray-900"
        >
          ← Back to Home
        </Link>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default StoryPage;
