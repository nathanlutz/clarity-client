import { auth } from "@clerk/nextjs";
import Image from "next/image";
import { redirect } from "next/navigation";

export default function Home() {
  const { userId } = auth();
  console.log(userId);
  return (
    <main className="">
      <h1>clarity markets</h1>
    </main>
  );
}
