import { Button } from "@/components/ui/button";
import React from "react";

const Header = () => {
  return (
    <header className="bg-black h-20 flex justify-between px-10 items-center">
      <h1 className="text-white text-2xl font-bold">LogoMakrAI</h1>
      <Button className="text-white bg-black border-2 border-transparent hover:border-white hover:bg-white hover:text-black transition-all duration-300 ease-in-out transform hover:scale-102 px-6 py-2 rounded-md">
        Get Started
      </Button>
    </header>
  );
};

export default Header;
