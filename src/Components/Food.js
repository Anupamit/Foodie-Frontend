import React, { useEffect, useState } from "react";
import TitleCompo from "./TitleCompo";
import axios from "axios";
import "../Styles/Food.css";
import { useNavigate, useLocation } from "react-router-dom";


const Food = () => {
  const [foods, setFoods] = useState([]);

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

  let navigate = useNavigate();
  let location = useLocation();
  let handleRead = (_id) => {
    if (location.pathname == "/portal/foods") {
      navigate(`/portal/foods/${_id}`);
    }
  };

  return (
    <div>
      <TitleCompo title="Food Detail" />
      <div>
        <div >
          {foods.map((food) => (
            <div className="cardbody" key={food._id}>
              <div className="cardimg">
                <img src={food.image} alt="error" width={250} onClick={()=>handleRead(food._id)} />
              </div>
              <div className="cardinfo">
                <h3>{food.title}</h3>
                <p>{food.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Food;
