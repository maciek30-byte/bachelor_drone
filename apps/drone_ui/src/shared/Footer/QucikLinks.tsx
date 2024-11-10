
export const QuickLinks = () => {
  return (
    <div className="flex gap-2">
<button className="btn btn-xs btn-ghost text-ai-text hover:text-ai-green">
  Docs
</button>
<button className="btn btn-xs btn-ghost text-ai-text hover:text-ai-green">
  Logs
</button>
<button className="btn btn-xs btn-primary bg-ai-green border-ai-green hover:bg-ai-green/80">
  View All
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-3 h-3"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
    />
        </svg>
      </button>
    </div>
  );
};
