import React, { useState } from "react";
import "./MovieItem.css";
const MovieItem = ({ title }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleClick = (e) => {
    setIsFavorite(!isFavorite);
  };
  const btnclass = isFavorite ? "active-btn" : "";
  return (
    <div classname="movie-item">
      <span>{title}</span>
      <button classname={btnclass} onClick={handleClick}>
        Favorite
      </button>
    </div>
  );
};

export default MovieItem;
