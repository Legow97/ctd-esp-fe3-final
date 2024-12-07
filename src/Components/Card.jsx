import React from "react";
import { Link } from "react-router-dom";

const Card = ({ name, username, id }) => {
  const addFav = () => {
    const favs = JSON.parse(localStorage.getItem("favs")) || [];
    const newFav = { name, username, id };

    // Verifica si el favorito ya existe
    if (!favs.some(fav => fav.id === id)) {
      localStorage.setItem("favs", JSON.stringify([...favs, newFav]));
      alert("Doctor added to favorites!");
    } else {
      alert("Doctor is already in favorites!");
    }
  };

  return (
    <div className="card">
      <img src="/images/doctor.jpg" alt="Doctor" className="card-image" />
      <Link to={`/detail/${id}`} className="card-content">
        <h3>{name}</h3>
        <p>{username}</p>
      </Link>
      <button onClick={addFav} className="favButton">
        <img src="/favicon.ico" alt="Add to favorites" />
      </button>
    </div>
  );
};

export default Card;
