import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Socials from "../components/socials";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Lisa Lootens</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/globals.css" />
      </Head>
      <main className={styles.main}>
        <video
          src="videos/main_video.mp4"
          autoPlay
          loop
          muted
          className={styles.backgroundVideo}
        />
        <h1 className={styles.title}>
          Hi, I am <span className={styles.span}>Lisa Lootens</span>.
        </h1>
        <p className={styles.description}>
          Learning to become a developer! I am currently focussing on Java and
          React. Soon starting as a Software Engineer at Ordina.
        </p>
        <Socials />
      </main>
    </>
  );
};

export default Home;
