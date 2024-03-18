import React from 'react';


const Card = ({ label, price, buttonName }) => {
  return (
    <div className="card">
      <div className="card-header">{label}</div>
      <div className="card-body">
        <p>Price: {price}</p>
        <button>{buttonName}</button>
      </div>
    </div>
  );
};

export default Card;
