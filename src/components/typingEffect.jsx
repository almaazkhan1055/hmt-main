import React, { useState, useEffect } from "react";

const TypingEffect = () => {
  const textArray = [
    "Web Development",
    "Software Testing",
    "Web3 Development",
    "Blockchain Development",
    "Marketing Services",
    "Devops Services",
  ];

  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const typingSpeed = isDeleting ? 40 : 40;
    const pauseTime = 1000;

    const handleTyping = () => {
      if (!isDeleting && charIndex < textArray[currentIndex].length) {
        setDisplayedText(
          (prevText) => prevText + textArray[currentIndex][charIndex]
        );
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setDisplayedText((prevText) => prevText.slice(0, prevText.length - 1));
        setCharIndex((prev) => prev - 1);
      } else if (!isDeleting && charIndex === textArray[currentIndex].length) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % textArray.length);
      }
    };

    const typingTimeout = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingTimeout);
  }, [charIndex, isDeleting, currentIndex, textArray]);

  return (
    <div className="text-white sm:text-4xl text-2xl">
      <span className="text-[#65C6B9] font-bold">
        {displayedText.toUpperCase()}
      </span>
      <span className="blinking-cursor font-thin text-[#65C6B9]">|</span>
    </div>
  );
};

export default TypingEffect;
