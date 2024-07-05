import React from 'react';

function Hero() {
    const search = () => {
        console.log('Search button clicked');
    };

    return (
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
                    <input className="hero-search" placeholder="  Where to go...." />
                    <button id="btn" onClick={search} className="go">Search</button>
                </div>
            </div>
        </div>
    );
}

export default Hero;
