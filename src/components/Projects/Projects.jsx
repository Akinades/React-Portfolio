import React from "react";
import "./Projects.css";
import Projectlist from "./ProjectList";
import { projectData } from "./projectData";
const Projects = () => {
  return (
    <section id="project">
      <h2 className="projectTitle">My Projects</h2>
      <ul className="project-list">
        {projectData.map((project) => {
          return (
            <li key={project.id}>
              <Projectlist
                image={project.image}
                title={project.title}
                description={project.description}
                url={project.url}
              />{" "}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Projects;
