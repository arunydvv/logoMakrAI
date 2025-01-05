import { Button } from "@/components/ui/button";
import Image from "next/image";
import Hero from "./_components/Hero";

export default function Home() {
  return (
    <div className="">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
      <Hero></Hero>
    </div>
  );
}

