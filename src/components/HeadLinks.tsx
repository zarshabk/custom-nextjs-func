import { cookies } from "next/headers";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Logout } from "@/actions/auth/authAction";

export default function HeadLinks() {
  const session = cookies().get("session")?.value;
  const user = session ? JSON.parse(session) : null;
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
              <DropdownMenuLabel>
                <span>
                  {user?.username}
                  <br />
                  <span className="text-sm text-gray-500">{user?.email}</span>
                </span>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer">
                <Link href={"/dashboard"}>Dashboard</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <form action={Logout}>
                  <button type="submit">Logout</button>
                </form>
              </DropdownMenuItem>
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
