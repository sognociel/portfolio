import React, { useState } from "react";

import cogwheel from "../img/cogwheel.png";

import "../css/Main.css";

// 톱니바퀴를 클릭했을 때 소리가 나오는 기능
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

// 첫 페이지(메인) 컴포넌트
const Main = ({ toggleMain }) => {
  // Main toggle. 다음 페이지로 넘어가는 기능
  const [isPlay, setIsPlay] = useState(false);
  const toggleIsPlay = () => {
    setIsPlay((isPlay) => !isPlay);
  };

  return (
    <div id="main">
      <div className="main_text">Front-end Developer PARK BOMI</div>
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
