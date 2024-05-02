import { Metadata } from "next";

export function generateMetadata(): Metadata {
  return {
    title: "contact",
  };
}

export default function page() {
  return <h1>Page</h1>;
}
