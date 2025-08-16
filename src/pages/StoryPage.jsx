/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import MarkdownRenderer from "./MarkdownRenderer";
import { motion } from "framer-motion";
import { Ghost, Flame, Skull, Home as HomeIcon, BookOpen } from "lucide-react";

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
      {/* Background with overlay */}
      <div className="fixed inset-0 -z-10">
        <img
          src="/images/woods2.jpg"
          alt="Haunted Woods"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="pt-24 px-4 pb-12 min-h-screen">
        {/* Breadcrumb Navigation */}
        <nav className="mb-8 flex justify-center items-center gap-2 text-sm text-gray-300">
          <Link
            to="/"
            className="flex items-center gap-1 hover:text-red-400 transition"
          >
            <HomeIcon size={16} /> Home
          </Link>
          <span className="text-gray-500">/</span>
          <Link
            to="/horror"
            className="flex items-center gap-1 hover:text-red-400 transition"
          >
            <BookOpen size={16} /> Horror Stories
          </Link>
        </nav>

        {/* Story Content */}
        <motion.main
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-full max-w-3xl mx-auto bg-black/60 backdrop-blur-md rounded-lg border border-red-700 shadow-2xl p-8 text-red-500"
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

        {/* Back to Home */}
        <div className="flex w-full justify-center mt-10">
          <Link
            to="/"
            className="inline-block px-6 py-3 text-sm font-bold rounded-md text-white bg-black neon-button transition-all duration-300 hover:bg-gray-900"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default StoryPage;
