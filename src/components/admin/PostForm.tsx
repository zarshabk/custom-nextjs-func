"use client";
import { useState } from "react";
import FormButton from "../common/FormButton";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import axios from "axios";
import { Loader2 } from "lucide-react";
import toast from "react-hot-toast";

export default function PostForm() {
  const cat = ["food", "sports", "programming", "health & fitness"];
  const [post, setPost] = useState({ title: "", cat: "", description: "" });
  const [img, setImg] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const handleChange = (e: any) => {
    return setPost({ ...post, [e.target.name]: e.target.value });
  };
  const handleFileChange = (e: any) => {
    const file = e.target.files?.[0];
    setImg(file || null);
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("title", post.title);
      formData.append("cat", post.cat);
      formData.append("description", post.description);
      if (img) {
        formData.append("image", img);
      }
      const resp = await axios.post("/api/post", formData);
      setLoading(false);
      toast.success(resp?.data?.message);
      setPost({ title: "", cat: "", description: "" });
      return resp?.data;
    } catch (error: any) {
      setLoading(false);
      // e.reset();
      console.log("ERROR", error.response);
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap:2 md:grid-cols-2 gap-3">
        <div className="flex flex-col gap-1">
          <Label>Title</Label>
          <Input
            type="text"
            name="title"
            value={post?.title}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-1">
          <Label>Category</Label>
          <select
            value={post?.cat}
            onChange={handleChange}
            className="p-2 focus:border-[1px] border-[1px] border-gray-200 rounded-sm"
            name="cat"
          >
            {cat.map((item, i) => {
              return (
                <option key={i} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div>
        <div className="flex flex-col mt-3 w-full gap-1">
          <Label>Image</Label>
          <Input
            type="file"
            name="img"
            onChange={handleFileChange}
            accept="image/*"
          />
        </div>
        <div className="flex flex-col mt-3 w-full gap-1">
          <Label>Description</Label>
          <textarea
            name="description"
            value={post?.description}
            onChange={handleChange}
            className="h-24 border-[1px] border-gray-200 outline:border-gray-500 rounded-sm"
          ></textarea>
        </div>
      </div>
      <div className="mt-3">
        <button className="p-2 px-5 rounded-sm bg-blue-500 hover:bg-blue-700 text-white flex items-center gap-2">
          {loading && <Loader2 size={20} className="animate-spin" />}
          Publish
        </button>
      </div>
    </form>
  );
}
