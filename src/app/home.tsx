"use client";

import { Socials } from "../components/Socials";
import { Background } from "../components/backgrounds/Background";
import { Spaceship } from "../components/backgrounds/Spaceship";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  function navigate(path: string) {
    return router.push(path);
  }

  return (
    <>
      <Background />
      <Spaceship handleOnClick={() => navigate("/discovery")} />
      <main>
        <section className="flex flex-col items-center justify-center text-center min-h-screen m-4">
          <h1 className="text-gray-200 text-4xl font-bold md:text-7xl">
            Hi, I am <span className="text-amber-600">Lisa Lootens</span>.
          </h1>
          <p className="text-gray-200 m-16 text-base md:text-xl">
            Passionate about weaving the magic of programming into powerful
            solutions. As an enthusiastic DevOps engineer, I'm not just coding;
            I orchestrate the future of technology, one line at a time - always
            learning, always evolving.
          </p>
          <Socials />
        </section>
      </main>
    </>
  );
}
