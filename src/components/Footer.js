import React from "react";

import {
  SiGithub,
  SiGmail,
  SiInstagram,
  SiBlogger,
  SiNotion,
} from "react-icons/si";

const Footer = () => {
  return (
    <footer>
      <a
        href="https://github.com/sognociel"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiGithub className="footerImg" />
      </a>

      <a
        href="mailto:sognociel@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiGmail className="footerImg" />
      </a>

      <a
        href="https://boatneck-gazelle-7ea.notion.site/864c47b101e64819ad8e190c16d58b70"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiNotion className="footerImg" />
      </a>

      <a
        href="https://sogno-study.tistory.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiBlogger className="footerImg" />
      </a>

      <a
        href="https://www.instagram.com/sognoaurore/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiInstagram alt="" className="footerImg" />
      </a>
    </footer>
  );
};

export default Footer;
