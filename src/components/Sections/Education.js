import React from "react";

import { educationData } from "../datas/education";

import "../../css/Sections/CareerAndEdu.css";

const Education = () => {
  return (
    <div id="edu">
      <div className="fixed-border"></div>
      <h2>EDUCATION</h2>

      {educationData.map((item) => (
        <div className="edu_container" key={item.id}>
          <div className="edu_content">
            <div className="edu__name">{item.name}</div>
            <div className="edu__date">
              {item.date.slice(0, 8)}
              <br />~<br />
              {item.date.slice(11)}
            </div>
            <div className="edu__info">
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

export default Education;
