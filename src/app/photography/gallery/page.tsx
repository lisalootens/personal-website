import { Metadata } from "next";
import Gallery from "./gallery";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Gallery",
};

export default function Page() {
  return (
    <Suspense>
      <Gallery />
    </Suspense>
  );
}
