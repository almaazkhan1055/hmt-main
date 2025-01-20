import React, { useState } from "react";
import process1 from "../assets/process1.png";
import process2 from "../assets/process2.png";
import process3 from "../assets/process3.png";
import process4 from "../assets/process4.png";
import process5 from "../assets/process5.png";

const Process = () => {
  const [currIndex, setCurrIndex] = useState(0);
  let stepsData = [
    {
      title: "Strategic Planning and Vision",
      desc: "We begin by understanding your goals and crafting a clear, strategic plan that aligns with your vision. This allows us to chart a course for success with measurable milestones and long-term objectives.",
      img: process1,
    },
    {
      title: "Innovation and Development",
      desc: "We begin by understanding your goals and crafting a clear, strategic plan that aligns with your vision. This allows us to chart a course for success with measurable milestones and long-term objectives.",
      img: process2,
    },
    {
      title: "Effective Team Collaboration",
      desc: "Our team believes in the power of collaboration. We bring together experts from different fields, fostering a creative and efficient work environment. This ensures smooth communication and faster problem-solving.",
      img: process3,
    },
    {
      title: "Data-Driven Decision Making",
      desc: "We rely on data to make informed decisions. By analyzing trends, customer behaviors, and performance metrics, we shape strategies that deliver results, ensuring we stay ahead in a competitive landscape.",
      img: process4,
    },
    {
      title: "Scalable Execution and Delivery",
      desc: "Our approach ensures that every project we deliver can grow and evolve with your business. We focus on solutions that are flexible, adaptable, and scalable, so they continue to meet your needs as you expand.",
      img: process5,
    },
  ];

  return (
    <div
      style={{ backgroundImage: `url(${stepsData[currIndex]?.img})` }}
      className="process bg-cover bg-center relative flex flex-col items-center h-[745px]"
    >
      <div className="processSide p-10 text-center max-sm:hidden koho">
        <h2 className="text-[#65C6B9] text-4xl sm:text-[61px] md:text-6xl font-bold">
          The Blueprint of Success
        </h2>
        <p className="text-xl sm:text-[24px] text-white">
          Here’s how we make success happen, step by step
        </p>
      </div>
      <div className="absolute top-8 left-8 sm:left-16 md:left-52 w-[90%] sm:w-[80%] md:w-[65%] text-white flex flex-col justify-between gap-16 sm:gap-20 md:gap-52">
        <div className="flex items-center justify-between w-full sm:w-[90%] md:w-[105%] border-b-2 border-white">
          {Array.from({ length: 5 }, (_, i) => (
            <div
              key={i}
              className={`text-xl sm:text-2xl md:text-4xl px-4 sm:px-20 py-2 cursor-pointer ${
                i === currIndex
                  ? "font-semibold border-b-2 border-white numbers"
                  : ""
              }`}
              onClick={() => setCurrIndex(i)}
            >
              {i + 1}
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-5 sm:gap-8 md:gap-10">
          <h3 className="text-3xl sm:text-4xl md:text-6xl font-bold w-full koho">
            {stepsData[currIndex]?.title}
          </h3>
          <p className="font-[400px] sm:text-[30px] md:text-3xl opacity-70 kanit ">
            {stepsData[currIndex]?.desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Process;
