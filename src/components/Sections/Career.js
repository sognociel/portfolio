import React from "react";

import { careerData } from "../datas/career";

import "../../css/Sections/CareerAndEdu.css";

const Career = () => {
  return (
    <div id="career">
      <div className="fixed-border"></div>
      <h2>CAREER</h2>
      {careerData.map((item) => (
        <div className="career_container" key={item.id}>
          <div className="career_content">
            <div className="career__name">{item.name}</div>
            <div className="career__date">
              {item.date.slice(0, 8)}
              <br />~<br />
              {item.date.slice(11)}
            </div>
            <div className="career__info">
              {item.info.map((it) => (
                <>
                  {it}
                  <br />
                </>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Career;
