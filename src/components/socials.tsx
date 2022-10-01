import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

export default function Socials() {
  return (
    <div>
      <h1>Socials</h1>
      <div>
        <a href="https://facebook.com">
          <FontAwesomeIcon icon={faFacebook}/>
        </a>
      </div>
    </div>
  );
}
