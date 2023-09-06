import React from "react";

import styles from "./Footer.module.scss";

import Socials from "../Socials/Socials";

import { FaTwitter, FaWhatsapp, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <>
        <div className={styles.footer}>
        <div className={styles.footerContent}>
            <div className={styles.socials}>
                <Socials icon={<FaGithub color="#fff"/>}/>
                <Socials icon={<FaLinkedinIn color="#fff"/>}/>
                <Socials icon={<FaTwitter color="#fff"/>}/>
                <Socials icon={<FaPhoneVolume color="#fff"/>}/>
                <Socials icon={<FaWhatsapp color="#fff"/>}/>
                </div>
            <p>All rights reserved © {year} <span>Faith Kebenei</span></p>
        </div>
        </div>
        </>
    )
}

export default Footer;