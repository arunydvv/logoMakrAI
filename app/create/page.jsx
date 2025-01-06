import React from "react";
import LogoTitle from "../_components/Logo/LogoTitle";
import Description from "../_components/Logo/Description";

const CreateLogo = () => {
  return (
    <div className="flex flex-col lg:flex-row mt-[5vh] gap-10 ">
      {/* Left section */}
      <div className="lg:w-3/12 w-full h-full p-1 border-[1px] border-zinc-300 rounded-tr-lg rounded-br-lg pt-3">
        <LogoTitle />
      </div>

      {/* Right section */}
      <div className="lg:w-9/12 w-full p-2 mt-4 lg:mt-0 flex items-center justify-center bg-fuchsia-50 rounded-lg h-auto">
        <div className="flex flex-col items-center justify-center h-full">
          <img
            src="/image.svg"
            className="lg:w-1/3 w-2/3"
            alt="Image Creation"
          />
          <h1 className="text-sm text-zinc-500 text-center">
            You Imagine It, We Make It !!
          </h1>
        </div>
      </div>
    </div>
  );
};

export default CreateLogo;
