import React from "react";

import styles from "./Header.module.scss";

import Button from "../Button/Button";

const Header = () => {
    return (
        <>
        <div className={styles.header}>
            <div className={styles.logo}><span>F</span>aith</div>
            <div className={styles.links}>
                <ul className={styles.navlinks}>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Projects</li>
                    <li>Skills</li>
                </ul>
                <Button backgroundColor="#FF7C36" color="#fff" text="Hire Me" />
                <button>Download CV</button>
            </div>
            
        </div>
        </>
    )
}

export default Header;