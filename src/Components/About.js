import React from "react";
import "../Styles/About.css";
import TitleCompo from "./TitleCompo";

const About = () => {
  return (
    <div className="aboutpage">
      <TitleCompo title="About Us" />
      <div className="imgsec">
        <img
          src="https://preview.colorlib.com/theme/stories/images/about.jpg.webp"
          alt=""
          style={{width:"550px",height:"550px",marginLeft:"40px",marginTop:"40px"}}
        />
        <div className="containt">
        <h2>
          <span>About Stories</span>
        </h2>
        <p>Far far away, behind the word mountains, far from the<br></br> countries Vokalia and Consonantia</p>
        <div className="firstrow">
          <div className="blockdiv">
            <strong>10</strong>
            <span>Years of Experienced</span>
          </div>
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default About;
