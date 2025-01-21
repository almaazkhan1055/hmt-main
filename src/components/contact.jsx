import React from "react";
import Form from "./form";
import contactLogo from "../assets/contactLogo.png";
import contactImg from "../assets/contactImg.png";

const Contact = ({ contactData }) => {
  return (
    <div className="contact py-20 sm:px-32 px-10">
      <h3 className="text-4xl text-white text-center md:text-left">
        {contactData?.title}
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
            alt="circle"
            width={460}
            className="z-[50] mx-auto md:mx-0"
          />
          <div className="flex flex-col gap-5 items-center absolute bottom-10 w-full md:w-auto ">
            <p className="border border-white font-bold text-lg opacity-70 sm:text-xl p-5 rounded-xl text-center md:text-left z-50">
              {contactData?.desc}
            </p>
            <div className="flex items-center gap-10 justify-center md:justify-start z-50">
              <p className="border border-white opacity-70 sm:text-lg text-sm px-4 whitespace-nowrap py-2 rounded-lg">
                {contactData?.email}
              </p>
              <p className="border border-white opacity-70 sm:text-lg text-sm px-4 whitespace-nowrap py-2 rounded-lg">
                {contactData?.phone}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
