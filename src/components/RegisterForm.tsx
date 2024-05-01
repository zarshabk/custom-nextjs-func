import { CreateUser } from "@/actions/auth/authAction";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import FormButton from "./common/FormButton";
import { useFormState } from "react-dom";

export default function RegisterForm() {
  //   const [state, action] = useFormState(CreateUser, {
  //     message: "",
  //   });

  //   if (state?.message) {
  //     alert(state?.message);
  //   }
  return (
    <form action={CreateUser} className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <Label>Username</Label>
        <Input type="text" name="username" placeholder="username" />
      </div>
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
