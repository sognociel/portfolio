// import React, { useState } from "react";
import "../css/Header.css";
import technicalsupport from "../img/technical-support.png";

const Header = () => {
  return (
    <div id="header">
      <div className="default">
        <img src={technicalsupport} alt="" className="nav_cogwheel" />
        <div className="bomis_portfolio">BOMI's Portfolio</div>
      </div>
    </div>
  );
};

export default Header;
