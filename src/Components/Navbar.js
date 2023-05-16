import React from "react";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="Navtitle">Stories</div>

      <div className="Linkdiv">
        <ul>
          <Link to="/Portal">Home </Link>
          <Link to="/Portal/about">About</Link>
          <Link to="/Portal/foods">Foods</Link>
          <Link to="/Portal/lifestyle">Lifestyle</Link>
          <Link to="/Portal/lifestyle">Contact </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
