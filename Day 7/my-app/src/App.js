import React from 'react';
import VideoBackground from './VideoBackground';
//import NavBar from './NavBar';
import Hero from './Hero';
import AdventureDetails from './AdventureDetails';
import './App.css';

function App() {
  return (
    <div>
      
      <VideoBackground />
      
      <Hero />
      <AdventureDetails  />
      <div className="last"><div className="credit">Created by Vivek</div></div>
    </div>
  );
}

export default App;
