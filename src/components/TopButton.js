import React from "react";
import { useState, useEffect } from "react";

import arrowTop from "../img/arrow-top.png";

const TopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleShowButton = () => {
      if (window.scrollY > 500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", handleShowButton);
  }, []);

  return (
    showButton && (
      <div className="scroll__container" onClick={scrollToTop}>
        <img src={arrowTop} alt="" className="scroll__container__img" />
      </div>
    )
  );
};

export default TopButton;
