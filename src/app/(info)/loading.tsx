import { Loader2 } from "lucide-react";

export default function loading() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <Loader2 size={40} className="animate-spin" />
    </div>
  );
}
