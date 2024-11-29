import React from "react";

export const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className="flex items-center gap-2 flex-col">
      <div
        className={`text-white bg-[#2A9D8F] h-16 w-16 flex items-center justify-center text-[40px] font-extrabold rounded-xl ${className} `}
      >
        B
      </div>
      <span className="text-xl font-bold text-white">Bodyguard App</span>
    </div>
  );
};
