import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";

export function Socials(): JSX.Element {
  return (
    <Wrapper>
      <SocialIcon href="https://linkedin.com/in/lisalootens" target="_blank">
        <FontAwesomeIcon icon={faLinkedin} title="LinkedIn icon" />
      </SocialIcon>
      <SocialIcon href="https://github.com/lisalootens" target="_blank">
        <FontAwesomeIcon icon={faGithub} title="GitHub icon" />
      </SocialIcon>
      <SocialIcon href="https://instagram.com/lisalootens/" target="_blank">
        <FontAwesomeIcon icon={faInstagram} title="Instagram icon" />
      </SocialIcon>
      <SocialIcon href="https://facebook.com/lisa.lootens.5" target="_blank">
        <FontAwesomeIcon icon={faFacebook} title="Facebook icon" />
      </SocialIcon>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  align-items: center;
`;

const SocialIcon = styled.a`
  // FontAwesome renders icon as svg
  svg {
    width: 2rem;
    height: auto;
    margin: 3vw;
    color: white;
    border: none;
  }

  :hover {
    opacity: 0.7;
  }
`;

