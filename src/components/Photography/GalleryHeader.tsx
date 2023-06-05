import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Title = styled.h1`
  background-color: white;
  color: #3d3d3d;
  font-size: 5vw;
  text-align: center;
  font-family: "Roboto", sans-serif;
  letter-spacing: 0.5rem;
  border-bottom: 1.5px solid lightgrey;
  padding: 1rem 0;
  margin: 0 1rem;
  position: sticky;
  top: 0;
`;

const NavigateButton = styled.a`
  font-family: "Roboto", sans-serif;
  text-decoration: none;
  font-size: 0.8rem;

  :visited {
    color: inherit;
  }

  :hover {
    opacity: 0.7;
  }

  svg {
    margin-left: 1rem;
    margin-right: 0.5em;

    :hover {
      opacity: 0.7;
    }
  }
`;

export function PhotoGalleryHeader(title: string) {
  return (
    <>
      <NavigateButton href="/photography">
        <FontAwesomeIcon icon={faArrowLeft} />
        Menu
      </NavigateButton>
      <Title>{title}</Title>
    </>
  );
}
