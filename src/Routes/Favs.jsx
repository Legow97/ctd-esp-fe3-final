import React, { useState, useEffect } from "react";
import Card from "../Components/Card";

const Favs = () => {
  const [favs, setFavs] = useState([]);

  useEffect(() => {
    const storedFavs = JSON.parse(localStorage.getItem("favs")) || [];
    // Elimina duplicados
    const uniqueFavs = Array.from(new Set(storedFavs.map(fav => fav.id)))
      .map(id => {
        return storedFavs.find(fav => fav.id === id);
      });
    setFavs(uniqueFavs);
  }, []);

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favs.map((fav) => (
          <Card key={fav.id} {...fav} />
        ))}
      </div>
    </> 
  );
};
export default Favs;
