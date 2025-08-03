/* eslint-disable no-unused-vars */
import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const MarkdownRenderer = ({ content }) => {
  return (
    <ReactMarkdown
      rehypePlugins={[rehypeRaw]}
      components={{
        h1: ({ node, ...props }) => (
          <h1 className="text-3xl font-bold text-white mb-4" {...props} />
        ),
        h2: ({ node, ...props }) => (
          <h2 className="text-2xl font-semibold text-gray-200 mt-6 mb-3" {...props} />
        ),
        p: ({ node, ...props }) => (
          <p className="text-gray-300 leading-relaxed mb-4" {...props} />
        ),
        hr: () => <hr className="my-6 border-gray-700" />,
        blockquote: ({ node, ...props }) => (
          <blockquote className="border-l-4 border-gray-600 pl-4 italic text-gray-400" {...props} />
        ),
        ul: ({ node, ...props }) => (
          <ul className="list-disc list-inside text-gray-300 mb-4" {...props} />
        ),
        li: ({ node, ...props }) => (
          <li className="mb-1" {...props} />
        ),
        img: ({ node, ...props }) => (
          <img className="rounded-md my-4" alt="" {...props} />
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
};

export default MarkdownRenderer;
