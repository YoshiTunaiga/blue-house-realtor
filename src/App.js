import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components";
import Alquiler from "./Components/Alquiler";
import Venta from "./Components/Ventas";
import ContactUs from "./Components/ContactUs";
import Footer from "./Footer/Footer";
import Dropdown from "./Navbar/Dropdown";
import Navbar from "./Navbar/Navbar";
import GlobalStyle from "./globalStyles";
import AuthForm from "./Footer/AuthForm";

function App() {
  const [isOpen, setisOpen] = useState(false);

  const toggle = () => {
    setisOpen(!isOpen);
  };

  return (
    <>
      <GlobalStyle />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/alquiler" element={<Alquiler />} />
        <Route path="/venta" element={<Venta />} />
        <Route path="/signin" element={<AuthForm />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
