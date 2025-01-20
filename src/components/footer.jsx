import React from "react";
import logo from "../assets/logo.png";
import { RiWhatsappFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoInstagramAlt } from "react-icons/bi";
import Button from "./button";

const Footer = () => {
  const footerData = [
    {
      title: "Quick Links",
      links: ["About Us", "Services", "Careers"],
    },
    {
      title: "Contact",
      links: ["info@himotechglobal.com", "+91-7011508191"],
    },
  ];

  return (
    <>
      <div className="p-20 grid grid-cols-[1fr_2fr_1fr] gap-20 max-sm:grid-cols-1">
        <div>
          <img src={logo} alt="logo" width={120} />
          <div className="flex items-center gap-2 text-gray-700 ">
            <RiWhatsappFill size={30} />
            <FaLinkedin size={30} />
            <FaXTwitter size={30} />
            <BiLogoInstagramAlt size={30} />
          </div>
        </div>
        <div className="flex justify-between gap-5">
          {footerData.map((obj, i) => (
            <div key={i + 1}>
              <p className="text-xl font-bold mb-2">{obj?.title}</p>
              <ul className="flex flex-col gap-3">
                {obj?.links?.map((link, i) => (
                  <li
                    key={i + 1}
                    className="text-[16px] text-[#000] opacity-70 font-bold"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div>
          <p className="text-xl font-bold mb-2">Newsletter</p>
          <div className="flex flex-col gap-5">
            <input
              type="text"
              className="border border-black rounded-[20px] px-5 py-2 text-gray-800"
              placeholder="Enter your mail"
            />
            <Button text="Subscribe" bgColor1="#5036BC" bgColor2="#4265DB" />
          </div>
        </div>
      </div>
      <p className="text-[16px] text-[#000] font-bold text-center">
        <span className="opacity-70">
          Copyright © 2024 Himotech Global Pvt Ltd. All Rights Reserved.
        </span>
        <span className="text-blackn">Privacy Policy</span>
      </p>
    </>
  );
};

export default Footer;
