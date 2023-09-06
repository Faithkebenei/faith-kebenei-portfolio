import React from "react";

import styles from "./ServiceContainer.module.scss";

const ServiceContainer = ({icon, heading, text}) => {
    return (
        <>
        <div className={styles.service}>
            <p>{icon}</p>
            <h4 className={styles.heading}>{heading}</h4>
            <p className={styles.text}>{text}</p> 
        </div>
        </>
    )
}

export default ServiceContainer;