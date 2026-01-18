import ErrorBoundary from "@/app/ErrorBoundary/ErrorBoundary";
interface ArrowProps {
  open: boolean;
}

export default function Arrow({ open }: ArrowProps) {
  return (
    <ErrorBoundary>
      <svg
      className={`w-4 h-4 transition-transform duration-200 ${
        open ? "rotate-180" : ""
      }`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 9l-7 7-7-7"
      />
    </svg>
    </ErrorBoundary>
  );
}
