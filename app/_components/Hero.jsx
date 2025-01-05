import { Button } from "@/components/ui/button";
import React from "react";
import { GoArrowRight } from "react-icons/go";

const Hero = () => {
  return (
    <section className="">
      <div className="max-w-4xl mx-auto py-16 px-14 sm:px-6 lg:px-8 h-[calc(100vh-20rem)]">
        <h1 className="font-sans font-bold text-center text-4xl md:text-4xl lg:text-6xl leading-snug pt-[12vh] bg-transparent">
          Transform Your Vision into a{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-600 to-fuchsia-900">
            Stunning Logo
          </span>{" "}
          in Seconds
        </h1>

        <div className="max-w-xl mx-auto mt-4">
          <p className="text-gray-500 text-center text-xl lg:text-xl">
            Stop stressing over your brand’s logo. Let AI do the magic and
            create something 🔥 in no time.
          </p>
        </div>
        <div className="mt-6 flex justify-center items-center w-full">
          <Button>
            Try For Free<GoArrowRight />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
