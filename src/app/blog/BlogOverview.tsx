"use client";

import { BlogPostListItem } from "../../components/blog/BlogPostListItem";
import { NavigationBar } from "../../components/NavigationBar";
import { descriptionLoremIpsum } from "../../../public/texts/descriptions";

export default function BlogOverview() {
  return (
    <div className="p-4 w-screen flex flex-col justify-center items-center">
      <NavigationBar
        link={["/", "/", "/"]}
        text={["Articles", "About", "Back"]}
      />
      <section className="w-3/5">
        <ul className="grid grid-cols-1 gap-8">
          <BlogPostListItem
            imageSource="https://picsum.photos/800/800"
            imageAltText=""
            date="28 feb 2024"
            description={descriptionLoremIpsum}
            title="Heading - linking to blogpost 1"
          />
          <BlogPostListItem
            imageSource="https://picsum.photos/800"
            imageAltText=""
            date="28 feb 2024"
            description={descriptionLoremIpsum}
            title="Heading - linking to blogpost 2"
          />
          <BlogPostListItem
            imageSource="https://picsum.photos/800/700"
            imageAltText=""
            date="28 feb 2024"
            description={descriptionLoremIpsum}
            title="Heading - linking to blogpost 3"
          />
        </ul>
      </section>
    </div>
  );
}
