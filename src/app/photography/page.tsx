import { Metadata } from "next";
import PhotographyPage from "./photography";

export const metadata: Metadata = {
  title: "Photography",
};

export default function Page() {
  return <PhotographyPage />;
}
