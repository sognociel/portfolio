import React from "react";
import "../../css/Sections/CareerAndEdu.css";

const Career = () => {
  return (
    <div id="career">
      <div className="fixed-border"></div>
      <h2>CAREER</h2>

      <div className="career_container">
        <div className="career_content">
          <div className="career__name">법무법인 화담</div>
          <div className="career__date">
            2020. 03
            <br /> ~ <br />
            2022. 07
          </div>
          <div className="career__info">
            토지보상팀 근무
            <br /> 3기 신도시, 주택재개발, 도로공사 등 토지 보상 과정에 있어
            수용재결, 이의재결 업무 수행
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
