import React, { useState } from "react";
import Dropdown from "./Navbar/Dropdown";
import Navbar from "./Navbar/Navbar";

function App() {
  const [isOpen, setisOpen] = useState(false);

  const toggle = () => {
    setisOpen(!isOpen);
  };

  return (
    <>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
    </>
  );
}

export default App;
