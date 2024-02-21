import { Metadata } from "next";
import Home from "./home";

export const metadata: Metadata = {
  title: "Lisa Lootens",
};

export default function Page() {
  return <Home />;
}
