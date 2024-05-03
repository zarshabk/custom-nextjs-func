"use client";
import { addImage } from "@/actions/action";
import FormButton from "./common/FormButton";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useFormState } from "react-dom";
import { useRef } from "react";
import toast from "react-hot-toast";

export default function ImgForm() {
  const [state, formAction] = useFormState(addImage, null);
  const ref = useRef<HTMLFormElement>(null);

  if (state && state?.succes === true) {
    ref.current?.reset();
    toast.success(state?.message);
  } else {
    toast.success(state?.message);
  }
  return (
    <form action={formAction} ref={ref}>
      <div className="flex flex-col gap-1">
        <Label>Profile pic</Label>
        <Input type="file" name="image" accept="image/*" />
      </div>
      <div className="mt-2">
        <FormButton type="submit">Add</FormButton>
      </div>
    </form>
  );
}
