import { Button } from "@/components/ui/button";
import React from "react";

const Hero = () => {
  return (
    <section className="bg-white">
      <div className="max-w-4xl mx-auto py-16 px-14 sm:px-6 lg:px-8 h-[calc(100vh-16rem)]">
        <h1 className="font-sans font-bold text-center text-4xl md:text-4xl lg:text-6xl leading-snug pt-[10vh]">
          Design Your Perfect Logo with AI
        </h1>
        <div className="max-w-xl mx-auto mt-10">
          <p className="text-gray-500 text-center text-xl lg:text-3xl">
            Effortlessly create unique, professional logos in seconds with Logo
            Makr AI. Powered by advanced AI, your perfect brand identity is just
            a click away.
          </p>
        </div>
        <div className="mt-10 flex justify-center items-center w-full">
          <Button primary>Generate My Logo</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
