import React, { useState } from "react";
import TitleCompo from "./TitleCompo";
import "../Styles/Addfood.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddFood = () => {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [summery, setSummery] = useState("");
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  const addPost = (e) => {
    e.preventDefault();
    let data = { author, title, image, summery, location };
    axios.post("http://localhost:4000/addfood", data).then((res) => {
      alert(res.data.message);
    });
    navigate("/portal/foods");
  };
  return (
    <div>
      <TitleCompo title="Add Food"/>
      <div className="AddDiv">
        <img
          src="https://plus.unsplash.com/premium_photo-1663854478296-dd00b6257021?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          alt=""
          className="pancakeimg"
          height={750}
        />

        <form className="fom" onSubmit={addPost}>
          <h1 className="addtitle">ADD Food</h1>
          <label>Author</label>
          <input
          className="inpbx"
            onChange={(e) => setAuthor(e.target.value)}
            type="text"
            placeholder="Author Name"
            required
          />

          <label>Title</label>
          <input
          className="inpbx"
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            required
            placeholder="Title of the Food"
          />

          <label>Image</label>
          <input
          className="inpbx"
            onChange={(e) => setImage(e.target.value)}
            type="text"
            required
            placeholder="Link of the Image"
          />

          <label>Summary</label>
          <textarea
            onChange={(e) => setSummery(e.target.value)}
            placeholder="Summary of the Food"
            required
          ></textarea>

          <label>Location</label>
          <input
          className="inpbx"
            onChange={(e) => setLocation(e.target.value)}
            type="text"
            required
            placeholder="Location of the Food"
          />

          <button className="addbutton">Submit Post</button>
        </form>
      </div>
    </div>
  );
};

export default AddFood;
