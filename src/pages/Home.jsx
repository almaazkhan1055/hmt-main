import React from "react";
import Hero from "../components/hero";
import Hero2 from "../components/hero2";
import WhatWeDo from "../components/whatWeDo";
import Legacy from "../components/legacy";
import Difference from "../components/difference";
import Footer from "../components/footer";
import Contact from "../components/contact";
import Process from "../components/process";
import CardSection from "../components/cardSection";

const Home = ({ data }) => {
  const { heroData, hero2Data, legacyData } = data;
  return (
    <div className="relative">
      <Hero heroData={heroData} />
      <Hero2 hero2Data={hero2Data} />
      <WhatWeDo />
      <Legacy legacyData={legacyData} />
      <Difference />
      <Process />
      <CardSection />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
