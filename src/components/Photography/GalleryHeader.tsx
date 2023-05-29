import styled from "styled-components";

export function PhotoGalleryHeader(title: string) {
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

  return (
    <>
      <Title>{title}</Title>
    </>
  );
}
