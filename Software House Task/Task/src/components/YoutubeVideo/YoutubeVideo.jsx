import React from "react";
import "./YoutubeVideo.css";

function YoutubeVideo() {
  return (
    <div className="video-container">
      <div className="box"></div>
      <iframe
        src="https://www.youtube.com/embed/Fs3JDP-SQcQ"
        title="Embedded youtube video"
      />
    </div>
  );
}

export default YoutubeVideo;
