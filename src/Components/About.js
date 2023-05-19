import React, { useEffect, useState } from "react";
import axios from 'axios';
import "../Styles/About.css";
import TitleCompo from "./TitleCompo";

const About = () => {
  const [foods, setFoods] = useState([]);
  const [usersData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/posts");
        setFoods(response.data);
        console.log(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchDataUsers = async () => {
      try {
        const response = await axios.get("http://localhost:4000/users");
        setUserData(response.data);
        console.log(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchDataUsers();
  }, []);
  const foodCount = foods.length;
  const userCount = usersData.length;
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
              <h1>{foodCount}</h1>
              <p>Foods</p>
            </div>
          </div>

          <div className="about1row">
            <div className="box">
              <h1>300</h1>
              <p>LifeStyle</p>
            </div>

            <div className="box">
              <h1>{userCount}</h1>
              <p>Happy Customers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
