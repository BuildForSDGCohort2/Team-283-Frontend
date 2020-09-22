import React from 'react';
import './NavBar.css';


function NavBar() {
    return (
        <div className="navbar">
            <div className="logo_icon">
                <h2>FarmMall</h2>
            </div>
            <div className="navlinks">
                <h2>Home</h2>
                <h2>About Us</h2>
                <h2>Shop</h2>
                <h2>News</h2>
                <h2>Contact Us</h2>
            </div>
            <div className="search_bar">
                <form>
                    <input type="text" placeholder="Search..." />
                    <p>
                    <input type="checkbox" />
                    {' '}
                    Only show products in stock
                    </p>
                </form>
            </div>
        </div> 
    )
}

export default NavBar
