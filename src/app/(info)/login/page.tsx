import LoginForm from "@/components/LoginForm";
import { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
export function generateMetadata(): Metadata {
  return {
    title: "login here",
  };
}

export default function page() {
  const session = cookies().get("session");
  if (!session) {
    return (
      <main className="w-full min-h-[80vh] flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-2">
          <div>
            <LoginForm />
          </div>
          <div>
            <img
              src="https://cdni.iconscout.com/illustration/free/thumb/free-about-us-2061897-1740019.png"
              height={250}
              width={"100%"}
              alt=""
            />
          </div>
        </div>
      </main>
    );
  } else {
    redirect("/");
  }
}
