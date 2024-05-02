import { Metadata } from "next";

export function generateMetadata(): Metadata {
  return {
    title: "about",
  };
}

export default function page() {
  return <h1>Page</h1>;
}
