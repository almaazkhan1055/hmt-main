import React, { useState } from "react";

const MouseHoverText = () => {
  const firstLine = "Let's make your ideas";
  const secondLine = "HAPPEN!";
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const renderText = (text, baseIndex) => {
    return text.split("").map((char, index) => (
      <span
        key={baseIndex + index}
        onMouseEnter={() => handleMouseEnter(baseIndex + index)}
        onMouseLeave={handleMouseLeave}
        className={`transition-all duration-500 cursor-default ${
          hoveredIndex === baseIndex + index
            ? "bg-clip-text text-transparent bg-gradient-to-r from-[#4265DB] to-[#5036BC]"
            : "text-blue-900"
        }`}
        style={{
          backgroundImage:
            hoveredIndex === baseIndex + index
              ? "linear-gradient(to right, #5036BC, #4265DB)"
              : "none",
          WebkitBackgroundClip:
            hoveredIndex === baseIndex + index ? "text" : "unset",
          color: hoveredIndex === baseIndex + index ? "transparent" : "",
        }}
      >
        {char === " " ? " " : char}
      </span>
    ));
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center sm:text-[90px] text-[30px] font-bold text-center leading-[1.2]">
      <p>{renderText(firstLine, 0)}</p>
      <p>{renderText(secondLine, firstLine.length)}</p>
    </div>
  );
};

export default MouseHoverText;
