"use client";

import { Socials } from "../components/Socials";
import { Background } from "../components/backgrounds/Background";
import { Spaceship } from "../components/backgrounds/Spaceship";
import { useRouter } from "next/navigation";
import { ExclusiveButton } from "../components/ExclusiveButton";

export default function Home() {
  const router = useRouter();

  function navigate(path: string) {
    return router.push(path);
  }

  return (
    <>
      <Background />
      <Spaceship handleOnClick={() => navigate("/blog")} />
      <main>
        <ExclusiveButton />
        <section className="flex flex-col items-center justify-center text-center min-h-screen m-4">
          <h1 className="text-gray-200 text-4xl font-bold md:text-7xl">
            Hi, I am <span className="text-amber-600">Lisa Lootens</span>.
          </h1>
          <p className="text-gray-200 m-16 text-base md:text-xl">
            A software engineer with a passion for building digital solutions.
            Welcome to my website. It's a place. It exists. Enjoy the
            nothingness. <br />
            The website changes frequently to experiment with different styles
            and features.
          </p>
          <Socials />
        </section>
      </main>
    </>
  );
}
