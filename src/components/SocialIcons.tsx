import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";

const SocialContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SocialIcon = styled.a`
  width: 2rem;
  margin: 3vw;
  color: white;
  border: none;

  :hover {
    opacity: 0.7;
  }
`;

export function SocialIcons(): JSX.Element {
  return (
    <SocialContainer>
      <SocialIcon href="https://linkedin.com/in/lisalootens" target="_blank">
        <FontAwesomeIcon icon={faLinkedin} />
      </SocialIcon>
      <SocialIcon href="https://github.com/lisalootens" target="_blank">
        <FontAwesomeIcon icon={faGithub} />
      </SocialIcon>
      <SocialIcon href="https://instagram.com/lisalootens/" target="_blank">
        <FontAwesomeIcon icon={faInstagram} />
      </SocialIcon>
      <SocialIcon href="https://facebook.com/lisa.lootens.5" target="_blank">
        <FontAwesomeIcon icon={faFacebook} />
      </SocialIcon>
    </SocialContainer>
  );
}
