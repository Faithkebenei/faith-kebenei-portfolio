import React from "react";

import styles from "./Home.module.scss"
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import HomeMenu from "../../components/HomeMenu/HomeMenu";
const Home = () => {
    return (
        <>
        <div className={styles.home}>
            <div className={styles.header}>
                <Header />
            </div>

            <div>
                <HomeMenu />
            </div>
        
            <div className={styles.footer}>
                <Footer />
            </div> 
        </div>
        </>
    )
}

export default Home;