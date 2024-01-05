import React from "react";
import "./educateItem.css";

const EducateItem = ({ title, trainer, date, description }) => {
  return (
    <div className="educate-item">
      <div className="educationBars">
        <div className="educationBar">
          <h2>{title}</h2>
          <p>{trainer}</p>
          <p>{date}</p>
          <ul>
            {description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EducateItem;
