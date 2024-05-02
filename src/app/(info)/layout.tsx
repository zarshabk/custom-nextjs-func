import Footer from "@/components/public/Footer";
import Header from "@/components/public/Header";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: {
    default: "IBlogs Tech",
    template: `%s | IBlogs InfoTech`,
  },
  description: "this is informative page",
};
export default function layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <section className=" min-h-screen w-full">
        <Header />
        <main className="w-full  lg:max-w-5xl m-auto">{children}</main>
        <Footer />
      </section>
    </>
  );
}
