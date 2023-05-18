import React from "react";
import "../Styles/About.css";
import TitleCompo from "./TitleCompo";

const About = () => {
  return (
    <div className="aboutpage">
      <TitleCompo title="About Us" />
      <div className="about2div">
        <img
          src="https://img1.wallspic.com/previews/6/7/3/8/6/168376/168376-food-ingredient-recipe-cooking-tableware-x750.jpg"
          alt=""
          width={500}
          height={700}
        />

        <div className="about2divside">
          <div className="aboutdetails">
            <h1>About Stories</h1>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia
            </p>
          </div>

          <div className="about1row">
            <div className="box">
              <h1>10</h1>
              <p>Years of Experienced</p>
            </div>

            <div className="box">
              <h1>200</h1>
              <p>Foods</p>
            </div>
          </div>

          <div className="about1row">
            <div className="box">
              <h1>300</h1>
              <p>LifeStyle</p>
            </div>

            <div className="box">
              <h1>40</h1>
              <p>Happy Customers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
