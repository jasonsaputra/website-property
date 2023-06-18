import React from 'react'
import '../styles/Home.css';
import Carousel from '../components/Carousel';
import AgentItem from '../components/AgentItem';
import AgentImage from '../assets/agent1.jpg';

function Home() {
  return (
    <div id="root" className='home'>
      <div className='title-container'>
        <h1 className="homeTitle">Cranium's Agent</h1>
        <Carousel />
      </div>
      <AgentItem
         image={AgentImage}
         name="Beautiful Boy"
         rating="5.0 / 5.0"
      />
    </div>
  );
}

export default Home;
