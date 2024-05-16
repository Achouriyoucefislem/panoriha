import React from "react";
import "./index.css";

function Video({ setVideo }) {
  return (
    <div className="videocontainer">
      <div className="videosubcontainer">
        <div onClick={() => setVideo(false)} className="quit">
          <ion-icon size="large" name="close-circle-outline"></ion-icon>
        </div>
        <video
          src="http://192.168.90.238:5000/bens.mp4"
          controls
          autoPlay
        ></video>
      </div>
    </div>
  );
}

export default Video;
