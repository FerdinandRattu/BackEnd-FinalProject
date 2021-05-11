import React from "react";

const Card = ({ Name, email, imageUrl }) => {
  return (
    <div
      className="card alignCenter mt-3  "
      style={{ width: "20rem", height: "25rem" }}
    >
      <img className="card-img-top profile" src={imageUrl} alt="avatar" />
      <div className="card-body">
        <p className="card-text">{Name}</p>
        <p className="card-text">{email}</p>
      </div>
    </div>
  );
};

export default Card;
