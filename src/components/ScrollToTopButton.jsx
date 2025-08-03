import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setProgress(scrollPercent);

      setVisible(scrollTop > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const radius = 24;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    visible && (
      <div className="fixed bottom-6 right-6 z-50 w-14 h-14">
        <svg
          className="absolute top-0 left-0 w-full h-full rotate-[-90deg]"
          width="56"
          height="56"
        >
          <circle
            cx="28"
            cy="28"
            r={radius}
            stroke="#991b1b"
            strokeWidth="4"
            fill="none"
            className="opacity-30"
          />
          <circle
            cx="28"
            cy="28"
            r={radius}
            stroke="#ef4444"
            strokeWidth="4"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="transition-all duration-200"
          />
        </svg>

        <button
          onClick={scrollToTop}
          className="w-full h-full flex items-center justify-center bg-black text-white border border-red-600 rounded-full shadow-md hover:scale-110 transition-all relative"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      </div>
    )
  );
};

export default ScrollToTopButton;
