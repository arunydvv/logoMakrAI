"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

const LogoTitle = () => {
  const [logoTitle, setLogoTitle] = useState("");
  const router = useRouter();

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && logoTitle.trim() !== "") {
      router.push(`/create?title=${logoTitle}`);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row w-full max-w-lg items-center space-y-4 sm:space-y-0 sm:space-x-2 mt-8">
      <div className="text-center sm:text-left">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          What's Your Logo Name?
        </h2>
        <p className="text-gray-500 text-lg mb-6">
          Enter your brand name or any text you'd like your logo to represent.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row w-full max-w-sm items-center space-y-4 sm:space-y-0 sm:space-x-2">
        <Input
          type="text"
          placeholder="Logo Name"
          className="flex-1 border-gray-300 focus:border-fuchsia-600"
          value={logoTitle}
          onChange={(e) => setLogoTitle(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>

      {logoTitle.trim() && (
        <p className="text-sm text-gray-500 mt-2">
          Press <strong>Enter</strong> to get started with your logo creation!
        </p>
      )}
    </div>
  );
};

export default LogoTitle;
