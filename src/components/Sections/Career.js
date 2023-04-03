import React from "react";
import { v4 } from "uuid";

import { careerData } from "../datas/career";

const Career = () => {
  return (
    <div id="career">
      <div className="fixed-border"></div>
      <h2>CAREER</h2>
      {careerData.map((item) => (
        <div className="career_container" key={v4()}>
          <div className="career_content">
            <div className="career__name">{item.name}</div>
            <div className="career__date">
              {item.date.slice(0, 8)}
              <br />~<br />
              {item.date.slice(11)}
            </div>
            <div className="career__info">
              {item.info.map((it) => (
                <React.Fragment key={v4()}>
                  - {it}
                  <br />
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Career;
