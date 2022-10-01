import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";


const Home: NextPage = () => {
  return (
    <div id="app">
      <Head>
        <title>NEW</title>
        <meta />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div>
          <video src="/videos/main_video.mp4" autoPlay loop muted />
          <div>
            <h1 className={styles.title}>Lisa Lootens</h1>
            <p className={styles.description}>Learning to be a developer!</p>
            <div>
              
            </div>
          </div>
        </div>
        <div className={styles.container}>
          <h1>I am the header of the container.</h1>
          <p>This is still in a container.</p>
        </div>

        <div className={styles.grid}>
          <Link href="/posts/about">
            <a>
              <div className={styles.card}>
                <h1 className="title">About</h1>
                <p>Description</p>
              </div>
            </a>
          </Link>

          {/* TODO - create pages or turn into one page? */}
          <Link href="/">
            <a>
              <div className={styles.card}>
                <h2>Photos</h2>
                <p>Description</p>
              </div>
            </a>
          </Link>
        </div>

        <div className={styles.grid}>
          <Link href="/">
            <a>
              <div className={styles.card}>
                <h2>Projects</h2>
                <p>Description</p>
              </div>
            </a>
          </Link>

          <Link href="/">
            <a>
              <div className={styles.card}>
                <h2>GitHub</h2>
                <p>Description</p>
              </div>
            </a>
          </Link>
        </div>
        <div className={styles.container}>
          <h1>I am a new container.</h1>
          <p>Wooo!</p>
        </div>
      </main>

      <footer className={styles.footer}>Came up with a cool footer yet?</footer>
    </div>
  );
};

export default Home;
