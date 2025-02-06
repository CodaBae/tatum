import React, { useEffect } from 'react';
import "./css/Preloader.css"; 

const Preloader = ({ onFinish }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onFinish(); // This should set isLoading to false
        }, 6000);
        return () => clearTimeout(timer);
    }, [onFinish]);

    return (
        <div className="preloader">
            <div className="container">
                <div className="static-text">We Keep You</div>
                <div className="rolling-text">
                    {['Winning', 'Thriving', 'Believing', 'Achieving', 'Growing', 'Flourishing', 'Succeeding', 'Excelling', 'Advancing', 'Prospering', 'Smiling.'].map((word, index) => (
                        <span key={index} className={word === 'Smiling.' ? 'emphasis' : ''}>{word}</span>
                    ))}
                </div>
            </div>
            <div className="unveil-container">
                <div className="unveil-section unveil-top-left"></div>
                <div className="unveil-section unveil-top-right"></div>
                <div className="unveil-section unveil-bottom-left"></div>
                <div className="unveil-section unveil-bottom-right"></div>
            </div>
        </div>
    );
};

export default Preloader;
