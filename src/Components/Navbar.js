import React from "react";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="Navtitle">Stories</div>

      <div className="Linkdiv">
        <ul>
          <Link to="/portal">Home </Link>
          <Link to="/portal/about">About</Link>
          <Link to="/portal/addfood">Add Food </Link>
          <Link to="/portal/foods">Foods Details</Link>
          <Link to="/portal/contactus">Contact </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
