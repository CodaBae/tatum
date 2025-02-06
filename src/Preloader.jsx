import React, { useEffect } from "react";
import "./Preloader.css";

const Preloader = () => {
  useEffect(() => {
    // Add unveil animation classes after component mounts
    const unveilSections = document.querySelectorAll('.unveil-section');
    unveilSections.forEach(section => {
      section.style.animation = 'unveilQuadrant 1.5s cubic-bezier(0.7, 0, 0.3, 1) 6s forwards';
    });

    return () => {
      // Cleanup animation when component unmounts
      unveilSections.forEach(section => {
        section.style.animation = '';
      });
    };
  }, []);

  return (
    <>
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
    </>
  );
};

export default Preloader;