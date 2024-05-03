import ChangePassword from "@/components/admin/ChangePassword";
import ProfileForm from "@/components/admin/ProfileForm";
import ImgForm from "@/components/ImgForm";
import { cookies } from "next/headers";

export default function page() {
  const session = cookies().get("session")?.value;
  let user = null;
  if (session) {
    user = JSON.parse(session);
  }

  return (
    <div className="my-10">
      <div className="p-5 bg-white shadow h-fit flex flex-col mb-5">
        <h2 className="text-2xl font-bold">Welcome {user?.username}</h2>
        <p className="text-md">{user?.email}</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
        <div className="shadow p-5 bg-white h-fit">
          <h1 className="text-xl font-normal">Add Profile Picture</h1>
          <p className="text-sm text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, hic.
            Quos cupiditate consequatur voluptatem atque.
          </p>
        </div>
        <div className="shadow p-5 bg-white">
          <ImgForm />
        </div>

        <div className="shadow p-5 bg-white shrink-0 h-fit">
          <h1 className="text-xl font-normal">Update and Change Password</h1>
          <p className="text-sm text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, hic.
            Quos cupiditate consequatur voluptatem atque.
          </p>
        </div>
        <div className="shadow p-5 bg-white">
          <ChangePassword />
        </div>

        <div className="shadow p-5 bg-white shrink-0 h-fit">
          <h1 className="text-xl font-normal">Your Profile</h1>
          <p className="text-sm text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, hic.
            Quos cupiditate consequatur voluptatem atque.
          </p>
        </div>
        <div className="shadow p-5 bg-white">
          <ProfileForm />
        </div>
      </div>
    </div>
  );
}
