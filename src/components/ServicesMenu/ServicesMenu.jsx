import React from "react";

import styles from "./ServicesMenu.module.scss";

import ServiceContainer from "../ServiceContainer/ServiceContainer";

import {
  FaDesktop,
  FaMobileAlt,
  FaChartLine,
  FaRoute,
  FaDraftingCompass,
  FaClipboardCheck,
} from "react-icons/fa";

import api from "../../images/api.png";

const ServicesMenu = () => {
  return (
    <>
      <div className={styles.servicesMenu}>
        <div className={styles.heading}>
          <h4>
            MY <span>SERVICES</span>
          </h4>
        </div>
        <div className={styles.text}>
          <p>
            I take pride in offering a diverse range of services tailored to
            your unique needs. Whether you're seeking cutting-edge web
            development, mobile app solutions, data insights, e-commerce
            excellence, or rigorous system testing, I am dedicated to delivering
            results that exceed expectations. Explore my service offerings below
            to discover how I can empower your business and drive your digital
            journey forward.
          </p>
          <hr />
        </div>
        <div className={styles.topServiceContainers}>
          <ServiceContainer
            icon={<FaDesktop color="#FFFFFF" size="3em" />}
            heading="Web Development"
            text="I offer end-to-end expertise in crafting web applications. From designing intuitive user interfaces to architecting robust back-end systems, I ensure that every aspect of your web project is meticulously developed."
          />
          <ServiceContainer
            icon={<FaMobileAlt color="#FFFFFF" size="3em" />}
            heading="Mobile Development"
            text="I prioritize user-centric design, crafting responsive mobile experiences with features like push notifications and location-based services. I handle prototyping, deployment, and maintenance to exceed your expectations."
          />
          <ServiceContainer
            icon={<FaChartLine color="#FFFFFF" size="3em" />}
            heading="Data Analysis"
            text="I excel in Data Analysis, leveraging advanced tools and techniques to extract valuable insights from complex datasets. From data cleansing to visualization, I provide actionable recommendations for data-driven decision-making."
          />
        </div>
        <div className={styles.bottomServiceContainers}>
          <ServiceContainer
            icon={<FaRoute color="#FFFFFF" size="3em" />}
            heading="API Development"
            text="I specialize in API Development, creating robust and efficient interfaces to connect your systems and enable seamless data exchange. From design to implementation, I ensure reliable and secure communication."
          />
          <ServiceContainer
            icon={<FaDraftingCompass color="#FFFFFF" size="3em" />}
            heading="Web Design"
            text="I specialize in Web Design, leveraging my expertise in Figma to create visually appealing and user-friendly websites. With a focus on aesthetics and functionality, I use Figma's powerful design capabilities to craft digital experiences that engage and resonate with your audience."
          />
          <ServiceContainer
            icon={<FaClipboardCheck color="#FFFFFF" size="3em" />}
            heading="System Testing"
            text="I specialize in System Testing, rigorously evaluating software to ensure it meets quality and performance standards. From test planning to execution and reporting, I guarantee robust and reliable systems."
          />
        </div>
      </div>
    </>
  );
};

export default ServicesMenu;
