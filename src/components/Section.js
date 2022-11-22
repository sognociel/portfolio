import React from "react";
import "../css/Section.css";
import AboutMe from "./Sections/AboutMe.js";
import Skills from "./Sections/Skills.js";
import Project from "./Sections/Project.js";
import Career from "./Sections/Career.js";
import Education from "./Sections/Education.js";

const Section = () => {
  return (
    <section>
      <div className="info">
        <h1>꾸준한 노력가</h1>
        <h1>
          <span>박보미</span> 입니다.
        </h1>
        <p>
          프론트엔드 개발자가 되기 위해 배운 것들을 소화하고자 열심히 노력하고
          있습니다.
        </p>
        <p>
          한 단계씩 차근차근 꼼꼼하게 성장할 수 있는 개발자를 희망하고 있습니다.
        </p>
      </div>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <Project></Project>
      <Career></Career>
      <Education></Education>
    </section>
  );
};

export default Section;
