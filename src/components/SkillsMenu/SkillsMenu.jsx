import React from "react";

import styles from "./SkillsMenu.module.scss";

import Skill from "../Skill/Skill";

import html from "../../images/317755_badge_html_html5_achievement_award_icon.svg";
import css from "../../images/317756_badge_css_css3_achievement_award_icon.svg"
import js from "../../images/652581_code_command_develop_javascript_language_icon.svg"
import php from "../../images/1012812_code_development_logo_php_icon.svg"
import jquery from "../../images/3069646_circle_jquery_programming_round icon_icon.svg"
import aws from "../../images/259293_non_service_aws_specific_copy_icon.svg"
import python from "../../images/4375050_logo_python_icon.svg"
import node from "../../images/4375017_js_logo_node_icon.svg"
import flutter from "../../images/icons8-flutter.svg"
import react from "../../images/1174949_js_react js_logo_react_react native_icon.svg"


const SkillsMenu = () => {
    return (
        <>
        <div className={styles.skills}>
            <div className={styles.heading}>
                <h4>MY <span>SKILLS</span></h4>
            </div>
            <div className={styles.skill}>
                <Skill icon={html} name="HTML"/>
                <Skill icon={css} name="CSS"/>
                <Skill icon={js} name="JavaScript"/>
                <Skill icon={react} name="React JS"/>
                <Skill icon={php} name="PHP"/>
                <Skill icon={node} name="NodeJS"/>
                <Skill icon={jquery} name="JQuery"/>
                <Skill icon={python} name="Python"/>
                <Skill icon={aws} name="AWS"/>
                <Skill icon={flutter} name="Flutter"/>
            </div>
        </div>
        </>
    )
}

export default SkillsMenu;