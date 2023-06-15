import React from 'react'

const AgentDetails = ({ image, name, rating }) => {
  return (
    <div className="box">
      <img className="box-image" src={image} alt={name} />
      <div className="box-details">
        <h2 className="box-name">Agent 1</h2>
        <p className="box-rating">Rating: {rating}</p>
        <textarea className="box-review" placeholder="Write a review..." />
      </div>
    </div>
  );
}

export default AgentDetails;
