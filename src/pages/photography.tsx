import { createGlobalStyle } from "styled-components";
import PhotographyMenu from "../components/Photography/PhotographyMenu";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

const Photography = () => {
  return (
    <>
      <GlobalStyle />
      <PhotographyMenu />
    </>
  );
};

export default Photography;
