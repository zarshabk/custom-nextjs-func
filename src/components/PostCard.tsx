import { Heart } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

export default async function PostCard({ post }) {
  return (
    <Suspense fallback={<h1 className="text-xl">Loading...</h1>}>
      <div className="w-full h-[320px] shadow relative hover:shadow-xl">
        <div className="w-full">
          <img
            src={
              post?.image
                ? post?.image
                : "https://www.timeshighereducation.com/student/sites/default/files/styles/default/public/different_sports.jpg?itok=CW5zK9vp"
            }
            className="h-[150px] w-full "
            alt=""
          />
        </div>
        <div className="p-2">
          <h3 className="text-[14px] font-[500] leading-tight">
            how toadd new custom dropdown menue at wenbpage
          </h3>
          <p className="text-sm text-gray-500 line-clamp-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
            vel voluptatem, aut dolor enim similique debitis nisi nam dolores
            modi soluta quaerat accusamus, ex aperiam commodi rem dignissimos
            ipsum corporis ducimus alias recusandae delectus? Eveniet
            perferendis repellat excepturi laborum minima!
          </p>
        </div>
        <div className="p-2 absolute bottom-0 flex justify-between items-center">
          <Link
            href={"/"}
            className="p-1 px-2 rounded-sm bg-green-200 text-green-600 text-sm"
          >
            health and fitness
          </Link>
          <div className="flex items-center bg-gray-200 gap-1 py-1 px-2 ml-1 rounded-sm">
            <Heart size={16} className="text-red-600" />
            <span className="text-[14px]">1k+</span>
          </div>
        </div>
      </div>
    </Suspense>
  );
}
