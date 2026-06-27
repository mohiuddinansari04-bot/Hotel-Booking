import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../Layout";
import Home from "../Home/home";
import About from "../About/about";
import Contact from "../Contact/contact";
import Services from "../Services/services";
// import Login from "../Login/Login";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />} />
        {/* <Route path="/login" element={<Login/> }/> */}
      </Route>
    </Routes>
  );
}

export default AppRouter;
