import { changePassword } from "@/actions/action";
import FormButton from "../common/FormButton";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function ChangePassword() {
  return (
    <form action={changePassword} className="flex gap-3 flex-col">
      <div className="flex flex-col gap-1">
        <Label>Old Password</Label>
        <Input type="password" name="password" />
      </div>
      <div className="flex flex-col gap-1">
        <Label>New Password</Label>
        <Input type="password" name="newPassword" />
      </div>
      <div className="flex flex-col gap-1">
        <Label>Confirm Password</Label>
        <Input type="password" name="cPassword" />
      </div>
      <div className="mt-2">
        <FormButton type="submit">Change Password</FormButton>
      </div>
    </form>
  );
}
