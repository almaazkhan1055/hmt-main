import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./button";
import logo from "../assets/logo.png";

const Navbar = ({ links }) => {
  const [showDropDownMenuIndex, setShowDropDownMenuIndex] = useState(null);

  const handleDropDown = (index) => {
    setShowDropDownMenuIndex((prevIndex) =>
      prevIndex === index ? null : index
    );
  };

  return (
    <div className="blur-background flex items-center justify-between bg-zinc-500 px-20">
      <img src={logo} alt="...logo" />

      <ul className="flex items-center gap-10">
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
                className="absolute top-16 mt-1 w-[20%]  grid grid-cols-1 place-items-center p-4 text-black border-t-2 border-gradient-to-r from-[#5036BC] to-[#4265DB]"
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
                  className="absolute left-0 top-16 mt-1 w-[50%] translate-x-[50%] grid grid-cols-3 p-4  text-black border-t-2 bg-white"
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

      <Button text="Contact" />
    </div>
  );
};

export default Navbar;
