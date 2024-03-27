import React, { useEffect, useState } from "react";

import styles from "./Header.module.scss";

import Button from "../Button/Button";
import { FaBarsStaggered, FaX } from "react-icons/fa6";

const Header = () => {
  const [hovered, setHovered] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState();
  const [scrollPosition, setScrollPosition] = useState();
  const [hamburger, setHamburger] = useState(false);

  const handleHover = (id) => {
    setHovered(true);
    setHoveredMenu(id);
  };

  const handleUnHover = (id) => {
    setHovered(false);
    setHoveredMenu();
  };

  const redirectToContact = () => {
    window.location.href = "#contact";
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={styles.header}
        // style={scrollPosition > 0 ? style.header : {}}
      >
        <div className={styles.logo}>
          <span>F</span>aith
        </div>
        <div
          className={styles.hamburger}
          style={{ display: hamburger ? "none" : "block" }}
          onClick={() => setHamburger(true)}
        >
          <FaBarsStaggered color="#ea5184" size="2rem" />
        </div>
        <div
          className={styles.hamburger}
          style={{ display: hamburger ? "block" : "none" }}
          onClick={() => setHamburger(false)}
        >
          <FaX color="#FFF" size="2rem" />
        </div>
        <div className={styles.links}>
          <ul className={styles.navlinks}>
            <li>
              <a
                onMouseEnter={() => handleHover(1)}
                onMouseLeave={() => handleUnHover(1)}
                id={1}
                style={{
                  color: hovered && hoveredMenu === 1 ? "#ea5184" : "#fff",
                }}
                href="#home"
              >
                Home
              </a>
            </li>
            <li>
              <a
                onMouseEnter={() => handleHover(2)}
                onMouseLeave={() => handleUnHover(2)}
                id={2}
                style={{
                  color: hovered && hoveredMenu === 2 ? "#ea5184" : "#fff",
                }}
                href="#about"
              >
                About
              </a>
            </li>
            <li>
              <a
                onMouseEnter={() => handleHover(3)}
                onMouseLeave={() => handleUnHover(3)}
                id={3}
                style={{
                  color: hovered && hoveredMenu === 3 ? "#ea5184" : "#fff",
                }}
                href="#services"
              >
                Services
              </a>
            </li>
            <li>
              <a
                onMouseEnter={() => handleHover(4)}
                onMouseLeave={() => handleUnHover(4)}
                id={4}
                style={{
                  color: hovered && hoveredMenu === 4 ? "#ea5184" : "#fff",
                }}
                href="#projects"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                onMouseEnter={() => handleHover(5)}
                onMouseLeave={() => handleUnHover(5)}
                id={5}
                style={{
                  color: hovered && hoveredMenu === 5 ? "#ea5184" : "#fff",
                }}
                href="#skills"
              >
                Skills
              </a>
            </li>
            <li className={styles.contactLink}>
              <a
                onMouseEnter={() => handleHover(6)}
                onMouseLeave={() => handleUnHover(6)}
                id={5}
                style={{
                  color: hovered && hoveredMenu === 6 ? "#ea5184" : "#fff",
                }}
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
          <div className={styles.button}>
            <Button
              backgroundColor="#ea5184"
              color="#fff"
              text="Contact"
              border="none"
              clicked={redirectToContact}
            />
          </div>
          {/* <div className={styles.button}>
            <Button
              backgroundColor="transparent"
              color="#fff"
              text="Download CV"
              border="2px solid #ea5184"
            />
          </div> */}
        </div>
      </div>

      <div
        className={`${styles.mobileLinks} ${hamburger ? styles.active : ""}`}
      >
        <ul className={styles.navlinks} onClick={() => setHamburger(false)}>
          <li>
            <a
              onMouseEnter={() => handleHover(1)}
              onMouseLeave={() => handleUnHover(1)}
              id={1}
              style={{
                color: hovered && hoveredMenu === 1 ? "#ea5184" : "#fff",
              }}
              href="#home"
            >
              Home
            </a>
          </li>
          <li>
            <a
              onMouseEnter={() => handleHover(2)}
              onMouseLeave={() => handleUnHover(2)}
              id={2}
              style={{
                color: hovered && hoveredMenu === 2 ? "#ea5184" : "#fff",
              }}
              href="#about"
            >
              About
            </a>
          </li>
          <li>
            <a
              onMouseEnter={() => handleHover(3)}
              onMouseLeave={() => handleUnHover(3)}
              id={3}
              style={{
                color: hovered && hoveredMenu === 3 ? "#ea5184" : "#fff",
              }}
              href="#services"
            >
              Services
            </a>
          </li>
          <li>
            <a
              onMouseEnter={() => handleHover(4)}
              onMouseLeave={() => handleUnHover(4)}
              id={4}
              style={{
                color: hovered && hoveredMenu === 4 ? "#ea5184" : "#fff",
              }}
              href="#projects"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              onMouseEnter={() => handleHover(5)}
              onMouseLeave={() => handleUnHover(5)}
              id={5}
              style={{
                color: hovered && hoveredMenu === 5 ? "#ea5184" : "#fff",
              }}
              href="#skills"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              onMouseEnter={() => handleHover(6)}
              onMouseLeave={() => handleUnHover(6)}
              id={5}
              style={{
                color: hovered && hoveredMenu === 6 ? "#ea5184" : "#fff",
              }}
              href="#contact"
            >
              Contact
            </a>
          </li>
        </ul>
        {/* <div className={styles.button}>
            <Button
              backgroundColor="transparent"
              color="#fff"
              text="Download CV"
              border="2px solid #ea5184"
            />
          </div> */}
      </div>
    </>
  );
};

export default Header;
