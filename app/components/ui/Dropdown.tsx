import { ReactNode } from "react";
import ErrorBoundary from "@/app/ErrorBoundary/ErrorBoundary";

interface DropdownProps {
  children: ReactNode;
  width?: string;
}

export default function Dropdown({ children, width = "w-66" }: DropdownProps) {
  return (
    <ErrorBoundary>
      <ul
      className={`absolute left-0 mt-2 ${width} overflow-y-auto max-h-66 bg-white space-y-3 text-gray-800 shadow-lg rounded-sm`}
    >
      {children}
    </ul>
    </ErrorBoundary>
  );
}
