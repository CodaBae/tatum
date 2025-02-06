import React from "react";
import "./Preloader.css";

const Preloader = () => {
  return (
    <div className='body'>
      <div className="preloader">
        <div className="container">
          <div className="static-text">We Keep You</div>
          <div className="rolling-text">
            <span>Winning</span>
            <span>Thriving</span>
            <span>Believing</span>
            <span>Achieving</span>
            <span>Growing</span>
            <span>Flourishing</span>
            <span>Succeeding</span>
            <span>Excelling</span>
            <span>Advancing</span>
            <span>Prospering</span> 
            <span className="emphasis">Smiling.</span>
          </div>
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