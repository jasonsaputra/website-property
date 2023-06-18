import React from 'react'
import '../styles/AgentDetails.css'
const AgentDetails = ({ image, name, rating }) => {
  return (
    <div className="box">
      <img className="box-image" src={image} alt={name} />
      <div className="box-details">
        <h2 className="box-name">Name : {name}</h2>
        <p className="box-rating">Rating : {rating}</p>
        <p>Review :</p>
        <textarea className="box-review" placeholder="Write a review..." />
      </div>
    </div>
  );
}

export default AgentDetails;
