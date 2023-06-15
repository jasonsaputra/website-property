import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Agent from './pages/Agent';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/agent" exact element={<Agent />} />
          {/* <Route path="/about" exact element={<About />} />
          <Route path="/contact" exact element={<Contact />} /> */}
        </Routes>
      </Router>
  );
}

export default App;
