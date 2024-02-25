import { Metadata } from "next";
import Discovery from "./discovery";

export const metadata: Metadata = {
  title: "Discovery",
};

export default function Page() {
  return <Discovery />;
}
