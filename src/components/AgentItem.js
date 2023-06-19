import React from "react";
import { Link } from "react-router-dom";
import '../styles/AgentItem.css'
// import Box from "../components/PropsAgentItem";


function AgentItem({ image, name, rating }) {

  return (
    <div className="agentItem">
      <div className="container-left">
        <div className="agentImage-container">
          <img src={image} className="agentImage-card" />
        </div>
        <div className="Text">
          <h1> {name} </h1>
          <p> {rating} </p>
        </div>
      </div>
      
      <div className="container-right">
        <Link to="/agent">
          <button>Details</button>
        </Link>
      </div>
    </div>
  );
}

export default AgentItem;