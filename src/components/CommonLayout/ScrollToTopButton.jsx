import React, { useState, useEffect } from "react";
import { AiOutlineVerticalAlignTop } from "react-icons/ai";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to toggle the visibility of the button
  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Function to scroll to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Add a scroll event listener to detect scrolling
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 p-3 rounded-full bg-white hover:bg-slate-200 text-black transition-opacity ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{ display: isVisible ? "block" : "none" }} // Hide the button when not visible
    >
      <AiOutlineVerticalAlignTop className="text-lg tab:text-2xl laptop:text-3xl" />
    </button>
  );
};

export default ScrollToTopButton;
