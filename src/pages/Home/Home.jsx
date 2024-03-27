import React, { useState } from "react";

import styles from "./Home.module.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import HomeMenu from "../../components/HomeMenu/HomeMenu";
import AboutMenu from "../../components/AboutMenu/AboutMenu";
import ServicesMenu from "../../components/ServicesMenu/ServicesMenu";
import Projects from "../../components/Projects/Projects";
import SkillsMenu from "../../components/SkillsMenu/SkillsMenu";
import ContactMenu from "../../components/ContactMenu/ContactMenu";

const Home = () => {
  return (
    <>
      <div className={styles.home}>
        <div id="home">
          <div className={styles.header}>
            <Header />
          </div>
          <HomeMenu />
        </div>

        <div id="about">
          <AboutMenu />
        </div>

        {/* <div id="services">
          <ServicesMenu />
        </div> */}

        {/* <div id="projects">
          <Projects />
        </div> */}

        <div id="skills">
          <SkillsMenu />
        </div>

        <div id="contact">
          <ContactMenu />
        </div>

        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
