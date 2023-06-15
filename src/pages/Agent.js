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
            name = "Agent 1"
            rating = "4.8"/>
      </div>
    </div>
  );
}

export default Agent;
