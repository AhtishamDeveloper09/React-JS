import React, { useState } from "react";
import carImage from "/image.png";
import blackImage from "/image2.png";
import "./App.css";
import StatsCard from "./components/StatsCard";

function App() {
  const [activeBtn, setActiveBtn] = useState("mission");

  return (
    <>
      <div className="main-container">
        <div className="image-container">
          <img src={carImage} alt="Car Image" />
        </div>

        <div className="data-container">
          <div className="about-us">
            <h2>About Us</h2>
            <h1>
              World Largest{" "}
              <span>
                Car
                <br />
                Dealer
              </span>{" "}
              Marketplace
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>

          <div className="button-container">
            <button
              className={activeBtn === "mission" ? "active" : ""}
              onClick={() => setActiveBtn("mission")}
            >
              Mission
            </button>
            <button
              className={activeBtn === "vision" ? "active" : ""}
              onClick={() => setActiveBtn("vision")}
            >
              Vision
            </button>
          </div>

          <div className="content-container">
            <div className="image-section">
              <img src={blackImage} alt="Car Image" />
            </div>

            {activeBtn === "mission" && (
              <div className="content-section">
                <h3>What is Lorem Ipsum?</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <button>More</button>
              </div>
            )}
            {activeBtn === "vision" && (
              <div className="content-section">
                <h3>What is Lorem?</h3>
                <p>
                  Lorem ipsum amet consectetur adipisicing elit. Nemo
                  reprehenderit ullam dolorum.
                </p>
                <button>More</button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="main-container-2">
        <StatsCard />
      </div>
    </>
  );
}

export default App;
