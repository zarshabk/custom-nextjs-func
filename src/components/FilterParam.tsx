"use client";
export default function FilterParam({ setParams }) {
  return (
    <>
      <button
        onClick={() => setParams("all")}
        className="p-2 px-3 hover:bg-gray-200 bg-green-500 text-white rounded-sm"
      >
        All Posts
      </button>
      <button className="p-2 px-3 hover:bg-gray-200 border-b-[2px] border-green-500 rounded-sm">
        Published
      </button>
      <button className="p-2 px-3 hover:bg-gray-200 rounded-sm">Pending</button>
    </>
  );
}
