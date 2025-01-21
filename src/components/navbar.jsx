import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./button";
import logo from "../assets/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

const Navbar = ({ links }) => {
  const [showDropDownMenuIndex, setShowDropDownMenuIndex] = useState(null);
  const [isHamOpen, setIsHamOpen] = useState(false);

  const handleDropDown = (index) => {
    setShowDropDownMenuIndex((prevIndex) =>
      prevIndex === index ? null : index
    );
  };

  return (
    <div className="blur-background flex items-center justify-between bg-zinc-500 px-20 relative">
      <img src={logo} alt="...logo" />

      <ul className="md:flex hidden items-center gap-10">
        {links?.map((link, index) => (
          <li key={index}>
            <Link
              to={link.href && link.href}
              className="text-white font-semibold"
              onClick={() => handleDropDown(index)}
            >
              {link.title}
            </Link>

            {link.dropdown && showDropDownMenuIndex === index && (
              <div
                className="absolute top-16 mt-1 w-[20%] grid grid-cols-1 place-items-center p-4 text-black border-t-2 border-gradient-to-r from-[#5036BC] to-[#4265DB] z-[999] dropdown"
                style={{
                  borderTop: "2px solid transparent",
                  borderImage: "linear-gradient(to right, #4265DB, #5036BC) 1",
                }}
              >
                <Link to={link.dropdown.href} className="cursor-pointer">
                  <h3 className="font-semibold">{link.dropdown.title}</h3>
                  <h5 className="font-semibold">{link.dropdown.subtitle}</h5>
                  <Button text="carrers" bg="transparent" textColor="black" />
                  <p className="text-sm text-gray-400">{link.dropdown.desc}</p>
                </Link>
              </div>
            )}

            {link.dropdown &&
              link.dropdown.length > 0 &&
              showDropDownMenuIndex === index && (
                <div
                  className="absolute left-0 top-16 mt-1 w-[50%] translate-x-[50%] grid grid-cols-3 p-4 text-black border-t-2 bg-white z-[999] dropdown"
                  style={{
                    borderTop: "2px solid transparent",
                    borderImage:
                      "linear-gradient(to right, #4265DB, #5036BC) 1",
                  }}
                >
                  {link.dropdown.map((item, dropdownIndex) => (
                    <Link
                      key={dropdownIndex}
                      className="mb-5 mr-5"
                      to={item.href}
                    >
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                    </Link>
                  ))}
                </div>
              )}
          </li>
        ))}
      </ul>

      <div className="md:block hidden">
        <Button text="Contact" />
      </div>

      <div
        className="md:hidden block cursor-pointer z-10"
        onClick={() => setIsHamOpen(!isHamOpen)}
      >
        {!isHamOpen ? (
          <RxHamburgerMenu size={28} color="#fff" />
        ) : (
          <IoClose size={28} color="#fff" />
        )}
      </div>

      <ul
        className={`${
          isHamOpen ? "top-[70px]" : "-top-[1000px]"
        } absolute left-0 w-full bg-white transition-all duration-300 ease-in-out z-20 md:hidden flex flex-col items-center py-5`}
      >
        {links?.map((link, index) => (
          <li key={index} className="w-full">
            <Link
              to={link.href && link.href}
              className="block py-2 px-5 text-black font-semibold"
              onClick={() => handleDropDown(index)}
            >
              {link.title}
            </Link>

            {link.dropdown && showDropDownMenuIndex === index && (
              <div
                className="absolute left-0 top-16 mt-1 w-full grid grid-cols-1 place-items-center p-4 text-black border-t-2 border-gradient-to-r from-[#5036BC] to-[#4265DB] z-[999] dropdown"
                style={{
                  borderTop: "2px solid transparent",
                  borderImage: "linear-gradient(to right, #4265DB, #5036BC) 1",
                }}
              >
                <Link to={link.dropdown.href} className="cursor-pointer">
                  <h3 className="font-semibold">{link.dropdown.title}</h3>
                  <h5 className="font-semibold">{link.dropdown.subtitle}</h5>
                  <Button text="carrers" bg="transparent" textColor="black" />
                  <p className="text-sm text-gray-400">{link.dropdown.desc}</p>
                </Link>
              </div>
            )}

            {link.dropdown &&
              link.dropdown.length > 0 &&
              showDropDownMenuIndex === index && (
                <div
                  className="absolute left-0 top-16 mt-1 w-[90%] translate-x-[5%] grid grid-cols-3 p-4 text-black border-t-2 bg-white z-[999] dropdown"
                  style={{
                    borderTop: "2px solid transparent",
                    borderImage:
                      "linear-gradient(to right, #4265DB, #5036BC) 1",
                  }}
                >
                  {link.dropdown.map((item, dropdownIndex) => (
                    <Link key={dropdownIndex} className="mb-5" to={item.href}>
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                    </Link>
                  ))}
                </div>
              )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
