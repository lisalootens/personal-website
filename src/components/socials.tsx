import React from "react";
import styles from "../components/socials.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faGithub, faInstagram, faLinkedin,} from "@fortawesome/free-brands-svg-icons";

export default function Socials(): JSX.Element {
    return (
        <div className={styles.socialsContainer}>
            <a href="https://linkedin.com/in/lisalootens" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} className={styles.socials}/>
            </a>
            <a href="https://github.com/lisalootens" target="_blank">
                <FontAwesomeIcon icon={faGithub} className={styles.socials}/>
            </a>
            <a href="https://instagram.com/lisalootens/" target="_blank">
                <FontAwesomeIcon icon={faInstagram} className={styles.socials}/>
            </a>
            <a href="https://facebook.com/lisa.lootens.5" target="_blank">
                <FontAwesomeIcon icon={faFacebook} className={styles.socials}/>
            </a>
        </div>
    );
}
