import { v4 } from "uuid";

export const projectData = [
  {
    id: v4(),
    img: require("../../img/project_img/sangsomun-todo.png"),
    team: "1인 개인 프로젝트",
    title: "Sangsomun-todo",
    date: "22. 09. 26 ~ 22. 10. 10",
    skills: "JavaScript, Python",
    charge: [
      "새로고침을 할 때마다 랜덤한 다섯 개의 배경화면 중에서 하나를 출력",
      "현재 지역의 날씨 좌표를 잡아 지역을 한문으로, 설명을 한국어로 변경",
      "(단, 모든 도시의 한문 변경은 불가능하여 8도에 한해서 진행)",
      "크롤링으로 가져온 한문 성어를 10초마다 랜덤하게 보여주기",
    ],
    remembrance:
      "투두리스트를 적는 란이 오른쪽에 협소하게 나와 투두리스트 본연의 목적을 해친 건 아닌가 아쉬웠습니다. 이미지를 조금 늘리면 중앙의 배치를 해치는 것 같고, 그렇다고 너무 작게 만들면 투두리스트인데 투두리스트의 기능을 완전히 사용하지 못할 것 같았습니다. 와이어 프레임 작성의 중요함에 대해 깨달았고, 이후에는 더 철저하게 와이어 프레임 작성을 해보자 결심하게 되었습니다.",
    link: "https://sognociel.github.io/sangsomun-todo/",
    github: "https://github.com/sognociel/sangsomun-todo.git",
  },

  {
    id: v4(),
    img: require("../../img/project_img/portfolio.png"),
    team: "1인 개인 프로젝트",
    title: "React 포트폴리오",
    date: "22. 11. 16 ~ 22. 11. 22",
    skills: "React",
    charge: [
      "메인 페이지에서 톱니바퀴를 클릭하면 오디오를 출력하고, 포트폴리오 사이트로 넘어가게 구현",
      "그리드를 이용한 반응형 웹 사이트",
    ],
    remembrance:
      "저번 Todo를 만들었을 때 와이어 프레임 작성의 중요성을 느낀지라 처음부터 와이어 프레임을 구상하고, 그 안에 들어가는 컴포넌트들을 정리한 후 코드 작성에 들어갔습니다. 확실히 나눈 구조 안에 어떤 내용들이 들어가는지 파악하고 코드를 작성하니 헤는 일 없이 사이트를 만들 수 있었습니다. 다만 React를 배운지 얼마 안 되어 다양한 기능들을 사용하지 못했던 점이 아쉬웠습니다.",
    link: "/",
    github: "https://github.com/sognociel/portfolio.git",
  },

  {
    id: v4(),
    img: require("../../img/project_img/sesoccer.png"),
    team: "7인 팀 프로젝트",
    title: "Sesoccer",
    date: "22. 11. 24 ~ 22. 12. 09",
    skills: "React, Sass, Styled-component, MUI, MongoDB",
    charge: [
      "회원가입 기능",
      "로그인 기능",
      "React Router를 이용하여 일정 부분만 렌더링",
      "경기 일정을 알 수 있는 슬라이드 카드 구현. 현재 날짜와 경기 날짜를 비교하여 경기 전, 경기 완료로 구분.",
      "Vote 기능으로 승패를 예측하고, 팀 별 투표 퍼센트를 화면에 출력",
      "서버 데이터 연동 (MongoDB)",
    ],
    remembrance:
      "처음 진행하는 팀 프로젝트라 Git push 방법을 구분하는 것에 신경을 많이 쓸 수 있었습니다. branch가 아닌 fork로 진행을 해보았는데, upstream에 대해 배울 수 있어서 좋은 기회였다고 생각합니다. 데이터 부분에 있어 많은 난항을 겪었기 때문에, 차후에는 데이터의 collection과 field 구조에 대해 확실하게 파악하고 프로젝트를 진행해야겠다고 생각했습니다. 개인 프로젝트와는 달리 팀 프로젝트로 진행하는 부분에 있어서 시행착오를 겪어볼 수 있어 다음 팀 프로젝트를 할 때 중요한 바탕이 될 수 있었던 프로젝트라고 생각합니다.",
    link: "https://se-soccer.vercel.app/",
    github: "https://github.com/sognociel/seSoccer.git",
  },
];
