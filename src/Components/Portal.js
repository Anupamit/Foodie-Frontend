import React from "react";
import {Routes,Route} from 'react-router-dom'
import Home from "./Home";
import Navbar from "./Navbar";
import About from "./About";
import Food from "./Food";
import Lifestyle from "./Lifestyle";
import Contactus from "./Contactus";

const Portal = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/foods" element={<Food />} />
        <Route path="/lifestyle" element={<Lifestyle />} />
        <Route path="/contactus" element={<Contactus />} />
      </Routes>
    </div>
  );
};

export default Portal;
