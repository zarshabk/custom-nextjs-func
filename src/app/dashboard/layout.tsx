import React from "react";

export default function layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <section>
      dashbaord
      <main>{children}</main>
      dashboard footer
    </section>
  );
}
