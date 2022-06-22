import styles from "highlight.js/styles/github-dark-dimmed.css";
import { Outlet } from "@remix-run/react";
import { LinksFunction } from "@remix-run/node";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
};

export default function Blog() {
  return (
    <div className="flex justify-content">
      <div className="prose lg:prose-xl py-10">
        <Outlet></Outlet>
      </div>
    </div>
  );
}
