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
        <h1>회귀하는 개발자</h1>
        <h1>
          <span>박보미</span> 입니다.
        </h1>
        <p>
          소설의 주인공이 마법 같은 기회로 새로운 인생의 회귀를 겪는다면, 저는 개발자로서 코드를
          통해 무한정 회귀를 반복하고 있습니다.
        </p>
        <p>
          회귀물의 주인공들은 과거의 특정 시점으로 돌아가 전과는 다른 새로운 인생을 개척해나갑니다.
        </p>
        <p>
          제게 마법 같은 회귀였던 개발자로서의 길은 새로운 개발 프로젝트마다 행복한 회귀를 경험하게
          합니다.
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
