import { Metadata } from "next";

export function generateMetadata(): Metadata {
  return {
    title: "home",
  };
}

export default function Home() {
  return <h1>Home page</h1>;
}
