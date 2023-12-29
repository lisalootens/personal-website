import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export function Socials() {
  return (
    <section className="flex items-center">
      <a href="https://linkedin.com/in/lisalootens" target="_blank">
        <FontAwesomeIcon
          className="w-8 h-auto m-[4vw] text-white hover:cursor-pointer hover:opacity-75"
          icon={faLinkedin}
          title="LinkedIn icon"
        />
      </a>
      <a href="https://github.com/lisalootens" target="_blank">
        <FontAwesomeIcon
          className="w-8 h-auto m-[4vw] text-white hover:cursor-pointer hover:opacity-75"
          icon={faGithub}
          title="GitHub icon"
        />
      </a>
      <a href="https://instagram.com/lisalootens/" target="_blank">
        <FontAwesomeIcon
          className="w-8 h-auto m-[4vw] text-white hover:cursor-pointer hover:opacity-75"
          icon={faInstagram}
          title="Instagram icon"
        />
      </a>
      <a href="mailto:lisa_lootens@live.nl">
        <FontAwesomeIcon
          className="w-8 h-auto m-[4vw] text-white hover:cursor-pointer hover:opacity-75"
          icon={faEnvelope}
          title="Email icon"
        />
      </a>
    </section>
  );
}
