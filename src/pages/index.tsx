import type {NextPage} from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Socials from "../components/socials";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Lisa Lootens</title>
        <link rel="stylesheet" href="/globals.css" />
      </Head>
      <main className={styles.main}>
          <section className={styles.circles}>
              <ul className={styles.circles}>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
              </ul>
          </section>
          <section>
            <h1 className={styles.title}>
              Hi, I am <span className={styles.span}>Lisa Lootens</span>.
            </h1>
            <p className={styles.description}>
              Learning to become a developer! I am currently focussing on Java.
              Recently started as a Software Engineer at Ordina.
            </p>
          </section>
        <Socials />
      </main>
    </>
  );
};

export default Home;
