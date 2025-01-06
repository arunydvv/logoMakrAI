import React from "react";
import LogoTitle from "../_components/Logo/LogoTitle";
import Description from "../_components/Logo/Description";

const CreateLogo = () => {
  return (
    <div className="flex flex-col lg:flex-row mt-[5vh] ">
      <div className="lg:w-4/12  w-full p-4 bg-sky-200">
        <LogoTitle />
        <Description title={"Hello "} Description={"WORLD"} />
      </div>

      <div className="lg:w-8/12 lg:h-[60vh] h-[50vh] w-full p-2 mt-4 lg:mt-0  flex flex-col items-center justify-center">
        <img src="/image.svg" className="w-2/12" alt="Image Creation" />
        <h1 className="text-sm text-zinc-500">You Imagine It, We Make It</h1>
      </div>
    </div>
  );
};

export default CreateLogo;
