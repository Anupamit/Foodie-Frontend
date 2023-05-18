import React from "react";
import {Link } from "react-router-dom";
import "../Styles/Footer.css"


const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer">
          <div className="row">
            <ul>
              <li>
                <Link href="/">Contact us</Link>
              </li>
              <li>
                <Link href="/">Our Services</Link>
              </li>
              <li>
                <Link href="/">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/">Terms & Conditions</Link>
              </li>
              <li>
                <Link href="/">Career</Link>
              </li>
            </ul>
          </div>

          <div className="row">
            Copyright © 2023 ✌️😎 - All rights reserved @anupamit
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
