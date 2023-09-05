import React from "react";

import styles from "./Socials.module.scss"

const Socials = ({icon}) => {
    return (
        <>
        <div className={styles.circle}>
                    <div className={styles.icon}>
                        {icon}
                    </div>
                </div>
        </>
    )
}

export default Socials;