import React, { useState } from "react";

import styles from "./Home.module.scss"
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import HomeMenu from "../../components/HomeMenu/HomeMenu";
import AboutMenu from "../../components/AboutMenu/AboutMenu";

const Home = () => {
    
    return (
        <>
        <div className={styles.home}>
           

            <div id="home-menu">
            <div className={styles.header}>
                <Header />
            </div>
                <HomeMenu />
            </div>

            <div id="about">
                <AboutMenu />
            </div>
        
            <div className={styles.footer}>
                <Footer />
            </div> 
        </div>
        </>
    )
}

export default Home;