import React from "react";

const Hero2 = ({ hero2Data }) => {
  return (
    <div className="hero2 koho relative text-center xl:px-[200px] xl:py-[120px] max-xl:px-[2%] max-xl:py-16 py-10 z-10 bg-cover bg-no-repeat bg-center text-white  font-bold">
      <p className="text-[50px] text-start" data-aos="fade-up-left">
        {hero2Data.title}
      </p>
      <div className="flex gap-20 items-baseline">
        <span className="text-[100px]" data-aos="fade-up">
          {hero2Data.subtitle}
        </span>
        <span className="text-[50px]" data-aos="fade-up-right">
          {hero2Data.para1}
        </span>
      </div>
      <p className="text-[77px]" data-aos="fade-up">
        {hero2Data.para2}
      </p>
      <p
        className="text-[100px]"
        data-aos="fade-up"
        data-aos-easing="ease-in-sine"
      >
        {hero2Data.desc}
      </p>
    </div>
  );
};

export default Hero2;
