import React from "react";

import styles from "./ContactMenu.module.scss";

import Button from "../Button/Button";

const ContactMenu = () => {
  return (
    <>
      <div className={styles.contact}>
        <div className={styles.heading}>
          <h4>
            GET IN <span>TOUCH</span>
          </h4>
        </div>
        <div>
          <div className={styles.box}>
            <label for="name" className={styles.label}>
              Name:
            </label>
            <input id="name" type="text" />
          </div>

          <div className={styles.box}>
            <label for="email" className={styles.label}>
              Email:
            </label>
            <input id="email" type="email" />
          </div>

          <div className={styles.box}>
            <label for="message" className={styles.label}>
              Message:
            </label>
            <textarea name="" id="message" cols="55" rows="10"></textarea>
          </div>
        </div>
        <div className={styles.button}>
          <Button
            backgroundColor="#ea5184"
            color="#fff"
            text="Hire Me"
            border="none"
          />
        </div>
      </div>
    </>
  );
};

export default ContactMenu;
