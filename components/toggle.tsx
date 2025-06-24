"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

interface ToggleProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function Toggle({ title, children, className = "" }: ToggleProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={className}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-2 md:py-3 text-left hover:cursor-pointer"
      >
        <span className="md:text-2xl text-lg">{title}</span>
        <ChevronDownIcon
          className={`size-5 md:size-6 rotate-90 transition-transform shrink-0 ${
            isOpen ? "rotate-none" : "rotate-90"
          }`}
        />
      </button>
      {isOpen && <div className="pt-2 pb-4 px-4">{children}</div>}
    </div>
  );
}
