import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Routers from "./routers";
import Preloader from './Preloader'; // Import Preloader component
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true); // Track loading state

  useEffect(() => {
    AOS.init({
      once: true, // Ensures animations occur only once
    });

    // Simulate loading time, and then set isLoading to false
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 6000); // 6 seconds for the preloader
    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  return (
    <>
      {true ? (
        <Preloader onFinish={() => setIsLoading(false)} /> // Show preloader while loading
      ) : (
        <Routers /> // Show the main app content after loading is done
      )}
    </>
  );
}

export default App;
