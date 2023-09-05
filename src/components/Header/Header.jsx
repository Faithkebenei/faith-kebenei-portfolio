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


    return (
        <>
        <div className={styles.header}>
            <div className={styles.logo}><span>F</span>aith</div>
            <div className={styles.links}>
                <ul className={styles.navlinks}>
                    <li><a onMouseEnter={() => handleHover(1)} onMouseLeave={() => handleUnHover(1)} id={1} style={{color: hovered && hoveredMenu === 1? "#FF7C36": "#fff"}} href="#home-menu">Home</a></li>
                    <li><a onMouseEnter={() => handleHover(2)} onMouseLeave={() => handleUnHover(2)} id={2} style={{color: hovered && hoveredMenu === 2? "#FF7C36": "#fff"}} href="#about">About</a></li>
                    <li><a onMouseEnter={() => handleHover(3)} onMouseLeave={() => handleUnHover(3)} id={3} style={{color: hovered && hoveredMenu === 3? "#FF7C36": "#fff"}} href="">Services</a></li>
                    <li><a onMouseEnter={() => handleHover(4)} onMouseLeave={() => handleUnHover(4)} id={4} style={{color: hovered && hoveredMenu === 4? "#FF7C36": "#fff"}} href="">Projects</a></li>
                    <li><a onMouseEnter={() => handleHover(5)} onMouseLeave={() => handleUnHover(5)} id={5} style={{color: hovered && hoveredMenu === 5? "#FF7C36": "#fff"}} href="">Skills</a></li>
                </ul>
                <div className={styles.button}>
                    <Button backgroundColor="#FF7C36" color="#fff" text="Contact Me" border="none" />
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