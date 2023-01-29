export const projectData = [
  {
    img: require("../../img/project_img/ledsaver.png"),
    team: "4인 팀 프로젝트",
    title: "LEDSAVER 관리자 페이지",
    date: "22. 12. 19 ~ 23. 01. 13",
    skills: "JavaScript, React, Redux & reduxjs/toolkit, Sass, Firebase",
    charge: [
      "Firebase 기반의 로그인 상태 여부에 따라 페이지 접근 제한 개발",
      "권역별 충전 누적량 확인 및 충전소와 충전기의 상세 모니터링 확인 가능",
      "React Router Dom으로 라우팅 구현",
      "Redux Toolkit으로 전역 데이터 상태 관리",
      "Redux Toolkit Thunk로 비동기 데이터 관리",
      "충전소 사업자 목록 생성, 조회, 삭제 구현",
      "서버 데이터 사용 (Firebase Realtime Database)",
      "Figma를 통한 레이아웃 구성",
      "Material UI와 Sass를 통한 스타일링 구현",
    ],
    remembrance:
      "비동기 통신으로 데이터를 받아오는 방법을 제대로 구현해 본 적이 없어 걱정이었는데, SeSAC 최종 프로젝트에서 마음껏 경험해 볼 수 있어 좋았습니다. Figma를 이용하여 컴포넌트 구조를 설계하고, 해당 구조에 맞춰 폴더를 구성한 후 각 컴포넌트에 맞는 Slice를 만드는 흐름을 파악할 수 있게 되었습니다. 프로젝트 마감일까지 최선을 다해 나머지 부분을 구현하고자 노력하고 있습니다. 또한 협업 시 Prettier 설정 등 사전에 팀원들끼리 맞춰야 하는 설정들에 대해 깨우치는 시간이 되었습니다.",
    link: "https://sesac-saver-djshinnn.vercel.app/",
    github: "https://github.com/djshinnn/sesac-saver.git",
  },

  {
    img: require("../../img/project_img/fruits-database.png"),
    team: "개인 프로젝트",
    title: "올해의 과일",
    date: "22. 12. 02 ~ 22. 12. 09",
    skills: "JavaScript, React, Sass, Firebase",
    charge: [
      "Firebase의 Firestore Database로 CRUD 구현",
      "추가 페이지 : setDoc으로 새로운 과일 추가 기능",
      "리스트 페이지 : updateDoc, deleteDoc으로 기존의 과일 정보를 수정하거나 삭제하는 기능",
      "React Router Dom으로 라우팅 구현",
      "useNavigate를 통한 상품 코드별 상세 페이지 구현",
      "React Hooks 사용 (useState, useContext, useCallback, useMemo)",
    ],
    remembrance:
      "React Hooks로 전역 상태 관리를 하고, 함수의 최적화를 시도해 보려 노력했습니다. useMemo와 useCallback의 쓰임새가 아직 확실하게 이해되지는 않아 어려웠지만, 어떻게 사용하는지에 대해 복습할 수 있는 시간이 되었다고 생각합니다. FireStore의 getDoc, setDoc 등 CRUD와 관련한 FireStore 자체 함수를 사용해 보았고, 몇 번 더 연습해 보아야 될 것 같다는 생각을 했습니다.",
    link: "",
    github: "https://github.com/sognociel/fruits-database.git",
  },

  {
    img: require("../../img/project_img/sport-light.png"),
    team: "개인 프로젝트",
    title: "Sport-Light",
    date: "22. 12. 02 ~ 22. 12. 09",
    skills: "JavaScript, React, Sass",
    charge: [
      "React Hooks : useState로 운동 기록 관리",
      "운동 기록 추가, 삭제 기능 구현 (useState의 set 사용)",
      "filter 기능을 사용하여 월별로 총 운동시간 합계 계산 기능 구현",
      "운동 기록이 없을 때 운동 기록 없음 메시지 표시",
    ],
    remembrance:
      "사용자에게서 오늘의 운동 정보를 받을 때, 부분적으로 select의 option을 사용하면서 초기 화면에 사용되는 option의 값을 클릭하지 않고도 어떻게 가져오는 게 좋을지 많은 고민을 했었습니다. 새로이 입력되는 운동정보의 값은 옵션이 한 번이라도 바뀌어야 그 값이 업데이트되었기 때문입니다. 초기 state를 어떻게 구성하느냐에 따라 이후 코드 작성의 방향성이 정해진다는 것을 깨달았습니다.",
    link: "",
    github: "https://github.com/sognociel/sport-light.git",
  },

  {
    img: require("../../img/project_img/sesoccer.png"),
    team: "7인 팀 프로젝트",
    title: "Sesoccer",
    date: "22. 11. 24 ~ 22. 12. 09",
    skills: "JavaScript, React, Sass, Styled-component, MUI, MongoDB",
    charge: [
      "회원가입 / 로그인 기능 구현",
      "React Router Dom으로 라우팅 구현",
      "경기 일정을 알 수 있는 슬라이드 카드 구현. 현재 날짜와 경기 날짜를 비교하여 경기 전, 경기 완료로 구분.",
      "서버 데이터 연동 (MongoDB)",
      "Vote 기능으로 승패를 예측하고, 팀 별 투표 퍼센트를 화면에 출력",
      "Figma를 통한 레이아웃 구성",
      "Material UI, Sass, Styled-components를 통한 스타일링 구현",
    ],
    remembrance:
      "처음 진행하는 팀 프로젝트라 Git push 방법을 구분하는 것에 신경을 많이 쓸 수 있었습니다. branch가 아닌 fork로 진행을 해보았는데, upstream에 대해 배울 수 있어서 좋은 기회였다고 생각합니다. 데이터 부분에 있어 많은 난항을 겪었기 때문에, 차후에는 데이터의 collection과 field 구조에 대해 확실하게 파악하고 프로젝트를 진행해야겠다고 생각했습니다. 개인 프로젝트와는 달리 팀 프로젝트로 진행하는 부분에 있어서 시행착오를 겪어볼 수 있어 다음 팀 프로젝트를 할 때 중요한 바탕이 될 수 있었던 프로젝트라고 생각합니다.",
    link: "https://se-soccer.vercel.app/",
    github: "https://github.com/sognociel/seSoccer.git",
  },

  {
    img: require("../../img/project_img/portfolio.png"),
    team: "1인 개인 프로젝트",
    title: "React 포트폴리오",
    date: "22. 11. 16 ~ 22. 11. 22",
    skills: "JavaScript, React, Sass",
    charge: [
      "삼항연산자를 통한 페이지 전환",
      "페이지 전환 시 오디오 구현",
      "React Hooks : useState로 메인 페이지와 오디오 상태 관리",
      "그리드를 이용한 반응형 웹 사이트",
      "React Icon으로 페이지 내 사용한 아이콘들의 통일감 형성",
    ],
    remembrance:
      "저번 Todo를 만들었을 때 와이어 프레임 작성의 중요성을 느낀지라 처음부터 와이어 프레임을 구상하고, 그 안에 들어가는 컴포넌트들을 정리한 후 코드 작성에 들어갔습니다. 확실히 나눈 구조 안에 어떤 내용들이 들어가는지 파악하고 코드를 작성하니 헤는 일 없이 사이트를 만들 수 있었습니다. 다만 React를 배운지 얼마 안 되어 다양한 기능들을 사용하지 못했던 점이 아쉬웠습니다.",
    link: "/",
    github: "https://github.com/sognociel/portfolio.git",
  },

  {
    img: require("../../img/project_img/sangsomun-todo.png"),
    team: "1인 개인 프로젝트",
    title: "Sangsomun-todo",
    date: "22. 09. 26 ~ 22. 10. 10",
    skills: "JavaScript, Python",
    charge: [
      "새로고침을 할 때마다 랜덤한 배경화면 출력",
      "현재 지역의 날씨 좌표를 잡아 지역 이름을 한문으로, 날씨에 대한 설명을 한국어로 변경 (단, 모든 도시의 한문 변경은 불가능하여 8도에 한해서 진행)",
      "Python으로 한문성어 웹 페이지를 크롤링하여 가져와 10초마다 랜덤하게 보여주는 기능 구현",
      "Local Storage를 이용하여 이름과 오늘의 할 일 항목을 입력하면 새로고침을 해도 초기회 되지 않고 현재 상태 유지",
    ],
    remembrance:
      "투두리스트를 적는 란이 오른쪽에 협소하게 나와 투두리스트 본연의 목적을 해친 건 아닌가 아쉬웠습니다. 이미지를 조금 늘리면 중앙의 배치를 해치는 것 같고, 그렇다고 너무 작게 만들면 투두리스트인데 투두리스트의 기능을 완전히 사용하지 못할 것 같았습니다. 와이어 프레임 작성의 중요함에 대해 깨달았고, 이후에는 더 철저하게 와이어 프레임 작성을 해보자 결심하게 되었습니다.",
    link: "https://sognociel.github.io/sangsomun-todo/",
    github: "https://github.com/sognociel/sangsomun-todo.git",
  },
];
