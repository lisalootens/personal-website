import { Metadata } from "next";
import Discovery from "./discovery";

export const metadata: Metadata = {
  title: "TO SPACE!",
};

export default function Page() {
  return <Discovery />;
}
