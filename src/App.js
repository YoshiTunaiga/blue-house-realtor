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
import AuthForm from "./Footer/AuthForm";
import AddNew from "./Components/AddNew";
import NotFound from "./Components/NotFound";
import { Admin } from "./Components/Admin";
import { AuthProvider } from "./Footer/AuthContext";
import PrivateRoute from "./PrivateRoute";

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
      <AuthProvider>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/alquiler" element={<Alquiler />} />
          <Route path="/venta" element={<Venta />} />
          <Route path="/signin" element={<AuthForm />} />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/admin"
            element={
              <PrivateRoute>
                <Admin />
              </PrivateRoute>
            }
          />
          <Route
            path="/agregar"
            element={
              <PrivateRoute>
                <AddNew />
              </PrivateRoute>
            }
          />
        </Routes>
      </AuthProvider>

      <Footer />
    </>
  );
}

export default App;

/*
<Route path="/agregar" element={<AddNew />} />
<Route path="/admin" element={<Admin />} />
*/
