import React from "react";

const CurvedText = ({ text, id }) => {
  const letters = text.split("");

  return (
    <div
      className={`absolute ${
        id === 2 ? "rotate-infinite-2" : "rotate-infinite-1"
      }  w-[120px] h-[200px] text-white`}
      style={{ transform: `${id === 2 && "scaleY(-1) scaleX(-1)"}` }}
    >
      {letters.map((letter, index) => (
        <span
          key={index}
          className="absolute tracking-tighter w-full h-full text-center text-[16px] font-bold"
          style={{
            transform: `rotate(${index * (90 / letters.length)}deg)`,
          }}
        >
          {letter}
        </span>
      ))}
    </div>
  );
};

export default CurvedText;
