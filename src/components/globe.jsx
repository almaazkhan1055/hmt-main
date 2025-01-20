import React from "react";
import { CiGlobe } from "react-icons/ci";

const Globe = ({ title, cardSection }) => {
  return (
    <div className="flex items-center gap-2">
      <CiGlobe color="#65C6B9" className="-rotate-45" size={30} />
      <h3
        className={`text-[40px] bg-clip-text ${
          cardSection ? "text-white" : "text-transparent"
        } koho font-bold`}
        style={{
          backgroundImage: `linear-gradient(to right, #4265DB, #5036BC)`,
        }}
      >
        {title}
      </h3>
    </div>
  );
};

export default Globe;
