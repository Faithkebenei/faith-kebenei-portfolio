import React, { useState } from "react";

import styles from "./Header.module.scss";

import Button from "../Button/Button";

const Header = () => {
    const [hovered, setHovered] = useState(false);
    const [hoveredMenu, setHoveredMenu] = useState();
    const handleHover = (id) => {
        setHovered(true);
        setHoveredMenu(id)
    }

    const handleUnHover = (id) => {
        setHovered(false);
        setHoveredMenu();
    }

    const redirectToContact = () => {
        window.location.href = "#contact"
    }


    return (
        <>
        <div className={styles.header}>
            <div className={styles.logo}><span>F</span>aith</div>
            <div className={styles.links}>
                <ul className={styles.navlinks}>
                    <li><a onMouseEnter={() => handleHover(1)} onMouseLeave={() => handleUnHover(1)} id={1} style={{color: hovered && hoveredMenu === 1? "#FF7C36": "#fff"}} href="#home">Home</a></li>
                    <li><a onMouseEnter={() => handleHover(2)} onMouseLeave={() => handleUnHover(2)} id={2} style={{color: hovered && hoveredMenu === 2? "#FF7C36": "#fff"}} href="#about">About</a></li>
                    <li><a onMouseEnter={() => handleHover(3)} onMouseLeave={() => handleUnHover(3)} id={3} style={{color: hovered && hoveredMenu === 3? "#FF7C36": "#fff"}} href="#services">Services</a></li>
                    <li><a onMouseEnter={() => handleHover(4)} onMouseLeave={() => handleUnHover(4)} id={4} style={{color: hovered && hoveredMenu === 4? "#FF7C36": "#fff"}} href="#projects">Projects</a></li>
                    <li><a onMouseEnter={() => handleHover(5)} onMouseLeave={() => handleUnHover(5)} id={5} style={{color: hovered && hoveredMenu === 5? "#FF7C36": "#fff"}} href="#skills">Skills</a></li>
                </ul>
                <div className={styles.button}>
                    <Button backgroundColor="#FF7C36" color="#fff" text="Hire Me" border="none" clicked={redirectToContact} />
                </div>
                <div className={styles.button}>
                    <Button backgroundColor="transparent" color="#fff" text="Download CV" border="2px solid #FF7C36" />
                </div>
            </div>
            
        </div>
        </>
    )
}

export default Header;