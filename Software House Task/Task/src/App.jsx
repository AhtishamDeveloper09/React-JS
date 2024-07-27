import React from "react";
import "./App.css";
import StatsCard from "./components/StatsCard";
import AboutUs from "./components/AboutUs";
import YoutubeVideo from "./components/YoutubeVideo/YoutubeVideo";

function App() {
  return (
    <>
      <div className="aboutus-container">
        <AboutUs />
      </div>

      <div className="statscard-container">
        <StatsCard />
      </div>

      <div>
        <YoutubeVideo />
      </div>
    </>
  );
}

export default App;
