import React from "react";
import Button from "./button";

const Form = () => {
  return (
    <form className="flex flex-col w-full md:w-[55%] gap-5 text-white my-10">
      <input type="text" placeholder="Your name" className="input" />
      <input type="email" placeholder="Business mail" className="input" />
      <input type="number" placeholder="Phone" className="input" />
      <input type="text" placeholder="Company’s name" className="input" />
      <textarea
        placeholder="Your message..."
        className="input h-[160px]"
      ></textarea>
      <span>
        <Button
          text="Send"
          type="submit"
          bgColor1="#5036BC"
          bgColor2="#4265DB"
        />
      </span>
    </form>
  );
};

export default Form;
