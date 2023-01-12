import technicalsupport from "../img/technical-support.png";

import { SiGithub } from "react-icons/si";
import { RiKakaoTalkFill } from "react-icons/ri";

import "../css/Header.css";

const Header = () => {
  return (
    <div id="header">
      <div className="default">
        <img src={technicalsupport} alt="" className="nav_cogwheel" />
        <div className="bomis_portfolio">BOMI's Portfolio</div>
      </div>
      <div className="contact">
        <a
          href="https://github.com/sognociel"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiGithub className="contact_icon" />
        </a>
        <a
          href="https://open.kakao.com/o/sJBY2xHe"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiKakaoTalkFill className="contact_icon kakao_icon" />
        </a>
      </div>
    </div>
  );
};

export default Header;
