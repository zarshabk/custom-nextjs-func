import Link from "next/link";
import { links } from "../../../public/constant";

import HeadLinks from "../HeadLinks";
import Links from "../Links";

export default function Header() {
  return (
    <header className="">
      <div className="max-w-5xl m-auto h-20 flex items-center justify-between bg-white shadow px-2">
        <Link href="/" className="p-2 px-5 text-2xl font-bold">
          Blogs
        </Link>
        <Links />
        <HeadLinks />
      </div>
    </header>
  );
}
