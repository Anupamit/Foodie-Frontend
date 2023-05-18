import React from "react";
import {Routes,Route} from 'react-router-dom'
import Home from "./Home";
import Navbar from "./Navbar";
import About from "./About";
import Food from "./Food";
import Contactus from "./Contactus";
import AddFood from "./AddFood";
import Footer from "./Footer";

const Portal = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/foods" element={<Food />} />
        <Route path="/addfood" element={<AddFood />} />
        <Route path="/contactus" element={<Contactus />} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default Portal;
