import React from "react";
import "../css/Footer.css";
import github from "../img/github.png";
import gmail from "../img/gmail.png";
import instagram from "../img/instagram.png";
import blog from "../img/blog.png";

const Footer = () => {
  return (
    <footer>
      <a
        href="https://github.com/sognociel"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={github} alt="" className="footerImg" />
      </a>

      <a
        href="mailto:sognociel@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={gmail} alt="" className="footerImg" />
      </a>

      <a
        href="https://www.instagram.com/sognoaurore/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={instagram} alt="" className="footerImg" />
      </a>

      <a
        href="https://sogno-study.tistory.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={blog} alt="" className="footerImg" />
      </a>
    </footer>
  );
};

export default Footer;
