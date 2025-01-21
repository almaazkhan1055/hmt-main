import React from "react";
import Img1 from "../assets/img1.png";
import Img2 from "../assets/img2.png";
import circle from "../assets/circle.png";
import Globe from "./globe";
import MouseHoverText from "./mouseHoverText";
import arrowLeft from "../assets/arrowLeft.png";
import arrowRight from "../assets/arrowRight.png";
import CurvedText from "./curvedText";

const CardsData = [
  {
    img: Img2,
    title: "WEB3 DEVELOPMENT",
    description:
      "Dive into the future of the internet with our Web3 development services. We build decentralized applications (dApps), smart contracts, and token systems that empower your business with blockchain-based solutions.",
  },
  {
    img: Img1,
    title: "SOFTWARE TESTING",
    description:
      "Ensure your software runs smoothly with our comprehensive testing services. We perform functional, performance, and security testing to deliver robust, bug-free applications that perform flawlessly.",
  },
  {
    img: Img2,
    title: "BLOCKCHAIN DEVELOPMENT",
    description:
      "Our blockchain development service provides secure, transparent, and scalable solutions. From private blockchains to public platforms, we help businesses streamline processes with cutting-edge technology.",
  },
  {
    img: Img1,
    title: "MARKETING SERVICES",
    description:
      "Boost your brand’s visibility with our expert marketing strategies. From digital campaigns to SEO, we help you connect with your audience and grow your business through tailored marketing efforts.",
  },
  {
    img: Img2,
    title: "DEVOPS SERVICES",
    description:
      "Optimize your development process with our DevOps solutions. We automate workflows, enhance collaboration between teams, and improve delivery speed to ensure continuous integration and deployment for your projects.",
  },
];

const CardSection = () => {
  return (
    <div className="cardSection min-h-screen py-20 px-8 sm:px-12 lg:px-20 relative z-40 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center justify-between mb-20">
        <div className="w-full lg:w-1/2">
          <Globe title="Explore Our Expert Solution" cardSection />
        </div>
        <p className="text-white w-full lg:w-1/2 text-xl opacity-70 mt-8 lg:mt-0">
          From strategy to execution, discover the services that drive <br />
          your business forward. Let’s build something great together.
        </p>
      </div>
      {CardsData.map((card, index) => (
        <div
          key={index}
          className={`flex flex-col lg:flex-row items-center gap-8 py-8 ${
            index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
          }`}
        >
          <div
            className={`w-full lg:w-1/2 flex flex-col justify-center mb-8 lg:mb-0 relative ${
              index % 2 !== 0 ? "ml-5" : "mr-5"
            } `}
          >
            <h3 className="text-[#65C6B9] font-bold text-[40px]">
              {card.title}
            </h3>

            {index % 2 !== 0 ? (
              <div className="sm:absolute hidden top-[60px] left-[-45px]">
                <img src={arrowLeft} alt="...arrow left" width={152} />
              </div>
            ) : (
              <div className="sm:absolute hidden right-[-45px] top-[60px]">
                <img src={arrowRight} alt="...arrow right" width={152} />
              </div>
            )}

            <p
              className={`text-base leading-6 text-gray-300 mt-8 ${
                index % 2 === 0 ? "pr-4" : "pl-4"
              }`}
            >
              {card.description}
            </p>
          </div>

          <div className="w-full lg:w-1/2 relative">
            <img src={card.img} alt="Card Image" className="w-full h-auto" />

            <div
              className={`absolute flex items-center ${
                index % 2 !== 0
                  ? "bottom-[-20px] sm:bottom-0  sm:right-[30px] right-[-10px]"
                  : "sm:bottom-0 bottom-[-20px] left-[-10px] sm:left-[30px]"
              }`}
            >
              <CurvedText text="Click here to" id={1} />
              <img src={circle} alt="Click Here" />
              <CurvedText text="Click here to" id={2} />
            </div>
          </div>
        </div>
      ))}
      <MouseHoverText />
    </div>
  );
};

export default CardSection;
