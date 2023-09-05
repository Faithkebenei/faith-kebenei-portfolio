import React from "react";

import styles from "./HomeMenu.module.scss";

import Socials from "../Socials/Socials";

import { FaTwitter, FaWhatsapp, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import circleImg from "../../images/rectangleImg.png"

const HomeMenu = () => {
    
    return (
        <>
        <div className={styles.home}>
            <div className={styles.textContainer}>
                <div className={styles.text}>
                <p>Hello, I'm</p>
                <h3>Faith Kebenei</h3>
                <p>Full Stack Software Developer</p>
                <div className={styles.socials}>
                <Socials icon={<FaGithub color="#fff"/>}/>
                <Socials icon={<FaLinkedinIn color="#fff"/>}/>
                <Socials icon={<FaTwitter color="#fff"/>}/>
                <Socials icon={<FaPhoneVolume color="#fff"/>}/>
                <Socials icon={<FaWhatsapp color="#fff"/>}/>
                </div>
                </div>
            </div>
            <div className={styles.imageContainer}>
                <div className={styles.imgContainer}>
                    <img src={circleImg} alt="" />
                </div>
            </div>
        </div>
        </>
    )
}

export default HomeMenu;