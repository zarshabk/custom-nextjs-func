import { getUsersPost } from "@/actions/post/postAction";
import FilterParam from "@/components/FilterParam";
import PostCard from "@/components/PostCard";
import { cookies } from "next/headers";
import Link from "next/link";

export default async function page({
  params,
  searchParams,
}: {
  params: { q: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const session = cookies().get("session")?.value;
  let user: any = "";
  if (session) {
    user = JSON.parse(session);
  }
  console.log("params ", params, "serch");

  const posts = await getUsersPost(searchParams.q || "all", user?.id);
  console.log("parmmm", searchParams.q);
  // const setParams = (value: string) => {
  //   new URLSearchParams({ q: value }).toString();
  // };
  return (
    <div className="my-10">
      <div className="p-5 bg-white shadow">
        <div className="flex gap-2 p-2 items-center border-b-[1px] border-gray-200">
          <Link
            href={"/dashboard?q=all"}
            className={`p-2 px-3 ${
              searchParams?.q === "all" || searchParams === undefined
                ? "bg-green-500 text-white"
                : "hover:bg-gray-200 "
            } rounded-sm`}
          >
            All Posts
          </Link>
          <Link
            href={"/dashboard?q=published"}
            className={`p-2 px-3 ${
              searchParams?.q === "published"
                ? "bg-green-500 text-white"
                : "hover:bg-gray-200 "
            } rounded-sm`}
          >
            Published
          </Link>
          <Link
            href={"/dashboard?q=pending"}
            className={`p-2 px-3 ${
              searchParams?.q === "pending"
                ? "bg-green-500 text-white"
                : "hover:bg-gray-200 "
            } rounded-sm`}
          >
            Pending
          </Link>
        </div>

        <div className="my-5 grid grid-cols-1 gap-3 lg:grid-cols-4 md:grid-cols-3">
          {posts &&
            posts.map((post: any, index: number) => {
              return <PostCard key={index} post={post} />;
            })}
          {posts.length < 1 && (
            <div className="text-center py-10">
              <h2 className="text-xl">No Post Found</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
