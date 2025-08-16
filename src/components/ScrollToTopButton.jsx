import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
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

  return (
    visible && (
      <div
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full p-1"
        style={{
          background: `conic-gradient(#ef4444 ${progress}%, #1f2937 ${progress}% 100%)`,
        }}
      >
        <button
          onClick={scrollToTop}
          className="w-full h-full flex items-center justify-center bg-black text-white rounded-full shadow-md hover:scale-110 transition-all"
          aria-label="Scroll to top"
        >
          <ArrowUp size={22} />
        </button>
      </div>
    )
  );
};

export default ScrollToTopButton;
