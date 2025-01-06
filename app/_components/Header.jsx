'use client'
import { Button } from "@/components/ui/button";
import { GoArrowRight } from "react-icons/go";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  return (
    <header className="h-20 flex justify-between px-10 items-center bg-white hover:cursor-pointer">
      <h1
        onClick={() => router.push("/")}
        className={cn(
          "bg-clip-text text-transparent bg-fuchsia-800  text-2xl font-bold"
        )}
      >
        LogoMakr
      </h1>
      <Button
        onClick={() => router.push("/create")}
        className={cn(
          "text-white",
          " hover:bg-fuchsia-800 ",
          "border-2 border-transparent",
          "px-6 py-2 rounded-md"
        )}
      >
        Get Started <GoArrowRight />
      </Button>
    </header>
  );
};

export default Header;

