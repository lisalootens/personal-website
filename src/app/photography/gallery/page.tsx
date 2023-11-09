import { Metadata } from "next";
import Gallery from "./gallery";

export const metadata: Metadata = {
  title: "Gallery",
};

export default function Page() {
  return <Gallery />;
}
