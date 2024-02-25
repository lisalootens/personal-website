import { FC } from "react";

interface BlogPostListItemProps {
  imageSource: string;
  imageAltText: string;
  title: string;
  date: string;
  description: string;
}

export const BlogPostListItem: FC<BlogPostListItemProps> = ({
  imageSource,
  imageAltText,
  title,
  date,
  description,
}) => {
  return (
    <li className="p-4 grid grid-cols-1 items-start gap-6 md:grid-cols-2 md:gap-8">
      <a className="h-96 md:h-80" href="">
        <img
          className="w-full h-96 rounded-md object-cover md:h-full"
          alt={imageAltText}
          src={imageSource}
        />
      </a>
      <div>
        <h2 className="text-white font-sans font-semibold tracking-tighter text-3xl lg:text-4xl">
          {title}
        </h2>
        <p className="text-white font-serif italic tracking-tighter mt-2 mb-5">
          {date}
        </p>
        <p className="text-white font-serif leading-relaxed md:text-lg md:leading-relaxed">
          {description}
        </p>
      </div>
    </li>
  );
};
