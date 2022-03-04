import React from "react";
import { houses } from "../data/houses";
import Hero from "./Hero";
import InfoSection from "./Home/InfoSection";
import { slideData } from "./SlideData";

const Home = () => {
  return (
    <>
      <Hero slides={slideData} />
      <InfoSection houses={houses} />
    </>
  );
};

export default Home;
