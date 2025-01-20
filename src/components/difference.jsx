import React from "react";
import Globe from "./globe";
import Button from "./button";
import difference from "../assets/difference.png";

const Difference = () => {
  return (
    <div className="p-8 md:p-20 font-medium flex flex-col relative overflow-hidden">
      <div className="w-full md:w-[40%] flex flex-col gap-20">
        <Globe title="What Sets Us Apart" difference={true} />
        <p className="text-[16px] md:text-base">
          Himotech Global has established itself as a trusted name in the IT
          industry, recognized for delivering reliable services and managing
          projects with precision. Since 2021, we have been dedicated to helping
          businesses create a strong digital identity in an increasingly
          competitive technological landscape. Our mission is to leverage the
          latest advancements in computer science, making IT solutions
          accessible, efficient, and user-friendly for all. With a committed
          team of experts, we continuously strive to build trust with our
          clients, ensuring consistent quality and dependable outcomes.
        </p>
        <div className="flex items-center sm:gap-10 gap-2">
          <div>
            <p
              className="text-xl font-bold knewave text-white"
              style={{
                WebkitTextStroke: "1px #4265DB",
              }}
            >
              Our Journey, Your Success
            </p>
          </div>
          <div className="border border-black h-28"></div>
          <div className="flex flex-col gap-5">
            <p className="text-sm md:text-base whitespace-nowrap">
              We’re here to help you shine online!
            </p>
            <span>
              <Button text="Let’s Talk" textColor="white" />
            </span>
          </div>
        </div>
      </div>

      <div className="sm:absolute bottom-0 right-0 text-center px-4 md:px-0">
        <p className="text-lg sm:-mb-12 max-sm:my-10 md:-mb-20 kanit uppercase w-full text-center tracking-[0.5em] ml-24">
          Our Edge is Smart, Setting Us Apart
        </p>
        <img
          src={difference}
          alt="difference"
          className="w-full h-auto max-w-[350px] mx-auto md:max-w-none"
        />
      </div>
    </div>
  );
};

export default Difference;
