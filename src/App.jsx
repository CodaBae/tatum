import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Routers from "./routers";
import "./App.css";
import "./Preloader.css";

function App() {
  const [isLoading, setIsLoading] = useState(
    localStorage.getItem("preloaderShown") !== "true"
  );

  const [isShow, setIsShow] = useState(
    localStorage.getItem("preloaderShown") 
  );

  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []); // Runs once when the component mounts

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false);
        localStorage.setItem("preloaderShown", "true");
      }, 6000);

      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  return (
    <div className="app-container">
      {isLoading && (
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
      )}
  {/* {!isShow && (
      <div className="unveil-container">
        <div className="unveil-section unveil-top-left"></div>
        <div className="unveil-section unveil-top-right"></div>
        <div className="unveil-section unveil-bottom-left"></div>
        <div className="unveil-section unveil-bottom-right"></div>
      </div>
   )} */}
      {!isLoading && <Routers />}
    </div>
  );
}

export default App;