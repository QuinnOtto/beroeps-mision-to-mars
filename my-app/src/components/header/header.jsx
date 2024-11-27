import React, { Component } from "react";
import './header.css'; // Assuming you have a CSS file for styling

class Header extends Component {
    render() {
        return (
            <div className="header">
                <h1>Mission to Mars</h1>
                <nav>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Header;