"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { links } from "../../public/constant";

export default function Links() {
  const path = usePathname();
  return (
    <div className="flex gap-2">
      {links?.map((link, i) => {
        return (
          <Link
            className={`p-2 px-3 ${
              path == link?.path
                ? "bg-gray-100 rounded-md"
                : "hover:bg-gray-100 rounded-md"
            }`}
            key={i + 1}
            href={link?.path}
          >
            {link?.name}
          </Link>
        );
      })}
    </div>
  );
}
