import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export function Socials(): JSX.Element {
  return (
    <section className={"flex items-center"}>
      <a href="https://linkedin.com/in/lisalootens" target="_blank">
        <FontAwesomeIcon
          className={
            "w-8 h-auto m-[4vw] text-white hover:cursor-pointer hover:opacity-75"
          }
          icon={faLinkedin}
          title="LinkedIn icon"
        />
      </a>
      <a href="https://github.com/lisalootens" target="_blank">
        <FontAwesomeIcon
          className={
            "w-8 h-auto m-[4vw] text-white hover:cursor-pointer hover:opacity-75"
          }
          icon={faGithub}
          title="GitHub icon"
        />
      </a>
      <a href="https://instagram.com/lisalootens/" target="_blank">
        <FontAwesomeIcon
          className={
            "w-8 h-auto m-[4vw] text-white hover:cursor-pointer hover:opacity-75"
          }
          icon={faInstagram}
          title="Instagram icon"
        />
      </a>
      <a href="https://facebook.com/lisa.lootens.5" target="_blank">
        <FontAwesomeIcon
          className={
            "w-8 h-auto m-[4vw] text-white hover:cursor-pointer hover:opacity-75"
          }
          icon={faFacebook}
          title="Facebook icon"
        />
      </a>
    </section>
  );
}


