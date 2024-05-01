import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function page() {
  const session = cookies().get("session");

  if (!session) {
    redirect("/");
  }
  return <h1>Dasjboard</h1>;
}
