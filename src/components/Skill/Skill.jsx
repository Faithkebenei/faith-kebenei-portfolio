import React from "react";

import styles from "./Skill.module.scss";


const Skill = ({icon, name}) => {
    return (
        <>
        <div className={styles.skill}>
            <div className={styles.image}>
            <img src={icon} alt="" />
            </div>
            <h4 className={styles.name}>{name}</h4>
        </div>
        </>
    )
}

export default Skill;