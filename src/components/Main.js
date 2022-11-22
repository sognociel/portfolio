import React, { useState } from "react";
import "../css/Main.css";
import cogwheel from "../img/cogwheel.png";
import TextScrambler from "react-scramble-text";

const Autoplay = () => {
  return (
    <div>
      <audio
        style={{ display: "hidden" }}
        autoPlay
        src="https://blog.kakaocdn.net/dn/oLISK/btrRJO1dJ2W/1D4eJFEJ0aGY8bkASU0OkK/tfile.mp3"
      ></audio>
    </div>
  );
};

const Main = ({ toggleMain }) => {
  const phrases = ["Hello", "Front-end Developer PARK BOMI"];
  const [isPlay, setIsPlay] = useState(false);

  const toggleIsPlay = () => {
    setIsPlay((isPlay) => !isPlay);
  };

  return (
    <div id="main">
      <TextScrambler phrases={phrases} speed={50} pauseTime={800} />
      <div className="message_text">click the cogwheel</div>
      <img
        src={cogwheel}
        alt=""
        className="cogwheel"
        onClick={() => {
          toggleIsPlay();
          setTimeout(() => {
            toggleMain();
          }, 1000);
        }}
      />
      {isPlay && <Autoplay />}
    </div>
  );
};

export default Main;
