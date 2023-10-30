import type { NextPage } from "next";
import Head from "next/head";
import { Background } from "../components/background";
import { Socials } from "../components/socials";
import styled from "styled-components";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Lisa Lootens</title>
      </Head>
      <Background />
      <main>
        <Wrapper>
          <Title>
            Hi, I am <span>Lisa Lootens</span>.
          </Title>
          <Description>
            Learning to become a developer! I am currently focussing on Java.
            Recently started as a Software Engineer at Ordina.
          </Description>
          <Socials />
        </Wrapper>
      </main>
    </>
  );
};

export default Home;

const Title = styled.h1`
  color: white;
  font-size: 3rem;
  font-weight: bold;

  @media (min-width: 960px) {
    font-size: 4.5rem;
    margin: 1.5vh 5vw;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 100vh;

  span {
    color: rgb(255, 145, 0);
    font-weight: bold;
  }
`;

const Description = styled.p`
  color: lightgray;
  margin: 0.5vh 5vw 5vh;
  font-size: 1.125rem;
  max-width: 800px;

  @media (min-width: 960px) {
    font-size: 1.5rem;
    margin: 0.5vh 5vw 5vh;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

