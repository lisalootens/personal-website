import type { NextPage } from "next";
import Head from "next/head";
import styles from "./index.module.css";
import { Background } from "../components/background";
import { Socials } from "../components/socials";

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
      <Background />
      <main>
        <section className={styles.container}>
          <h1 className={styles.title}>
            Hi, I am <span className={styles.span}>Lisa Lootens</span>.
          </h1>
          <p className={styles.description}>
            Learning to become a developer! I am currently focussing on Java.
            Recently started as a Software Engineer at Ordina.
          </p>
          <Socials />
        </section>
      </main>
    </>
  );
};

export default Home;
