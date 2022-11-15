import React from "react";
import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

export default function Socials() {
  return (
    <div className={styles.socialsDiv}>
      <a href="https://linkedin.com/in/lisa-lootens-94721b129/" target="_blank">
        <FontAwesomeIcon icon={faLinkedin} className={styles.socials} />
      </a>
      <a href="https://github.com/lisalootens" target="_blank">
        <FontAwesomeIcon icon={faGithub} className={styles.socials} />
      </a>
      <a href="https://instagram.com/lisalootens/" target="_blank">
        <FontAwesomeIcon icon={faInstagram} className={styles.socials} />
      </a>
      <a href="https://facebook.com/lisa.lootens.5" target="_blank">
        <FontAwesomeIcon icon={faFacebook} className={styles.socials} />
      </a>
    </div>
  );
}
