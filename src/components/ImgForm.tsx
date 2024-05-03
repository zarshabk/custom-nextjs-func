import { addImage } from "@/actions/action";
import FormButton from "./common/FormButton";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export default function ImgForm() {
  return (
    <form action={addImage} method="post">
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
