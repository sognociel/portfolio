import React from "react";
import { v4 } from "uuid";

import { projectData } from "../../components/datas/project";

const Project = () => {
  return (
    <div id="project">
      <div className="fixed-border"></div>
      <h2>PROJECT</h2>

      {projectData.map((item) => (
        <div className="project_container" key={v4()}>
          <div className="project__content">
            <img src={item.img} alt="" />
            <div className="project__team">{item.team}</div>
          </div>
          <div className="project__sub">
            <div className="project__title">
              <h3>{item.title}</h3>
            </div>
            <div className="project__date">
              <h4>진행기간</h4>
              {item.date}
            </div>
            <div className="project__skills">
              <h4>사용기술</h4>
              {item.skills}
            </div>
            <div className="project__charge">
              <h4>기능</h4>
              {item.charge.map((it) => (
                <React.Fragment key={v4()}>
                  👉 {it}
                  <br />
                </React.Fragment>
              ))}
            </div>
            <div className="project__remembrance">
              <h4>회고</h4>
              {item.remembrance}
              <br />
            </div>
            <div className="project__link">
              <a href={item.github} target="_blank" rel="noopener noreferrer">
                <button>Git Hub</button>
              </a>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <button>Site</button>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;
