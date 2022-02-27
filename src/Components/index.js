import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Dropdown from "../Navbar/Dropdown";
import Navbar from "../Navbar/Navbar";
import InfoSection from "./InfoSection";

const Home = () => {
  const [isOpen, setisOpen] = useState(false);

  const toggle = () => {
    setisOpen(!isOpen);
  };
  return (
    <>
      {/* <Dropdown isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} /> */}
      <InfoSection />
      {/* <Footer /> */}
    </>
  );
};

export default Home;
