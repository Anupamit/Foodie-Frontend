import React from "react";
import {Routes,Route} from 'react-router-dom'
import Home from "./Home";
import Navbar from "./Navbar";

const Portal = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default Portal;
