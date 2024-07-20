import React from "react";
import icon1 from "/icon-image1.png";
import icon2 from "/icon-image2.png";
import icon3 from "/icon-image3.png";
import icon4 from "/icon-image4.png";

function StatsCard() {
  return (
    <div className="main-section">
      <div className="card">
        <div className="icon-container">
          <img src={icon1} alt="icon-image" />
        </div>
        <div className="content">
          <p className="number">500+</p>
          <p className="text">Available Cars</p>
        </div>
      </div>

      <div className="card">
        <div className="icon-container">
          <img src={icon2} alt="icon-image" />
        </div>
        <div className="content">
          <p className="number">500+</p>
          <p className="text">Happy Clients</p>
        </div>
      </div>

      <div className="card">
        <div className="icon-container">
          <img src={icon3} alt="icon-image" />
        </div>
        <div className="content">
          <p className="number">500+</p>
          <p className="text">Team Workers</p>
        </div>
      </div>

      <div className="card">
        <div className="icon-container">
          <img src={icon4} alt="icon-image" />
        </div>
        <div className="content">
          <p className="number">500+</p>
          <p className="text">Years Of Experience</p>
        </div>
      </div>
    </div>
  );
}

export default StatsCard;
