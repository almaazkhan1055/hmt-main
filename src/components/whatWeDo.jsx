import React from "react";
import { IoGlobeOutline } from "react-icons/io5";
import Button from "./button";
import TypingEffect from "./typingEffect";

const WhatWeDo = () => {
  return (
    <div className="whatWeDo flex items-center justify-center text-white">
      <div className="w-full px-20 flex justify-between">
        <div className="flex items-center gap-5">
          <IoGlobeOutline size={24} className="rotate-45 text-[#65C6B9]" />
          <span className="text-[40px]">What We Do</span>
        </div>
        <div className="flex flex-col gap-10 w-[50%] items-center">
          <TypingEffect />
          <Button text="Learn More About Our Solutions" />
          <div className="w-full h-full object-cover animate-scroll-up absolute left-0 -z-1"></div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
