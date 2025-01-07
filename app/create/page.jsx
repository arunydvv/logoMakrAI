"use client"
import React from "react";
import LogoTitle from "../_components/Logo/LogoTitle";
import HomePage from "../_components/Logo/Display";


const CreateLogo = () => {
  return (
    <div className="flex flex-col lg:flex-row mt-[5vh] gap-10 p-2 ">
      {/* Left section */}
      <div className="lg:w-4/12 w-full h-full p-1 border-[1px] border-zinc-300 rounded-tr-lg rounded-br-lg pt-3">
        <LogoTitle />
      </div>

      {/* Right section */}
      <div className="lg:w-8/12 border-[1px] pr-10 border-zinc-300 w-full p-2 mt-4 lg:mt-0 flex items-center justify-center bg-fuchsia-50 rounded-lg h-auto">
        <div className="flex flex-col items-center justify-center h-full">
          {/* <img
            src="/image.svg"
            className="lg:w-1/3 w-2/3"
            alt="Image Creation"
          />
          <h1 className="text-sm text-zinc-500 text-center">
            You Imagine It, We Make It !!
          </h1> */}
          <HomePage />
        </div>
      </div>
    </div>
  );
};

export default CreateLogo;
