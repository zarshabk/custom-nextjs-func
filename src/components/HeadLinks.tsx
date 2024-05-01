import { cookies } from "next/headers";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
const session = cookies().get("session")?.value;
export default function HeadLinks() {
  const { email } = JSON.parse(session);
  return (
    <div className="flex gap-4 items-center">
      {session ? (
        <>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1IBSu3vaIzwrefUP5qqDTpZhHQzHlaychkW3_z0q1rg&s"
                height={60}
                width={60}
                className="rounded-full shadow-lg"
                alt=""
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </>
      ) : (
        <>
          <Link href={"/login"}>login</Link>
          <Link
            href={"/register"}
            className="p-2 px-5 border bg-blue-600 text-white hover:shadow-lg rounded-[30px]"
          >
            Get Started
          </Link>
        </>
      )}
    </div>
  );
}
