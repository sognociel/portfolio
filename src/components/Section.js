import React from "react";

import AboutMe from "./Sections/AboutMe.js";
import Skills from "./Sections/Skills.js";
import Project from "./Sections/Project.js";
import Career from "./Sections/Career.js";
import Education from "./Sections/Education.js";
import TopButton from "./TopButton.js";

const Section = () => {
  return (
    <section>
      <div className="info">
        <h1>꾸준한 노력가</h1>
        <h1>
          <span>박보미</span> 입니다.
        </h1>
        <p>프론트엔드 개발자가 되기 위해 열심히 공부하고 있습니다.</p>
        <p>깔끔하게! 아니면 독특하게!</p>
        <p>
          나도 모르게 한 번쯤은 눈길이 가고, 매력적인 UX를 통해 계속 방문하고
          싶은 웹페이지들을 구현하는 것이 목표입니다.
        </p>
      </div>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <Project></Project>
      <Career></Career>
      <Education></Education>
      <TopButton></TopButton>
    </section>
  );
};

export default Section;
