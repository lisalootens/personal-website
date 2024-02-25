"use client";

import { CirclesBackground } from "../../components/backgrounds/CirclesBackground";
import { RectangleButton } from "../../components/buttons/RectangleButton";
import { useRouter } from "next/navigation";

export default function Discovery() {
  const router = useRouter();

  function navigate(path: string) {
    return router.push(path);
  }

  return (
    <>
      <CirclesBackground />
      <div className="w-screen h-screen p-20 flex flex-col justify-evenly items-center text-gray-200 text-center">
        <section>
          <h1 className="text-2xl mb-5"> Wooo, you found a secret page! </h1>
        </section>
        <RectangleButton handleOnClick={() => navigate("./blog")} />
      </div>
    </>
  );
}
