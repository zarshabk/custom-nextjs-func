import Footer from "@/components/public/Footer";
import Header from "@/components/public/Header";
import React from "react";

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
