import React from "react";
import EducateItem from "./educateItem";
import educations from "./educate";
import "./educations.css";
const Educations = () => {
  return (
    <>
      <section id="educations">
        <span className="educationTile">My Educations</span>

        {educations.map((education) => {
          return <EducateItem key={education.id} {...education} />;
        })}
      </section>
    </>
  );
};

export default Educations;
