import { CardForm } from "@/components/CardForm";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center border">
      <CardForm />
    </div>
  );
}
