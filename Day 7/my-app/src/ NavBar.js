import React from 'react';

function NavBar() {
    return (
        <div className="nav-bar">
            <div className="logo"><i>DigiYatra</i></div>
            <div className="menu">
                <a href="#">Home</a>
                <a href="#">My Trips</a>
                <a href="#">Offers</a>
                <a href="#">Login</a>
                <a href="#">Sign up</a>
            </div>
        </div>
    );
}

export default NavBar;
