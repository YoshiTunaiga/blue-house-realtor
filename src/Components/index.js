import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Dropdown from "../Navbar/Dropdown";
import Navbar from "../Navbar/Navbar";
import Hero from "./Hero";
import InfoSection from "./InfoSection";
import { slideData } from "./SlideData";

const Home = () => {
  const [isOpen, setisOpen] = useState(false);

  const toggle = () => {
    setisOpen(!isOpen);
  };
  return (
    <>
      {/* <Dropdown isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} /> */}
      <Hero slides={slideData} />
      <InfoSection />
      {/* <Footer /> */}
    </>
  );
};

export default Home;
