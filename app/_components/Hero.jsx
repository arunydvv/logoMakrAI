"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GoArrowRight } from "react-icons/go";
import Link from "next/link";
import { useRouter } from "next/navigation";



export const Hero = () => {
  const [logoTitle, setlogoTitle] = useState("");
  const router = useRouter();

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      router.push(`/create?title=${logoTitle}`);
    }
  };

  return (
    <section className="mt-16">
      <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8 min-h-[calc(100vh-20rem)] flex flex-col items-center justify-center">
        <h1 className="font-sans font-bold text-center text-4xl sm:text-5xl lg:text-6xl leading-snug bg-transparent">
          Transform Your Vision into a{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-600 to-fuchsia-900">
            Stunning Logo
          </span>{" "}
          in Seconds
        </h1>

        <div className="max-w-xl mx-auto mt-4">
          <p className="text-gray-500 text-center text-lg sm:text-xl lg:text-2xl">
            Stop stressing over your brand’s logo. Let AI do the magic and
            create something 🔥 in no time.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row w-full max-w-sm items-center space-y-4 sm:space-y-0 sm:space-x-2 mt-8">
          <Input
            type="text"
            placeholder="Logo Name"
            className="flex-1 border-gray-300 focus:border-fuchsia-600"
            value={logoTitle}
            onChange={(e) => setlogoTitle(e?.target.value)}
            onKeyDown={handleKeyDown} // Add the keydown event to handle "Enter"
          />

          <Link href={`/create?title=${logoTitle}`}>
            <Button
              type="submit"
              className="flex items-center justify-center space-x-2"
            >
              <span>Get Started</span> <GoArrowRight />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
