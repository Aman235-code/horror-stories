/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MarkdownRenderer from "./MarkdownRenderer";
import { motion } from "framer-motion";
import { ShieldAlert, SatelliteDish, Bot } from "lucide-react";
import { Link } from "react-router-dom";

const ConspPage = () => {
  const { slug } = useParams();
  const [content, setContent] = useState("");

  useEffect(() => {
    const loadStory = async () => {
      try {
        const file = await import(`../stories/conspiracy/${slug}.md?raw`);
        setContent(file.default);
      } catch (error) {
        setContent(
          "# 🛸 404 - File Redacted\n\nThis conspiracy file is either missing… or erased from the system."
        );
      }
    };
    loadStory();
  }, [slug]);

  return (
    <>
      <div className="pt-20 min-h-screen h-full bg-black bg-[url('/images/cp.jpg')] bg-cover bg-center bg-no-repeat  px-4 py-12 bg-fixed">
        <div className="pt-20 min-h-screen h-full flex items-center justify-center">
          <motion.main
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="w-full max-w-3xl bg-black/60 backdrop-blur-md rounded-lg border border-yellow-700 shadow-2xl p-8 text-yellow-400"
          >
            {/* Header Icons */}
            <div className="flex items-center justify-center gap-4 mb-6 text-yellow-300 animate-pulse">
              <ShieldAlert size={28} />
              <SatelliteDish size={24} />
              <Bot size={26} />
            </div>

            {/* Markdown Article */}
            <article className="prose prose-invert max-w-none prose-img:rounded-lg prose-headings:text-yellow-400 prose-p:text-yellow-300 prose-li:text-yellow-300">
              <MarkdownRenderer content={content} />
            </article>
          </motion.main>
        </div>

        {/* 👇 Back to Home Button */}
        <div className="flex justify-center mb-6">
          <Link
            to="/"
            className="inline-block mt-10 px-6 py-3 text-sm font-bold rounded-md text-white bg-black neon-button transition-all duration-300 hover:bg-gray-900"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default ConspPage;
