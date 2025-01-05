import { Button } from "@/components/ui/button";
import React from "react";

const Hero = () => {
  return (
    <section className="">
      <div className="max-w-4xl mx-auto py-16 px-14 sm:px-6 lg:px-8 h-[calc(100vh-20rem)]">
        <h1 className="font-sans font-bold text-center text-4xl md:text-4xl lg:text-6xl leading-snug pt-[12vh] bg-transparent">
          Create Your Perfect Logo in Seconds with AI
        </h1>
        <div className="max-w-xl mx-auto mt-4">
          <p className="text-gray-500 text-center text-xl lg:text-xl">
            Stop stressing over your brand’s logo. Let AI do the magic and
            create something 🔥 in no time.
          </p>
        </div>
        <div className="mt-6 flex justify-center items-center w-full">
          <Button primary>Get Your Logo Now</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
