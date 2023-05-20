import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../Styles/FoodDetails.css";

import axios from "axios";

const FoodDetails = () => {
  const [singlePost, setSinglePost] = useState({});
  let params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/posts/${params._id}`
        );
        setSinglePost(response.data.singlePost);
        console.log(response.data.singlePost);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [params._id]);

  const { title, author, image, location, summery } = singlePost;

  return (
    <div className="card-container">
      <div className="image-container">
        <img className="round" src={image} alt="anupam" />
      </div>
      <div className="details">
        <div className="price">
          <p>
            <span className="detailNames">Title: {title || "Loading..."}</span>
          </p>
          <p>
            <span className="detailNames">Author: {author}</span>
          </p>
          <p>
            <span className="detailNames">Summary: {summery}</span>
          </p>
        </div>
        <div className="mapImg">
          <span>
            <iframe
              src={location}
              allowfullscreen=""
              title="map"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </span>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
