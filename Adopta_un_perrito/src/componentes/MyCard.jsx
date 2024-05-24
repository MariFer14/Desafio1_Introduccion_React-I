import React from "react";
import Tags from "./Tags";

function MyCard({ imagen, title, description, razas, colorButton }) {
  return (
    <div className="card">
      <img src={imagen} alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <Tags razas={razas} colorButton={colorButton} />
      </div>
    </div>
  );
}

export default MyCard;
