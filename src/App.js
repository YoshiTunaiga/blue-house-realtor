import React, { useState } from "react";
import Footer from "./Footer/Footer";
import Dropdown from "./Navbar/Dropdown";
import Navbar from "./Navbar/Navbar";
import styled from "styled-components";

const Box = styled.div`
  display: flex;
  flex-direction: column;
`;

function App() {
  const [isOpen, setisOpen] = useState(false);

  const toggle = () => {
    setisOpen(!isOpen);
  };

  return (
    <Box>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Footer />
    </Box>
  );
}

export default App;
