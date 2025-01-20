import React from "react";
import Form from "./form";
import contactImg from "../assets/contactImg.png";
import contactLogo from "../assets/contactLogo.png";

const Contact = () => {
  return (
    <div className="contact py-20 sm:px-32 px-10">
      <h3 className="text-4xl text-white text-center md:text-left">
        Share Your Ideas
      </h3>
      <div className="text-white flex flex-col md:flex-row gap-10 md:gap-20">
        <Form />
        <div className="w-full md:w-[45%] flex flex-col relative">
          <img
            src={contactLogo}
            alt="contactLogo"
            className="absolute -top-20 hidden md:block"
            width={682}
          />
          <img
            src={contactImg}
            alt="contactImg"
            width={460}
            className="z-[50] mx-auto md:mx-0"
          />
          <div className="flex flex-col gap-5 items-center absolute bottom-10 w-full md:w-auto ">
            <p className="border border-white opacity-70 text-xl p-5 rounded-xl text-center md:text-left z-50">
              Whether you're just starting out or ready to level up, our team of
              experts is here to propel your brand forward, unlock new growth,
              and bring your vision to life. Let’s build something incredible,
              side by side.
            </p>
            <div className="flex items-center gap-10 justify-center md:justify-start z-50">
              <p className="border border-white opacity-70 sm:text-lg text-sm px-4 whitespace-nowrap py-2 rounded-lg">
                info@himotechglobal.com
              </p>
              <p className="border border-white opacity-70 sm:text-lg text-sm px-4 whitespace-nowrap py-2 rounded-lg">
                +91-7011508191
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
