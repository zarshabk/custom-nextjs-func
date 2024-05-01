import { CreateUser, loginUser } from "@/actions/auth/authAction";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import FormButton from "./common/FormButton";
import { useFormState } from "react-dom";

export default function LoginForm() {
  return (
    <form action={loginUser} className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <Label>Email</Label>
        <Input type="email" name="email" placeholder="email" />
      </div>
      <div className="flex flex-col gap-1">
        <Label>Password</Label>
        <Input type="password" name="password" placeholder="password" />
      </div>
      <div className="mt-2">
        <FormButton type="submit" className="bg-blue-500">
          Submit
        </FormButton>
      </div>
    </form>
  );
}
