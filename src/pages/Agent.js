import React from "react";
import "../styles/Agent.css";
import AgentDetails from "../components/AgentDetails";
import AgentImage from '../assets/agent1.jpg';

function Agent() {
  return (
    <div className="agent">
      <h1 className="agentTitle">Agent Details</h1>
      <div className="agentList">
            <AgentDetails 
            image={AgentImage}
            name = "Beautiful Boy"
            rating = "5.0 / 5.0"/>
      </div>
    </div>
  );
}

export default Agent;
