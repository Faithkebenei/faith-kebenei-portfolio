import React from "react";

import styles from "./AboutMenu.module.scss";
import Button from "../Button/Button"

import rectangleImg from "../../images/circleImg1.png"

const AboutMenu = () => {
    
    return (
        <>
        <div className={styles.about}>
            <div className={styles.content}>
            <div className={styles.imageContainer}>
                <div className={styles.imgContainer}>
                    <img src={rectangleImg} alt="" />
                </div>
            </div>
            <div className={styles.textContainer}>
            <div className={styles.heading}>
            <h2>ABOUT <span>ME</span></h2>
            </div>
                <div className={styles.text}>
                    <p>
                    As a Full Stack Software Engineer, I wield a formidable skill set encompassing technologies such as HTML, CSS, JavaScript, React, Node.js, Python, PHP and SQL. My proficiency extends across the entire software development stack, enabling me to architect and build end-to-end solutions. I specialize in crafting intuitive user interfaces and robust back-end systems, ensuring seamless functionality and an exceptional user experience. My commitment to clean, efficient, and well-documented code is unwavering, and I continually seek out cutting-edge tools and methodologies to stay at the forefront of technology. As a collaborative team member, I thrive in dynamic, cross-functional environments, where I contribute my expertise to deliver outstanding web and software applications.
                    </p>
                </div>
                <div className={styles.allBasicInformation}>
                    <div className={styles.basicInformationLeft}>
                        <div className={styles.basicInformation}>
                         <h4>Name:</h4>
                         <p>Faith Kebenei</p>
                        </div>
                        <div className={styles.basicInformation}>
                          <h4>Phone:</h4>
                       <p>0723850918</p>
                        </div>
                        <div className={styles.basicInformation}>
                           <h4>Experience:</h4>
                           <p>3 Years</p>
                        </div>
                    </div>
                    <div className={styles.basicInformationRight}>
                        <div className={styles.basicInformation}>
                           <h4>Age:</h4>
                            <p>23</p>
                        </div>
                        <div className={styles.basicInformation}>
                            <h4>Email:</h4>
                            <p>faithkebenei16@gmail.com</p>
                        </div>
                        <div className={styles.basicInformation}>
                           <h4>Freelance: </h4>
                           <p>Available</p>
                        </div>
                    </div>
                </div>
                <div className={styles.button}>
                    <Button backgroundColor="#FF7C36" color="#fff" text="Download CV" border="none"/>
                </div>
                </div>
            </div>
            
        </div>
        </>
    )
}

export default AboutMenu;