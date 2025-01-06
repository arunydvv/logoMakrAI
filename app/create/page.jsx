import React from "react";
import LogoTitle from "../_components/Logo/LogoTitle";
import Description from "../_components/Logo/Description";

const CreateLogo = () => {
  return (
    <div className="flex flex-col lg:flex-row mt-[5vh] ">
      {/* Left section */}
      <div className="lg:w-3/12 w-full p-1 border-[1px] border-zinc-300 rounded-tr-lg rounded-br-lg pt-3">
        <LogoTitle />
        <Description title={"Hello "} Description={"WORLD"} />
      </div>

      <div className="lg:w-8/12 lg:h-[60vh] h-[50vh] w-full p-2 mt-4 lg:mt-0 flex items-center justify-center ">
        <div className="flex flex-col items-center justify-center">
          <img src="/image.svg" className="h-[30%]" alt="Image Creation" />

          <h1 className="text-sm text-zinc-500 text-center">
            You Imagine It, We Make It !!
          </h1>
        </div>
      </div>
    </div>
  );
};

export default CreateLogo;
