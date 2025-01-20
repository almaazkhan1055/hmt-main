import React, { useEffect } from "react";
import Button from "./button";
import AOS from "aos";
import "aos/dist/aos.css";
import himoTech from "../assets/himotech.png";

const Hero = ({ heroData }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="hero relative text-center xl:px-[200px] xl:py-[120px] max-xl:px-[2%] max-xl:py-16 py-10 z-10 bg-cover bg-no-repeat bg-center text-white">
      <h2 className="text-[20px] leading-none opacity-70">
        {heroData?.heading}
      </h2>
      <h3 className="koho text-[102px] leading-none my-10 font-bold">
        {heroData?.title}
      </h3>
      <p className="text-[--goat-milk] text-[30px] leading-20 md:text-[34px] max-sm:mt-5">
        {heroData?.subtitle}
      </p>
      <p className="text-[20px] leading-20 mb-10 opacity-70">
        {heroData?.desc}
      </p>
      <div className="flex justify-center gap-5">
        {heroData?.btnText?.map((text, index) => (
          <Button text={text} key={index + 1} />
        ))}
      </div>
      <img
        src={himoTech}
        alt="...name"
        data-aos="fade-up"
        data-aos-anchor-placement="center-center"
        className="z-[999] absolute left-0 bottom-0"
      />
    </div>
  );
};

export default Hero;
