import React from "react";
import "./skills.css";
import { header_Icon, skill_Icon } from "./skill-icon.js";

const Skills = () => {
  const pro_lang = Object.keys(skill_Icon[0]).slice(0, 3);
  const frame_lib = Object.keys(skill_Icon[0]).slice(3, 7);
  const tools = Object.keys(skill_Icon[0]).slice(7, 12);
  return (
    <>
      <section id="skills">
        <span className="skillTitle">My Skills</span>
        <div className="skillBars">
          <div className="skillBar">
            <img
              src={header_Icon[0].UIDesign}
              alt="UIDesign"
              className="skillBarImg"
            />
            <div className="skillBarText">
              <h2>Programming Language</h2>
              <span className="skillIcon">
                {pro_lang.map((key, index) => (
                  <img key={index} src={skill_Icon[0][key]} alt={key} />
                ))}
              </span>
            </div>
          </div>
          <div className="skillBar">
            <img
              src={header_Icon[0].WebDesign}
              alt="WebDesign"
              className="skillBarImg"
            />
            <div className="skillBarText">
              <h2>Frameworks & Libary</h2>
              <span className="skillIcon">
                {frame_lib.map((key, index) => (
                  <img key={index} src={skill_Icon[0][key]} alt={key} />
                ))}
              </span>
            </div>
          </div>
          <div className="skillBar">
            <img
              src={header_Icon[0].AppDesign}
              alt="AppDesign"
              className="skillBarImg"
            />
            <div className="skillBarText">
              <h2>Tools</h2>
              <span className="skillIcon">
                {tools.map((key, index) => (
                  <img key={index} src={skill_Icon[0][key]} alt={key} />
                ))}
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
