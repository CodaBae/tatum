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

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 7000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {true ? (
        <Preloader />
      ) : (
        <Routers />
      )}
    </>
  );
}

export default App;