export const QuickStatus = () => {
  return (
    <div className="flex gap-2">
      <div className="badge badge-outline gap-2 text-ai-text">
        <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
        AI Active
      </div>
      <div className="badge badge-outline text-ai-text">v1.0.0</div>
    </div>
  );
};
