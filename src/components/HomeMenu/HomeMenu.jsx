import React from "react";

import styles from "./HomeMenu.module.scss";

import Socials from "../Socials/Socials";

import { FaTwitter, FaWhatsapp, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import circleImg from "../../images/rectangleImg.png";

const HomeMenu = () => {
  return (
    <>
      <div className={styles.home}>
        <div className={styles.textContainer}>
          <div className={styles.text}>
            <p>Hello, I'm</p>
            <h3>Faith Kebenei</h3>
            <hr className={styles.nameHr} />
            <p>Full Stack Software Developer</p>
            <div className={styles.socials}>
              <Socials icon={<FaGithub color="#fff" />} />
              <Socials icon={<FaLinkedinIn color="#fff" />} />
              <Socials icon={<FaTwitter color="#fff" />} />
              <Socials icon={<FaPhoneVolume color="#fff" />} />
              <Socials icon={<FaWhatsapp color="#fff" />} />
            </div>
          </div>
        </div>
        <div className={styles.shapeContainer}>
          <div className={styles.shape}>
            <div className={styles.boxContainer}>
              <div className={styles.box}></div>
              <div
                className={styles.box}
                style={{ backgroundColor: "#41BCC5", borderRadius: "100%" }}
              ></div>
            </div>
            <div
              className={styles.boxContainer}
              style={{ transform: "translateX(-2rem)" }}
            >
              <div
                className={styles.box}
                style={{
                  backgroundColor: "#41BCC5",
                }}
              ></div>
              <div
                className={styles.box}
                style={{ borderRadius: "100%" }}
              ></div>
            </div>
            <div className={styles.glow}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeMenu;
