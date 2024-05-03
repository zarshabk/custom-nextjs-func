"use client";
import { changePassword } from "@/actions/action";
import FormButton from "../common/FormButton";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useFormState } from "react-dom";
import toast from "react-hot-toast";
import { useRef } from "react";

export default function ChangePassword() {
  const [state, FormAction] = useFormState(changePassword, null);
  const ref = useRef<HTMLFormElement>(null);
  if (state && state.success === true) {
    toast.success(state?.message);
    ref.current?.reset();
  } else {
    toast.error(state?.message);
  }
  return (
    <form action={FormAction} ref={ref} className="flex gap-3 flex-col">
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
