import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Routers from "./routers";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    AOS.init({
      once: true, // Ensures animations occur only once
  });
  }, []);

  return (
    <>
      <Routers />
    </>
  );
}

export default App;
