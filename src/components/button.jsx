import React from "react";

const Button = ({ text, bg, textColor = "white" }) => {
  return (
    <button
      type="button"
      className={`rounded-full whitespace-nowrap ${
        !bg && text === "Contact us"
          ? "bg-transparent border-white border"
          : "bg-gradient-to-r from-[#5036BC] to-[#4265DB]"
      } bg-[${bg}] px-8 py-3 text-sm font-semibold shadow-sm hover:from-[#4265DB] hover:to-[#5036BC] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
        bg && "border-black"
      } z-50`}
      style={{
        color: textColor,
      }}
    >
      {text}
    </button>
  );
};

export default Button;
