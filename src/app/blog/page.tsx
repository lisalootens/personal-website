import { Metadata } from "next";
import BlogOverview from "./BlogOverview";

export const metadata: Metadata = {
  title: "Blogniverse",
};

export default function Page() {
  return <BlogOverview />;
}
