import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components";
import Alquiler from "./Components/Category/Alquiler";
import Venta from "./Components/Category/Ventas";
import ContactUs from "./Components/ContactUs/ContactUs";
import Footer from "./Footer/Footer";
import Dropdown from "./Navbar/Dropdown";
import Navbar from "./Navbar/Navbar";
import GlobalStyle from "./globalStyles";
import { Login } from "./Footer/AuthForm";
import AddNew from "./Components/AddNew";
import NotFound from "./Components/NotFound";
import { Admin } from "./Components/Admin";

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
        <Route path="/signin" element={<Login />} />
        <Route path="/agregar" element={<AddNew />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
