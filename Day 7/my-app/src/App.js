import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, useHistory } from 'react-router-dom';
import './App.css';
import AdventureDetails from './AdventureDetails';

const App = () => {
  const [cities, setCities] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("https://makemytrip-backend-w2d2.onrender.com/cities");
      const data = await result.json();
      setCities(data);
    };

    fetchData();
  }, []);

  const handleSearch = () => {
    const fetchData = async () => {
      const result = await fetch("https://makemytrip-backend-w2d2.onrender.com/cities");
      const data = await result.json();
      const filteredCities = data.filter(city =>
        city.city.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setCities(filteredCities);
    };

    fetchData();
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div>
            <div className="video-container">
              <video autoPlay muted loop className="background-video">
                <source src="https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_30fps.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="nav-bar">
              <div className="logo"><i>DigiYatra</i></div>
              <div className="menu">
                <Link to="/">Home</Link>
                <Link to="#">My Trips</Link>
                <Link to="#">Offers</Link>
                <Link to="#">Login</Link>
                <Link to="#">Sign up</Link>
              </div>
            </div>

            <div className="ai">
              <a href="https://chatgpt.com/"><img height="80px" width="80px" src="./chatbot.png" alt="Chatbot" /></a>
            </div>

            <div className="hero">
              <div className="hero-pic">
                <img
                  width="100%"
                  height="400px"
                  src="https://images.unsplash.com/photo-1516571137133-1be29e37143a?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Hero Image"
                />
              </div>
              <div className="hero-content">
                <h3>Welcome to DigiYatra</h3>
                <div className="search-container">
                  <input
                    className="hero-search"
                    placeholder="  Where to go...."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <button id="btn" onClick={handleSearch} className="go">Search</button>
                </div>
              </div>
            </div>

            <div className="mega-container">
              <div id="container">
                {cities.map(city => (
                  <Link to={`/details?id=${city.id}`} key={city.id} className="card2">
                    <img src={city.image} alt={city.city} />
                    <h3>{city.city}</h3>
                    <p>{city.description}</p>
                  </Link>
                ))}
              </div>
            </div>

            <div className="last"><div className="credit">Created by Vivek</div></div>
          </div>
        </Route>
        <Route path="/details" component={AdventureDetails} />
      </Switch>
    </Router>
  );
};

export default App;
