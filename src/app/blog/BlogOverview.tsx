"use client";

import { BlogPostListItem } from "../../components/blog/BlogPostListItem";

export default function BlogOverview() {
  return (
    <div className="p-4 w-screen flex flex-col justify-center items-center">
      <section className="w-3/5">
        <ul className="grid grid-cols-1 gap-8">
          <BlogPostListItem
            imageSource="https://picsum.photos/800/800"
            imageAltText=""
            date="28 feb 2024"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse…"
            title="Heading - linking to blogpost 1"
          />
          <BlogPostListItem
            imageSource="https://picsum.photos/800"
            imageAltText=""
            date="28 feb 2024"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse…"
            title="Heading - linking to blogpost 2"
          />
          <BlogPostListItem
            imageSource="https://picsum.photos/800/700"
            imageAltText=""
            date="28 feb 2024"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse…"
            title="Heading - linking to blogpost 3"
          />
        </ul>
      </section>
    </div>
  );
}
