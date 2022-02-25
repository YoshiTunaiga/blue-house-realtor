import React, { useState } from "react";
import Footer from "./Footer/Footer";
import Dropdown from "./Navbar/Dropdown";
import Navbar from "./Navbar/Navbar";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components";

// const Box = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

function App() {
  const [isOpen, setisOpen] = useState(false);

  const toggle = () => {
    setisOpen(!isOpen);
  };

  return (
    <>
      {/* // <Router> */}
      {/* <Navbar /> */}
      <Home />
      {/* <Route path="/" component={Home} exact /> */}
      {/* // </Router> */}
    </>
  );
}

export default App;
