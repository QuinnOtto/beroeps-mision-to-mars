import React, { useState, useEffect } from 'react';
import './main.css';

const words = ['Explore', 'Discover', 'Experience', 'Uncover', 'Journey'];

const Main = () => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setOpacity(0);
            setTimeout(() => {
                setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
                setOpacity(1);
            }, 500);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
            <div className="main-container">
                <div className="background-image"></div>
                <div className="word-transition" style={{ opacity }}>
                    {words[currentWordIndex]}
                </div>
                <div className="info-boxes">
                    <div className="info-box">
                        <h2>Mission Overview</h2>
                        <p>Learn about our mission to Mars and what we aim to achieve.</p>
                    </div>
                    <div className="info-box">
                        <h2>Technology</h2>
                        <p>Discover the cutting-edge technology that makes this mission possible.</p>
                    </div>
                    <div className="info-box">
                        <h2>Get Involved</h2>
                        <p>Find out how you can be a part of this incredible journey.</p>
                    </div>
                </div>
                <div className="big-call-to-action">
                    <h1>Join Us on the Journey to Mars!</h1>
                    <button className="cta-button">Get Started</button>
                </div>
            </div>
        );
};

export default Main;