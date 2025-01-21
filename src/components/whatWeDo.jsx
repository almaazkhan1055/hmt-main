import React from "react";
import { IoGlobeOutline } from "react-icons/io5";
import Button from "./button";
import TypingEffect from "./typingEffect";

const WhatWeDo = () => {
  return (
    <div className="whatWeDo sm:h-[800px] max-sm:py-10 relative flex items-center justify-center text-white animate-scroll-up">
      <div className="w-full px-20 flex max-md:flex-col max-sm:items-center justify-between">
        <div className="flex items-center gap-5">
          <IoGlobeOutline size={24} className="rotate-45 text-[#65C6B9]" />
          <span className="sm:text-[40px] text-[20px]">What We Do</span>
        </div>
        <div className="flex flex-col gap-10 sm:w-[50%] w-full items-center">
          <TypingEffect />
          <Button text="Learn More About Our Solutions" />
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
