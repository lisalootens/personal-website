import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Socials from "../components/socials";

/* TODO - fix description overlap */

const Home: NextPage = () => {
  return (
    <div id="app">
      <Head>
        <title>Lisa Lootens</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div>
          <video
            src="videos/main_video.mp4"
            autoPlay
            loop
            muted
            className={styles.backgroundVideo}
          />
          <div>
            <h1 className={styles.title}>
              Hi, I am <span className={styles.span}>Lisa Lootens</span>.
            </h1>
            <p className={styles.description}>
              Learning to become a developer!
            </p>
            <div>
              <Socials></Socials>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
