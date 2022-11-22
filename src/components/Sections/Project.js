import React from "react";
import "../../css/Sections/Project.css";
import SangsomunTodo from "../../img/sangsomun-todo.png";

const Project = () => {
  return (
    <div id="project">
      <div className="fixed-border"></div>
      <h2>PROJECT</h2>
      <div className="project_container">
        <div className="project__content">
          <img src={SangsomunTodo} alt="" />
          <div className="project__team">1인 개인 프로젝트</div>
        </div>
        <div className="project__sub">
          <div className="project__title">
            <h3>Sangsomun-todo</h3>
          </div>
          <div className="project__date">
            <h4>진행기간</h4>
            22. 09. 26 ~ 22. 10. 10
          </div>
          <div className="project__skills">
            <h4>사용기술</h4>
            JavaScript, Python
          </div>
          <div className="project__charge">
            <h4>기능</h4>
            새로고침을 할 때마다 랜덤한 다섯 개의 배경화면 중에서 하나를 출력
            <br />
            현재 지역의 날씨 좌표를 잡아 지역을 한문으로, 설명을 한국어로 변경
            <br />
            &#40;단, 모든 도시의 한문 변경은 불가능하여 8도에 한해서 진행&#41;
            <br />
            크롤링으로 가져온 한문 성어를 10초마다 랜덤하게 보여주기
          </div>
          <div className="project__remembrance">
            <h4>회고</h4>
            투두리스트를 적는 란이 오른쪽에 협소하게 나와 투두리스트 본연의
            목적을 해친 건 아닌가 아쉬웠습니다. 이미지를 조금 늘리면 중앙의
            배치를 해치는 것 같고, 그렇다고 너무 작게 만들면 투두리스트인데
            투두리스트의 기능을 완전히 사용하지 못할 것 같았습니다. 와이어
            프레임 작성의 중요함에 대해 깨달았고, 이후에는 더 철저하게 와이어
            프레임 작성을 해보자 결심하게 되었습니다.
            <br />
          </div>
          <div className="project__link">
            <a
              href="https://github.com/sognociel/sangsomun-todo.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Git Hub</button>
            </a>
            <a
              href="https://sognociel.github.io/sangsomun-todo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Site</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
