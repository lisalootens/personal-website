"use client";

import { CirclesBackground } from "../../components/backgrounds/CirclesBackground";
import { RectangleButton } from "../../components/buttons/RectangleButton";
import { useRouter } from "next/navigation";

export default function Discovery() {
  const router = useRouter();

  const navigate = () => {
    return router.back();
  };

  return (
    <>
      <CirclesBackground />
      <div className="w-screen h-screen p-20 flex flex-col justify-evenly items-center text-gray-200 text-center">
        <section>
          <h1 className="text-2xl mb-5"> Wooo, you found a secret page! </h1>
          <p className="text-s mb-20">
            Please note that this page is still under construction: stay tuned.
          </p>
        </section>
        <RectangleButton handleOnClick={() => navigate()} />
      </div>
    </>
  );
}
