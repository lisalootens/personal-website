import { FC } from "react";
import assert from "assert";

interface NavigationBarProps {
  text: string[];
  link: string[];
}

export const NavigationBar: FC<NavigationBarProps> = ({ text, link }) => {
  assert.strictEqual(
    text.length,
    link.length,
    "Not all navigation items have a link.",
  );

  return (
    <nav className="w-1/3 mt-2 mb-8 text-white font-serif">
      <ul className="flex justify-evenly flex-row">
        {Array.from({ length: text.length }).map((_, index) => (
          <li key={index}>
            <a className="hover:underline" href={link[index]}>
              {text[index]}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
