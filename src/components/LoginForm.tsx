"use client";
import { CreateUser, loginUser } from "@/actions/auth/authAction";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import FormButton from "./common/FormButton";
import { useRouter } from "next/navigation";
import useLogin from "@/hooks/useLogin";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import toast from "react-hot-toast";

export default function LoginForm() {
  const [user, setUser] = useState({ username: "", email: "", password: "" });
  const handleChange = (e: any) => {
    return setUser({ ...user, [e.target.name]: e.target.value });
  };

  const router = useRouter();

  const { loading, loadData } = useLogin("/api/auth/login");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const resp = await loadData(user);
      console.log(resp);
      if (resp) {
        router.push("/profile");
        toast.success(resp?.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <Label>Email</Label>
        <Input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="email"
        />
      </div>
      <div className="flex flex-col gap-1">
        <Label>Password</Label>
        <Input
          type="password"
          name="password"
          placeholder="password"
          value={user.password}
          onChange={handleChange}
        />
      </div>
      <div className="mt-2">
        <button
          type="submit"
          className="p-2 px-3 text-white bg-blue-600 hover:bg-blue-800 flex gap-1 items-center"
        >
          {loading && <Loader2 size={16} className="animate-spin" />}
          Submit
        </button>
      </div>
    </form>
  );
}
