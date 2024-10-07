import React from "react";

const Card = ({ title, url }) => {
  return (
    <div className="w-64 mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <img
        className="w-full h-48 object-cover"
        src={url || "https://via.placeholder.com/400"}
        alt="Card Image"
      />
      <div className="p-4">
        <h2 className="text-sm font-bold mb-2">{title}</h2>
      </div>
    </div>
  );
};

export default Card;
