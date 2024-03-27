import React, { useState } from "react";
import styles from "./ProjectCard.module.scss";
import Button from "../Button/Button";
import { FaCode, FaGlobe } from "react-icons/fa";

const ProjectCard = ({ image, heading, text, stack }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={styles.ProjectCard}>
      <div className={styles.imageContainer}>
        <img src={image} alt="" />
      </div>
      <div className={styles.text}>
        <h2>{heading}</h2>
        <p>{text}</p>
        <p className={styles.stack}>{stack}</p>
      </div>
      <div></div>
    </div>
  );
};

export default ProjectCard;
