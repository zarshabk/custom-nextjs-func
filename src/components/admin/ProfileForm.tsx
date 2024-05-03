import { changePassword } from "@/actions/action";
import FormButton from "../common/FormButton";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { cookies } from "next/headers";

export default async function ProfileForm() {
  const session = cookies().get("session")?.value;
  let user = null;
  if (session) {
    user = JSON.parse(session);
  }
  return (
    <form action={changePassword} className="flex gap-3 flex-col">
      <div className="">
        <img
          src={user?.image}
          className="rounded-full h-[100px] w-[100px] shadow-lg"
          alt=""
        />
      </div>
      <div className="flex flex-col gap-1">
        <Label>Username</Label>
        <Input type="text" name="username" value={user?.username} />
      </div>
      <div className="flex flex-col gap-1">
        <Label>Email</Label>
        <Input type="email" name="email" value={user?.email} />
      </div>
      <div className="flex flex-col gap-1">
        <Label>Password</Label>
        <Input type="password" name="password" />
      </div>
      <div className="mt-2">
        <FormButton type="submit">Update Profile</FormButton>
      </div>
    </form>
  );
}
