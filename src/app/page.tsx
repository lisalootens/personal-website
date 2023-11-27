import { CirclesBackground } from "../components/backgrounds/CirclesBackground";
import { Socials } from "../components/Socials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lisa Lootens",
};

export default function Page() {
  return (
    <>
      <CirclesBackground />
      <main>
        <section
          className={
            "flex flex-col items-center justify-center text-center min-h-screen m-4"
          }
        >
          <h1 className={"text-gray-200 text-4xl font-bold md:text-7xl"}>
            Hi, I am <span className={"text-amber-600"}>Lisa Lootens</span>.
          </h1>
          <p className={"text-gray-200 m-4 text-base md:text-xl"}>
            Learning to become a developer! I am currently focussing on Java.
            Recently started as a Software Engineer at Ordina.
          </p>
          <Socials />
        </section>
      </main>
    </>
  );
}
