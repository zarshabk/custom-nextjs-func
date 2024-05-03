import PostForm from "@/components/admin/PostForm";

export default function page() {
  return (
    <div className="my-10">
      <div className="p-5 bg-white shadow">
        <div>
          <h2 className="text-2xl font-bold py-5">Publish Post</h2>
        </div>
        <PostForm />
      </div>
    </div>
  );
}
