import React from "react";
import styles from "./Projects.module.scss";
import ProjectCard from "../ProjectCard/ProjectCard";
import img from "../../images/Capture.PNG";

const Projects = () => {
  return (
    <div className={styles.projects}>
      <div className={styles.heading}>
        <h4>
          MY <span>PROJECTS</span>
        </h4>
      </div>
      <div className={styles.cards}>
        <div className={styles.projectCard}>
          <div className={styles.imageContainer}></div>
        </div>
        <ProjectCard
          image={img}
          heading="School Management System"
          stack="HTML, CSS, JAVASCRIPT, FIGMA"
        />
      </div>
    </div>
  );
};

export default Projects;
