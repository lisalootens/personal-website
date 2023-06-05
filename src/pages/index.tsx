import type { NextPage } from "next";
import Head from "next/head";
import { CirclesBackground } from "../components/CirclesBackground";
import { SocialIcons } from "../components/SocialIcons";
import styled from "styled-components";

const PageContent = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 100vh;

  h1 {
    color: white;
    font-size: 3rem;
    font-weight: bold;
  }

  span {
    color: rgb(255, 145, 0);
    font-weight: bold;
  }

  .description {
    color: lightgray;
    margin: 0.5vh 5vw 5vh;
    font-size: 1.125rem;
    max-width: 800px;
  }

  @media (min-width: 960px) {
    h1 {
      font-size: 5rem;
      margin: 1.5vh 5vw;
    }

    .description {
      font-size: 1.5rem;
      margin: 0.5vh 5vw 5vh;
    }
  }
`;

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Lisa Lootens</title>
        <link rel="stylesheet" href="/globals.css" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <CirclesBackground />
      <main>
        <PageContent>
          <h1>
            Hi, I am <span>Lisa Lootens</span>.
          </h1>
          <p className="description">
            Learning to become a developer! I am currently focussing on Java.
            Recently started as a Software Engineer at Ordina.
          </p>
          <SocialIcons />
        </PageContent>
      </main>
    </>
  );
};

export default Home;
