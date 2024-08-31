import { WeightForm } from "@/components/WeightForm";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center border bg-zinc-900 pt-20">
      <WeightForm />
    </div>
  );
}
