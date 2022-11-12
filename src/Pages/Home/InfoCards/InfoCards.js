import React from "react";

const InfoCards = ({ card }) => {
  const { name, icon, description, className } = card;
  return (
    <div className={`card card-side p-3 mb-2 shadow-xl ${className}`}>
      <figure>
        <img src={icon} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default InfoCards;
