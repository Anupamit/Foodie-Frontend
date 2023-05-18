import React, { useEffect, useState } from "react";
import TitleCompo from "./TitleCompo";
import axios from 'axios';
import "../Styles/Food.css";
import { useNavigate, useLocation } from "react-router-dom";



const Food = () => {
  const [search, setSearch] = useState('');
  const [foods, setFoods] = useState([]);
  const [filteredFoods, setFilteredFoods] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/posts");
        setFoods(response.data);
        setFilteredFoods(response.data);
        console.log(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  let navigate = useNavigate();
  let location = useLocation();

  useEffect(() => {
    // Filter foods based on the search value
    const filtered = foods.filter(food => food.title.toLowerCase().includes(search.toLowerCase()));
    setFilteredFoods(filtered);
  }, [search, foods]);

  let handleRead = (_id) => {
    if (location.pathname === "/portal/foods") {
      navigate(`/portal/foods/${_id}`);
    }
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div>
      <TitleCompo title="Food Detail" />
      <input
        type="text"
        value={search}
        onChange={handleSearch}
        className="search-input"
        placeholder="Search the name from list"
      />
      <div>
        {filteredFoods.map((food) => (
          <div className="cardbody" key={food._id}>
            <div className="cardimg">
              <img src={food.image} alt="error" width={250} onClick={() => handleRead(food._id)} />
            </div>
            <div className="cardinfo">
              <h3>{food.title}</h3>
              <p>{food.author}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
