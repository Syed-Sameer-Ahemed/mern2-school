import React from "react";

function Card({ title, description, image }) {
  return (
    <div className="card shadow-sm h-100">
      {image && (
        <img
          src={image}
          className="card-img-top"
          alt={title}
          style={{ height: "180px", objectFit: "cover" }}
        />
      )}
      <div className="card-body">
        <h5 className="card-title text-primary">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
}

export default Card;
