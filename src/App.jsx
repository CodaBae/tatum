import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Routers from "./routers";
import Preloader from './Preloader';
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      once: true,
    });

    // Reset loading state when component mounts
    setIsLoading(true);
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 8000); // Increased to 7.5s to account for unveil animation

    return () => {
      clearTimeout(timer);
      // Reset AOS when component unmounts
      AOS.refresh();
    };
  }, []);

  return (
    <div className="app-container">
      {isLoading ? (
        <Preloader />
      ) : (
        <Routers />
      )}
    </div>
  );
}

export default App;