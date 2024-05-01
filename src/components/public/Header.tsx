import Link from "next/link";
import { links } from "../../../public/constant";

import HeadLinks from "../HeadLinks";
import Links from "../Links";

export default function Header() {
  return (
    <header className="">
      <div className="max-w-5xl m-auto h-20 flex items-center justify-between">
        <Link
          href="/"
          className="border-[3px] border-green-600 p-2 px-5 rounded-sm text-green-600"
        >
          Blogs
        </Link>
        <Links />
        <HeadLinks />
      </div>
    </header>
  );
}
