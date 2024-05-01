"use client";
import { Loader2 } from "lucide-react";
import React, { ButtonHTMLAttributes } from "react";
import { useFormStatus } from "react-dom";

export default function FormButton(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) {
  const { pending } = useFormStatus();
  return (
    <button
      {...props}
      disabled={pending}
      className="p-2 px-5 rounded-sm bg-blue-500 hover:bg-blue-700 text-white flex items-center gap-2"
    >
      {pending && <Loader2 size={20} className="animate-spin" />}
      {props.children}
    </button>
  );
}
