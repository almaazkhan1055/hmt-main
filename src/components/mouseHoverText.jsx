import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const MouseHoverText = () => {
  const firstLine = "Let's make your ideas";
  const secondLine = "HAPPEN!";
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      backgroundColor: "transparent",
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundImage: "linear-gradient(to right, #4265DB, #5036BC)",
      mixBlendMode: "difference",
    },
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  const renderText = (text, baseIndex) => {
    return text.split("").map((char, index) => (
      <span
        key={baseIndex + index}
        className={`transition-all duration-500 cursor-default relative ${
          hoveredIndex === baseIndex + index
            ? "bg-clip-text text-transparent bg-gradient-to-r from-[#4265DB] to-[#5036BC]"
            : "text-blue-900"
        }`}
      >
        {char === " " ? " " : char}
      </span>
    ));
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center sm:text-[90px] text-[30px] font-bold text-center leading-[1.2] relative">
      <p onMouseEnter={textEnter} onMouseLeave={textLeave}>
        {renderText(firstLine, 0)}
      </p>
      <p onMouseEnter={textEnter} onMouseLeave={textLeave}>
        {renderText(secondLine, firstLine.length)}
      </p>
      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
      />
    </div>
  );
};

export default MouseHoverText;
