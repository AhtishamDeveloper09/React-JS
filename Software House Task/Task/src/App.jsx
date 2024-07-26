import React from "react";
import "./App.css";
import StatsCard from "./components/StatsCard";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <>
      <div className="aboutus-container">
        <AboutUs />
      </div>

      <div className="statscard-container">
        <StatsCard />
      </div>
    </>
  );
}

export default App;
