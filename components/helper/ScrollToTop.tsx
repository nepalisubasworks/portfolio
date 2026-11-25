"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setVisible(window.scrollY > 300);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={scrollToTop}
      className={`fixed bottom-4 right-4 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-blue-800 text-white shadow-lg transition-all duration-300 hover:bg-blue-900 hover:text-cyan-300 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTop;
