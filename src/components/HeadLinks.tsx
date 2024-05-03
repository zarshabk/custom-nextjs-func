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
import User from "@/models/user";
import { CurrentUser } from "@/actions/action";

export default async function HeadLinks() {
  const session = cookies().get("session")?.value;
  const user = session ? JSON.parse(session) : null;
  const curUser = await CurrentUser(user?.id);

  console.log("currnent user", curUser);
  return (
    <div className="flex gap-4 items-center">
      {session ? (
        <>
          <DropdownMenu>
            <DropdownMenuTrigger>
              {curUser ? (
                <img
                  src={curUser?.image}
                  className="rounded-full h-[60px] w-[60px] object-cover shadow-lg"
                  alt="kdfklf"
                />
              ) : (
                <img
                  src={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1IBSu3vaIzwrefUP5qqDTpZhHQzHlaychkW3_z0q1rg&s"
                  }
                  height={60}
                  width={60}
                  className="rounded-full shadow-lg"
                  alt=""
                />
              )}
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
                <Link href={"/profile"}>Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <Link href={"/post"}>Create Post</Link>
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
