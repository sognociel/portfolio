import React from "react";

// skills icon
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiRedux,
  SiPython,
  SiFirebase,
} from "react-icons/si";
import { FaSass } from "react-icons/fa";

import "../../css/Sections/Skills.css";

const Skills = () => {
  return (
    <div id="skills">
      <div className="fixed-border"></div>
      <h2>SKILLS</h2>
      <div className="skills_container">
        <div className="skills_content">
          <SiHtml5 className="html" />
          <span>HTML5</span>
        </div>
        <div className="skills_content">
          <SiCss3 className="css" />
          <span>CSS3</span>
        </div>
        <div className="skills_content">
          <FaSass className="sass" />
          <span>Sass</span>
        </div>
        <div className="skills_content">
          <SiJavascript className="javascript" />
          <span>JavaScript</span>
        </div>
        <div className="skills_content">
          <SiReact className="react" />
          <span>React</span>
        </div>
        <div className="skills_content">
          <SiRedux className="redux" />
          <span>Redux</span>
        </div>
        <div className="skills_content">
          <SiPython className="python" />
          <span>Python</span>
        </div>
        <div className="skills_content">
          <SiFirebase className="firebase" />
          <span>Firebase</span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
